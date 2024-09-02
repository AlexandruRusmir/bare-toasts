import { ToastTypes } from "./types";

const successIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" height="20" width="20">
    <circle cx="25" cy="25" r="25" fill="#FFFFFF"/>FFFFFF
    <polyline points="35,15 22,37 11,29" stroke="#4caf50" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

const infoIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" height="20" width="20">
    <circle cx="25" cy="25" r="25" fill="#FFFFFF"/>
    <line x1="25" y1="25" x2="25" y2="38" stroke="#2196f3" stroke-width="4" stroke-linecap="round"/>
    <circle cx="25" cy="15" r="3" fill="#2196f3"/>
</svg>`;

const warningIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" height="20" width="20">
    <path d="M25 4 L46 41 A3 3 0 0 1 43 46 H7 A3 3 0 0 1 4 41 L25 4 Z" fill="#FFFFFF"/>
    <rect x="23" y="18" width="4" height="14" fill="#ffc107" rx="2"/>
    <circle cx="25" cy="39" r="3" fill="#ffc107"/>
</svg>`;

const errorIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" height="20" width="20">
    <circle cx="25" cy="25" r="25" fill="#FFFFFF"/>
    <line x1="25" y1="13" x2="25" y2="28" stroke="#f44336" stroke-width="4" stroke-linecap="round"/>
    <circle cx="25" cy="38" r="3" fill="#f44336"/>
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
