/**
 * Created by Lori DK on 10/20/2015.
 */

// add more
// dropdown?
// bootstrap
// message

// assert if 500 mi is entered

$(document).ready(function() {
    $("#dis-tab").show();
    $("#temp-tab").hide();
    $("#weight-tab").hide();
    $("#soon-tab").hide();


    $( "#dis" ).on( "click", function( event ) {
        // Prevent the usual navigation behavior
        event.preventDefault();
        $("#dis-tab").show();
        $("#temp-tab").hide();
        $("#weight-tab").hide();
        $("#soon-tab").hide();
    });

    $( "#temp" ).on( "click", function( event ) {
        // Prevent the usual navigation behavior
        event.preventDefault();
        $("#temp-tab").show();
        $("#dis-tab").hide();
        $("#weight-tab").hide();
        $("#soon-tab").hide();
    });

    $( "#weight" ).on( "click", function( event ) {
        // Prevent the usual navigation behavior
        event.preventDefault();
        $("#weight-tab").show();
        $("#dis-tab").hide();
        $("#temp-tab").hide();
        $("#soon-tab").hide();
    });

    $( "#soon" ).on( "click", function( event ) {
        // Prevent the usual navigation behavior
        event.preventDefault();
        $("#soon-tab").show();
        $("#dis-tab").hide();
        $("#temp-tab").hide();
        $("#weight-tab").hide();
    });

    


    // when Cel is entered
    $("#celsius").on("keyup",function() {
        var cel = $('input#celsius').val(); // input
        var convertDegC = cel * 1.8 + 32; // formula
        console.log('Cel to Far'); // log
        $("#fahrenheit").val(convertDegC); //output
    });




    // when Far is entered
    $("#fahrenheit").on("keyup",function() {
        var far = $('input#fahrenheit').val();
        var convertDegF = (far - 32)  *  5/9;
        console.log('Far to Cel');
        $("#celsius").val(convertDegF);
    });




    // when kilometers is entered
    $("#kilometers").on("keyup",function() {
        var km = $('input#kilometers').val();
        var convertKilo = km * 0.62137;
        console.log('Km to Mi');
        $("#miles").val(convertKilo);
    });


    // when miles is entered
    $("#miles").on("keyup",function() {
        var mi = $('input#miles').val();
        console.assert((mi != 500), "and I would walk 500 more!");
        var convertMile = mi / 0.62137;
        console.log('Mi to Km');
        $("#kilometers").val(convertMile);
    });

    // when centemeters is entered
    $("#centemeters").on("keyup",function() {
        var cm  = $('input#centemeters').val();
        var convertCm = cm * 0.39370;
        console.log('Cm to In');
        $("#inches").val(convertCm);
    });


    // when inches is entered
    $("#inches").on("keyup",function() {
        var inch = $('input#inches').val();
        var convertIn = inch / 0.39370;
        console.log('In to Cm');
        $("#centemeters").val(convertIn);
    });


    // when meters is entered
    $("#meters").on("keyup",function() {
        var m  = $('input#meters').val();
        var convertM = m * 3.2808;
        console.log('M to Ft');
        $("#feet").val(convertCm);
    });


    // when feet is entered
    $("#feet").on("keyup",function() {
        var foot = $('input#feet').val();
        var convertFt = foot / 3.2808;
        console.log('Ft to M');
        $("#meters").val(convertIn);
    });



});