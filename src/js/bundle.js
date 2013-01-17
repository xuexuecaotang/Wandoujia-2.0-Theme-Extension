/*global define, console*/
(function (window, undefined) {
    define([
        'i18n!nls/theme'
    ], function (
        theme
    ) {
        var i18n = {
            theme : theme
        };

        window.i18n = i18n;

        return i18n;
    });
}(this));
