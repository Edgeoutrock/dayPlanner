$(document).ready(function(){
   

    /*
    var today = new Date();
    var newsHours = today.getHours();

    var m0 = $('.main');
    var m1 = $('.main1');
    var m2 = $('.main2');
    var m3 = $('.main3');
    var m4 = $('.main4');
    var m5 = $('.main5');
    var m6 = $('.main6');
    var m7 = $('.main7');

    switch (new Date().getHours()) {
        case 8:
            m0.addClass(presentTime);
            m1.removeClass(presentTime);
            m2.removelass(presentTime);
            m3.removeClass(presentTime);
            m4.removeClass(presentTime);
            m5.removeClass(presentTime);
            m6.removeClass(presentTime);
            m7.removeClass(presentTime);
          break;
        case 9:
            m0.removeClass(presentTime);
            m1.addClass(presentTime);
            m2.removelass(presentTime);
            m3.removeClass(presentTime);
            m4.removeClass(presentTime);
            m5.removeClass(presentTime);
            m6.removeClass(presentTime);
            m7.removeClass(presentTime);
          break;
        case 10:
            m0.removeClass(presentTime);
            m1.removeClass(presentTime);
            m2.addClass(presentTime);
            m3.removeClass(presentTime);
            m4.removeClass(presentTime);
            m5.removeClass(presentTime);
            m6.removeClass(presentTime);
            m7.removeClass(presentTime);
          break;
        case 11:
            m0.removeClass(presentTime);
            m1.removeClass(presentTime);
            m2.removelass(presentTime);
            m3.addClass(presentTime);
            m4.removeClass(presentTime);
            m5.removeClass(presentTime);
            m6.removeClass(presentTime);
            m7.removeClass(presentTime);
          break;
        case 12:
            m0.removeClass(presentTime);
            m1.removeClass(presentTime);
            m2.removelass(presentTime);
            m3.removeClass(presentTime);
            m4.addClass(presentTime);
            m5.removeClass(presentTime);
            m6.removeClass(presentTime);
            m7.removeClass(presentTime);
          break;
        case 13:
            m0.removeClass(presentTime);
            m1.removeClass(presentTime);
            m2.removelass(presentTime);
            m3.removeClass(presentTime);
            m4.removeClass(presentTime);
            m5.addClass(presentTime);
            m6.removeClass(presentTime);
            m7.removeClass(presentTime);
          break;
        case 14:
            m0.removeClass(presentTime);
            m1.removeClass(presentTime);
            m2.removelass(presentTime);
            m3.removeClass(presentTime);
            m4.removeClass(presentTime);
            m5.removeClass(presentTime);
            m6.addClass(presentTime);
            m7.removeClass(presentTime);
            break;
        case 15:
                m0.removeClass(presentTime);
                m1.removeClass(presentTime);
                m2.removelass(presentTime);
                m3.removeClass(presentTime);
                m4.removeClass(presentTime);
                m5.removeClass(presentTime);
                m6.removeClass(presentTime);
                m7.addClass(presentTime);
                break;

      }
      */

    /*
    m0.removeClass(presentTime);
    m1.removeClass(presentTime);
    m2.removelass(presentTime);
    m3.removeClass(presentTime);
    m4.removeClass(presentTime);
    m5.removeClass(presentTime);
    m6.removeClass(presentTime);
    m7.removeClass(presentTime);

    m0.addClass(presentTime);
    m1.addClass(presentTime);
    m2.addClass(presentTime);
    m3.addClass(presentTime);
    m4.addClass(presentTime);
    m5.addClass(presentTime);
    m6.addClass(presentTime);
    m7.addClass(presentTime);
    */

// add removeclass for all the them except the current one and set all the main classes in html to presentTime
    /*
    if (newsHours !== 8){
    m0.addClass(presentTime);
    m1.removeClass(presentTime);
    m2.removelass(presentTime);
    m3.removeClass(presentTime);
    m4.removeClass(presentTime);
    m5.removeClass(presentTime);
    m6.removeClass(presentTime);
    m7.removeClass(presentTime);
        
    }
    else if (newsHours !== 9){
        m0.removeClass(presentTime);
        m1.addClass(presentTime);
        m2.removelass(presentTime);
        m3.removeClass(presentTime);
        m4.removeClass(presentTime);
        m5.removeClass(presentTime);
        m6.removeClass(presentTime);
        m7.removeClass(presentTime);
    }
    else if (newsHours !== 10){
        m0.removeClass(presentTime);
        m1.removeClass(presentTime);
        m2.addlass(presentTime);
        m3.removeClass(presentTime);
        m4.removeClass(presentTime);
        m5.removeClass(presentTime);
        m6.removeClass(presentTime);
        m7.removeClass(presentTime);    
    }
    else if (newsHours !== 11){
        m0.removeClass(presentTime);
        m1.removeClass(presentTime);
        m2.removelass(presentTime);
        m3.addClass(presentTime);
        m4.removeClass(presentTime);
        m5.removeClass(presentTime);
        m6.removeClass(presentTime);
        m7.removeClass(presentTime);   
    }
    else if (newsHours !== 12){
        m0.removeClass(presentTime);
        m1.removeClass(presentTime);
        m2.removelass(presentTime);
        m3.removeClass(presentTime);
        m4.addClass(presentTime);
        m5.removeClass(presentTime);
        m6.removeClass(presentTime);
        m7.removeClass(presentTime);   
    }
    else if (newsHours !== 13){
        m0.removeClass(presentTime);
        m1.removeClass(presentTime);
        m2.removelass(presentTime);
        m3.removeClass(presentTime);
        m4.removeClass(presentTime);
        m5.addClass(presentTime);
        m6.removeClass(presentTime);
        m7.removeClass(presentTime);   
    }
    else if (newsHours !== 14){
        m0.removeClass(presentTime);
        m1.removeClass(presentTime);
        m2.removelass(presentTime);
        m3.removeClass(presentTime);
        m4.removeClass(presentTime);
        m5.removeClass(presentTime);
        m6.addClass(presentTime);
        m7.removeClass(presentTime);    
    }
    else if (newsHours !== 15){
        m0.removeClass(presentTime);
        m1.removeClass(presentTime);
        m2.removelass(presentTime);
        m3.removeClass(presentTime);
        m4.removeClass(presentTime);
        m5.removeClass(presentTime);
        m6.removeClass(presentTime);
        m7.addClass(presentTime);    
    }
    */
    /*
    for (var i = 9; i < 15;i++){
        if (newsHours === 8){

            $('main').addClass(presentTime);

        }
        else if (newsHours === i){
            var newQuery = $('`main` + i').addClass(presentTime);

        }
    }
    */

$('form').submit(function(evt){
    evt.preventDefault();
});
$('#button').click(function(){
    var $field = $('#textfield');
    var fieldVal = $field.val();
    if(fieldVal){
        $('#tasklist').append('<li>' + fieldVal + '</li>');
        $field.val('');
        $field.focus();

        

    }
});
$('#tasklist').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey',
        
    });
    
    
    
});
$('#clearButton').click(function(){
    var $taskList = $('#tasklist');
    $taskList.remove();
    $('#clicked').hide();
    
    var stuckUp = $taskList.clone().addClass('cloned');

    $('#timeOut').append(stuckUp);
    
    $('#button').remove();
    
    var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
    $(this).remove();
    
    
});

