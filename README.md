![https://tronscan.org/](https://tronscan.org/static/media/logo_left.75928ad1b469e9b7f18200c4605d3396.svg)

# Tronscan client

Client for receiving blockchain data through block explorers (in particular, tronscan).  
At the moment, the number of available methods is limited to those indicated in the examples below.

## Donation

To support this project, you can send crypto to:

- **0x3F2f0098310e654040f7794AB7E44Ac48E0eaF7B**
- **TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw**

## Create client instance

```javascript
import { TronScanClient } from 'tronscan-client';

const tronScanClient = new TronScanClient({
  url: 'https://apilist.tronscanapi.com/api',
  apiKey: 'your_api_key_from_tronscan_cabinet'
});
```

## [Account section](https://docs.tronscan.org/api-endpoints/account#get-account-detail-information)

```javascript
const ADDRESS = 'tron_address';

const response = await tronScanClient.getAccountList();
console.log(response.data);

const account = await tronScanClient.getAccountDetailInformation({
  address: ADDRESS
});
console.log(account);
```

## [Tokens section](https://docs.tronscan.org/api-endpoints/tokens)

```javascript
// Get token list:
const response = await tronScanClient.getTokenList({
  address: ADDRESS
});
const tokens = response.data;
```

## [Transactions and transfers section](https://docs.tronscan.org/api-endpoints/transactions-and-transfers)

```javascript
const ADDRESS = 'tron_address';

// Get a list of transactions:
const response = await tronScanClient.getTransactionsList({
  address: ADDRESS
});
const txs = response.data;

// Get transaction detail information by transaction hash
const [tx] = txs;
const txDetails = await tronScanClient.getTransactionDetailByHash({
  hash: tx.hash
});

// Get trx&trc10 transfer list:
const response = await tronScanClient.getTrxTrc10TransferList({
  address: ADDRESS,
  start_timestamp: 1715855574000,
  end_timestamp: 1715855574000
});
const txs = response.data;

// Get trc20&721 transfers list:
const response = await tronScanClient.getTrc20Trc721TransferList({
  relatedAddress: ADDRESS
});
const transfers = response.token_transfers;

// Get only trx transfers:
const response = await tronScanClient.getTrxTransfers({
  address: ADDRESS
});
const transfers = response.data;

// Get only trc10 transfers:
const response = await tronScanClient.getTrc10Transfers({
  address: ADDRESS
});
const transfers = response.data;

// Get only trc20 transfers:
const response = await tronScanClient.getTrc20Transfers({
  relatedAddress: ADDRESS,
  contract_address: 'contract_address'
});
const transfers = response.data;
```

## [Block section](https://docs.tronscan.org/api-endpoints/block)

```javascript
const response = await tronScanClient.getBlocks();
const blocks = response.data;
```

## Supported networks table

**You must use the API key!!!**  
Just register an account on tronscan.org and generate an API key.

| **Name**        | **Block explorer**           | Block explorer API url               |
| --------------- | ---------------------------- | ------------------------------------ |
| Tronscan        | https://tronscan.org/        | https://apilist.tronscanapi.com/api  |
| Tronscan Nile   | https://nile.tronscan.org/   | https://nileapi.tronscan.org/api/new |
| Tronscan Shasta | https://shasta.tronscan.org/ | https://shastapi.tronscan.org/api    |
