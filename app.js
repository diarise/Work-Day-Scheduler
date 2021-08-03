$(function () {
    var timeWindow = moment().hour(); // get current time
    $('.time-block').each(function () {
        var idString = $(this).attr('id'); // get Id value
        var timeSlot = idString * 1; // convert the string to number
        //console.log(timeSlot);
        if (timeSlot === timeWindow) { // run all 3 scenarios
            $(this).addClass("present");
        } else if (timeSlot < timeWindow) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }

        // the textarea and the button will have the same value for id's and data-time
        var dataTime = $(this).find(".description").attr('data-time', timeSlot); // add a data-time atribut to each textarea
        var buttonId = $(this).find(".saveBtn").attr('id', timeSlot); //add a unique Id to each button


        $(buttonId).click(function () {  // set a click function to get the textarea content

            var newEntry = $(dataTime).val();

            localStorage.setItem('newEntry', JSON.stringify(newEntry));

        });

        var printedData = localStorage.getItem('newEntry');

        $(this).find(dataTime).text(JSON.parse(printedData));
    });

});