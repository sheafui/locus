import { AnchorableOptions, PopoverableOptions } from "../types";

export default class Anchorable {
    anchor: HTMLElement
    el: HTMLElement
    state: boolean = false
    options

    constructor({ el, anchor, options }: AnchorableOptions) {
        this.el = el;
        this.anchor = anchor;
        this.options = options;
    }

    handlePositioning() {

    }
}