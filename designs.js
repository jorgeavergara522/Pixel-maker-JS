 

// When size is submitted by the user, call makeGrid()
  
function makeGrid(width, height) { 
    //Build entire table width x height
    $("#pixelCanvas").html('<tbody></tbody>');
    var gridRow="";     //Data for a single grid row
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            gridRow+=("<td></td>");

        }
        //Append data to canvas tbody when inner loop completes
        $("#pixelCanvas tbody").append("<tr>"+gridRow+"</tr>");
        gridRow=""; //Reset grid row
    } 
}

//Click of cells
$(document).on('click','#pixelCanvas td',function(e){
    e.preventDefault();
  
    //Change background color
   
    // Select color input
    var colorPick=$("#colorPicker").val(); //Refer to color picker by id

    //If Attribute style exists
    if($(this).attr("style")==="background-color:#fff" ||
        !$(this).attr("style")){
            //Else set new color
            $(this).attr("style","background-color:"+colorPick); 
        }else{
            //Change it back to default
            $(this).attr("style","background-color:#fff");
    }
});

//Submit form
$("#sizePicker").on("submit",function(e){
    e.preventDefault(); //Prevent reload

    // Select size input
    var width=$("#inputWidth").val();
    var height=$("#inputHeight").val();
 
    makeGrid(width, height);     //Calls function to make grid
})