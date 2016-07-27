﻿/// adminLogin.js 

/// <reference path="../globalVariable.js" />
/// <reference path="../Crypto/2.5.3-crypto-md5.js" />
/// <reference path="../globalFunction.js" />
/// <reference path="../../Crypto/createMd5.js" />
/// <reference path="../../jquery-2.2.4.min.js" />


function loginAdmins(userName_, userPass_, loginUrl, startupPage, processingErrorStatus, processingRequestError) {
    var passwordHash = getMd5(userPass_);

    // TODO: for test 
    var requestLoginData = {
        username: userName_,
        md5: userPass_//passwordHash
    }

    var loginUrl = createFullUrl(loginUrl);

    var status = "";
    var message = "";
    var session = "";
   
    $.ajax({
        url: loginUrl,
        type: 'POST',
        data: JSON.stringify(requestLoginData),
        contentType: "application/json",
        success: function (data) {

            status = data.status;
            message = data.message;
            session = data.data;            

            if (status == "SUCCESS") {

                var userData = {
                    name: userName_,
                    sessionId: session
                }

                localStorage.setItem(AUTHORIZATION_DATA_KEY, JSON.stringify(userData));
                window.location = startupPage;
            }
            else if (status == "ERROR")
            {
                processingErrorStatus(message);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            processingRequestError(xhr);
        }
    });

};


   
