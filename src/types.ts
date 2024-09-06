export type ToastType = "normal" | "success" | "info" | "warning" | "error";
export type Position =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";

export interface ToastOptions {
    message: string;
    type?: ToastType;
    position?: Position;
    duration?: number;
    showIcon?: boolean;
    className?: string;
    styles?: Partial<CSSStyleDeclaration>;
    onShow?: () => void;
    onHide?: () => void;
}
