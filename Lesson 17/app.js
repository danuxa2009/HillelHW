$('ul').on('click', 'li', function(e) {
    const $el = $(e.target)
    $el.hide();
    setTimeout(() => $el.show(), 3000)
})

.css('color', 'red')
    .css('backgroundColor', 'blue');