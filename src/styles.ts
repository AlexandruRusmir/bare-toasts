export const styles = `
.toast-container {
    position: fixed;
    z-index: 1000;
    display: flex;
    gap: 0.625rem;
}

.toast-container.top-center {
    top: 0.625rem;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    flex-direction: column-reverse;
}

.toast-container.bottom-center {
    bottom: 0.625rem;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    flex-direction: column;
}

.toast-container.top-left {
    top: 0.625rem;
    left: 0.625rem;
    align-items: flex-start;
    flex-direction: column-reverse;
}

.toast-container.top-right {
    top: 0.625rem;
    right: 0.625rem;
    align-items: flex-end;
    flex-direction: column-reverse;
}

.toast-container.bottom-left {
    bottom: 0.625rem;
    left: 0.625rem;
    align-items: flex-start;
    flex-direction: column;
}

.toast-container.bottom-right {
    bottom: 0.625rem;
    right: 0.625rem;
    align-items: flex-end;
    flex-direction: column;
}

.default-toast {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #444;
    box-shadow: 0.1rem 0.1rem 0.3rem 0.01rem rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 0.5rem;
    opacity: 0;
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
