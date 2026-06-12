import { PopoverOptions } from "../types";

export default class Popover {
    el: HTMLElement
    state: boolean = false
    nestFor: string | undefined = undefined;

    constructor({ el, nestedFor = undefined }: PopoverOptions) {
        this.el = el;
        this.nestFor = nestedFor;
    }

    setState(value: boolean) {
        value ? this.show() : this.hide()
    }

    getState() {
        return this.state
    }

    toggle() {
        this.el.togglePopover()
    }

    show() {
        this.el.showPopover()
    }

    hide() {
        this.el.hidePopover()
    }
}