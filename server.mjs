
import http from 'http';
import pageData from './data.mjs';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${pageData.title}</title>
      </head>
      <body>
        <h1>${pageData.title}</h1>
        <h2>${pageData.subtitle}</h2>
        <p>${pageData.description}</p>
      </body>
    </html>
  `;

  res.end(htmlContent);
});


server.listen(3000, () => {
  console.log(`Servidor en ejecución en http://localhost:3000`);
});
