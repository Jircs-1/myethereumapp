import constants from '../../constants';

const IS_PRODUCTION = constants.ENV === 'production';

function processRequest(req, res) {
  const response = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">        
          html, body {
            background-color: #000;
            font-family: 'Abel', Helvetica, sans-serif;
            margin: 0;
          }
        </style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel:300,400,500">
        ${IS_PRODUCTION ? (`
          <link rel="stylesheet" type="text/css" href="/client-${__GIT_SHA__}.css">
        `) : ''}
      </head>
      <body>
        <div id="app"></div>
        ${IS_PRODUCTION ? (`
          <script src="/client-${__GIT_SHA__}.js"></script>
        `) : `
          <script crossorigin src="http://0.0.0.0:8080/client.js"></script>
        `}
      </body>
    </html>
  `;
  return res.send(response);
}

export default function () {
  this.get('*', processRequest);
}