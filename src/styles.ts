export const styles = `
.toast-container {
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
}

.toast-container.top-center {
    top: 0.625rem;
    left: 50%;
    transform: translateX(-50%);
}

.toast-container.bottom-center {
    bottom: 0.625rem;
    left: 50%;
    transform: translateX(-50%);
}

.toast-container.top-left {
    top: 0.625rem;
    left: 0.625rem;
}

.toast-container.top-right {
    top: 0.625rem;
    right: 0.625rem;
}

.toast-container.bottom-left {
    bottom: 0.625rem;
    left: 0.625rem;
}

.toast-container.bottom-right {
    bottom: 0.625rem;
    right: 0.625rem;
}

.default-toast {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #333;
    color: #fff;
    padding: 0.625rem;
    border-radius: 0.5rem;
    opacity: 0;
    animation: slide-in 0.5s forwards;
}

.toast-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.success-toast {
    background-color: #4caf50;
}

.info-toast {
    background-color: #2196f3;
}

.warning-toast {
    background-color: #ffc107;
}

.error-toast {
    background-color: #f44336;
}

@keyframes slide-in {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.toast-container.top-center .default-toast {
    animation: slide-in-top 0.5s forwards;
}

.toast-container.bottom-center .default-toast {
    animation: slide-in-bottom 0.75s forwards;
}

.toast-container.top-left .default-toast, .toast-container.bottom-left .default-toast {
    animation: slide-in-left 0.5s forwards;
}

.toast-container.top-right .default-toast, .toast-container.bottom-right .default-toast {
    animation: slide-in-right 0.5s forwards;
}

@keyframes slide-in-left {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-right {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-top {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-in-bottom {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;
