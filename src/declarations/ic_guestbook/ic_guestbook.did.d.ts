import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addEntry' : (arg_0: string) => Promise<string>,
  'getEntries' : () => Promise<Array<[string, bigint]>>,
  'resetGuestBook' : () => Promise<undefined>,
}
