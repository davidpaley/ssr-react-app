import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import Home from '../client/components/Home';

export default (req) => {
  const content = renderToString(
    // <Home />
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}