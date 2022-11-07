import { throttle } from 'throttle-debounce'

export default class DragManager {
    constructor() {
        this.current = null
        this.ref = null
        this.op = null
        this.opData = null
        this.calPos = throttle(100, (e) => {
            this._calPos(e)
        })
    }

    dragstart(e) {
        this.current = e.target.dataset.material
        this.opData = {
            name: this.current,
            props: {},
            state: 2,
        }
    }

    _calPos(e) {
        const target = e.target
        const { value } = this.ref
        if (e.target.isDragContent) {
            const index = value.indexOf(this.opData)
            if (value.indexOf(this.opData) < 0) {
                this.ref.value.push(this.opData)
            } else if (index !== value.length - 1) {
                this.ref.value.splice(index, 1)
                this.ref.value.push(this.opData)
            }
        } else {
            let [ y, h, index ] = [ e.offsetY, target.offsetHeight, target.dataset.index ]
            let direction = y < (h / 2) ? 1 : 0
            const i = value.indexOf(this.opData)
            if (i < 0) {
                this.ref.value.splice(index - direction , 0, this.opData)
            } else if (i !== index - direction + 1) {
                this.ref.value.splice(i, 1)
                this.ref.value.splice(index - direction + 1, 0, this.opData)
            } 
        }
    }

    setContainer(el, binding) {
        this.ref = binding
        el.isDragContent = true
        el.addEventListener('dragover', (e) => this.dragover(e))
        el.addEventListener('drop', (e) => this.drop(e))
    }

    dragover(e) {
        e.preventDefault()
        this.calPos(e)
    }

    drop(e) {
        e.preventDefault()
        let i = this.ref.value.indexOf(this.opData)
        if (i > -1) {
            this.ref.value[i].state = 1
        }
    }
}