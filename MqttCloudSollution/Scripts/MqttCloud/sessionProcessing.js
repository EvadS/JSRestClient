﻿/// <reference path="globalVariable.js" />
/* sessionProcessing.js
 *
 * Requires 
 *  /Scripts/globalVariable.js
 *  /Scripts/enums.js
 *  /Scripts/globalVariable.js
 */


// function terminates session of the user.
// relocated to the login page by current mode 
function forcedTerminationSession(userTypeItem) {
    var loginPage = getLoginPageByUserType(userTypeItem);

    localStorage.clear();
    window.location = loginPage;

    return false;
}

function getLoginPageByUserType(userTypeItem) {
    switch (userTypeItem) {
        case (userType.ADMINS): {
            return ADMIN_LOGIN_PAGE;
        }
        case (userType.CUSTOMERS): {
            return CUSTOMER_LOGIN_PAGE;
        }
    }
}

function getCurrentSessionDataOfUser(userTypeItem) {

    var loginPage = getLoginPageByUserType(userTypeItem);

    if (!localStorage) {
        window.location.href = loginPage;
        return false;
    }

    if (!localStorage.getItem(AUTHORIZATION_DATA_KEY)) {
        window.location.href = loginPage;
        return false;
    }

    return localStorage.getItem(AUTHORIZATION_DATA_KEY);
}

function getSessionIdFromStorage(userTypeItem) {
    var storageData = getCurrentSessionDataOfUser(userTypeItem);

    if (!storageData) {
        return null;
    }

    var usersData = JSON.parse(storageData);
    return usersData.sessionId;
}

function getUserNameFromStorage(userTypeItem) {
    var storageData = getCurrentSessionDataOfUser(userTypeItem);

    if (!storageData) {
        return null;
    }

    var usersData = JSON.parse(storageData);
    return usersData.name;
}

function createUserDataForRequest(userTypeItem) {

    var userName = getUserNameFromStorage(userTypeItem);
    var sessionId = getSessionIdFromStorage(userTypeItem);

    if (!userName || !sessionId) {
        return null;
    }

    var requestData = {
        "username": userName,
        "sessionID": sessionId
    };

    return requestData;
}
/**
 * 
 * @param {type} userTypeItem
 * @returns {type} 
 */
function checkAuthorise(userTypeItem) {
    var storageData = getCurrentSessionDataOfUser(userTypeItem);

    if (!storageData) {
        return false;
    }

    var sessionId = getSessionIdFromStorage(userTypeItem);

    if (sessionId != null) {
        return true;
    }

    return false;
}

/** Проверка является ли пользователь авторизированным.
* @param {String} тип пользователя 
*/
function checkIsUserAuthenticated(userTypeItem) {

    if (!checkAuthorise()) {

        var loginPage = getLoginPageByUserType(userTypeItem);
        window.location = loginPage;
    }
}



