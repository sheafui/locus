import { AnchorOptions } from "../types";
import { computePosition, flip, offset, shift, size } from "@floating-ui/dom";

export default class Anchor {
    anchor: HTMLElement
    el: HTMLElement
    gap: number
    offset: number
    placement: string

    constructor({ anchor, el, gap = 4, offset = 0, placement = 'bottom-start'}: AnchorOptions) {
        this.anchor = anchor
        this.el = el
        this.gap = gap
        this.offset = offset
        this.placement = placement

        queueMicrotask(() => this.init())
    }

    init() {
        this.validatePlacement()

        computePosition(this.anchor, this.el, {
            placement: this.placement as any,
            middleware: [
                flip(),
                shift({ padding: 5, crossAxis: true }),
                offset({
                    mainAxis: this.gap,
                    alignmentAxis: this.offset,
                }),
            ].filter(Boolean),
        }).then(({ x, y }) => {
            Object.assign(this.el.style, {
                position: 'absolute',
                inset: `${y}px auto auto ${x}px`
            })
        })
    }

    validatePlacement() {
        const valid = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']

        if (!valid.includes(this.placement)) {
            console.warn(`Locus: invalid placement "${this.placement}"`)
        }
    }
}