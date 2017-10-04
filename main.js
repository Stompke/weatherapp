//{"coord":{"lon":-111.88,"lat":33.27},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01d.png?1499366022009"}],"base":"stations","main":{"temp":33,"pressure":1009,"humidity":21,"temp_min":32,"temp_max":34},"visibility":16093,"wind":{"speed":7.7,"deg":230},"clouds":{"all":1},"dt":1505505480,"sys":{"type":1,"id":297,"message":0.0044,"country":"US","sunrise":1505481110,"sunset":1505525529},"id":5289282,"name":"Chandler","cod":200}



// jQUERY

$(document).ready(function() {

  $ ("#getWeather").on("click", function(event) {


    
    if (navigator.geolocation) {
      
      
         navigator.geolocation.getCurrentPosition(function(position) {
         var lat = position.coords.latitude;
         var lon = position.coords.longitude;
          
           
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon+"", function(data) {
           
           
            var city = data.name;
            var tempC = Math.round(data.main.temp) + "°C";
            var tempF = Math.round(((Math.round(data.main.temp) * (9/5))+32)) + "°F";
              
            var weather = data.weather[0].main;
            var imageData = data.weather[0].icon;
            var image = "<img src="+imageData+">";
            $("#location").html(city);
            $("#temperature").html(tempC);
            $("#weather").html(weather);
             
            $("#weatherIcon").html(image);
           // https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01d.png?1499366022009

                  
       $("#changeTemp").on("click",function(event) {

         $("#temperature").html(tempF);

         
    });   

              
              
              
            
              
           }); // getJSON 

         }); //navigator function(position)

      
     } //end of IF statement
          else {
          $("#displayBox").html("Unable to access geolocation data.");
            
       
            
        } // end of else Statement

  }); //.on("click, function())
          

 }); //document ready
    
    