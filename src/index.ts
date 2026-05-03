import type { Alpine } from "alpinejs";
import type { default as AlpineType } from "alpinejs";

export default function rover(Alpine: Alpine): void {

    Alpine.directive('rover', (
        el: AlpineType.ElementWithXAttributes,
        { value, modifiers }: AlpineType.DirectiveData,
        { Alpine, effect }: AlpineType.DirectiveUtilities
    ) => {
        
    });
}