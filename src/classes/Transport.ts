import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Transport {
  apiKey: string;

  get<T>(uri: string, options: any): Promise<AxiosResponse<T>>;
}

export class AxiosTransport implements Transport {
  constructor(
    protected readonly url: string,
    public readonly apiKey: string,
    protected readonly options: AxiosRequestConfig = {}
  ) {}

  async get<T>(uri: string, options: any): Promise<AxiosResponse<T>> {
    const { apiKey } = this;
    const url = `${this.url}/${uri}`;

    const response = await axios.get<T>(url, {
      ...this.options,
      headers: {
        'TRON-PRO-API-KEY': apiKey
      },
      params: {
        ...options
      }
    });

    return response;
  }
}
