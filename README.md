## A note for reviewers

A huge chunk of early commit messages is removed as I forgot to exclude my env file which contains my credentials, much apologies!

## Getting started

From the root directory, go to `/backend`:

```bash
cd backend
```

Add a new `.env` file and insert the line below. Replace `{your credentials}` with your own Zendesk account credentials. You can use [Postman](https://www.postman.com/) or [Blitter](https://www.blitter.se/utils/basic-authentication-header-generator/) to generate it at your own risk. Replace `{your subdomain}` with your own subdomain.

```bash
KEY={your credentials}                      // eg. KEY=Basic abcde12345
SUBDOMAIN={your subdomain}                  // eg. SUBDOMAIN=zccabcde
```

Run the backend code:

```bash
yarn
yarn start
```

While the backend is running, run the frontend code (start from the root directory):

```bash
cd frontend
yarn
yarn start
```

## Running tests

### Frontend

```bash
cd frontend
yarn
NODE_OPTIONS=--experimental-vm-modules yarn test
```

### Backend

```bash
cd backend
yarn
NODE_OPTIONS=--experimental-vm-modules yarn test
```
