# sunrise-backend

## Frontend setup

The backend works with the [Sunrise-SPA](https://github.com/commercetools/sunrise-spa/tree/v13.0) frontend project.
To make it work with locally hosted backend on port 3000 on top level create `.env.local` file with the following content:

```
VUE_APP_CT_AUTH_HOST=http://localhost:3000/
VUE_APP_CT_API_HOST=http://localhost:3000/
```

For demo purposes, you can also, in frontend project, comment out L38 in `apollo.js` to not use the auth service.

When checking out Sunrise-SPA remember to checkout to `v13.0` tag which is currently the lastest version.

```
git checkout v13.0
```

## Backend

By default, backend runs on port 3000. It can be changed by adding `APP_PORT` with the port number in `.env` file.

Backend answers for 4 queries with custom data mocked in json files:

- me - with object containing empty `activeCart` field
- categories - with categories defined in `categories.json`
- products - with a list of 5 defined in `product.*.json` files items
- product - returning details about one selected product which name was passed in `sku` variable in `args`

Backend handle one mutation:

- updateMyCart - which adds selected item with quantity to the cart

To run backend run:

```
npm run dev
```

It will run a local server which refreshes when changes in files are detected

Whole GraphQL Schema was exported with [get-graphql-schema](https://github.com/prisma-labs/get-graphql-schema) and saved in `\src\graphql\schema.graphql`
