# The Simple Gallery

A keyword search-enabled photo gallery application. The React client serves images fetched from the Pexels API via an Express server. The app uses web browser local storage to persist app states between refreshes.

## Install

Run `npm install`

Before starting the app, please store the preferred server port number and Pexels API key inside a root-level ".env" file. Please reference the ".env.example" file.

Please run `npm run dev` to concurrently spin up the server and launch the React application. If an API key cannot be found, the app will error out.
