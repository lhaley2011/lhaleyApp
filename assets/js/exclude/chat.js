var scrollToBottom = function (elem) {
  elem.scrollTop(elem[0].scrollHeight);
}

var addChatMessage = function(html) {
  var messageList = $('#chatMessages');
  messageList.append('<li>' + html + '</li>');
  scrollToBottom($('div.chat.messageList'));
  return;
}

var addExternalChatMessage = function(res) {
  addChatMessage(res.name + ' - ' + res.message); 
  return;
}

var addOwnChatMessage = function(message) {
  addChatMessage('<b>You - '+message+'</b>');
  return;
}

var sendChatMessage = function(room, msg, name) {
  var name = name || 'Guest';
  var url = "/chat/send";
  var data = {};
  data['roomName'] = room;
  data['data'] = {name: name, message: msg};
  data['connection'] = 'chat message';
  io.socket.post(url, data, function(resData, jwres) {
    //console.log(resData);
    //console.log(jwres);
  });
}

var joinRoom = function(roomName) {
  var url = "/chat/joinRoom";
  var data = {};
  data['roomName'] = roomName;
  io.socket.post(url, data, function(resData, jwres) {
    console.log('joined room ' + roomName);  
  });
}

$(function() {
  
  if(chatConnection != undefined) {
    io.socket.on('chat message', function(res) {
      console.log('chat message: ' + res);
      addExternalChatMessage(res);
    });
  }

  joinRoom('general chat');
  var messageList = $('#chatMessages');
  var form = $('#chatForm');
  var formInput = $('#chatMessage');
  $(form).submit(function(event) {
    var inputVal = formInput.val();
    formInput.val(''); 
    event.preventDefault();
    sendChatMessage('general chat', inputVal);
    addOwnChatMessage(inputVal);
    return false;
  });
});
