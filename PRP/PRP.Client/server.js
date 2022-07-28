const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// function redirectTrailingSlash(req, res, next) {
//   let paths = req.url.split("?")
//   let path = paths[0], query = null;
//   if (paths.length > 1)
//     query = paths.slice(1, paths.length).join("?")

//   if (path.substr(-1) === '/' && path.length > 1)
//     res.redirect(301, path.slice(0, -1) + ((query) ? ('?' + query) : ''));
//   else
//     next();
// }

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/a') {
        await app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`);
  });
  // express()
  //   .use(redirectTrailingSlash);
});