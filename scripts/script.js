/**
 * Created by Lori DK on 10/20/2015.
 */

// assert if 500 mi is entered

$(document).ready(function() {

    // when Cel is entered
    $("#celsius").on("keyup",function() {
        var cel = $('input#celsius').val();
        degreesF(cel);
    });

    // convert to Far
    function degreesF(cel) {
            convertDegC = cel * 1.8 + 32;
        console.log('Cel to Far');
        $("#fahrenheit").val(convertDegC);
    }


    // when Far is entered
    $("#fahrenheit").on("keyup",function() {
        var far = $('input#fahrenheit').val();
        degreesC(far);
    });

    // convert to Cel
    function degreesC(far) {
            convertDegF = (far - 32)  *  5/9;
        console.log('Far to Cel');
        $("#celsius").val(convertDegF);
    }


    // when kilometers is entered
    $("#kilometers").on("keyup",function() {
        var km = $('input#kilometers').val();
        distanceM(km);
    });

    // convert to miles
    function distanceM(km) {
            convertKilo = km * 0.62137;
        $("#miles").val(convertKilo);
    }


    // when miles is entered
    $("#miles").on("keyup",function() {
        var mi = $('input#miles').val();
        distanceK(mi);
    });

    // convert to kilometers
    function distanceK(mi) {
        console.assert((mi != 500), "and I would walk 500 more!");
            convertMile = mi / 0.62137;
        console.log('Mi to Km');
        $("#kilometers").val(convertMile);
    }

});