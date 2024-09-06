import { Position, ToastType } from "./types";

export const DEFAULT_TOAST_TYPE: ToastType = "normal";
export const DEFAULT_TOAST_DURATION = 3000;
export const DEFAULT_POSITION: Position = "bottom-right";
export const DEFAULT_SHOW_ICON = true;

export const FADE_OUT_DURATION = 500;

export const POSITIONS: Position[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
];

export const SLIDE_IN_KEYFRAMES: Record<Position, Keyframe[]> = {
    "top-center": [
        { transform: "translateY(-100%)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
    ],
    "bottom-center": [
        { transform: "translateY(100%)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
    ],
    "top-left": [
        { transform: "translateX(-100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
    ],
    "bottom-left": [
        { transform: "translateX(-100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
    ],
    "top-right": [
        { transform: "translateX(100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
    ],
    "bottom-right": [
        { transform: "translateX(100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
    ],
};

export const FADE_OUT_KEYFRAMES: Record<Position, Keyframe[]> = {
    "top-center": [{ opacity: 1 }, { opacity: 0 }],
    "bottom-center": [{ opacity: 1 }, { opacity: 0 }],
    "top-left": [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(-100%)", opacity: 0 },
    ],
    "bottom-left": [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(-100%)", opacity: 0 },
    ],
    "top-right": [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(100%)", opacity: 0 },
    ],
    "bottom-right": [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(100%)", opacity: 0 },
    ],
};

export const ANIMATION_OPTIONS: KeyframeAnimationOptions = {
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
};
