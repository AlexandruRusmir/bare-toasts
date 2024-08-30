export type ToastTypes = "success" | "info" | "warning" | "error";
export type ToastPositions =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";

export interface ToastOptions {
    message: string;
    type?: ToastTypes;
    duration?: number;
    className?: string;
    styles?: Partial<CSSStyleDeclaration>;
    position?: ToastPositions;
}
