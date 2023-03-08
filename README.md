# Nodejs-africa23-talk

This repo is accompanied by a Talk at NodeJS Africa 2023 on the capabilities of using Puppeteer on AWS Lambda.

💾 [Sildes](https://www.figma.com/proto/wfTuuiWP4TwRRsdcefLp4x/Lunar-Tour-App-v2?node-id=1567-3350&scaling=contain&page-id=1566%3A3346&starting-point-node-id=1566%3A3347)

## Frontend

The frontend is a simple NextJS App that uses Apollo Client, Tailwind & AntD.

## Backend

The backend uses SST in TypeScript to scafold a GraphQL Lambda function. Which uses Puppeteer to generate an screenshot which goes into an s3 Bucket.

### Notices

Please note that the version of SST in this backend repo is outdated. If you're going to try and clone this and use it in `prod` please rather get in touch so that I can provide some guidence about how to do so.

# License

MIT
