$('.toggle-btn').toggle(function() {
    $('.left-pane').attr('hidden', true);
}, function() {
    $('.left-pane').attr('hidden', false);
});