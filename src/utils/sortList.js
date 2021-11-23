const sortList = {
  incPrice: arr => {
    let newArr = arr.slice();
    newArr.sort(function (a, b) {
      var keyA = a.price,
        keyB = b.price;
      // Compare the 2 prices
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    return newArr;
  },
  decPrice: arr => {
    let newArr = arr.slice();
    newArr.sort(function (a, b) {
      var keyA = a.price,
        keyB = b.price;
      // Compare the 2 prices
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    return newArr;
  },
  byTime: arr => {
    let newArr = arr.slice();
    newArr.sort(function (a, b) {
      var keyA = Date.parse(a.date),
        keyB = Date.parse(b.date);
      // Compare the 2 dates
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    return newArr;
  },
};
export default sortList;
