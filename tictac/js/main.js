$(function(){

function check(){
    if ($('#one').hasClass("red") && $('#two').hasClass("red") && $('#three').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#four').hasClass("red") && $('#five').hasClass("red") && $('#six').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#seven').hasClass("red") && $('#eight').hasClass("red") && $('#nine').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#one').hasClass("red") && $('#four').hasClass("red") && $('#seven').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#two').hasClass("red") && $('#five').hasClass("red") && $('#eight').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#three').hasClass("red") && $('#six').hasClass("red") && $('#nine').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#one').hasClass("red") && $('#five').hasClass("red") && $('#nine').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#three').hasClass("red") && $('#five').hasClass("red") && $('#seven').hasClass("red")) {
      alert("Kurt Wins");
    } else if ($('#one').hasClass("blue") && $('#two').hasClass("blue") && $('#three').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#four').hasClass("blue") && $('#five').hasClass("blue") && $('#six').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#seven').hasClass("blue") && $('#eight').hasClass("blue") && $('#nine').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#one').hasClass("blue") && $('#four').hasClass("blue") && $('#seven').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#two').hasClass("blue") && $('#five').hasClass("blue") && $('#eight').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#three').hasClass("blue") && $('#six').hasClass("blue") && $('#nine').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#one').hasClass("blue") && $('#five').hasClass("blue") && $('#nine').hasClass("blue")) {
      alert("Kermit Wins");
    } else if ($('#three').hasClass("blue") && $('#five').hasClass("blue") && $('#seven').hasClass("blue")) {
      alert("Kermit Wins");
    }
  }

  var moves = 0;
  $('.board div').on('click', function() {
    moves++;
    console.log(moves);
    if (moves % 2 === 1 ) {
    $(this).attr('class', 'red');
    check()
  } else
    $(this).attr('class', 'blue');
    check()
  });

  $('button').on('click', function() {
    moves = 0
    $('.board div').removeClass()
  })

});
