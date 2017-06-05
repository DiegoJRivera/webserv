/*****************************************************************************************************************************************
Web Services - openweathermap.org API KEY my account - 636bdbf5b3b53022504e144bf30462f8
30/05/2017
AJAX QUERY EXAMPLE
*****************************************************************************************************************************************/

$(document).ready(function(e){


    $("#weatherButton").on('click', function(){

        loading(true); //calling function below

        var city = $("#query").val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",AU&mode=xml&units=metric&APPID=636bdbf5b3b53022504e144bf30462f8";

        console.log(url);

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'text',
            success: function(data) {
                console.log("1: " + data);

                var xmlDoc = $.parseXML(data);
                var xml = $(xmlDoc);

                console.log("2: " + data);
                console.log(xml.find("country").text());
                $("#city").html(xml.find("city").attr("name") + " - " + xml.find("country").text());
                $("#temperature").html(xml.find("temperature").attr("value") + "&#176;C");
                $("#description").html(xml.find("clouds").attr("name") + " " + xml.find("icon").text());
                $("#humidity").html(xml.find("humidity").attr("value") + "%");
                $("#results").css('display', 'block');
                loading(false); //call function below

            },

            error:function(){
                alert("Error");
            } 
        });

    function loading(enabled)
    {
        if(enabled)
        {
            $("#loading").css('display', 'block');
            $("#results").css('display', 'none');
        }
        else
        {
            $("#loading").css('display', 'none');
        }
    }

    });
});