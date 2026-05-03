import type { Alpine } from "alpinejs";
import { default as AlpineType } from "alpinejs";
import { computePosition } from '@floating-ui/dom';

export default function locus(Alpine: Alpine): void {

    Alpine.directive('locus', (
        el: AlpineType.ElementWithXAttributes,
        { expression, value, modifiers }: AlpineType.DirectiveData,
        { Alpine, effect, evaluate }: AlpineType.DirectiveUtilities
    ) => {
        let reference = evaluate(expression) as HTMLElement;

        if (!reference) throw 'Alpine: no element provided to x-anchor...'

        if (value == 'float') {
            computePosition(reference, el, {
                
            })
        }
    });
}