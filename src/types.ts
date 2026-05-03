
export type PopoverableOptions = { el: HTMLElement, nestedFor: undefined }

export interface AnchorableOptions {
    anchor: HTMLElement,
    el: HTMLElement,
    options: { gap: number, offset: number, position: string, parentWidth: boolean }
} 
