import { AxiosRequestConfig } from "axios";

import { AxiosTransport, Transport } from "./Transport";
import {
  TronScanAccountDetailInformationResponse,
  TronScanAccountListResponse,
  TronScanBlockListResponse,
  TronScanCheckAccountAuthoritySecurityOptions,
  TronScanCheckAccountAuthoritySecurityResponse,
  TronScanCheckAddressSecurityOptions,
  TronScanCheckAddressSecurityResponse,
  TronScanCheckMultiSignSecurityOptions,
  TronScanCheckMultiSignSecurityResponse,
  TronScanCheckTokenSecurityOptions,
  TronScanCheckTokenSecurityResponse,
  TronScanCheckTransactionSecurityOptions,
  TronScanCheckTransactionSecurityResponse,
  TronScanGetAccountDetailInformationOptions,
  TronScanGetAccountListOptions,
  TronScanGetBlocksListOptions,
  TronScanGetTokenListOptions,
  TronScanGetTransactionsListOptions,
  TronScanGetTrc10TransfersOptions,
  TronScanGetTrc20TransfersOptions,
  TronScanGetTrc20Trc721TransferListOptions,
  TronScanGetTrxTransfersOptions,
  TronScanGetTrxTrc10TransferListOptions,
  TronScanGetTxDetailByHashOptions,
  TronScanTokenListResponse,
  TronScanTransactionsListResponse,
  TronScanTrc10TransfersResponse,
  TronScanTrc20TransfersResponse,
  TronScanTrc20Trc721TransfersResponse,
  TronScanTrxTransfersResponse,
  TronScanTrxTrc10TransfersResponse,
  TronScanTxDetailByHashResponse,
} from "../types/tronscan";

export interface TronScanClientOptions {
  /**
   * @description Block explorer url
   */
  url: string;
  /**
   * @description Your API key
   */
  apiKey?: string;
  /**
   * Axios request config
   */
  axiosOptions?: AxiosRequestConfig;
}

export class TronScanClient {
  protected transport: Transport;

  constructor(options: TronScanClientOptions) {
    const { url, apiKey = "", axiosOptions = {} } = options;
    if (!url) {
      throw new Error("URL not specified!");
    }

    this.transport = new AxiosTransport(url, apiKey, axiosOptions);
  }

  public async getAccountList(params: TronScanGetAccountListOptions = {}) {
    const response = await this.transport.get<TronScanAccountListResponse>(
      "account/list",
      params
    );
    return response.data;
  }

  public async getAccountDetailInformation(
    params: TronScanGetAccountDetailInformationOptions
  ) {
    const response =
      await this.transport.get<TronScanAccountDetailInformationResponse>(
        "accountv2",
        params
      );
    return response.data;
  }

  // Transactions and transfers:

  public async getTransactionsList(
    params: TronScanGetTransactionsListOptions
  ): Promise<TronScanTransactionsListResponse> {
    const response = await this.transport.get<TronScanTransactionsListResponse>(
      "transaction",
      params
    );
    return response.data;
  }

  public async getTransactionDetailByHash(
    params: TronScanGetTxDetailByHashOptions
  ): Promise<TronScanTxDetailByHashResponse> {
    const response = await this.transport.get<TronScanTxDetailByHashResponse>(
      "transaction-info",
      params
    );
    return response.data;
  }

  public async getTrxTrc10TransferList(
    params: TronScanGetTrxTrc10TransferListOptions
  ): Promise<TronScanTrxTrc10TransfersResponse> {
    const response =
      await this.transport.get<TronScanTrxTrc10TransfersResponse>("transfer", {
        ...params,
        filterTokenValue: 1,
      });
    return response.data;
  }

  public async getTrc20Trc721TransferList(
    params: TronScanGetTrc20Trc721TransferListOptions
  ): Promise<TronScanTrc20Trc721TransfersResponse> {
    const response =
      await this.transport.get<TronScanTrc20Trc721TransfersResponse>(
        "token_trc20/transfers",
        {
          ...params,
          filterTokenValue: 1,
        }
      );
    return response.data;
  }

  public async getTokenList(
    params: TronScanGetTokenListOptions
  ): Promise<TronScanTokenListResponse> {
    const { address, hidden = 0, show = 0, sortType = 0, sortBy = 0 } = params;
    const response = await this.transport.get<TronScanTokenListResponse>(
      "account/tokens",
      {
        address,
        hidden,
        show,
        sortBy,
        sortType,
      }
    );
    return response.data;
  }

  public async getTrxTransfers(
    params: TronScanGetTrxTransfersOptions
  ): Promise<TronScanTrxTransfersResponse> {
    const response = await this.transport.get<TronScanTrxTransfersResponse>(
      "trx/transfer",
      {
        ...params,
        filterTokenValue: 0,
      }
    );
    return response.data;
  }

  public async getTrc10Transfers(
    params: TronScanGetTrc10TransfersOptions
  ): Promise<TronScanTrc10TransfersResponse> {
    const response = await this.transport.get<TronScanTrc10TransfersResponse>(
      "trc10/transfer",
      {
        ...params,
        filterTokenValue: 0,
      }
    );
    return response.data;
  }

  public async getTrc20Transfers(
    params: TronScanGetTrc20TransfersOptions
  ): Promise<TronScanTrc20TransfersResponse> {
    const response = await this.transport.get<TronScanTrc20TransfersResponse>(
      "filter/trc20/transfers",
      {
        ...params,
        filterTokenValue: 0,
      }
    );
    return response.data;
  }

  public async getBlocks(
    params?: TronScanGetBlocksListOptions
  ): Promise<TronScanBlockListResponse> {
    const response = await this.transport.get<TronScanBlockListResponse>(
      "block",
      params
    );
    return response.data;
  }

  public async checkAccountSecurity(
    params: TronScanCheckAddressSecurityOptions
  ) {
    const response =
      await this.transport.get<TronScanCheckAddressSecurityResponse>(
        "security/account/data",
        params
      );
    return response.data;
  }

  public async checkTokenSecurity(params: TronScanCheckTokenSecurityOptions) {
    const response =
      await this.transport.get<TronScanCheckTokenSecurityResponse>(
        "security/token/data",
        params
      );
    return response.data;
  }

  public async checkTransactionsSecurity(
    params: TronScanCheckTransactionSecurityOptions
  ) {
    const response =
      await this.transport.get<TronScanCheckTransactionSecurityResponse>(
        "security/transaction/data",
        params
      );
    return response.data;
  }

  public async checkMultiSignSecurity(
    params: TronScanCheckMultiSignSecurityOptions
  ) {
    const response =
      await this.transport.get<TronScanCheckMultiSignSecurityResponse>(
        "security/sign/data",
        params
      );
    return response.data;
  }

  public async checkAccountAuthorizationSecurity(
    params: TronScanCheckAccountAuthoritySecurityOptions
  ) {
    const response =
      await this.transport.get<TronScanCheckAccountAuthoritySecurityResponse>(
        "security/auth/data",
        params
      );
    return response.data;
  }
}
