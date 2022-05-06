# The Simple Gallery

A keyword search-enabled photo gallery application. The React client serves images fetched from the Pexels API via an Express server. The app uses web browser local storage to persist app states between refreshes.

## Install

1. Run `npm install`

2. Store the preferred server port number and Pexels API key inside a root-level ".env" file:

EXPRESS_PORT=8080
API_KEY=yourAPIkey123

Inside "package.json", ensure that "proxy" port number matches the server port number.

3. Finally, run `npm run dev` to concurrently spin up the server and launch the React application. If an API key cannot be found, the app will error out.
