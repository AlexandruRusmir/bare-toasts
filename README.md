# bare-toasts

A minimalistic, toast notification library.

## Warning

> ⚠️ **This package is in the early stages of development. Features and APIs are subject to change.**

## Features

-   **Framework Agnostic:** Works seamlessly with any JavaScript framework.
-   **Lightweight:** Minimal overhead.
-   **Customizable:** Easy to customize toast appearance and behavior.

## Installation

```bash
npm install bare-toasts
```

## Usage

```javascript
import { ToastManager } from "bare-toasts";

const toastManager = ToastManager.getInstance();

toastManager.createToast({
    message: "Hello World",
    duration: 5000,
});
```

### Parameters for `createToast`

| Parameter   | Type   | Description                                                                                                        |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `message`   | string | The message to display in the toast.                                                                               |
| `type`      | string | The type of toast (`success`, `info`, `warning`, `error`).                                                         |
| `position`  | string | The position of the toast (`top-left`, `top-right`, `bottom-left`, `bottom-right`, `top-center`, `bottom-center`). |
| `duration`  | number | The duration the toast should be visible (in milliseconds).                                                        |
| `className` | string | Additional class names to apply to the toast.                                                                      |
| `styles`    | object | Inline styles to apply to the toast.                                                                               |
