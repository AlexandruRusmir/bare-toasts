export const DEFAULT_TOAST_TYPE = "info";
export const DEFAULT_TOAST_DURATION = 3000;
export const DEFAULT_TOAST_POSITION = "bottom-right";

export const TOAST_CONTAINER_CLASS = "toast-container";
export const TOAST_CLASS = "default-toast";
export const TOAST_ICON_CLASS = "toast-icon";

export const TOAST_POSITIONS = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "top-center",
    "bottom-center",
];

export type ToastPositions = (typeof TOAST_POSITIONS)[number];
