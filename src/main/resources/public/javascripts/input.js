$(window).on('load', function () {
    $('#input').bind('input propertychange', function () {
        var output = '';
        var text = $(this).val();
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            if (c >= ' ' && c <= '~') {
                output += c;
            } else {
                output += '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
            }
        }
        $('#output').val(output).trigger('input');
    });
});
