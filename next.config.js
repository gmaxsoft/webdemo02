/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    //output: 'export',
    images: {
        formats: ['image/avif', 'image/webp']
        //unoptimized: true
    }
}

module.exports = nextConfig
