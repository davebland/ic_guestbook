export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addEntry' : IDL.Func([IDL.Text], [IDL.Text], []),
    'addVisit' : IDL.Func([], [], []),
    'getEntries' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Int))],
        ['query'],
      ),
    'getVisitorCount' : IDL.Func([], [IDL.Nat], ['query']),
    'resetGuestBook' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
