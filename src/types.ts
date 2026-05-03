
export type PopoverableOptions = { el: HTMLElement, nestedFor: undefined }

export interface AnchorableOptions {
    anchor: HTMLElement,
    el: HTMLElement,
    options: { gap: number, offset: number, placement: string, parentWidth: boolean }
} 
