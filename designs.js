// Select color input
// Select size input
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;
var pixelColor = document.getElementById('colorPicker').value;
var sizePicker = document.getElementById('sizePicker');
var pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const submit = document.getElementById('submitButton');
submit.addEventListener("click", function(currentGrid) {
  currentGrid.preventDefault();
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  makeGrid(height, width);
});


function makeGrid(height, width) {
    $('tr').remove();
    $('td').remove();
    for(var p = 1; p<=height; p++) {
        $('table').append('<tr></tr>');
        for(var o = 1; o <= width; o++){
            $('tr:last').append('<td></td>');
        }
    }
    $('td').click(function difColor() {
        var color = document.getElementById('colorPicker').value;
        if($(this).attr('style')) {
             $(this).removeAttr('style')
         } else {
             $(this).attr('style', 'background-color:' + color);
         }
     })
}