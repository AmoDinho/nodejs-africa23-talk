# Backend

This Backend uses SST, Apollo, AWS Lambda, s3 & Puppeteer.

## Start up instructions

Install all packages:

```
$ yarn install
```

Run the app locally:

```
$ yarn dev
```

### GraphQL mutation

```
mutation {
  generateInvoice(input:{name:"Kevin Impala",guide:"Tech MGMT",price:"ZAE 9000",tripName:"Crater Central"})
}

```

## License

MIT
