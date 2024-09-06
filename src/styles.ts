import { Positions, ToastTypes } from "./types";

export const containerStyles: Partial<CSSStyleDeclaration> = {
    position: "fixed",
    zIndex: "1000",
    display: "flex",
    gap: "0.625rem",
};

export const positionStyles: Record<Positions, Partial<CSSStyleDeclaration>> = {
    "top-center": {
        top: "0.625rem",
        left: "50%",
        transform: "translateX(-50%)",
        alignItems: "center",
        flexDirection: "column-reverse",
    },
    "bottom-center": {
        bottom: "0.625rem",
        left: "50%",
        transform: "translateX(-50%)",
        alignItems: "center",
        flexDirection: "column",
    },
    "top-left": {
        top: "0.625rem",
        left: "0.625rem",
        alignItems: "flex-start",
        flexDirection: "column-reverse",
    },
    "top-right": {
        top: "0.625rem",
        right: "0.625rem",
        alignItems: "flex-end",
        flexDirection: "column-reverse",
    },
    "bottom-left": {
        bottom: "0.625rem",
        left: "0.625rem",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    "bottom-right": {
        bottom: "0.625rem",
        right: "0.625rem",
        alignItems: "flex-end",
        flexDirection: "column",
    },
};

export const toastStyles: Partial<CSSStyleDeclaration> = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "#444",
    boxShadow: "0.1rem 0.1rem 0.3rem 0.01rem rgba(0, 0, 0, 0.7)",
    color: "#fff",
    padding: "0.5rem 1rem 0.5rem 0.5rem",
    borderRadius: "0.5rem",
    opacity: "0",
};

export const toastTypeStyles: Partial<
    Record<ToastTypes, Partial<CSSStyleDeclaration>>
> = {
    success: { backgroundColor: "#4caf50" },
    info: { backgroundColor: "#2196f3" },
    warning: { backgroundColor: "#ffc107" },
    error: { backgroundColor: "#f44336" },
};

export const iconStyles: Partial<CSSStyleDeclaration> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
