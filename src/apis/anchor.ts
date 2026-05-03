import { initTree } from "alpinejs";
import { AnchorableOptions, PopoverableOptions } from "../types";

export default class Anchor {
    anchor: HTMLElement
    el: HTMLElement
    state: boolean = false
    options: AnchorableOptions['options']

    constructor({ el, anchor, options }: AnchorableOptions) {
        this.el = el;
        this.anchor = anchor;
        this.options = options;

        this.init();

    }

    init() {
        
    }

    handlePositioning() {

    }
}