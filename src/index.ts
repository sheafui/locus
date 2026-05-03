import type { Alpine } from "alpinejs";
import { default as AlpineType } from "alpinejs";
import { AnchorOptions, PopoverOptions } from "./types";
import Popover from "./apis/popover";
import Anchor from "./apis/anchor";

export default function locus(Alpine: Alpine): void {

    Alpine.magic('locus', () => {
        return ({
            popover: (options: PopoverOptions): Popover => {
                return new Popover(options);
            },
            anchor: (options: AnchorOptions): Anchor => {
                console.log(options);

                return new Anchor(options)
            },
            animate: ({ strategy }: { strategy?: 'fade' | 'scale' } = {}) => { 

            }
        });
    });

    Alpine.directive('locus', (el: AlpineType.ElementWithXAttributes, { expression, value, modifiers }: AlpineType.DirectiveData, { Alpine, effect, evaluate }: AlpineType.DirectiveUtilities) => {
        let reference = evaluate(expression) as HTMLElement;

        if (!reference) throw 'Alpine: no element provided to x-anchor...'

        let matchWidth = false;
        let gap = 4;
        let offsetValue = 4;

        if (value == 'float') {
            
        }
    });
}