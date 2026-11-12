const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Unable to load website');
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(data);
    });
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Website running on port ${port}`);
});