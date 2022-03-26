replaceAt = function (input, index, character) {
  return (
    input.substr(0, index) + character + input.substr(index + character.length)
  );
};

exports.check_submit = function (data) {
  let submit_string =
    "000200950081600000700050006904013860208009710000082000030000001400900200805000600";
  var answer_string =
    "346271958581694327792358146974513862258469713163782594639825471417936285825147639";

  for (var i = 0; i < 81; i++) {
    if (data[`${i}`] != undefined) {
     submit_string = replaceAt(submit_string, i, data[`${i}`]);
    }
    }
    
    if (submit_string == answer_string) {
        return true;
    } else {
        return false;
    }
};
