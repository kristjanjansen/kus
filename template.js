module.exports = content => `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
             font: 20px/150% sans-serif;
             margin: 50px;
            }
            .container {
             width: 800px;
            }
            p {
              margin: 0 0 1em 0;
            }
            h1 {
              font: bold 45pt/42pt sans-serif;
              letter-spacing: -1pt;
              color: #333;
            }
            h1 + p {
              page-break-after:always;
            }
            h2, h3, h4, h5 {
              margin: 1.5em 0 0.5em 0;
              line-height: 1em;
            }
            h2 {
              font-size: 2em;
            }
            h3 {
              font-size: 1.5em;
            }
            h4 {
              font-size: 1.2em;
            }
            a, a:link, a:active, a:hover, a:visited {
              color: black;
            }
            blockquote {
              font-size: 20pt;
              line-height: 28pt;
              color: gray;
            }
            pre {
              padding: 15px;
              background: #ddd !important;
              width: 970px;
              overflow: auto;
            }
            img {
              margin-top: 1.5em;
            }
            img + br + em {
              color: #888;
              font-style: normal;
            }
            table {
              width: 80%;
              border-spacing: 0;
              margin-bottom: 1.5em;
              text-align: left;
            }
            thead th {
              font-weight: bold;
              border-top: 1px solid #000;
              border-bottom: 1px solid #000;
            }
            td {
              border-bottom: 1px solid #000;
              padding: 0.1em
            }
            tbody tr:last-child td {
              border: none;
            }
            strong em {
              color: gray;
              font-weight: normal;
              font-style: normal;
            }
        </style>
    </head>
    <body>
        <div class="container">
        ${content}
        </div>
    </body>
    </html>
`