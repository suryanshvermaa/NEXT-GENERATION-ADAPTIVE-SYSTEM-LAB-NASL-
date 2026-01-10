const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 8080);

// Serve pages from src/pages as the site root.
const ROOT_PAGES = path.join(__dirname, 'src', 'pages');
// Expose src/js at /js/*
const ROOT_JS = path.join(__dirname, 'src', 'js');
// Expose src/assets at /assets/*
const ROOT_ASSETS = path.join(__dirname, 'src', 'assets');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * Map a request path to a filesystem root.
 * @param {string} urlPath
 * @returns {{ root: string, rel: string }}
 */
function resolveRoot(urlPath) {
  if (urlPath.startsWith('/js/')) {
    return { root: ROOT_JS, rel: urlPath.slice('/js/'.length) };
  }
  if (urlPath.startsWith('/assets/')) {
    return { root: ROOT_ASSETS, rel: urlPath.slice('/assets/'.length) };
  }
  return { root: ROOT_PAGES, rel: urlPath.replace(/^\//, '') };
}

/**
 * Prevent directory traversal.
 * @param {string} root
 * @param {string} rel
 */
function safeJoin(root, rel) {
  const normalizedRel = rel.split('/').filter(Boolean).join(path.sep);
  const fullPath = path.join(root, normalizedRel);

  const normalizedRoot = path.resolve(root) + path.sep;
  const normalizedFull = path.resolve(fullPath);
  if (!normalizedFull.startsWith(normalizedRoot)) return null;

  return normalizedFull;
}

const server = http.createServer((req, res) => {
  try {
    const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(requestUrl.pathname);

    if (pathname === '/') pathname = '/index.html';

    // If the URL ends with a slash, assume index.html within that folder.
    if (pathname.endsWith('/')) pathname += 'index.html';

    const { root, rel } = resolveRoot(pathname);
    const filePath = safeJoin(root, rel);

    if (!filePath) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad request');
      return;
    }

    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';

      const noCacheExts = new Set(['.html', '.js', '.css']);

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': noCacheExts.has(ext) ? 'no-cache' : 'public, max-age=3600',
      });

      fs.createReadStream(filePath).pipe(res);
    });
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Server error');
  }
});

server.listen(PORT, () => {
  console.log(`Static server running: http://localhost:${PORT}`);
  console.log(`Pages root: ${ROOT_PAGES}`);
  console.log(`JS root: ${ROOT_JS}`);
  console.log(`Assets root: ${ROOT_ASSETS}`);
});
