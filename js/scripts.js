$(document).ready(function() {

  $("form").submit(function(event) {
    var sentence = $("input#sentence1").val();
    var copy = sentence.split(" ");
    var threeLetters = [];

  copy.forEach(function(element){
    if (element.length >=3){
      threeLetters.push(element);
    };
    });
    threeLetters.reverse();
    threeLetters = threeLetters.join(" ");

    $("span#result").text(threeLetters);
    event.preventDefault();
  });

});
