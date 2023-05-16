# Create TypeScript App

A boilerplate to provide a starting point for developing TypeScript applications. It includes support for package management with ***pnpm***, build automation with ***Rollup***, testing with ***Jest***, and ***CSS Modules*** with ***SCSS*** for enhanced styling capabilities.

## Features

- Ready to use bundling systems (production and development).
-
- CSS module with scss out of the box and auto class name conversion ( `.demo-class` → `demoClass` ).
- Development server with hot reloading.
- Generate production ready static site.
- Easy assets management
- Custom path alias

## Getting Started

To use this boilerplate, follow the steps below:

1. Clone the repository:

    ```bash
    git clone https://github.com/hein-htut-aung/create-typescript-app.git
    ```

2. Change into the project directory:

    ```bash
    cd create-typescript-app
    ```

3. Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

4. Install dependencies using pnpm:

    ```bash
    pnpm dev
    ```

5. To view the running application, open your web browser and navigate to `http://localhost:10001`.

## Scripts

- `pnpm dev`: Starts the development server with live reloading.
- `pnpm prod`: Builds the project for production.
- `pnpm test`: Runs the test suite.

## Project structure

  ```bash
    ├── src
    │   ├── demo
    │   │   └── styles.scss
    │   │   └── index.ts
    │   ├── main.ts
    ├── public
    │   ├── index.html.js
    │   ├── static
    │   │   └── favicon.ico
    │   │   └── site.webmanifest
    │   └── assets
    │       └── demo.png
    ├── tests
    │   └── demo.test.ts
    ├── @types
    │   └── custom.d.ts
    └── .github
        └── workflows
            └── action.yml
  ```

- `src`: for source code files. ( alias: `@src` )
  - entry point → `main.ts`
- `public`: contains index html template ( `index.html.js` ) and static assets.
  - `assets`: place to store images ( alias: `@assets` )
  - `static`: for static files like favicon.ico, robot.txt, etc.
- `tests`: for test files.
- `@types`: place to declare custom types.
- `.github`: to store various configuration files and workflows related to GitHub-specific features and actions. ([learn more](https://docs.github.com/en/actions/using-workflows/about-workflows))

## Path Alias

To avoid using long relative paths like ../../src, this boilerplate uses path aliases to improve code readability and maintainability, especially in larger projects with complex directory structures.

- `@assets` → `./public/assets`
- `@src` → `./src`

## Styling

The **create-typescript-app** boilerplate already includes support for CSS modules using post-css and SCSS.

You can create an SCSS file, \<filename\>.scss, and use it anywhere under the src directory.

### Example

```scss
// style.scss
.demo-block {
  background-color: black;
}
```

Note: *create-typescript-app will automatically convert `.demo-block` to `demoBlock`.*

#### Usage

```typescript
import styles from './style';

document.getElementById('block');
block.classList.add(styles.demoImg); 
```

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
