# bare-toasts

A minimalistic, toast notification library.

<iframe style="width: 100%; height: auto; aspect-ratio: 16/9; margin: 0.5rem 0;" src="https://www.youtube.com/embed/1gbMW7YeOLw?si=TmD7zRVtOBZS3l_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Features

-   **Framework Agnostic:** Works seamlessly with any JavaScript framework/library.
-   **Lightweight:** Minimal overhead.
-   **Customizable:** Easy to customize toast appearance.

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

| Parameter   | Type     | Description                                                                                                        | Default Value  |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------ | -------------- |
| `message`   | string   | The message to display in the toast.                                                                               |                |
| `type`      | string   | The type of toast (`normal`, `success`, `info`, `warning`, `error`).                                               | `normal`       |
| `position`  | string   | The position of the toast (`top-left`, `top-right`, `bottom-left`, `bottom-right`, `top-center`, `bottom-center`). | `bottom-right` |
| `duration`  | number   | The duration the toast should be visible (in milliseconds).                                                        | `3000`         |
| `showIcon`  | boolean  | Determines whether to show an icon in the toast.                                                                   | `true`         |
| `className` | string   | Additional class names to apply to the toast.                                                                      |                |
| `styles`    | object   | Inline styles to apply to the toast.                                                                               |                |
| `onShow`    | function | A callback function to be called when the toast is shown.                                                          |                |
| `onHide`    | function | A callback function to be called when the toast is hidden.                                                         |                |
