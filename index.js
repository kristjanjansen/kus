#!/usr/bin/env node

const { generateSinglePdf } = require('chrome-headless-render-pdf');
const { resolve, basename } = require('path')
const { readFileSync, writeFileSync, unlinkSync } = require('fs')
const marked = require('marked')
const template = require('./template')


if (process.argv[2]) {


    const markdown = readFileSync(process.argv[2], 'utf-8')

    const html = template(marked(markdown, { breaks: true }))

    const htmlFile = basename(process.argv[2], '.md')+'.html'

    writeFileSync(htmlFile, html)

    const htmlFileUrl = `file://${process.cwd()}/${htmlFile}`
    const pdfFile = './' + basename(process.argv[2], '.md')+'.pdf'

    generateSinglePdf(
        htmlFileUrl,
        pdfFile,
        {
            chromeBinary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
        }
    )
    .then( /* unlinkSync(tmpFile) */ )
    .catch(err => console.log(err))
    

}
