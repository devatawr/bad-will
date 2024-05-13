# Bad Will

## Prerequisites

To make sure it works, you should point the valid contract address in the `frontend/src/App.tsx` `contract/loan.sol` file first.
```typescript
    const loanContract = "0x";
    // const sbtA = "0x";
    // const sbtB = "0x";
    const bugs = "0x";
```
```solidity
    IERC20 public bugToken = IERC20(0xadd); // bugsToken
```

## Available Scripts

In the project directory, you can run:

### `npm install --force`

Installs the latest version of all packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
