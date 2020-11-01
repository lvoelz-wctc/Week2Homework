$(document).ready(function () {
    //event handlers
    $("#button_bac").click(calculateBac);

    function calculateBac() {
    //gather input from webpage
        //get the value from the input box with id="x", convert to number data type, mult by ounces
        var beer = parseFloat($("#beer").val()) * .54;

        var wine = parseFloat($("#wine").val()) * .6;

        var shots = parseFloat($("#shots").val()) * .6;

        var weight = parseFloat($("#weight").val());

        var hours = parseFloat($("#hours").val());

        //total ounces
        var total = beer + wine + shots;

        //alcohol absorption rate
        var aar = total * 7.5;

        //bac before hours calc
        var bacPre = aar / weight;

        //bac after hours calc, round to three decimal places
        var bacFinal = bacPre - (hours*.015);
        bacFinal =  bacFinal.toFixed(3);

        //update the text in the span with id="bacFinal"
        $("#bacFinal").text(bacFinal);

        // Unhide the results div
        $(".output").show();
    }
    }
)