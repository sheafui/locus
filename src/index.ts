import type { Alpine } from "alpinejs";
import { default as AlpineType } from "alpinejs";
import { computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import { AnchorableOptions, PopoverableOptions } from "./types";
import Popover from "./apis/popover";
import Anchor from "./apis/anchor";

export default function locus(Alpine: Alpine): void {

    Alpine.magic('locus', () => {
        return ({
            popover: (options: PopoverableOptions): Popover => {
                return new Popover(options);
            },
            anchor: (options: AnchorableOptions): Anchor => {
                return new Anchor(options)
            },
            animate: ({ strategy }: { strategy?: 'fade' | 'scale' } = {}) => { 
                
            }
            // other mixins...
        });
    });

    Alpine.directive('locus', (el: AlpineType.ElementWithXAttributes, { expression, value, modifiers }: AlpineType.DirectiveData, { Alpine, effect, evaluate }: AlpineType.DirectiveUtilities) => {
        let reference = evaluate(expression) as HTMLElement;

        if (!reference) throw 'Alpine: no element provided to x-anchor...'

        let matchWidth = false;
        let gap = 4;
        let offsetValue = 4;

        if (value == 'float') {
            computePosition(reference, el, {
                middleware: [
                    flip(),
                    shift({ padding: 5, crossAxis: true }),
                    offset({
                        mainAxis: Number(gap),
                        alignmentAxis: Number(offsetValue),
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
                Object.assign(reference.style, {
                    x: `${x}px`,
                    y: `${y}px`
                })
            })
        }
    });
}