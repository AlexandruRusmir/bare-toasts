import { Toast } from "./toast";
import { Position, ToastOptions } from "./types";
import { containerStyles, positionStyles } from "./styles";
import { applyStyles } from "./utils";
import { DEFAULT_POSITION, POSITIONS } from "./constants";

export class ToastManager {
    private static instance: ToastManager;
    private containers: Partial<Record<Position, HTMLDivElement>> = {};

    private constructor() {
        this.createContainers();
    }

    public static getInstance(): ToastManager {
        if (!ToastManager.instance) {
            ToastManager.instance = new ToastManager();
        }
        return ToastManager.instance;
    }

    private createContainers(): void {
        for (const position of POSITIONS) {
            this.createContainer(position);
        }
    }

    private createContainer(position: Position): void {
        if (this.containers[position]) {
            return;
        }
        const container = document.createElement("div");
        applyStyles(container, containerStyles);
        applyStyles(container, positionStyles[position]);
        document.body.appendChild(container);
        this.containers[position] = container;
    }

    private ensureContainerExists(position: Position): void {
        if (!this.containers[position]) {
            this.createContainer(position);
        }
    }

    public createToast(options: ToastOptions): void {
        const position = options.position ?? DEFAULT_POSITION;
        this.ensureContainerExists(position);
        const container = this.containers[position];
        if (!container) {
            return;
        }
        const toast = new Toast(options);
        container.appendChild(toast.getElement());
        toast.show();
    }
}
