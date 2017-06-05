/*****************************************************************************************************************************************
Web Services - openweathermap.org API KEY my account - 636bdbf5b3b53022504e144bf30462f8
30/05/2017
*****************************************************************************************************************************************/

$(document).ready(function(e){

    $("#weatherButton").on('click', function(){

        loading(true); //calling function below

        var city = $("#query").val();
        var request = new XMLHttpRequest();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",AU&units=metric&APPID=636bdbf5b3b53022504e144bf30462f8";

        console.log(url);

        request.onreadystatechange = function(){

            if(request.readyState == 4 && request.status == 200)
            {
                //everything is ok
                console.log("About to parse");
                var data = JSON.parse(request.responseText);

                //extract data
                if(data.cod == 200)
                {
                    console.log(data);
                    $("#city").html(data.name);
                    $("#temperature").html(data.main.temp + "&#176;C");
                    $("#description").html(data.weather[0].description);
                    $("#humidity").html(data.main.humidity + "%");

                    $("#results").css('display', 'block');
                    loading(false); //call function below
                }
                else
                {
                    //write some error with the data - write some code
                }
            }
            else
            {
                //there is an error with the connection
            }
        };

        request.open("GET", url, true);
        request.send();
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