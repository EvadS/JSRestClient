
var SERVER_URL = 'http://mqtt.com:28080';



// login page
var CUSTOMER_LOGIN_PAGE = "CustomerLogin.html";
var ADMIN_LOGIN_PAGE = "LoginAdmin.html";

// key for localstorage 
var AUTHORIZATION_DATA_KEY = 'CURRENT_USER_KEY';
var USER_TYPE_DATA_KEY = 'USER_TYPE';


var EMPTY_TABLE_DATA_MESSAGE = "No items found.";
var EMPTY_NEXT_PAGE_MESSAGE = "No more items found";


//enums
var userType = {
    ADMINS: 'ADMINS',
    CUSTOMERS: 'CUSTOMERS'
};

var directionNavigation = {
    NEXT:1,
    PREV:2
};


var messageType = {
    authError: 'AUTHERROR',
    error: "ERROR",
    info : "INFO"
};


var ADMINSTRATOR_LOGIN_PAGE = "AdministratorLogin.html"
var DEFAULT_PAGE = "Accounts.html";

//relativeURL
var ADMIN_LOGIN_RELATIVE_URL = "/rest/admins/login";
var ADMIN_LOGOUT_RELATIVE_URL = "/rest/admins/logout";



var ADMIN_PAGE_SIZE = 3;
var ACCOUNT_PAGE_SIZE = 2;






