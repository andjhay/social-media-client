# Workflow CA

[![Automated E2E Testing](https://github.com/andjhay/social-media-client/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/andjhay/social-media-client/actions/workflows/e2e-testing.yml)
[![Automated E2E Testing](https://github.com/andjhay/social-media-client/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/andjhay/social-media-client/actions/workflows/e2e-testing.yml)
[![Deploy static content to Pages](https://github.com/andjhay/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/andjhay/social-media-client/actions/workflows/pages.yml)
[![Deploy static content to Pages](https://github.com/andjhay/social-media-client/actions/workflows/static.yml/badge.svg?branch=workflow)](https://github.com/andjhay/social-media-client/actions/workflows/static.yml)

### The following workflows/hooks are required:

- [x] Project is configured to run Prettier on commit
- [x] Project is configured to run ESLint on commit
- [x] Project is configured to run Jest on commit
- [x] Project is configured to deploy to pages on merge to default

### The following file changes are required:

- [ ] Project readme file is updated to include new configuration information and status badges
- [x] Project is configured for hosting (e.g. CDN links or a Bundler)

### The following features must be automatically tested with unit tests:

- [x] The login function returns a valid token when provided with valid credentials
- [x] The logout function clears the token from browser storage
- [x] The create item function creates a new item on the API

### The following features must be automatically tested with end-to-end tests:

- [x] The login form validates user inputs correctly based on API restrictions
- [x] The create item form validates user inputs correctly based on API restrictions
- [x] The logout button logs the user out when clicked

## Dependencies to Install

### Vite https://vitejs.dev/

`npm install -D vite`

`npm run dev`

<p>open localhost link from command terminal</p>

### Prettier https://prettier.io/

`npm install --save-dev prettier`

### ESLint https://eslint.org/

`npm install eslint --save-dev`

### Jest

`npm i -D jest`
then
`npm run test-unit`

### Babel

`npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4`

### Cypress

`npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1`
then
`npm run test-e2e`
