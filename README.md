# TTRL UI

[![Netlify Status Badge][1]][2]

[Visit site][3]

Motiviation: Refamiliarisation with web development (in particular
Vue) and other web technologies.

A UI for the TTRL service which displays registered players names,
photo, wins, losses and high score.

Details are provided by a backend API (see ttrl-backend). The backend
is hosted on a heroku free tier dyno so initial load times following
inactivty may be up to 30 seconds.

### Technology

- Vue 3
- TailwindCSS
- Snowpack

### Build

The below will build a bundled (webpack) version of the site for
deploying.
```bash
nvm use

npm install
npm run build
```

To test deploying use a command similar to below.
```bash
cd build && python -m SimpleHTTPServer 8080
cd build && php -S localhost:8080
```

### Dev

The below will launch a dev server (typically port 8080) which will
automatically update on file changes.
```bash
npm run serve
```

### Deployment

The service is deployed as a static site by netlify. There are 2 main
deployments:
- prod: https://ttrl-ui.netlify.app
- staging: https://staging--ttrl-ui.netlify.app

[1]: <https://api.netlify.com/api/v1/badges/a6caf4da-8161-4229-885a-ea91ce64b593/deploy-status> "Netlify status badge"
[2]: <https://app.netlify.com/sites/ttrl-ui/deploys> "Netlify deployments"
[3]: <https://ttrl-ui.netlify.app> " TTRL UI site"
