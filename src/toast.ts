import { Positions, ToastOptions } from "./types";
import { applyStyles } from "./utils";
import { getAsset } from "./assets";
import { addSlideInAnimation, addFadeOutAnimation } from "./animations";
import {
    DEFAULT_TOAST_TYPE,
    DEFAULT_TOAST_DURATION,
    TOAST_CLASS,
    TOAST_ICON_CLASS,
    FADE_OUT_DURATION,
    DEFAULT_POSITION,
} from "./constants";
import { toastStyles, toastTypeStyles, iconStyles } from "./styles";

export class Toast {
    private element: HTMLDivElement;

    public constructor(private options: ToastOptions) {
        this.setDefaultOptionsIfNotProvided();
        this.element = this.createToastElement();
    }

    private setDefaultOptionsIfNotProvided(): void {
        if (!this.options.position) {
            this.options.position = DEFAULT_POSITION;
        }
        if (!this.options.type) {
            this.options.type = DEFAULT_TOAST_TYPE;
        }
        if (!this.options.showIcon) {
            this.options.showIcon = true;
        }
        if (!this.options.duration) {
            this.options.duration = DEFAULT_TOAST_DURATION;
        }
    }

    private createToastElement(): HTMLDivElement {
        const toast = document.createElement("div");
        toast.className = `${TOAST_CLASS} ${this.options.type}-toast ${
            this.options.className || ""
        } `.trim();
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");

        const icon = this.getIcon();
        if (icon) {
            const iconContainer = document.createElement("div");
            iconContainer.className = TOAST_ICON_CLASS;
            iconContainer.innerHTML = icon;
            applyStyles(iconContainer, iconStyles);
            toast.appendChild(iconContainer);
        }

        const messageContainer = document.createElement("span");
        messageContainer.textContent = this.options.message;
        toast.appendChild(messageContainer);

        applyStyles(toast, toastStyles);
        applyStyles(toast, toastTypeStyles[this.options.type!]!);
        if (this.options.styles) {
            applyStyles(toast, this.options.styles);
        }

        return toast;
    }

    private getIcon(): string | null {
        if (this.options.showIcon === false) {
            return null;
        }
        return getAsset(this.options.type!);
    }

    public getElement(): HTMLDivElement {
        return this.element;
    }

    public show(): void {
        const duration = this.options.duration!;
        if (this.options.onShow) {
            this.options.onShow();
        }
        const position = this.options.position!;
        addSlideInAnimation(this.element, position);
        setTimeout(() => this.addFadeOut(), duration);
        setTimeout(() => {
            this.hide();
        }, duration + FADE_OUT_DURATION);
    }

    private addFadeOut(): void {
        addFadeOutAnimation(this.element, this.options.position!);
    }

    private hide(): void {
        if (this.options.onHide) {
            this.options.onHide();
        }
        this.element.remove();
    }
}
