app.factory('getdatafactory', function($http) {
    return {
        sendData: function(data) {
            return $http({
                    method: 'POST',
                    url: "http://144.76.34.244:3015/user/register",
                    data: data,
                    header: { 'Content - Type': 'text/html' }
                })
                .then(function(response) {
                    return response;
                })
        }
    }
});
