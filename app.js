var timeWindow = moment().hour();
$('.time-block').each(function () {
    var idString = $(this).attr('id');
    var timeSlot = idString * 1;
    //console.log(timeSlot);
    if (timeSlot < timeWindow) {
        $(this).addClass("past");
    } else if (timeSlot === timeWindow) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

