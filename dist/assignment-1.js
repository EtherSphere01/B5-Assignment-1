"use strict";
function formatString(input, toUpper) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input;
    }
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
