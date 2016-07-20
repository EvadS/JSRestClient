/// functions.js 

/// <reference path="../sessionProcessing.js" />
/// <reference path="../../jquery-2.2.4.min.js" />
/// <reference path="../globalFunction.js" />
/// <reference path="../globalVariable.js" />
/// <reference path="config.js" />
/// <reference path="../errorProcessing.js" />




//Terminates admin session
function logOut(userTypeItem, relativeURL, callBackError) {

    var requestData = createUserDataForRequest(userTypeItem);

    var loginPage = getLoginPageByUserType(userTypeItem);
    var serviceUrl = createFullUrl(relativeURL);

    $.ajax({
        url: serviceUrl,
        type: 'POST',
        data: JSON.stringify(requestData),
        contentType: "application/json",
        success: function (data) {
            alert('true');
            forcedTerminationSession(userTypeItem);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            callBackError(xhr, ajaxOptions, thrownError);
        }         
    });
}
