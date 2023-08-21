# QW-COMPONENTS-LIB

QW design system consists on a library of QWIK components that implements a common design for applications.

## QW-DESIGN-SYSTEM-LIB STACK ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik on GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

---

## Usage

```bash
npm npm i qw-components-lib
```

In your poject page.tsx

```tsx
import { QwButton } from 'qw-components-lib';

<QwButton>My button</QwButton>;
```

# Collaborations

---

## Project Structure

Inside your project, you'll see the following directories and files:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── qw-button
    │        |── stories
    |        |   └── ..
    │        |── test
    |        |   └── ..
    |        |── qw-button.tsx
    |        |── qw-button.scss
    |        └── _hooks.scss
    └── index.ts
```

- `src/components`: Recommended directory for components.

- `src/components/[component-name]/stories`: Recommended directory for stories.

- `src/components/[component-name]/test`: Recommended directory for test.

- `index.ts`: The entry point of your component library, make sure all the public components are exported from this file.

## Download

```bash
git clone https://github.com/javigonzmoya/qw-components-lib.git
```

```bash
git checkout release-x-x-x
```

```bash
git checkout -b feat/example-...
```

```bash
yarn install
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). For Qwik during development, the `dev` command will also server-side render (SSR) the output. The client-side development modules are loaded by the browser.

```
yarn dev
```

> Note: during dev mode, Vite will request many JS files, which does not represent a Qwik production build.

## Build

The production build should generate the production build of your component library in (./lib) and the typescript type definitions in (./lib-types).

```
yarn build
```

## Testing

Run the simple unit tests.

```
yarn test:unit
```

Run the ui enviroment unit tests.

```
yarn test:unit:ui
```

Run the coverage.

```
yarn test:coverage
```

## Storybook

The storybook should run.

```
yarn storybook
```

And start local server.

```
http://localhost:6006/
```
