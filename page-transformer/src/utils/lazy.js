const defaultSettings = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

class Lazy {
    constructor() {
        // 看看有没有 window.IntersectionObserver：https://caniuse.com/?search=IntersectionObserver
        // https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
        this.immediateLoad = !window.IntersectionObserver
        this.imgs = []
    }
    add(el, src) {
        this.imgs.push({ el, src })
    }
    load() {
        const imgs = this.imgs.slice(0)
        this.imgs.length = 0
        if (this.immediateLoad) {
            imgs.forEach(img => {
                img.el.src =  img.src
            })
        } else {
            const map = new Map()
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target)
                        const target = entry.target
                        const value = map.get(target)
                        if (value) {
                            map.delete(target)
                            target.src = value
                        }
                    }
                })
            }, defaultSettings)
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

export function add(el, src) {
    lazy.add(el, src)
    load()
}