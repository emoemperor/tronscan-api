import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { API_KEY, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Block', () => {
  test(
    'Get the list of blocks or details of one block',
    async () => {
      const response = await tronScanClient.getBlocks({
        limit: 1
      });
      expect(response?.data?.length).toBe(1);
    },
    TEST_TIMEOUT
  );
});
