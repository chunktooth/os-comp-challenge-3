$('.toggle-nav-btn').on('click', function(){
    $('.left-pane').toggle('slide', { direction: 'left' }, 1000);
    $('.right-pane').animate({
        'margin-left' : $('.right-pane').css('margin-left') == '0px' ? '260px' : '0px'
    }, 1000);
    console.log('hey!');
});