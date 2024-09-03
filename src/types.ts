export type ToastTypes = "normal" | "success" | "info" | "warning" | "error";
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
    position?: ToastPositions;
    duration?: number;
    showIcon?: boolean;
    className?: string;
    styles?: Partial<CSSStyleDeclaration>;
}
