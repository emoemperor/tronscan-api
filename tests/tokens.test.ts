import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Check functions from Tokens block', () => {
  test('Get token list', async () => {
    const response = await tronScanClient.getTokenList({
      address: ADDRESS!
    });
    expect(response?.data?.length).toBe(1);
  });
});
