function unixTimeLoad() {
  var stopClock = false;
  $(".clockDiv").mouseover(function () {
    stopClock = true;
    console.log('mouse in');
    $(".clockDiv").css('backgroundColor', '#dadafc');
  });
  $(".clockDiv").mouseout(function () {
    stopClock = false;

    console.log('mouse out');
    $(".clockDiv").css('backgroundColor', '#F5F5F5');
  });
  setInterval(function () {
    if (!stopClock) {
      var getDate = new Date();
      var unixTime = Math.floor(getDate.getTime() / 1000.0);
      $("#unixTimeClock").html(unixTime);
      var utcTime = getDate.toUTCString().slice(0, -4);;
      console.log(utcTime);
      $("#utcTimeClock").html(utcTime);


    }
  }, 1000);


  $('#datetimepicker10').datetimepicker({
    viewMode: 'years',
    format: 'MM/YYYY'
  });
}
