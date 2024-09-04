import { ToastTypes } from "./types";

export const DEFAULT_TOAST_TYPE: ToastTypes = "normal";
export const DEFAULT_TOAST_DURATION = 3000;
export const DEFAULT_TOAST_POSITION: ToastPositions = "bottom-right";
export const DEFAULT_SHOW_ICON = true;

export const FADE_OUT_DURATION = 500;

export const TOAST_CONTAINER_CLASS = "toast-container";
export const TOAST_CLASS = "default-toast";
export const TOAST_ICON_CLASS = "toast-icon";
export const FADE_OUT_CLASS = "fade-out";

export const TOAST_POSITIONS = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "top-center",
    "bottom-center",
];

export type ToastPositions = (typeof TOAST_POSITIONS)[number];
