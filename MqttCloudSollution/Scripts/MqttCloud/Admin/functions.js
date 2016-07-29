/// functions.js 

/// <reference path="../sessionProcessing.js" />
/// <reference path="../../jquery-2.2.4.min.js" />
/// <reference path="../globalFunction.js" />
/// <reference path="../globalVariable.js" />
/// <reference path="config.js" />
/// <reference path="../errorProcessing.js" />




//Terminates admin session
function logOut(userTypeItem,  callBackError) {

    var requestData = createUserDataForRequest(userTypeItem);

    var loginPage = getLoginPageByUserType(userTypeItem);
    var serviceUrl = SERVER_URL +  ADMIN_LOGOUT_RELATIVE_URL;

    $.ajax({
        url: serviceUrl,
        type: 'POST',
        data: JSON.stringify(requestData),
        contentType: "application/json",
        success: function (data) {            
            forcedTerminationSession(userTypeItem);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            callBackError(xhr, ajaxOptions, thrownError);
        }         
    });
}
