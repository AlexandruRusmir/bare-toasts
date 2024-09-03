import { ToastOptions } from "./types";
import { applyStyles } from "./utils";
import { getAsset } from "./assets";
import {
    DEFAULT_TOAST_TYPE,
    DEFAULT_TOAST_DURATION,
    TOAST_CLASS,
    TOAST_ICON_CLASS,
} from "./constants";

export class Toast {
    private element: HTMLDivElement;

    public constructor(private options: ToastOptions) {
        this.element = this.createToastElement();
    }

    private createToastElement(): HTMLDivElement {
        const toast = document.createElement("div");
        toast.className = `${TOAST_CLASS} ${
            this.options.type || DEFAULT_TOAST_TYPE
        }-toast ${this.options.className || ""} `.trim();

        const icon = this.getIcon();
        if (icon) {
            const iconContainer = document.createElement("div");
            iconContainer.className = TOAST_ICON_CLASS;
            iconContainer.innerHTML = icon;
            toast.appendChild(iconContainer);
        }

        const messageContainer = document.createElement("span");
        messageContainer.textContent = this.options.message;
        toast.appendChild(messageContainer);

        applyStyles(toast, {
            ...this.options.styles,
        });

        return toast;
    }

    private getIcon(): string | null {
        if (this.options.showIcon === false) {
            return null;
        }
        return getAsset(this.options.type || DEFAULT_TOAST_TYPE);
    }

    public getElement(): HTMLDivElement {
        return this.element;
    }

    public show(): void {
        setTimeout(
            () => this.hide(),
            this.options.duration || DEFAULT_TOAST_DURATION
        );
    }

    private hide(): void {
        this.element.remove();
    }
}