$('.main h2').on("click",function(){
    
    $('.main').hide();
    var $main = $(this).next('.main');
    if ($main.is(':hidden')){
        $main.slideDOwn();
        $(this).addClass('close');
    } else {
        $main.fadeOut();
        $(this).removeClass('close');
    }
    
    var $taskList = $('#tasklist');
    var stuckUp = $taskList.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp);


});

$('#toggle').on("click", function(){
    $('#clicked').hide();

});
$('#toggleOn').on("click", function(){
    
        $('#clicked').show();
    
});
/*
$('.styleUp').on("click", function(){
    if ($('#clicked').is(':hidden')){
        $('#clicked').show();
    }
}); */
    


/*
 $('.main').hide(); 
$('.main h2').click(function(){
    var $main = $(this).next('.main');
    if ($main.is(':hidden')){
        $main.slideDOwn();
        $(this).addClass('close');
    } else {
        $main.fadeOut();
        $(this).removeClass('close');
    }
});
*/
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    var newsDay = today.getDate();
    var newsMonth = today.getMonth() + 1;
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var newNav = $("<li>" + today + "</li>");
    /* '  ' + today + 'This is start time' */
    $('#time').append(newNav);  /* + " " + h + ":" + m + ":" + s*/
    /*t = setTimeout(function() {
      startTime()
    }, 500); */
  };
  startTime();

  /* second hour */
  $('form').submit(function(evt){
    evt.preventDefault();
});
$('#button1').click(function(){
    var $field1 = $('#textfield1');
    var fieldVal1 = $field1.val();
    if(fieldVal1){
        $('#tasklist1').append('<li>' + fieldVal1 + '</li>');
        $field1.val('');
        $field1.focus();

    }
});
$('#tasklist1').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton1').click(function(){
    var $taskList1 = $('#tasklist1');
    
    $taskList1.remove();
    $('#clicked1').hide();

    var stuckUp1 = $taskList1.clone().addClass('cloned');

    $('#timeOut').append(stuckUp1);
    
    $('#button1').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
    
    $(this).remove();
});

