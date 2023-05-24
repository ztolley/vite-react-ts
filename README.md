# Template for Vite/React/Typescript

This repository acts as a template to bootstrap a new React project using Vite and Typescript with an opinionated folder structure and some useful libraries.

## Features

- [React JS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/)
- [Editor config](https://editorconfig.org/)
- Import aliases
- Opinionated folder structure
- [Emotion CSS Styling](https://emotion.sh/docs/styled)
- [Mui](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [Docker](https://www.docker.com/)

## Getting Started

Before creating a project you just install NodeJS. It is recommended to use the latest LTS version.

```
npx degit ztolley/vite-react-ts#main my-project
cd my-project
npm install
npm run dev
```

## Folder Structure

| Folder     | Alias       | Description                  |
| ---------- | ----------- | ---------------------------- |
| common     | @Common     | All utilities                |
| components | @Components | Generic re-usable components |
| pages      | @Pages      | Pages and screens            |
| providers  | @Providers  | Providers                    |
| sections   | @Sections   | Sections                     |

Important files

- `vite.config.ts` - Vite configuration: build related settings
- `tsconfig.json` - Typescript configuration
- `tsconfig.paths.json` - Typescript path aliases
- `src/app.tsx` - Base file for application and routes
- `index.html` - HTML template

## Scripts

| Script        | Description                            |
| ------------- | -------------------------------------- |
| `build`       | Build for production                   |
| `coverage`    | Run tests and generate coverage report |
| `dev`         | Start development server               |
| `lint`        | Run ESLint                             |
| `lint:staged` | Run ESLint on staged files             |
| `preview`     | Preview production build               |
| `test`        | Run tests                              |

## Navigation

The template application has been configured to instruct any MUI based components to use React Router for navigation.

## Docker

The project provides a Dockerfile to build a docker image. The Dockerfile builds the project and copies it into a fresh NGINX based image configure to run as a non-root user.

To build the docker image run the following command:

```
docker build -t image-name .
```
