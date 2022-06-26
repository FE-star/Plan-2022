const defaultSettings = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

class Lazy {
    constructor() {
        if (typeof window === 'object') {
            // 看看有没有 window.IntersectionObserver：https://caniuse.com/?search=IntersectionObserver
            // https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
            this.immediateLoad = !window.IntersectionObserver
            this.imgs = []
        }
    }
    add(el, src) {
        this.imgs.push({ el, src })
    }
    load() {
        const imgs = this.imgs.slice(0)
        this.imgs.length = 0
        // 没有 window.IntersectionObserver 直接全部图片加载
        if (this.immediateLoad) {
            imgs.forEach(img => {
                img.el.src =  img.src
            })
        } else {
            const map = new Map()
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    entry.isIntersecting ?
                        onEnter(entry.target) : onExit(entry.target)
                })
            }, defaultSettings)
            // 当图片进入时
            function onEnter(target) {
                // 没有在加载
                if (!target.dataset['loadState']) {
                    target.setAttribute('data-load-state', 'pending')
                    const value = map.get(target)
                    if (value) {
                        target.onload = function () {
                            map.delete(target)
                            observer.unobserve(target)
                            target.removeAttribute('data-load-state')
                            target.onload = null
                        }
                        target.src = value
                    }
                }
            }
            // 当图片退出时
            function onExit(target) {
                // 如果仍然在加载，停止加载图片
                if (target.dataset['loadState']) {
                    target.removeAttribute('data-load-state')
                    target.onload = null
                    target.src = defaultImg
                }
            }
            imgs.forEach((img) => {
                map.set(img.el, img.src)
                observer.observe(img.el)
            })
        }
    }
}

const lazy = new Lazy()

let lock = false

function load() {
    if (!lock) {
        lock = true
        setTimeout(() => {
            lock = false
            lazy.load()
        }, 0)
    }
}

export const defaultImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export function add(el, src) {
    lazy.add(el, src)
    load()
}