$('.main1 h2').on("click",function(){
    $('.main1').hide();
    var $main1 = $(this).next('.main1');
    if ($main1.is(':hidden')){
        $main1.slideDOwn();
        $(this).addClass('close');
    } else {
        $main1.fadeOut();
        $(this).removeClass('close');
    }

    var $taskList1 = $('#tasklist1');
    var stuckUp1 = $taskList1.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp1);
});

$('#toggle1').on("click", function(){
    $('#clicked1').hide();

});
$('#toggleOn1').on("click", function(){
    
        $('#clicked1').show();
    
});

  /* third hour */
  $('form').submit(function(evt){
    evt.preventDefault();
});
$('#button2').click(function(){
    var $field2 = $('#textfield2');
    var fieldVal2 = $field2.val();
    if(fieldVal2){
        $('#tasklist2').append('<li>' + fieldVal2 + '</li>');
        $field2.val('');
        $field2.focus();

    }
});
$('#tasklist2').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton2').click(function(){
    var $taskList2 = $('#tasklist2');
    
    $taskList2.remove();
    $('#clicked2').hide();

    var stuckUp2 = $taskList2.clone().addClass('cloned');

    $('#timeOut').append(stuckUp2);
    
    $('#button2').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
$(this).remove();
    
});

$('.main2 h2').on("click",function(){
    $('.main2').hide();
    var $main2 = $(this).next('.main2');
    if ($main2.is(':hidden')){
        $main2.slideDOwn();
        $(this).addClass('close');
    } else {
        $main2.fadeOut();
        $(this).removeClass('close');
    }
    var $taskList2 = $('#tasklist2');
    var stuckUp2 = $taskList2.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp2);
});

$('#toggle2').on("click", function(){
    $('#clicked2').hide();

});
$('#toggleOn2').on("click", function(){
    
        $('#clicked2').show();
    
});

  /* fourth hour */
  $('form').submit(function(evt){
    evt.preventDefault();
});
$('#button3').click(function(){
    var $field3 = $('#textfield3');
    var fieldVal3 = $field3.val();
    if(fieldVal3){
        $('#tasklist3').append('<li>' + fieldVal3 + '</li>');
        $field3.val('');
        $field3.focus();

    }
});
$('#tasklist3').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton3').click(function(){
    var $taskList3 = $('#tasklist3');
    
    $taskList3.remove();
    $('#clicked3').hide();
    
    var stuckUp3 = $taskList3.clone().addClass('cloned');

    $('#timeOut').append(stuckUp3);
    
    $('#button3').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
$(this).remove();
});

$('.main3 h2').on("click",function(){
    $('.main3').hide();
    var $main3 = $(this).next('.main3');
    if ($main3.is(':hidden')){
        $main3.slideDOwn();
        $(this).addClass('close');
    } else {
        $main3.fadeOut();
        $(this).removeClass('close');
    }
    var $taskList3 = $('#tasklist3');
    var stuckUp3 = $taskList3.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp3);
});

$('#toggle3').on("click", function(){
    $('#clicked3').hide();

});
$('#toggleOn3').on("click", function(){
    
        $('#clicked3').show();
    
});
  /* fifth hour */
  $('form').submit(function(evt){
    evt.preventDefault();
});
$('#button4').click(function(){
    var $field4 = $('#textfield4');
    var fieldVal4 = $field4.val();
    if(fieldVal4){
        $('#tasklist4').append('<li>' + fieldVal4 + '</li>');
        $field4.val('');
        $field4.focus();

    }
});
$('#tasklist4').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton4').click(function(){
    var $taskList4 = $('#tasklist4');
    
    $taskList4.remove();
    $('#clicked4').hide();
    
    var stuckUp4 = $taskList4.clone().addClass('cloned');

    $('#timeOut').append(stuckUp4);
    
    $('#button4').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
$(this).remove();
});

