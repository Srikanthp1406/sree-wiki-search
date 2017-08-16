var select = $('#introOfEinstein'); //search field
var abc = $('#education');

$.getJSON('data.JSON',function (data) {
    select.html('');//clears select
});
