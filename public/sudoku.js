let import_button = document.getElementById("import");
let submit_button = document.getElementById("submit");

var answer_string =
  "346271958581694327792358146974513862258469713163782594639825471417936285825147639";



import_button.addEventListener("click", function (e) {
  let import_string =
    "000200950081600000700050006904013860208009710000082000030000001400900200805000600";
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
        sudoku_html += `<td class="${j}"><input type="number" min="1" max="9" name="${i*9+j}"/></td>`;
      } else {
        // 0이 아닌 곳(문제지)
        sudoku_html += `<td class="${j}">${import_string[i * 9 + j]}</td>`;
      }
    }
    sudoku_html += "</tr>";
  }

  sudoku_html += "</tbody>";
  document.getElementsByClassName("sudoku")[0].innerHTML = sudoku_html;
});
