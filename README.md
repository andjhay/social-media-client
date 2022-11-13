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

## Dependencies

### Vite https://vitejs.dev/

npm run dev
open localhost link from command terminal
