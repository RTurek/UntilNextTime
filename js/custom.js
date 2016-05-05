setInterval(function(){
  getTimeString(travelDate);
}, 1000);

function getTimeString(travel){
  var travel = moment(travel);

  var daysUntil = travel.diff(moment(), 'days');
  travel = travel.subtract(daysUntil, 'days');

  var hoursUntil = travel.diff(moment(), 'hours');
  travel = travel.subtract(hoursUntil, 'hours');

  var minutesUntil = travel.diff(moment(), 'minutes');
  travel = travel.subtract(minutesUntil, 'minutes');

  var secondsUntil = travel.diff(moment(), 'seconds');

  pushTime(daysUntil, hoursUntil, minutesUntil, secondsUntil);
}

function pushTime(daysUntil, hoursUntil, minutesUntil, secondsUntil){
  $('#days .number').text(daysUntil);
  $('#hours .number').text(hoursUntil);
  $('#minutes .number').text(minutesUntil);
  $('#seconds .number').text(secondsUntil);
}



$(document).ready(function(){
  var direction = $('body').attr('id');
  if(direction === 'toMilwaukee'){
    $.backstretch([
      "css/background-images/milwaukee-1.jpg",
      "css/background-images/milwaukee-2.jpg",
      "css/background-images/milwaukee-3.jpg",
      "css/background-images/milwaukee-4.jpg",
    ], {
      duration: 30000,
      fade: 'slow'
    });
  } else {
    $.backstretch([
      "css/background-images/dallas-1.jpg",
      "css/background-images/dallas-2.jpg",
      "css/background-images/dallas-3.jpg",
      "css/background-images/dallas-4.jpg",
    ], {
      duration: 30000,
      fade: 'slow'
    });
  }


});