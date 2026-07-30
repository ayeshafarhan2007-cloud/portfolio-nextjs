\# NOTES



\## Manual Modal vs shadcn Dialog



\### My implementation

\- Used `role="dialog"` and `aria-modal="true"`

\- Closed the dialog with the Escape key

\- Trapped focus inside the dialog

\- Returned focus to the trigger button after closing



\### shadcn implementation

\- Uses reusable accessibility primitives.

\- Handles focus management more robustly.

\- Supports portals and better layering for production apps.



\---



\## Manual Tabs vs shadcn Tabs



\### My implementation

\- Used `role="tablist"`, `role="tab"` and `role="tabpanel"`

\- Supported Left and Right Arrow key navigation

\- Managed active tab state



\### shadcn implementation

\- Better keyboard support for edge cases.

\- More reusable and composable component structure.

\- Cleaner state management and styling.



\---



\## What I learned



Building these components manually helped me understand ARIA roles, keyboard navigation, focus management, and accessibility. Reading the shadcn source showed how production-ready components handle additional accessibility edge cases while keeping the components reusable.

