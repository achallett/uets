function unixTimeLoad() {

    //On page load set the clocks correct
    var getDate = new Date();
    var unixTime = Math.floor(getDate.getTime() / 1000.0);
    $("#unixTimeClock").html(unixTime);
    var utcTime = getDate.toUTCString().slice(0, -4);
    $("#utcTimeClock").html(utcTime);

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
      var utcTime = getDate.toUTCString().slice(0, -4);
      $("#utcTimeClock").html(utcTime);


    }
  }, 1000);

  $('.convertToDateString').click(function(){
    console.log()
  });

}


function unixToUTC(){
    console.log('click to convert');

    var unixtime = $("#unixInput").val()*1000;
    console.log(unixtime);
    var utcString = new Date(unixtime).toUTCString().slice(0, -4);
    console.log(utcString);
    console.log('Converting to date string');
    $("#utcResult").html(utcString);

}

function utcToUNIX(){
    var utcInput = $("#utcInput").val();
    var unixNumeric = Math.round(new Date(utcInput).getTime()/1000);
    $("#unixResult").html(unixNumeric);
}