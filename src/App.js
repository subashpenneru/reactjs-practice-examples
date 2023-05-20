import React from 'react';

import queryString from 'query-string';

const DEFAULT_OPTIONS = {
  refine: [],
  sort: 'Featured',
};
const PARSE_OPTIONS = {
  parseBooleans: true,
  parseNumbers: true,
};

const App = () => {
  const searchParams = {
    refine: {
      c_colors: 'Red',
      c_fragrance: ['Fresh & Clean', 'Citrus'],
      c_bopis: 123,
    },
    sort: 'Featured',
  };

  let searchParamsCopy = { ...searchParams };

  searchParamsCopy.refine = Object.keys(searchParamsCopy.refine).map((key) =>
    queryString.stringify(
      { [key]: searchParamsCopy.refine[key] },
      { arrayFormat: 'separator', arrayFormatSeparator: '|', encode: false }
    )
  );

  searchParamsCopy = queryString.stringify(searchParamsCopy);

  const searchStr = searchParamsCopy;

  const params = queryString.parse(searchStr, PARSE_OPTIONS);

  const paramsCopy = JSON.parse(JSON.stringify(params));

  paramsCopy.refine = Array.isArray(paramsCopy.refine)
    ? paramsCopy.refine
    : [paramsCopy.refine].filter(Boolean);

  paramsCopy.refine = paramsCopy.refine.reduce((acc, curr) => {
    const split = curr.split('|');
    const req = split[0].split('=');
    let parseObj = {};

    if (split.length > 1) {
      split.shift();

      parseObj = {
        [req[0]]: [req[1], ...split],
      };
    } else {
      const val = req[1];

      parseObj = {
        [req[0]]: isNaN(val)
          ? val === 'true'
            ? true
            : val === 'false'
            ? false
            : val
          : Number(val),
      };
    }
    // const parse = queryString.parse(curr, {
    //   ...PARSE_OPTIONS,
    //   parseNumbers: false,
    //   arrayFormat: 'separator',
    //   arrayFormatSeparator: '|',
    // });

    return {
      ...acc,
      ...parseObj,
    };
  }, {});

  console.log(paramsCopy);

  return <div>App</div>;
};

export default App;
