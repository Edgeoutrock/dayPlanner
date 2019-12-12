$('form').submit(function(evt){
    evt.preventDefault();
});
$('#button7').click(function(){
    var $field7 = $('#textfield7');
    var fieldVal7 = $field7.val();
    if(fieldVal7){
        $('#tasklist7').append('<li>' + fieldVal7 + '</li>');
        $field7.val('');
        $field7.focus();

    }
});
$('#tasklist7').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton7').click(function(){
    var $taskList7 = $('#tasklist7');
    
    $taskList7.remove();
    
});

$('.main7 h2').on("click",function(){
    $('.main7').hide();
    var $main7 = $(this).next('.main7');
    if ($main7.is(':hidden')){
        $main7.slideDOwn();
        $(this).addClass('close');
    } else {
        $main7.fadeOut();
        $(this).removeClass('close');
    }
});

$('#toggle7').on("click", function(){
    $('#clicked7').hide();

});
$('#toggleOn7').on("click", function(){
    
        $('#clicked7').show();
    
});