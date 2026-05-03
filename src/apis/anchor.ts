import { initTree } from "alpinejs";
import { AnchorableOptions, PopoverableOptions } from "../types";
import { computePosition, flip, offset, shift, size } from "@floating-ui/dom";

export default class Anchor {
    anchor: HTMLElement
    el: HTMLElement
    state: boolean = false
    options: AnchorableOptions['options']

    constructor({ el, anchor, options }: AnchorableOptions) {
        this.el = el;
        this.anchor = anchor;
        this.options = options;

        queueMicrotask(() => this.init());
    }

    init() {
        this.validatePlacement();

        computePosition(this.anchor, this.el, {
            middleware: [
                flip(),
                shift({ padding: 5, crossAxis: true }),
                offset({
                    mainAxis: Number(this.options.gap),
                    alignmentAxis: Number(this.options.offset),
                }),
                size({
                    apply({ rects, elements }) {
                        Object.assign(elements.floating.style, {
                            width: `${rects.reference.width}px`,
                        });
                    },
                }),
            ]
        }).then(({ x, y }) => {
            Object.assign(this.anchor.style, {
                x: `${x}px`,
                y: `${y}px`
            })
        })
    }

    validatePlacement() {
        let exists = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'].includes(this.options.placement)

        if (!exists) {
            console.warn(String.raw`invalid given placement string "${this.options.placement}"`)
        }
    }
}