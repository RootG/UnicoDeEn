$(window).on('load', function () {
    $('#input').bind('input propertychange', function () {
        var output = $('#output');
        output.val('').trigger('input');
        var text = $(this).val();
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            if (c >= ' ' && c <= '~') {
                output.val(output.val() + c).trigger('input');
            } else {
                output.val(output.val() + '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4))
                    .trigger('input');
            }
        }
    });
});
