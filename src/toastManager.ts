import { Toast } from "./toast";
import { ToastOptions, ToastPositions } from "./types";
import { injectStyles } from "./utils";

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
        const positions: ToastPositions[] = [
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
            "top-center",
            "bottom-center",
        ];
        for (const position of positions) {
            const container = document.createElement("div");
            container.className = `toast-container ${position}`;
            document.body.appendChild(container);
            this.containers[position] = container;
        }
    }

    public createToast(options: ToastOptions): void {
        const position = options.position || "bottom-right";
        const container = this.containers[position];
        if (container) {
            const toast = new Toast(options);
            container.appendChild(toast.getElement());
            toast.show();
        }
    }
}
