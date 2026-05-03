import { initTree } from "alpinejs";
import { AnchorOptions, PopoverOptions } from "../types";
import { computePosition, flip, offset, shift, size } from "@floating-ui/dom";

export default class Anchor {
    anchor: HTMLElement
    el: HTMLElement
    state: boolean = false
    options: AnchorOptions['options']

    constructor({ anchor, el, options }: AnchorOptions) {
        this.anchor = anchor;
        this.el = el;
        this.options = options;

        queueMicrotask(() => this.init());
    }

    init() {
        if (this.options?.placement) this.validatePlacement();

        computePosition(this.anchor, this.el, {
            middleware: [
                flip(),
                shift({ padding: 5, crossAxis: true }),
                offset({
                    mainAxis: Number(this.options.gap),
                    alignmentAxis: Number(this.options.offset),
                }),
            ],
        }).then(({ x, y }) => {
            console.log(this.anchor);
            
            Object.assign(this.anchor.style, {
                position: 'absolute', inset: `${y}px auto auto ${x}px`
            });
        });


    }

    validatePlacement() {
        let exists = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'].includes(this.options?.placement)

        if (!exists) {
            console.warn(String.raw`invalid given placement string "${this.options?.placement}"`)
        }
    }
}