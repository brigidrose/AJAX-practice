"use strict";


// PART 1: SHOW A FORTUNE
function replaceFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
    console.log("I replaced the fortune")
}


function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', replaceFortune); 
    console.log("I finished sending ajax stuffff");

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function showMoreWeather(results){
    var forecast = results['forecast'];
    $('#weather-info').html(forecast);
    console.log("show me the damn forecast, please.")

}
function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    // var zipCode = $("zipcode-field").val()

    // var weatherInfo = {"zip code": $("#zipcode-field").val(),
    //                    "forecast": 
    // }
    $.get('/weather.json', 
        url,
        showMoreWeather);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function showOrderStatus(results) {
    var status = results;
    $('#order-status').html(status);
}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    var formInputs = {
        "Quantity": $("#order-form").val(),
        "Melon Type": $("#form-group").val(),
    };
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    $.post('/order-melons.json',
        formInputs,
        showOrderStatus);
}

$("#order-form").on('submit', orderMelons);


