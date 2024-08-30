import { ToastTypes } from "./types";

const successIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20">
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4.97-6.97a.75.75 0 011.06-1.06l3.97 3.97 7.97-7.97a.75.75 0 111.06 1.06l-8.5 8.5a.75.75 0 01-1.06 0l-4.5-4.5z"
        clipRule="evenodd"
    />
</svg>`;

const infoIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20">
    <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
    />
</svg>`;

const warningIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
    <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
    />
</svg>`;

const errorIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20">
    <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
    />
</svg>`;

const iconMap: { [key in ToastTypes]?: string } = {
    success: successIcon,
    info: infoIcon,
    warning: warningIcon,
    error: errorIcon,
};

export const getAsset = (type: ToastTypes): string | null => {
    return iconMap[type] || null;
};
