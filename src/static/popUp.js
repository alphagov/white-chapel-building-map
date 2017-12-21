$('.click-me').click(function(){
  $('.room-details').show();
  $('.room-details-header').text("Details for room " + event.target.id);
})
