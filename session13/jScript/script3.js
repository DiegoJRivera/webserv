/*****************************************************************************************************************************************
Web Services - openweathermap.org API KEY my account - 636bdbf5b3b53022504e144bf30462f8
30/05/2017
AJAX QUERY EXAMPLE
*****************************************************************************************************************************************/

$(document).ready(function(e){


    $("#weatherButton").on('click', function(){

        loading(true); //calling function below

        var city = $("#query").val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",AU&units=metric&APPID=636bdbf5b3b53022504e144bf30462f8";

        console.log(url);

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                $("#city").html(data.name);
                $("#temperature").html(data.main.temp + "&#176;C");
                $("#description").html(data.weather[0].description);
                $("#humidity").html(data.main.humidity + "%");
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