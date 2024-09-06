export type ToastTypes = "normal" | "success" | "info" | "warning" | "error";
export type Positions =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";

export interface ToastOptions {
    message: string;
    type?: ToastTypes;
    position?: Positions;
    duration?: number;
    showIcon?: boolean;
    className?: string;
    styles?: Partial<CSSStyleDeclaration>;
    onShow?: () => void;
    onHide?: () => void;
}
