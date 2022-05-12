export function getDogs() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Luna',
          breed: 'Caucasian Shepherd',
        },
        {
          id: 2,
          name: 'Ralph',
          breed: 'Husky',
        },
      ]);
    }, 1000);
  });
}

export function getCats() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Vas',
          breed: 'moggie',
        },
        {
          id: 2,
          name: 'Clover',
          breed: 'Blue Russian',
        },
      ]);
    }, 1000);
  });
}
