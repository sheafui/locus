import { AnchorableOptions, PopoverableOptions } from "../types";

export default class Anchor {
    anchor: HTMLElement
    el: HTMLElement
    state: boolean = false
    options

    constructor({ el, anchor, options, gap, offset, position,parentWidth}: AnchorableOptions) {
        this.el = el;
        this.anchor = anchor;
        this.options = options;
    }

    handlePositioning() {

    }
}