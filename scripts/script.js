

$( document ).ready(function() {
     
    var docHeight = $(document).height();
    var docWidth = $(document).width(); 
    var viewPortMidPointX = (docWidth / 2);
    var viewPortMidPointY = (docHeight / 2);

    $()


    $("#wrapper").on('mousemove', function(e){
        
        var xAxis = e.pageX;
        var yAxis = e.pageY;
        var currentPosition = findMidpoint(xAxis, yAxis);

        $('#playerToon').css({
               left: xAxis,
               top: yAxis
       });
       
       $('#playerToon2').css({
            left: currentPosition[0],
            top: currentPosition[1]
       });
       $('.toonContainer').children().css({
            left:-(this.clientWidth / 4),
            top: -(this.clientHeight / 4)
       });
    });
    $("#wrapper").on('mousemove', function(e){
        
        var xAxis = e.pageX;
        var yAxis = e.pageY;
    });
    
    /* 
    Passes current cursor location and calculates midpoint of viewport.
    Will also create a function to calculate distance and amount of midway movement. 
    */
    var findMidpoint = function(xAxisForFunct, yAxisForFunct, distance) {
        var arrayCoord = [];
        arrayCoord[0] = ((xAxisForFunct + viewPortMidPointX) / 2);
        arrayCoord[1] = ((yAxisForFunct + viewPortMidPointY) / 2);
        return arrayCoord
    };
});