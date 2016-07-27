

if (typeof jQuery === 'undefined') {
    throw new Error('Admins Managment Rest client requires jQuery')
}

/** object with REST methods for working with admin
  * @param {string } baseUrl; 
  *
**/
function AdminsManagmentServiceJs(baseUrl) {
    this.url = baseUrl;

    /**
      * Creates a new admin user by request parameters
      *
      * @param {object} dataForRequest; The data to be sent to the server.
      * @param {string} relativeUrl;   string containing the relative URL to which the request is sent.
      * @param {function} callback;  function to be called if the request succeeds.
      * @param {function} responseErrorCallbackx; function to be called if the request will have wrong status code.
      * @param {function} ajaxErrorCallback ; function to be called if the request fails.
      */
    this.set = function (dataForRequest, relativeUrl, callback, responseErrorCallback, ajaxErrorCallback) {

        $.ajax({
            type: 'POST',
            url: this.url + relativeUrl,
            data: JSON.stringify(dataForRequest),
            contentType: 'application/json',
            success: function (data) {

                var status = data.status;
                var message = data.message;

                if (status == "SUCCESS") {
                    callback();
                }
                else if (status == "ERROR") {
                    responseErrorCallback;
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                ajaxErrorCallback(xhr, ajaxOptions, thrownError)
            }
        });
    };


    /**
     * Retrieves a list of  admins by request parameters
     *
     * @param {object} dataForRequest; The data to be sent to the server.
     * @param {string} relativeUrl;   string containing the relative URL to which the request is sent.
     * @param {boolean} isReverse;   if true, returns list in reverse order.
     * @param {function} callback;  function to be called if the request succeeds.
     * @param {function} responseErrorCallbackx; function to be called if the request will have wrong status code.
     * @param {function} ajaxErrorCallback ; function to be called if the request fails.
     */
    this.list = function (dataForRequest, relativeUrl, isReverse, callback, responseErrorCallback, ajaxErrorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url + relativeUrl,
            data: JSON.stringify(dataForRequest),
            contentType: 'application/json',
            success: function (data) {
                var status = data.status;
                var message = data.message;

                if (status == "SUCCESS") {
                    if (isReverse) {
                        data.data.reverse();
                    }
                    callback(data.data);
                }
                else if (status == "ERROR") {
                    responseErrorCallback(message);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                ajaxErrorCallback(xhr, ajaxOptions, thrownError)
            }
        });
    };

    /**
    * Delete admin user by request parameters
    *
    * @param {object} dataForRequest; The data to be sent to the server.
    * @param {string} relativeUrl;   string containing the relative URL to which the request is sent.
    * @param {function} callback;  function to be called if the request succeeds.
    * @param {function} responseErrorCallbackx; function to be called if the request will have wrong status code.
    * @param {function} ajaxErrorCallback ; function to be called if the request fails.
    */
    this.remove = function (dataForRequest, relativeUrl, callback, responseErrorCallback, ajaxErrorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url + relativeUrl,
            data: JSON.stringify(dataForRequest),
            contentType: 'application/json',
            success: function (data) {
                var status = data.status;
                var message = data.message;

                if (status == "SUCCESS") {                   
                    callback();
                }
                else if (status == "ERROR") {
                    responseErrorCallback;
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                ajaxErrorCallback(xhr, ajaxOptions, thrownError)
            }
        });
    };
}