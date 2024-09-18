export const applyStyles = (
    element: HTMLElement,
    styles: Partial<CSSStyleDeclaration>
): void => {
    Object.assign(element.style, styles);
};
