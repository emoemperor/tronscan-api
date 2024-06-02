import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Account', () => {
  test(
    'Get account list',
    async () => {
      const response = await tronScanClient.getAccountList();
      expect(response.data.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT
  );

  test(
    'Get account detail information',
    async () => {
      const response = await tronScanClient.getAccountDetailInformation({
        address: ADDRESS!
      });
      expect(response.address).toBe(ADDRESS);
    },
    TEST_TIMEOUT
  );
});
