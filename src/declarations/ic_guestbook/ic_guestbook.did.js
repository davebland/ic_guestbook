export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addEntry' : IDL.Func([IDL.Text], [IDL.Text], []),
    'getEntries' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Int))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
