# @sozialhelden/ui

> UI components shared by different sozialhelden projects.  

Check the [Storybook](https://sozialhelden.github.io/ui/) for an overview of the available components.

## Install

Make sure you have Tailwind CSS installed in your project. If you don't have it yet, you should install and set it up first: https://tailwindcss.com/docs/installation/using-vite

Then install the library:

```bash
npm i --save @sozialhelden/ui
```

Add the following to your main CSS file, make sure to adapt the path to the `@sozialhelden/ui` package if necessary:

```css
/* Import fonts */
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/400-italic.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/500-italic.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/inter/600-italic.css";
@import "@fontsource/inter/700.css";
@import "@fontsource/inter/700-italic.css";

/* Add tailwind itself and necessary addons */
@import "tailwindcss";
@import "tw-animate-css";

/* Import tailwind config from ui library */
@import "@sozialhelden/ui/style.css";

/* Add ui library as source for class purging */
@source "../../node_modules/@sozialhelden/ui";
```
## Usage

Check the [Storybook](https://sozialhelden.github.io/ui/) for an overview of the available components.

Now you can use tailwind classes and the components provided by the `@sozialhelden/ui` package in your project, for example:

```tsx
import { Button } from "@sozialhelden/ui";

export function App() {
    return (
        <div className="p-4 bg-red-200">
            <Button>Click me!</Button>
        </div>
    );
}
```

## Development setup

Install dependencies:

```bash
npm ci
```

Run the storybook dev-server:

```bash
npm run dev
```

Build a production version of the library and storybook:

```bash
npm run build
```

Run linter/formatters:

```bash
# Run linter
npm run lint

# Run linter and automatically fix fixable issues
npm run lint:fix

# Run formatter
npm run format

# Run formatter and automatically fix fixable issues
npm run format:fix

# Run typecheck
npm run typecheck
```

## License

MIT
