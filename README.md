# General

- Minimal example with react app using @mui/material.

## Branch main

- nrwl@15.4.5
- using webpackConfig from "@nrwl/react/plugins/webpack"
- **size ~631KB**

![artefacts](/imgs/former-artefacts.png)
![content](/imgs/former-content.png)

## Branch latest

- nrwl@15.6.3 (issue resent from 15.4.6 up to 15.6.3)
- using webpackConfig "withNx" and "withReact"
- size ~KB

# Problems

- code not minified/obfuscated
- bunlde size

Further issues not included in the example

- The declaration of the DateTime class from luxon is present multiple time leading to problems with usage of "instanceof" within the library.
