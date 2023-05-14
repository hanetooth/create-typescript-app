import { makeHtmlAttributes } from '@rollup/plugin-html';

export default function ({
  attributes,
  files,
  meta,
  publicPath,
  title
}) {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join('\n');
  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join('\n');

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n');

  return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Bootstrap your awesome creation.">
    <meta name="keywords" content="boilerplate">
    <meta name="author" content="Hein Htut Aung">
    <meta name="robots" content="index, follow">
    <meta name="og:title" content="Your Website Title">
    <meta name="og:description" content="Your website description">
    <meta name="og:image" content="https://example.com/your-image.png">
    <meta name="og:url" content="https://example.com">
    <meta name="twitter:title" content="Your Website Title">
    <meta name="twitter:description" content="Your website description">
    <meta name="twitter:image" content="https://example.com/your-image.png">
    <meta name="twitter:card" content="summary_large_image">
    ${metas}
    <title>${title}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    ${links}
  </head>
  <body>
    <div id="root"></div>
    ${scripts}
  </body>
</html>`;
};