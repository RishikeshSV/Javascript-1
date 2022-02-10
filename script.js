const solution = document.querySelector(".solution-table");

const matrix1 = document.querySelector("#matrix-1");
const matrix2 = document.querySelector("#matrix-2");

// m*n and n*p tables
const m = 3;
const n = 3;
const p = 2;

var A = [];
var B = [];
var C = [
  [0, 0],
  [0, 0],
  [0, 0],
];

showResult = () => {
  solution.classList.remove("hide");

  //MATRIX A
  for (i = 0; i < m; ++i) {
    var temp = [];
    for (j = 0; j < n; ++j) {
      temp.push(matrix1.rows[i].cells[j].children[0].value);
    }
    A.push(temp);
  }

  //MATRIX B
  for (i = 0; i < n; ++i) {
    var temp = [];
    for (j = 0; j < p; ++j) {
      temp.push(matrix2.rows[i].cells[j].children[0].value);
    }
    B.push(temp);
  }

  //SOLUTION

  var result = multiplyMatrices(A, B);
  console.table(result);
};

function multiplyMatrices(m1, m2) {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
    result[i] = [];
    for (var j = 0; j < m2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}
