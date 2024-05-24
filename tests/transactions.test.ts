import { config } from 'dotenv';
import { TronScanClient } from '../src';

config();

const TEST_TIMEOUT = 60000;
const { ADDRESS, API_KEY, URL } = process.env;

const tronScanClient = new TronScanClient({
  url: URL!,
  apiKey: API_KEY!
});

describe('Transactions and Transfers', () => {
  test(
    'Get a list of transactions',
    async () => {
      const response = await tronScanClient.getTransactionsList({
        address: ADDRESS!
      });

      expect(response?.data?.length).toBe(1);
    },
    TEST_TIMEOUT
  );

  test('Get trx&trc10 transfer list', async () => {
    const response = await tronScanClient.getTrxTrc10TransferList({
      address: ADDRESS!,
      start_timestamp: 1715855574000,
      end_timestamp: 1715855574000
    });

    expect(response?.data?.length).toBe(1);
  });

  test('Get trc20&721 transfers list', async () => {
    const response = await tronScanClient.getTrc20Trc721TransferList({
      relatedAddress: ADDRESS!
    });

    expect(response?.token_transfers?.length).toBe(0);
  });
});
