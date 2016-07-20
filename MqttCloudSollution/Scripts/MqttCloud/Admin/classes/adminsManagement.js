
function RestServiceAdminJs(url) {
    this.currentUrl = url;

    this.add = function (model, callback,url) {
        $.ajax({
            type: 'POST',
            url: currentUrl+'/'+url,
            data: JSON.stringify(model), // '{"name":"' + model.name + '"}',
            dataType: 'text',
            processData: false,
            contentType: 'application/json',
            success: callback,
            error: function (req, status, ex) { },           
        });
    };

}