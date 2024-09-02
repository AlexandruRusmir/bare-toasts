import { Toast } from "./toast";
import { ToastOptions } from "./types";
import { injectStyles } from "./utils";
import {
    DEFAULT_TOAST_POSITION,
    TOAST_CONTAINER_CLASS,
    TOAST_POSITIONS,
    ToastPositions,
} from "./constants";

export class ToastManager {
    private static instance: ToastManager;
    private containers: { [key in ToastPositions]?: HTMLDivElement } = {};

    private constructor() {
        injectStyles();
        this.createContainers();
    }

    public static getInstance(): ToastManager {
        if (!ToastManager.instance) {
            ToastManager.instance = new ToastManager();
        }
        return ToastManager.instance;
    }

    private createContainers(): void {
        for (const position of TOAST_POSITIONS) {
            const container = document.createElement("div");
            container.className = `${TOAST_CONTAINER_CLASS} ${position}`;
            document.body.appendChild(container);
            this.containers[position] = container;
        }
    }

    public createToast(options: ToastOptions): void {
        const position = options.position || DEFAULT_TOAST_POSITION;
        const container = this.containers[position];
        if (!container) {
            return;
        }
        const toast = new Toast(options);
        container.appendChild(toast.getElement());
        toast.show();
    }
}
