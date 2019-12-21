$(document).ready(function () {


    // set  day, date to header appended to title
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
    // a table with rows up that append under container
    var tBody = $("<tbody>");
    $(".container").append(tBody)


    // function to construct the body
    function constructBody() {
        for (var i = 9; i < 18; i++) {
            var row = $("<tr>").attr("class", "row time-block");
            var rowItem1 = $(`<td>${i}:00 A.M</td>`).attr("class", "hour col-md");
            var rowItem2 = $("<textarea></textarea>").attr("class", "description col-md-10");
            rowItem2.attr("")
            var rowItem3 = $("<button>" + 'Save' + "</button>").attr("class", "saveBtn col-md");
            row.append(rowItem1, rowItem2, rowItem3);
            tBody.append(row);

            // var blockHour = parseInt($(".hour").val());
            if (i > 12) {
                rowItem1.text(`${i-12}:00 P.M. `);
            }
        };
        // convert military time to am/pm
    };
    constructBody()
    // click of save button saves items to local storage
    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save in localStorage
        localStorage.setItem(time, value);
        console.log("whatever")
    });                

    console.log(moment().format('MMMM Do YYYY, h:00 a'));
    var currentHour = moment().format('h:00');
    var blockHour = parseInt($(".hour").text())
    // if () {

    // }
    console.log(moment().subtract(1, 'hours').format('LT'));
    console.log(blockHour)

    // with click of save button, save enter input into local storage. 

})