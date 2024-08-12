function clickMe(){
    $('#results').text('the button was clicked');
    //hide the first paragraph
    $('p:first').hide();
    $('p:last').css('background-color', 'yello');
}




function init(){
    // hook events
    $('#btn1').on('click', clickMe);

    $('btn1').on('mouseover',function(){

    $('btn1').text('the button was clicked!');
        //hide the first paragraph
        
    })
}