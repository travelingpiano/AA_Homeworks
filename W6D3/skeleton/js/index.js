console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  method: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  dataType: "json",
  data: this.url,
  success: function(data){
    console.log(data["weather"]);
    Object.keys(data["weather"][0]).forEach((el)=>{
      if(el != "id" && el != "icon"){
        console.log(el + " " + data["weather"][0][el]);
      }
    });
  }
});
// Add another console log here, outside your AJAX request
console.log("hi there!");
