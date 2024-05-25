// https://apilist.tronscanapi.com/api/new
// https://shastapi.tronscan.org/api
// https://nileapi.tronscan.org/api

// 1 Все обычные входящие транзакции, чтобы детектировать входящую нативку
// https://apilist.tronscanapi.com/api/new/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&start_timestamp=1710332385000&end_timestamp=1710332385000
// https://shastapi.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&start_timestamp=1714819797000&end_timestamp=1714819797000

// 2 Все переводы токенов на счёт
// https://apilist.tronscanapi.com/api/new/token_trc20/transfers?limit=20&start=0&toAddress=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&start_timestamp=1672513200000&end_timestamp=&confirm=&filterTokenValue=1
// https://shastapi.tronscan.org/api/token_trc20/transfers?limit=20&start=0&toAddress=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&start_timestamp=1672513200000&end_timestamp=&confirm=&filterTokenValue=1

// 3 Все переводы trx, trc10
// https://apilist.tronscanapi.com/api/new/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7&filterTokenValue=1
// https://shastapi.tronscan.org/api/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=1

// txs
// https://apilist.tronscanapi.com/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw
//    https://nileapi.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w
//   https://shastapi.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w

// ----------------------------------------------------------------------------------------------------

// trx
//  https://apilist.tronscanapi.com/api/trx/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw&filterTokenValue=0
// https://nileapi.tronscan.org/api/new/trx/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=0
//    https://shastapi.tronscan.org/api/trx/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=0

// nileapi - redirect

// sort +
// limit +
// start +
// address +
// filterTokenValue=0 +
// start_timestamp +
// end_timestamp +

// trc10
//  https://apilist.tronscanapi.com/api/trc10/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TCqSJ3kMp79VGmGtKCbA94s6UExSgQmQpz&filterTokenValue=0
// https://nileapi.tronscan.org/api/new/trc10/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TWXmq3nt8q7Y6vFrsAVSaBQQr8hkJFRU56&filterTokenValue=0
//    https://shastapi.tronscan.org/api/trc10/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w&filterTokenValue=0

// nileapi - redirect

// sort + -timestamp
// limit +
// start +
// address +
// filterTokenValue=0 +
// start_timestamp +
// end_timestamp +
// tokens + token id

// trc20
//  https://apilist.tronscanapi.com/api/filter/trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&filterTokenValue=0&relatedAddress=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw
// https://nileapi.tronscan.org/api/new/filter/trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&filterTokenValue=0&relatedAddress=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w
//    https://shastapi.tronscan.org/api/filter/trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&filterTokenValue=0&relatedAddress=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w

// nileapi - redirect

// sort -
// relatedAddress +
// limit + max 20
// start +
// filterTokenValue=0 +
// start_timestamp +
// end_timestamp +

// ----------------------------------------------------------------------------------------------------

// token assets overview
// https://apilist.tronscanapi.com/api/account/token_asset_overview?address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw

// ----------------------------------------------------------------------------------------------------

// Get account info
// https://apilist.tronscanapi.com/api/accountv2?address=TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw
//    https://nileapi.tronscan.org/api/accountv2?address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w
//   https://shastapi.tronscan.org/api/accountv2?address=TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w

// ----------------------------------------------------------------------------------------------------

// Get blocks
// https://apilist.tronscanapi.com/api/block
//    https://nileapi.tronscan.org/api/block
//   https://shastapi.tronscan.org/api/block

// ----------------------------------------------------------------------------------------------------

export interface TronScanFrozen {
  /**
   * @description Total
   * @example 0
   */
  total: number;
  /**
   * @description Balances
   * @example []
   */
  balances: any[];
}

export interface TronScanPermissionKey {
  /**
   * @description Address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  address: string;
  /**
   * @description Weight
   * @example 1
   */
  weight: number;
}

