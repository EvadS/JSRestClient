function AccountManagmentServiceJs(newurl) {
    this.url = newurl;

    this.set = function (model, callback, errorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url,
            data: JSON.stringify(model), // '{"name":"' + model.name + '"}',
            dataType: 'text',
            processData: false,
            contentType: 'application/json',
            success: callback,
            error: errorCallback(req, status, ex)
          
        });
    };

    this.list = function (model, callback,errorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url,
            data: JSON.stringify(model), // '{"name":"' + model.name + '"}',
            dataType: 'text',
            processData: false,
            contentType: 'application/json',
            success: callback,
            error: errorCallback (req, status, ex),
        
        });
    };

    this.remove = function (id, callback, errorCallback) {
        $.ajax({
            type: 'POST',
            url: this.url + '/' + id,
            contentType: 'application/json',
            success: callback,
            error: errorCallback(req, status, ex)
        });
    };  
}