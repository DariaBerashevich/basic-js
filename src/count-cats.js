const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
    let countCats=0;
	var res = [].concat(...matrix);
  res.forEach((element) => {
        if (element === '^^'){
            countCats++;
        }
  })
    return Number(countCats);
}
