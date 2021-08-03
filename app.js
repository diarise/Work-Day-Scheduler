$(function () { // call the function after the DOM is fully loaded
    var timeWindow = moment().hour(); // get current time
    $('.time-block').each(function () { // for each time slot 
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

            var idString = $(this).attr('id'); // get Id value
            var timeSlot = idString * 1; // convert the string to number

            var newEntry = $(dataTime).val(); //get the value of new data entry

            localStorage.setItem(timeSlot, JSON.stringify(newEntry)); // save each time slote data entry in a separate array

        });

        var printedData = localStorage.getItem(timeSlot); // retrived each saved local store data

        $(this).find(dataTime).text(JSON.parse(printedData)); // printed as placeholder
    });


});