

$( document ).ready(function() {
     
    var docHeight = $(document).height();
    var docWidth = $(document).width(); 
    
    console.log(docHeight);
 
    $("#wrapper").on('mousemove', function(e){
        
        var xAxis = e.pageX;
        var yAxis = e.pageY;
        
        $('#playerToon').css({
               left: xAxis,
               top: yAxis
           
       });
    });
    $("#wrapper").on('mousemove', function(e){
        
        var xAxis = e.pageX;
        var yAxis = e.pageY;
    });
 
});