

// combine full url for request 
function createFullUrl(apiUrl) {
    if (apiUrl != null) {
        var res = baseurl.concat(apiUrl);
        return res;
    }

    return baseurl;
}

function isNullOrEmpty(s) {
    return (s == null || s === "");
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}