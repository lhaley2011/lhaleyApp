
var addAlert = function(message) {
    toastr.options.closeButton = true;
    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-bottom-right";
    toastr.info(message);
    return message;
}

var sendOutAlert = function(msg) {
  var url = "/alert/send";
  var data = {};
  data['data'] = msg;
  data['connection'] = 'alert-message';
  io.socket.post(url, data, function(resData, jwres) {
    //console.log(resData);
    //console.log(jwres);
  });
}

$(function() {
  io.socket.on('alert-message', function(msg) {
    console.log('alert-message: ' + msg);
    addAlert(msg);
  });
});
