import { Positions } from "./types";
import {
    SLIDE_IN_KEYFRAMES,
    FADE_OUT_KEYFRAMES,
    ANIMATION_OPTIONS,
} from "./constants";

export function addSlideInAnimation(
    element: HTMLElement,
    position: Positions
): void {
    const keyframes = SLIDE_IN_KEYFRAMES[position];
    element.animate(keyframes, ANIMATION_OPTIONS);
}

export function addFadeOutAnimation(
    element: HTMLElement,
    position: Positions
): void {
    const keyframes = FADE_OUT_KEYFRAMES[position];
    element.animate(keyframes, ANIMATION_OPTIONS);
}
