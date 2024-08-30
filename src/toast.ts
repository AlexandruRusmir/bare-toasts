import { ToastOptions, ToastTypes } from "./types";
import { applyStyles } from "./utils";
import { getAsset } from "./assets";

export class Toast {
    private options: ToastOptions;
    private element: HTMLDivElement;

    constructor(options: ToastOptions) {
        this.options = options;
        this.element = this.createToastElement();
    }

    private createToastElement(): HTMLDivElement {
        const toast = document.createElement("div");
        toast.className = `default-toast ${this.options.className || ""} ${
            this.options.type || "info"
        }-toast`.trim();

        const icon = getAsset(this.options.type || "info");
        if (icon) {
            const iconContainer = document.createElement("div");
            iconContainer.className = "toast-icon";
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

    public getElement(): HTMLDivElement {
        return this.element;
    }

    public show(): void {
        setTimeout(() => this.hide(), this.options.duration || 3000);
    }

    private hide(): void {
        this.element.remove();
    }
}
