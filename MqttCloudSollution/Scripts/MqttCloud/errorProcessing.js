/// <reference path="sessionProcessing.js" />
/// <reference path="../../Content/bootstrap/js/bootstrap.js" />
/// <reference path="globalVariable.js" />

// errorProcessing.js


function showError(headerText, messageText, parentPlaceHolderId,userTypeItem) {
    var res = "";
    res = "<div class='modal fade' id='modalInfoDialog' role='dialog'>" +
                "<div class='modal-dialog modal-sm'>" +
                    "<div class='modal-content'>" +
                        "<div class='modal-header'>" +
                            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                            "<h4 class='modal-title'>" + headerText + "</h4>" +
                        "</div>" +
                        "<div class='modal-body'>" +
                            "<p>" + messageText + "</p>" +
                        "</div>" +
                        "<div class='modal-footer'>" +
                            "<button type='button' class='btn btn-default' id='btnHideModalInfo' data-dismiss='modal'>Close</button>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>";

    $("#" + parentPlaceHolderId).html(res);

    $('#modalInfoDialog').on('hide.bs.modal', function () {
        $('#' + parentPlaceHolderId).html("");
        forcedTerminationSession(userTypeItem);
    })

    $("#modalInfoDialog").modal();
}

function showInfo(headerText, messageText, parentPlaceHolderId) {
    var res = "";
    res = "<div class='modal fade' id='modalInfoDialog' role='dialog'>" +
                "<div class='modal-dialog modal-sm'>" +
                    "<div class='modal-content'>" +
                        "<div class='modal-header'>" +
                            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                            "<h4 class='modal-title'>" + headerText + "</h4>" +
                        "</div>" +
                        "<div class='modal-body'>" +
                            "<p>" + messageText + "</p>" +
                        "</div>" +
                        "<div class='modal-footer'>" +
                            "<button type='button' class='btn btn-default' id='btnHideModalInfo' data-dismiss='modal'>Close</button>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>";

    $("#" + parentPlaceHolderId).html(res);

    $('#modalInfoDialog').on('hide.bs.modal', function () {
        $('#' + parentPlaceHolderId).html("");
    })

    $("#modalInfoDialog").modal();
}

function getErrorValues(jqXHR, exception) {

    var errorMessage = "";

    if (jqXHR.status === 0) {
        errorMessage = 'Not connect. Verify Network. Session will be closed';
    } else if (jqXHR.status == 404) {
        errorMessage = 'Requested page not found. [404]';
    } else if (jqXHR.status == 500) {
        errorMessage = 'Internal Server Error [500].';
    } else if (exception === 'parsererror') {
        errorMessage = 'Requested JSON parse failed.';
    } else if (exception === 'timeout') {
        errorMessage = 'Time out error.';
    } else if (exception === 'abort') {
        errorMessage = 'Ajax request aborted.';
    } else {
        errorMessage = 'Uncaught Error ' + jqXHR.responseText;
    }

    return errorMessage;
}

function processingAjaxConnectionError(jqXHR, exception, parentPlaceHolderId, userTypeItem) {

    var errorMesage = getErrorValues(jqXHR, exception);

    showError("Error", errorMesage, parentPlaceHolderId, userTypeItem);
}
