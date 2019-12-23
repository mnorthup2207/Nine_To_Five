$(document).ready(function () {  
   
   // set  day, date to header appended to title
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    // a table with rows up that append under container



    // function to construct the body
    function constructBody() {
        for (var i = 9; i < 18; i++) {
            var row = $("<div>").attr({
                "class": "row time-block",
                "data-time": `${[i]}`
            });
            var rowItem1 = $(`<p>${i}:00 A.M</p>`).attr({
                "class": "hour col-md",
                "value": [i]
            });
            var rowItem2 = $("<textarea></textarea>").attr("class", "description col-md-10");
            rowItem2.attr("")
            var rowItem3 = $("<button><i class='fas fa-save'></i></button>").attr("class", "saveBtn col-md");
            row.append(rowItem1, rowItem2, rowItem3);
            $(".container").append(row);
           
            // convert military time to am/pm
            if (i > 12) {
                rowItem1.text(`${i - 12}:00 P.M. `);
            }
        };
    };
    constructBody()

    // changes color class to present past and future
    var m = moment();
    $.each($(".time-block"), function (index, value) {
        var dateHour = $(value).attr("data-time");
        if (Number(dateHour) === m.hour()) {
            $(this).find(".description").addClass('present');
        } else if (Number(dateHour) < m.hour()) {
            $(this).find(".description").addClass('past');
        } else {
            $(this).find(".description").addClass('future');
        }
      
    });    




    var time = {};
    // click of save button saves items to local storage
    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save in localStorage
        localStorage.setItem(time, value);
        localStorage.getItem(value);
        if (time == $("tr").attr("value")) {
            $("textarea").html(value)

        }
        console.log(value)
        console.log(time)
    });



    // with click of save button, save enter input into local storage. 
})

// color changing is not quite working
// wont save to local storage yet