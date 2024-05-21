import { AxiosRequestConfig } from 'axios';

import { AxiosTransport, Transport } from './Transport';
import {
  TronScanGetTokenListOptions,
  TronScanGetTransactionsListOptions,
  TronScanGetTrc20Trc721TransferListOptions,
  TronScanGetTrxTrc10TransferListOptions,
  TronScanTokenListResponse,
  TronScanTransactionsListResponse,
  TronScanTrc20Trc721TransfersResponse,
  TronScanTrxTrc10TransfersResponse
} from '../types/tronscan';

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
    const { url, apiKey = '', axiosOptions = {} } = options;
    if (!url) {
      throw new Error('URL not specified!');
    }

    this.transport = new AxiosTransport(url, apiKey, axiosOptions);
  }

  public async getTransactionsList(params: TronScanGetTransactionsListOptions): Promise<TronScanTransactionsListResponse> {
    const response = await this.transport.get<TronScanTransactionsListResponse>('transaction', {
      params
    });
    return response.data;
  }

  public async getTrxTrc10TransferList(
    params: TronScanGetTrxTrc10TransferListOptions
  ): Promise<TronScanTrxTrc10TransfersResponse> {
    const response = await this.transport.get<TronScanTrxTrc10TransfersResponse>('transfer', {
      ...params,
      filterTokenValue: 1
    });
    return response.data;
  }

  public async getTrc20Trc721TransferList(
    params: TronScanGetTrc20Trc721TransferListOptions
  ): Promise<TronScanTrc20Trc721TransfersResponse> {
    const response = await this.transport.get<TronScanTrc20Trc721TransfersResponse>('token_trc20/transfers', {
      ...params,
      filterTokenValue: 1
    });
    return response.data;
  }

  public async getTokenList(params: TronScanGetTokenListOptions): Promise<TronScanTokenListResponse> {
    const { address, hidden = 0, show = 0, sortType = 0, sortBy = 0 } = params;
    const response = await this.transport.get<TronScanTokenListResponse>('account/tokens', {
      address,
      hidden,
      show,
      sortBy,
      sortType
    });
    return response.data;
  }
}
