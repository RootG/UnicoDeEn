$(window).on('load', function () {
    $('#input').bind('input propertychange', function () {
        var output = $('#output');
        output.val('');
        var text = $(this).val();
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            if (c >= ' ' && c <= '~') {
                output.val(output.val() + c);
            }
        }
    });
});
