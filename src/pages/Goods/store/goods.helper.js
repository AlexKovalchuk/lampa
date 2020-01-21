const arr1 = [
  {
    id: 1,
    name: 'Alex',
    surname: 'Kovalchuk',
    age: 28,
  },
  {
    id: 2,
    name: 'Will',
    surname: 'Smith',
    age: 48,
  },
  {
    id: 3,
    name: 'Angelina',
    surname: 'Jolly',
    age: 42,
  },
  {
    id: 4,
    name: 'Arnold',
    surname: 'Shvartsneger',
    age: 65,
  },
  {
    id: 5,
    name: 'Zinadine',
    surname: 'Zidane',
    age: 48,
  },
];

const arr2 = [
  {
    id: 1,
    name: 'Alex',
    surname: 'Smith',
    age: 28,
  },
  {
    id: 2,
    name: 'Will',
    surname: 'Dill',
    age: 8,
  },
  {
    id: 3,
    name: 'Angelina',
    surname: 'Swith',
    age: 42,
  },
  {
    id: 6,
    name: 'Arnold',
    surname: 'Shevchenko',
    age: 65,
  },
  {
    id: 7,
    name: 'Oscar',
    surname: 'De La Hoya',
    age: 48,
  },
];

const mergeArrays = (arr1, arr2) => {
  const result = [];
  arr1.forEach(currObj1 => {
    let findedObj = arr2.find(CurObj2 => CurObj2.id === currObj1.id);
    if(findedObj) result.push({...currObj1, ...findedObj})
    else result.push(currObj1)
    console.log('findedObj', findedObj)
  });
  arr2.forEach(currObj2 => {
    if(!arr1.find(currObj1 => currObj1.id === currObj2.id)) result.push(currObj2);
  })
  console.log('resulut', result);
  return result;
};

mergeArrays(arr1, arr2);