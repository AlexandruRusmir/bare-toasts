import { styles } from "./styles";

export const applyStyles = (
    element: HTMLElement,
    styles: Partial<CSSStyleDeclaration>
): void => {
    Object.assign(element.style, styles);
};

export const injectStyles = (): void => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
};
