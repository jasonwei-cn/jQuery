$(function () {
    
    $('#sliderTV').sliderTV();
    
    $('#sliderTV').trigger('move:jump', { to: 4, canAnimate: false });

    $('body').keydown(function (e) {
        switch (e.keyCode) {
            case 37:
                // keypad arrow left
                $('#sliderTV').trigger('move:prev');
                break;
            case 39:
                // keypad arrow right
                $('#sliderTV').trigger('move:next');
                break;
        }
    });

    $('.sliderTV__next').click(function () {
        // slide to next item
        $('#sliderTV').trigger('move:next');
    });
    $('.sliderTV__prev').click(function () {
        // slide to previous item
        $('#sliderTV').trigger('move:prev');
    });

    $('#help__input').change(function (event) {
        // slide to a specific item, useful to slide the carousel programmatically
        $('#sliderTV').trigger('move:jump', { to: parseInt(event.target.value) });
    });

    $('#sliderTV').on('animation:start', function () {
        console.clear();
        console.log('sliderTV animation has started');
    });
    $('#sliderTV').on('animation:end', function () {
        console.clear();
        console.log('sliderTV animation has finished');
    });
});
