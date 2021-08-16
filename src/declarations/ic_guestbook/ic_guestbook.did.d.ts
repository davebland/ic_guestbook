import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addEntry' : (arg_0: string) => Promise<string>,
  'addVisit' : () => Promise<undefined>,
  'getEntries' : () => Promise<Array<[string, bigint]>>,
  'getVisitorCount' : () => Promise<bigint>,
  'resetGuestBook' : () => Promise<undefined>,
}