export interface TronScanPermission {
  /**
   * @description Keys list
   */
  keys: TronScanPermissionKey[];
  /**
   * @description Threshold
   * @example 1
   */
  threshold: number;
  /**
   * @description Permission name
   * @example 'owner'
   */
  permission_name: string;
  /**
   * @description Permission id
   * @example 2
   */
  id?: number;
  /**
   * @description Operations
   * @example '7fff1fc0033ec30f000000000000000000000000000000000000000000000000'
   */
  operations?: string;
  /**
   * @description Permission type
   * @example 'Active'
   */
  type?: string;
}

export interface TronScanRepresentative {
  /**
   * @description Last withdraw time
   * @example 0
   */
  lastWithDrawTime: number;
  /**
   * @description Allowance
   * @example 0
   */
  allowance: number;
  /**
   * @description Enabled
   * @example false
   */
  enabled: boolean;
  /**
   * @description Url
   * @example ''
   */
  url: string;
}

export interface TronScanBandwidth {
  /**
   * @description Remaining energy
   * @example 0
   */
  energyRemaining: number;
  /**
   * @description Total energy limit
   * @example 90000000000
   */
  totalEnergyLimit: number;
  /**
   * @description Total energy weight
   * @example 7202050690
   */
  totalEnergyWeight: number;
  /**
   * @description Net used
   * @example 0
   */
  netUsed: number;
  /**
   * @description Storage limit
   * @example 0
   */
  storageLimit: number;
  /**
   * @description Storage percentage
   * @example 0
   */
  storagePercentage: number;
  /**
   * @description Assets
   * @example {}
   */
  assets: {};
  /**
   * @description Net percentage
   * @example 0
   */
  netPercentage: number;
  /**
   * @description Storage used
   * @example 0
   */
  storageUsed: number;
  /**
   * @description Storage remaining
   * @example 0
   */
  storageRemaining: number;
  /**
   * @description Free net limit
   * @example 600
   */
  freeNetLimit: number;
  /**
   * @description Energy used
   * @example 0
   */
  energyUsed: number;
  /**
   * @description Free net remaining
   * @example 600
   */
  freeNetRemaining: number;
  /**
   * @description Net limit
   * @example 0
   */
  netLimit: number;
  /**
   * @description Net remaining
   * @example 0
   */
  netRemaining: number;
  /**
   * @description Energy limit
   * @example 0
   */
  energyLimit: number;
  /**
   * @description Free net used
   * @example 0
   */
  freeNetUsed: number;
  /**
   * @description Total net weight
   * @example 38771757741
   */
  totalNetWeight: number;
  /**
   * @description Free net percentage
   * @example 0
   */
  freeNetPercentage: number;
  /**
   * @description Energy percentage
   * @example 0
   */
  energyPercentage: number;
  /**
   * @description Total net limit
   * @example 43200000000
   */
  totalNetLimit: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanBlockSimple {
  /**
   * @description Block number
   * @example 61993118
   */
  number: number;
  /**
   * @description Block hash
   * @example "0000000003b1f09eee9215c44771cde1a74d3dfb0be40149ec06af353e5f6360"
   */
  hash: string;
  /**
   * @description Block size
   * @example 64113
   */
  size: number;
  /**
   * @description Block timestamp
   * @example 1716622713000
   */
  timestamp: number;
  /**
   * @description ???
   * @example "2p6xdKFSc4ApzVHtBbK4ef47SXDzVm4TUJMca2DWKbZaC64NKK"
   */
  txTrieRoot: string;
  /**
   * @description Parent block hash
   * @example 0000000003b1f09d0b747aa65d452822b201a6731d2e7fa012a171d0a3d71934"
   */
  parentHash: string;
  /**
   * @description Witness id
   * @example 0
   */
  witnessId: number;
  /**
   * @description Witness address
   * @example "TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH"
   */
  witnessAddress: string;
  /**
   * @description ???
   * @example 268
   */
  nrOfTrx: number;
  /**
   * @description Witness name
   * @example "Binance Staking"
   */
  witnessName: string;
  /**
   * @description Version
   * @example "29"
   */
  version: string;
  /**
   * @description Fee
   * @example 401.97948
   */
  fee: number;
  /**
   * @description Block confirmation status
   * @example false
   */
  confirmed: boolean;
  /**
   * @description Confirmations count
   * @example 1
   */
  confirmations: number;
  /**
   * @description Net usage
   * @example 77531
   */
  netUsage: number;
  /**
   * @description Energy usage
   * @example 3016939
   */
  energyUsage: number;
  /**
   * @description Block reward
   * @example 16
   */
  blockReward: number;
  /**
   * @description Vote reward
   * @example 160
   */
  voteReward: number;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
}

// ----------------------------------------------------------------------------------------------------

export enum TronScanTokenShow {
  OnlyWhitelist = '0',
  All = '1',
  ExcludeBlacklist = '2'
}

export enum TronScanTokenVerifier {
  All = 'all',
  WithoutAuto = ''
}

export enum TronScanSort {
  TimestampDesc = '-timestamp',
  TimestampAsc = '+timestamp'
}

export enum TronScanOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum TronScanTokenFilter {
  All = 'all',
  Trc10 = 'trc10',
  Trc20 = 'trc20',
  Trc721 = 'trc721',
  Trc1155 = 'trc1155',
  Top = 'top'
}

export enum TronScanTokenSort {
  Marketcap = 'marketcap',
  PriceInTrx = 'priceInTrx',
  Gain = 'gain',
  Volume24hInTrx = 'volume24hInTrx',
  HolderCount = 'holderCount'
}

export interface TronScanPaginationOptions {
  /**
   * @description Start number. Default 0
   * @example 0
   */
  start?: number;
  /**
   * @description Number of items per page. Default depends on request type
   * @example 10
   */
  limit?: number;
}

export interface TronScanTimestampOptions {
  /**
   * @description Start time in milliseconds
   * @example 1715518463913
   */
  start_timestamp?: number;
  /**
   * @description End time
   * @example 1715518681609
   */
  end_timestamp?: number;
}

// ----------------------------------------------------------------------------------------------------

interface TronScanRiskInfo {
  /**
   * @description Risk status
   */
  risk: boolean;
}

interface TronScanContractInfo extends TronScanRiskInfo {
  /**
   * @description Is token or not
   * @example true
   */
  isToken: true;
  /**
   * @description Token tag
   * @example 'USDT Token'
   */
  tag1: string;
  /**
   * @description Token homepage
   * @example 'https://tron.network/usdt'
   */
  tag1Url: string;
  /**
   * @description Token name
   * @example 'TetherToken'
   */
  name: string;
  /**
   * @description VIP status
   * @example true
   */
  vip: boolean;
}

interface TronScanTransfersCommonResponse {
  /**
   * @description Tx total count
   * @example 1
   */
  total: number;
  /**
   * @description Range total
   * @example 1
   */
  rangeTotal: number;
  /**
   * @description Whole chain tx count
   * @example 7616229376
   */
  wholeChainTxCount?: number;
  /**
   * @description Key - address, value - is contract or not
   */
  contractMap?: {
    [key: string]: boolean;
  };
  /**
   * @description Contract info. Key - address, value - contract info
   */
  contractInfo?: {
    [key: string]: TronScanContractInfo;
  };
  /**
   * @description Time interval
   * @example -1
   */
  timeInterval?: number;
  /**
   * @description Normal address info (key - address, value - risk status object)
   */
  normalAddressInfo?: {
    [key: string]: TronScanRiskInfo;
  };
}

// ----------------------------------------------------------------------------------------------------

interface TronScanContractData {
  /**
   * @description Owner address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  owner_address: string;
  /**
   * @description Amount
   * @example 40000000
   */
  amount?: number;
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  to_address?: string;
  /**
   * @description Data
   * @example 'a9059cbb00000000000000000000004170cc6193c14df8c49f6fe0b7e2a92af871a36f140000000000000000000000000000000000000000000000000000000002faf080'
   */
  data?: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address?: string;
}

interface TronScanCost {
  /**
   * @description Net fee
   * @example 0
   */
  net_fee: number;
  /**
   * @description Energy penalty total
   * @example 35245
   */
  energy_penalty_total: number;
  /**
   * @description Energy usage
   * @example 0
   */
  energy_usage: number;
  /**
   * @description Fee
   * @example 27255900
   */
  fee: number;
  /**
   * @description Energy fee
   * @example 27255900
   */
  energy_fee: number;
  /**
   * @description Energy usage total
   * @example 64895
   */
  energy_usage_total: number;
  /**
   * @description Origin energy usage
   * @example 0
   */
  origin_energy_usage: number;
  /**
   * @description Net usage
   * @example 345
   */
  net_usage: number;
}

interface TronScanTokenInfoCommon {
  /**
   * @description Token id (address or _ for native)
   * @example '_'
   */
  tokenId: string;
  /**
   * @description Token name
   * @example 'trx'
   */
  tokenName: string;
  /**
   * @description Token abbreviation
   * @example 'trx'
   */
  tokenAbbr: string;
  /**
   * @description Number of decimal places
   * @example 6
   */
  tokenDecimal: number;
  /**
   * @description Token can show
   * @example 1
   */
  tokenCanShow: number;
  /**
   * @description Token logo url
   * @example 'https://static.tronscan.org/production/logo/trx.png'
   */
  tokenLogo: string;
  /**
   * @description Token type string
   * @example 'trc10'
   */
  tokenType: string;
  /**
   * @description Vip token status
   * @example true
   */
  vip: boolean;
}

interface TronScanTokenInfo extends TronScanTokenInfoCommon {
  /**
   * @description Token level
   * @example '2'
   */
  tokenLevel: string;
  /**
   * @description Token issuer address
   * @example 'THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC'
   */
  issuerAddr?: string;
}

interface TronScanTokenBalanceInfo extends TronScanTokenInfoCommon {
  /**
   * @description Amount in trx
   * @example '12.744104'
   */
  amount: string;
  /**
   * @description Quantity
   * @example '12.744104'
   */
  quantity?: string;
  /**
   * @description Token level
   */
  level?: string;
  /**
   * @description Token price in USD
   * @example 0.123082017644144
   */
  tokenPriceInUsd?: number;
  /**
   * @description Token price in trx
   * @example 1
   */
  tokenPriceInTrx: number;
  /**
   * @description Amount in USD
   * @example 1.56857
   */
  amountInUsd?: number;
  /**
   * @description Balance in sun
   * @example "12744104"
   */
  balance: string;
  /**
   * @description Number of token holders (not available in trx)
   * @example 42_771_261
   */
  nrOfTokenHolders?: number;
  /**
   * @description Transfers count (not available in trx)
   * @example 1_739_028_163
   */
  transferCount: number;
  /**
   * @description Project info
   * @example ''
   */
  project?: string;
}

interface TronScanTriggerInfo {
  /**
   * @description Method
   * @example 'transfer(address _to,uint256 _value)'
   */
  method: string;
  /**
   * @description Data
   * @example 'a9059cbb00000000000000000000004170cc6193c14df8c49f6fe0b7e2a92af871a36f140000000000000000000000000000000000000000000000000000000002faf080'
   */
  data: string;
  /**
   * @description Parameters
   * @example { _value: '50000000'; _to: 'TLFdXCKeKk8bnr3FQKmFU9aBo2LjQh5SCG'; }
   */
  parameter: { [key: string]: string };
  /**
   * @description Method id
   * @example 'a9059cbb'
   */
  methodId: string;
  /**
   * @description Method name
   * @example 'transfer'
   */
  methodName: string;
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Call value
   * @example 0
   */
  call_value: number;
}

interface TronScanTxCore {
  /**
   * @description Block id
   * @example 59866678
   */
  block: number;
  /**
   * @description Contract return string
   * @example 'SUCCESS'
   */
  contractRet: string;
  /**
   * @description Does the tx confirmed
   * @example true
   */
  confirmed: boolean;
  /**
   * @description Token info
   */
  tokenInfo: TronScanTokenInfo;
  /**
   * @description Tx risk status
   * @example false
   */
  riskTransaction: boolean;
}

interface TronScanTxCommon extends TronScanTxCore {
  /**
   * @description Data string
   * @example ''
   */
  data: string;
  /**
   * @description Id
   * @example ''
   */
  id: string;
  /**
   * @description Cheat status
   * @example false
   */
  cheatStatus: boolean;
  /**
   * @description Tx timestamp
   * @example 1710332385000
   */
  timestamp: number;
}

export interface TronScanTxSimple extends TronScanTxCommon {
  /**
   * @description Amount in sun
   * @example 40_000_000
   */
  amount: number;
  /**
   * @description Token name
   * @example '_'
   */
  tokenName: string;
  /**
   * @description Tx hash string
   * @example '6e46100d26498887d23e8184399d899823936269354e6ca760c44870745cf83e'
   */
  transactionHash: string;
  /**
   * @description From address
   * @example 'TUpT7q7C4kJnQpMUTdmCgTi5sm4dKoxy8m'
   */
  transferFromAddress: string;
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  transferToAddress: string;
}

export interface TronScanTxNative extends TronScanTxCommon {
  /**
   * @description Hash
   * @example '7149fb4f3b19115e21af263dfcea210f89f077d9909f5321ecb9d536f2fa61eb'
   */
  hash: string;
  /**
   * @description Owner address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  ownerAddress: string;
  /**
   * @description To address list
   * @example ['TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t']
   */
  toAddressList: string[];
  /**
   * @description To address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  toAddress: string;
  /**
   * @description Contract type
   * @example 31
   */
  contractType: number;
  /**
   * @description Tx revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description Contract data
   */
  contractData: TronScanContractData;
  /**
   * @description Smart calls
   * @example ''
   */
  SmartCalls: string;
  /**
   * @description Events
   * @example ''
   */
  Events: string;
  /**
   * @description Fee
   * @example ''
   */
  fee: string;
  /**
   * @description Result string
   * @example 'SUCCESS'
   */
  result: string;
  /**
   * @description Amount in sun
   * @example '0'
   */
  amount: string;
  /**
   * @description Tx cost
   */
  cost: TronScanCost;
  /**
   * @description Token type
   * @example 'trc10'
   */
  tokenType: string;
  /**
   * @description Trigger info
   */
  trigger_info?: TronScanTriggerInfo;
}

export interface TronScanTxToken extends TronScanTxCore {
  /**
   * @description Tx id
   * @example 'eeb22aac707cae38a908d324515a5f69a9db4bb00a3523ef5eeff4709b37f338'
   */
  transaction_id: string;
  /**
   * @description Tx status
   * @example 0
   */
  status: number;
  /**
   * @description Block timestamp
   * @example 1710235950000
   */
  block_ts: number;
  /**
   * @description From address
   * @example 'TUpT7q7C4kJnQpMUTdmCgTi5sm4dKoxy8m'
   */
  from_address: string;
  /**
   * @description From address tag
   */
  from_address_tag: {};
  /**
   * @description To address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  to_address: string;
  /**
   * @description To address tag
   */
  to_address_tag: {};
  /**
   * @description Contract address
   * @example 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
   */
  contract_address: string;
  /**
   * @description Token amount
   * @example '50000000'
   */
  quant: string;
  /**
   * @description Final result string
   * @example 'SUCCESS'
   */
  finalResult: string;
  /**
   * @description Revert status
   * @example false
   */
  revert: boolean;
  /**
   * @description Contract type
   * @example 'trc20'
   */
  contract_type: string;
  /**
   * @description From address is contract status
   * @example false
   */
  fromAddressIsContract: boolean;
  /**
   * @description To address is contract status
   * @example false
   */
  toAddressIsContract: boolean;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTransactionsListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Wallet address
   * @example 'TTMp6WRZhKe8TZiFHt3fe97WuRzg4Swa6w'
   */
  address: string;
}

export interface TronScanTransactionsListResponse extends TronScanTransfersCommonResponse {
  data: TronScanTxNative[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrxTrc10TransferListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Address , like contract address
   * @example 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7'
   */
  address: string;
  /**
   * @description Block number
   * @example 0
   */
  block?: number;
}

export interface TronScanTrxTrc10TransfersResponse extends TronScanTransfersCommonResponse {
  /**
   * @description Tx array
   */
  data: TronScanTxSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc20Trc721TransferListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Contract address
   * @example 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT'
   */
  contract_address?: string;
  /**
   * @description Whether to return confirmed transfers only. Default: true
   * @example true
   */
  confirm?: boolean;
  /**
   * @description Account address
   * @example 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT'
   */
  relatedAddress?: string;
}

export interface TronScanTrc20Trc721TransfersResponse extends TronScanTransfersCommonResponse {
  token_transfers: TronScanTxToken[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTokenListOptions extends TronScanPaginationOptions {
  address: string;

  hidden?: number;

  show?: number;

  sortType?: number;

  sortBy?: number;
}

export interface TronScanTokenListResponse extends TronScanTransfersCommonResponse {
  data: TronScanTokenBalanceInfo[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrxTransfersOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  address: string;
  sort?: TronScanSort;
}

export interface TronScanTrxTransfersResponse extends TronScanTransfersCommonResponse {
  data: TronScanTxSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc10TransfersOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  address: string;
  tokens?: string;
  sort?: TronScanSort;
  // filterTokenValue=0 +
}

export interface TronScanTrc10TransfersResponse extends TronScanTransfersCommonResponse {
  data: TronScanTxSimple[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetTrc20TransfersOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  relatedAddress: string;
  contract_address?: string;
  // filterTokenValue=0 +
}

export interface TronScanTrc20TransfersResponse extends TronScanTransfersCommonResponse {
  token_transfers: TronScanTxToken[];
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetAccountDetailInformationOptions {
  /**
   * @description Account address
   * @example 'TSTVYwFDp7SBfZk7Hrz3tucwQVASyJdwC7'
   */
  address: string;
}

export interface TronScanAccountDetailInformationResponse {
  /**
   * @description Total frozen v2
   * @example 0
   */
  totalFrozenV2: number;
  /**
   * @description Out tx count
   * @example 1
   */
  transactions_out: number;
  /**
   * @description Frozen for energy v2
   * @example 0
   */
  frozenForEnergyV2: number;
  /**
   * @description Reward number
   * @example 0
   */
  rewardNum: number;
  /**
   * @description Delegated frozen v2 balance for bandwidth
   * @example 0
   */
  delegatedFrozenV2BalanceForBandwidth: number;
  /**
   * @description Owner permission
   */
  ownerPermission: TronScanPermission;
  /**
   * @description Red tag
   * @example ''
   */
  redTag: string;
  /**
   * @description Delegated frozen for energy
   * @example 0
   */
  delegateFrozenForEnergy: number;
  /**
   * @description Balance in sun
   * @example 12744104
   */
  balance: 12744104;
  /**
   * @description Frozen band width v2
   * @example 0
   */
  frozenForBandWidthV2: number;
  /**
   * @description Can withdraw amount v2
   * @example 0
   */
  canWithdrawAmountV2: number;
  /**
   * @description Delegated
   * @example {}
   */
  delegated: {};
  /**
   * @description Transactions in count
   * @example 5
   */
  transactions_in: number;
  /**
   * @description Total transactions count (native maybe)
   * @example 3
   */
  totalTransactionCount: number;
  /**
   * @description Representative
   */
  representative: TronScanRepresentative;
  /**
   * @description Announcement
   * @example ''
   */
  announcement: string;
  /**
   * @description Allow exchange
   * @example []
   */
  allowExchange: any[];
  /**
   * @description Account type
   * @example 0
   */
  accountType: number;
  /**
   * @description Exchanges
   * @example []
   */
  exchanges: any[];
  /**
   * @description Frozen
   */
  frozen: TronScanFrozen;
  /**
   * @description Total transfers count (in and out)
   * @example 6
   */
  transactions: number;
  /**
   * @description Delegated frozen v2 balance for energy
   * @example 0
   */
  delegatedFrozenV2BalanceForEnergy: number;
  /**
   * @description Name
   * @example ''
   */
  name: string;
  /**
   * @description Frozen for energy
   * @example 0
   */
  frozenForEnergy: number;
  /**
   * @description Energy cost
   * @example 12.4964407880334
   */
  energyCost: number;
  /**
   * @description Active permissions list
   */
  activePermissions: TronScanPermission[];
  /**
   * @description Acquired delegated frozen v2 balance for bandwidth
   * @example 0
   */
  acquiredDelegatedFrozenV2BalanceForBandwidth: number;
  /**
   * @description Net cost
   * @example 1.11421309032748
   */
  netCost: number;
  /**
   * @description Acquired delegate frozen for bandwidth
   * @example 0
   */
  acquiredDelegateFrozenForBandWidth: number;
  /**
   * @description Grey tag
   * @example ''
   */
  greyTag: string;
  /**
   * @description Public tag
   * @example ''
   */
  publicTag: string;
  /**
   * @description Account tokens (with native)
   */
  withPriceTokens: TronScanTokenBalanceInfo[];
  /**
   * @description Unfreeze v2
   * @example 0
   */
  unfreezeV2: number;
  /**
   * @description Feedback risk
   * @example false
   */
  feedbackRisk: boolean;
  /**
   * @description Vote total
   * @example 0
   */
  voteTotal: number;
  /**
   * @description Total frozen
   * @example 0
   */
  totalFrozen: number;
  /**
   * @description Latest operation time
   * @example 1715695737000
   */
  latest_operation_time: number;
  /**
   * @description Frozen for bandwidth
   * @example 0
   */
  frozenForBandWidth: number;
  /**
   * @description Reward
   * @example 1
   */
  reward: number;
  /**
   * @description Address tag logo
   * @example ''
   */
  addressTagLogo: string;
  /**
   * @description Account address
   * @example 'TLPh66vQ2QMb64rG3WEBV5qnAhefh2kcdw'
   */
  address: string;
  /**
   * @description Frozen supply
   * @example []
   */
  frozen_supply: any[];
  /**
   * @description Account bandwidth
   */
  bandwidth: TronScanBandwidth;
  /**
   * @description Account creation date in milliseconds
   * @example 1710332382000
   */
  date_created: number;
  /**
   * @description Acquired delegated frozen v2 balance for energy
   * @example 0
   */
  acquiredDelegatedFrozenV2BalanceForEnergy: number;
  /**
   * @description Account resources
   */
  accountResource: {
    /**
     * @description Account resource
     * @example {}
     */
    frozen_balance_for_energy: {};
  };
  /**
   * @description Blue tag
   * @example ''
   */
  blueTag: string;
  /**
   * @description Witness
   * @example 0
   */
  witness: number;
  /**
   * @description Freezing
   * @example 0
   */
  freezing: number;
  /**
   * @description Delegate frozen for bandwidth
   * @example 0
   */
  delegateFrozenForBandWidth: number;
  /**
   * @description Account activation status
   * @example true
   */
  activated: boolean;
  /**
   * @description Acquired delegate frozen for energy
   * @example 0
   */
  acquiredDelegateFrozenForEnergy: number;
}

// ----------------------------------------------------------------------------------------------------

export interface TronScanGetBlocksListOptions extends TronScanPaginationOptions, TronScanTimestampOptions {
  /**
   * @description Super representative address
   */
  producer?: string;
}

export interface TronScanBlockListResponse extends TronScanTransfersCommonResponse {
  data: TronScanBlockSimple[];
}

// ----------------------------------------------------------------------------------------------------
