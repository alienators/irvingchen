$('#button').on('click', function() {
  $('.name').hide();
});

$('#button').hover(function () {
  $('.name').css("border", "10px solid black");
  $('.name').css("opacity", "0.5");
}, function () {
    $('.name').css("opacity", "1");
    $('.name').css("border", "20px solid black");
  });
