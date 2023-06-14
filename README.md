# Theme Template

This is a template project for creating a themed application using Next.js and Material-UI.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Structure

The project structure is as follows:
```
.
├── components
│   ├── CustomCheckboxDemo.js
│   ├── CustomCheckboxDemo.test.js
│   ├── GlobalAlertBar.js
│   ├── GlobalAlertBar.test.js
│   ├── HeaderStateDemo.js
│   ├── HeaderStateDemo.test.js
│   ├── Panel.js
│   └── Panel.test.js
├── pages
│   ├── _app.js
│   ├── _app.test.js
│   ├── _document.js
│   └── index.js
├── styles
│   ├── globals.css
│   └── theme.js
└── utils
├── createEmotionCache.js
└── reducers
├── StateProvider.js
└── reducer.js
```

- `components`: Contains reusable React components used in the application. Each component has its own JavaScript file and a corresponding test file.

- `pages`: Contains Next.js pages for routing. The `_app.js` file is the custom App component, `_document.js` is used for customizing the HTML document, and `index.js` is the main page component.

- `styles`: Contains CSS files for global styles (`globals.css`) and the theme configuration (`theme.js`).

- `utils`: Contains utility files for the project. `createEmotionCache.js` sets up the Emotion cache, while the `reducers` directory contains the `StateProvider` and `reducer` files for managing application state.

## Available Scripts

In the project directory, you can run the following scripts:

- `dev`: Starts the development server using Next.js.
- `build`: Builds the production-ready optimized version of the application.
- `start`: Starts the production server to serve the built application.
- `lint`: Runs ESLint to check for code quality and adherence to coding standards.

## Dependencies

The project has the following dependencies:

- `@emotion/cache`: Emotion library for CSS-in-JS styling.
- `@emotion/react`: Emotion library for React integration.
- `@emotion/server`: Emotion library for server-side rendering.
- `@emotion/styled`: Emotion library for styled components.
- `@mui/icons-material`: Material-UI icons.
- `@mui/material`: Material-UI components and styling.
- `next`: Next.js framework for React applications.
- `prop-types`: Runtime type checking for React props.
- `react`: React library.
- `react-dom`: React library for DOM rendering.

## Development Dependencies

The project has the following development dependencies:

- `@testing-library/jest-dom`: Jest DOM library for testing.
- `@testing-library/react`: Testing utilities for React components.
- `babel-jest`: Babel integration for Jest.
- `eslint`: JavaScript linter for code quality.
- `eslint-config-next`: ESLint configuration for Next.js projects.
- `jest-fetch-mock`: Jest library for mocking the fetch function.

## References:  
[https://mui.com/material-ui/customization/dark-mode/#system-preference](https://react.dev/reference/react/useContext)  
[https://legacy.reactjs.org/docs/context.html](https://react.dev/reference/react/useContext)  
[https://react.dev/reference/react/useContext](https://react.dev/reference/react/useContext)  

## License

This project is licensed under the [MIT License](LICENSE).