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
    let timeObject = {};
    if (localStorage.getItem('timeObject')) {
        timeObject = JSON.parse(localStorage.getItem('timeObject'));
    }else{
      timeObject = {
        '9': { time: "9", value: ""},
        '10':{ time: "10", value: ""},
        '11':{ time: "11", value: ""},
        '12':{ time: "12", value: ""},
        '13':{ time: "13", value: ""},
        '14':{ time: "14", value: ""},
        '15':{ time: "15", value: ""},
        '16':{ time: "16", value: ""},
        '17':{ time: "17", value: ""}
      };
    }

    // click of save button saves items to local storage
    $(".time-block").each(function () {
        $(this).find(".description").val(timeObject[$(this).attr("data-time")].value);
    });

    //save value to local storage on click
    $(".saveBtn").on('click', function (event) {
        //set timeObject time attribute
        var timeValue = $(this).closest(".time-block").attr("data-time");
        //set timeObject value attribute
        var textValue = $(this).closest(".time-block").find(".description").val();
        timeObject[timeValue].value = textValue;

        //save user input in each object to local storage
        localStorage.setItem('timeObject', JSON.stringify(timeObject));

        //console.log(textValue)

    });
});




// color changing is not quite working
// wont save to local storage yet