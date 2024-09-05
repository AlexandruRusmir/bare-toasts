import { ToastOptions } from "./types";
import { applyStyles } from "./utils";
import { getAsset } from "./assets";
import {
    DEFAULT_TOAST_TYPE,
    DEFAULT_TOAST_DURATION,
    TOAST_CLASS,
    TOAST_ICON_CLASS,
    FADE_OUT_DURATION,
    FADE_OUT_CLASS,
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
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");

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
        const duration = this.options.duration || DEFAULT_TOAST_DURATION;
        if (this.options.onShow) {
            this.options.onShow();
        }
        setTimeout(() => this.addFadeOut(), duration);
        setTimeout(() => {
            this.hide();
        }, duration + FADE_OUT_DURATION);
    }

    private addFadeOut(): void {
        this.element.classList.add(FADE_OUT_CLASS);
    }

    private hide(): void {
        if (this.options.onHide) {
            this.options.onHide();
        }
        this.element.remove();
    }
}
