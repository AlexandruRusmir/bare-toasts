import { Position } from "./types";
import {
    SLIDE_IN_KEYFRAMES,
    FADE_OUT_KEYFRAMES,
    ANIMATION_OPTIONS,
} from "./constants";

export const addSlideInAnimation = (
    element: HTMLElement,
    position: Position
): void => {
    const keyframes = SLIDE_IN_KEYFRAMES[position];
    element.animate(keyframes, ANIMATION_OPTIONS);
};

export const addFadeOutAnimation = (
    element: HTMLElement,
    position: Position
): void => {
    const keyframes = FADE_OUT_KEYFRAMES[position];
    element.animate(keyframes, ANIMATION_OPTIONS);
};
