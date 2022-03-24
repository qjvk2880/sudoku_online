// TODO: solve button
// TODO: show hints
// if 8 squares in a 3x3 are known, highlight 9th square
// if 8 squares in a row are known, highlight 9th square
// if 8 squares in a column are known, highlight 9th square

let import_button = document.getElementById("import");
let submit_button = document.getElementById("submit");
// let sudoku_squares = createArray(9, 9);

// for (let row = 0; row <= 8; row++) {
//   for (let col = 0; col <= 8; col++) {
//     sudoku_squares[row][col] = document
//       .getElementsByClassName("sudoku")[0]
//       .getElementsByTagName("tbody")[0]
//       .getElementsByTagName("tr")
//       [row].getElementsByTagName("td")
//       [col].getElementsByTagName("input")[0];
//   }
// }

// import_button.addEventListener("click", function () {
  let import_string = document.getElementsByName("import_string")[0].value;
  var sudoku_html = "<tbody>";
  for (var i = 0; i <= 8; i++) {
    if (i == 2 || i == 5) {
      sudoku_html += `<tr class="${i}">`;
    } else {
      sudoku_html += `<tr class="${i}">`;
    }
    for (var j = 0; j <= 8; j++) {
      if (import_string[i * 9 + j] == "0") {
        // 0인 곳 (사용자 입력)
        if (j == 2 || j == 5) {
          sudoku_html += `<td class="${j}"><input type="text" maxlength="1"/></td>`;
        } else {
          sudoku_html += `<td class="${j}"><input type="text" maxlength="1"/></td>`;
        }
      } else {
        // 0이 아닌 곳(문제지)
        if (j == 2 || j == 5) {
          sudoku_html += `<td class="${j}">${
            import_string[i * 9 + j]
          }</td>`;
        } else {
          sudoku_html += `<td class="${j}">${import_string[i * 9 + j]}</td>`;
        }
      }
    }
    sudoku_html += "</tr>";
  }
  sudoku_html += "</tbody>";
  document.getElementsByClassName("sudoku")[0].innerHTML = sudoku_html;
  
// });

submit_button.addEventListener("click", function (e) {
  var sudoku_table = document.getElementById("sudoku");
  var sudoku_input = Array.from(sudoku_table.getElementsByTagName('input'));
  var input_length = sudoku_input.length;
  for (var i = 0; i < input_length; i++){
    var column = Number(sudoku_input[i].parentNode.className);
    var row = Number(sudoku_input[i].parentNode.parentNode.className);
  }
});