$('.main4 h2').on("click",function(){
    $('.main4').hide();
    var $main4 = $(this).next('.main4');
    if ($main4.is(':hidden')){
        $main4.slideDOwn();
        $(this).addClass('close');
    } else {
        $main4.fadeOut();
        $(this).removeClass('close');
    }
    var $taskList4 = $('#tasklist4');
    var stuckUp4 = $taskList4.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp4);
});

$('#toggle4').on("click", function(){
    $('#clicked4').hide();

});
$('#toggleOn4').on("click", function(){
    
        $('#clicked4').show();
    
});

  /* sixth hour */
  $('form').submit(function(evt){
    evt.preventDefault();
});
$('#button5').click(function(){
    var $field5 = $('#textfield5');
    var fieldVal5 = $field5.val();
    if(fieldVal5){
        $('#tasklist5').append('<li>' + fieldVal5 + '</li>');
        $field5.val('');
        $field5.focus();

    }
});
$('#tasklist5').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton5').click(function(){
    var $taskList5 = $('#tasklist5');
    
    $taskList5.remove();
    $('#clicked5').hide();

    var stuckUp5 = $taskList5.clone().addClass('cloned');

    $('#timeOut').append(stuckUp5);
    
    $('#button5').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
$(this).remove();
    
});

$('.main5 h2').on("click",function(){
    $('.main5').hide();
    var $main5 = $(this).next('.main5');
    if ($main5.is(':hidden')){
        $main5.slideDOwn();
        $(this).addClass('close');
    } else {
        $main5.fadeOut();
        $(this).removeClass('close');
    }

    var $taskList5 = $('#tasklist5');
    var stuckUp5 = $taskList5.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp5);
});

$('#toggle5').on("click", function(){
    $('#clicked5').hide();

});
$('#toggleOn5').on("click", function(){
    
        $('#clicked5').show();
    
});

  /* seventh hour */
  $('form').submit(function(evt){
    evt.preventDefault();
});
$('#button6').click(function(){
    var $field6 = $('#textfield6');
    var fieldVal6 = $field6.val();
    if(fieldVal6){
        $('#tasklist6').append('<li>' + fieldVal6 + '</li>');
        $field6.val('');
        $field6.focus();

    }
});
$('#tasklist6').on('click', 'li', function(){
    $(this).css({
        'text-decoration' : 'line-through',
        'font-weight' : 'bold',
        'color' : 'lightgrey'
    });
});
$('#clearButton6').click(function(){
    var $taskList6 = $('#tasklist6');
    
    $taskList6.remove();
    $('#clicked6').hide();

    var stuckUp6 = $taskList6.clone().addClass('cloned');

    $('#timeOut').append(stuckUp6);
    
    $('#button6').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
$(this).remove();
    
});

$('.main6 h2').on("click",function(){
    $('.main6').hide();
    var $main6 = $(this).next('.main6');
    if ($main6.is(':hidden')){
        $main6.slideDOwn();
        $(this).addClass('close');
    } else {
        $main6.fadeOut();
        $(this).removeClass('close');
    }

    var $taskList6 = $('#tasklist6');
    var stuckUp6 = $taskList6.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp6);
});

$('#toggle6').on("click", function(){
    $('#clicked6').hide();

});
$('#toggleOn6').on("click", function(){
    
        $('#clicked6').show();
    
});

  /* eighth hour */
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
    $('#clicked7').hide();

    var stuckUp7 = $taskList7.clone().addClass('cloned');

    $('#timeOut').append(stuckUp7);
    
    $('#button7').remove();

var newT = new Date();
    var $timeLi = $("<li>" + newT + "</li>");
    $('#timeOut').append($timeLi);
$(this).remove();
    
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

    var $taskList7 = $('#tasklist7');
    var stuckUp7 = $taskList7.clone().map("this is from 9."); // somewhow it stops appending list 
    
    $('#timeOut').append(stuckUp7);
});

$('#toggle7').on("click", function(){
    $('#clicked7').hide();

});
$('#toggleOn7').on("click", function(){
    
        $('#clicked7').show();
    
});





}); // end to document ready function

/* I tried to add navbar that is sticky with scroll
const navigation = document.querySelector('#navigation');
const navTop = navigation.offsetTop;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = navigatino.offsetHeight + 'px';
    document.body.classList.add('fixed-nav navigation');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav navigation');
  }
}

window.addEventListener('scroll', stickyNavigation);
*/






// note styleUP class is faq
// pickUp is answer class

//question why need pickUp