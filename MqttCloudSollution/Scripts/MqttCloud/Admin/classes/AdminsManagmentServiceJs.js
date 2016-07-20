function AdminsManagmentServiceJs(baseUrl) {
    this.url = baseUrl;


    this.set = function (model, relativeUrl, callback, responseErrorCallback, ajaxErrorCallback) {

        $.ajax({
            type: 'POST',
            url: this.url + relativeUrl,
            data: JSON.stringify(model),
            contentType: 'application/json',
            success: function (data) {
                if (status == "SUCCESS") {                   
                    callback;
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


    this.list = function (model, relativeUrl, isReverse, callback, responseErrorCallback,ajaxErrorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url + relativeUrl,
            data: JSON.stringify(model),
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

    this.remove = function (model, relativeUrl, callback, responseErrorCallback, ajaxErrorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url + relativeUrl,
            data: JSON.stringify(model),
            contentType: 'application/json',
            success: function (data) {
                if (status == "SUCCESS") {
                    callback;
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