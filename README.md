# General

- Minimal example with react app using @mui/material.

## Problems

- code not minified/obfuscated
- bunlde size **~4.4** times bigger than with the older nrwl version.

### Further issues not included in the example:

- Libraries are bundled multiple times. e.g. The declaration of the DateTime class from the luxon library is present multiple time leading to problems with usage of "instanceof" within the library.

## Branch main

- nrwl@15.4.5
- using webpackConfig from "@nrwl/react/plugins/webpack"
- **size ~631KB**

### To reproduce

```
git checkout main
yarn
yarn build
```

![artefacts](/imgs/former-artefacts.png)
![content](/imgs/former-content.png)

## Branch latest

- nrwl@15.6.3 (issue present from 15.4.6 up to 15.6.3)
- using webpackConfig "withNx" and "withReact"
- size **~2.8MB**

### To reproduce

```
git checkout latest
yarn
yarn build
```

![artefacts](/imgs/latest-artefacts.png)
![content](/imgs/latest-content.png)
