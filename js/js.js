$(document).ready(function() {


$.ajax({
url:"http://date.jsontest.com",
}).done(function(sendDate){
    console.log(sendDate);}).fail(function(xhr,status, errorThrown){
    console.log(xhr,status, errorThrown);
                          
                          
                          
                   });          
    
    
$.ajax({
url:"https://swapi.co/api/people/4/",
}).done(function(sendDate){
    console.log(sendDate);}).fail(function(xhr,status, errorThrown){
    console.log(xhr,status, errorThrown);
                          
                          
                          
                   });       

});


$.ajax({
url:"http://localhost:8282/books",
}).done(function(sendDate){
    console.log(sendDate);}).fail(function(xhr,status, errorThrown){
    console.log(xhr,status, errorThrown);
                          
                          
                          
                   });       

});