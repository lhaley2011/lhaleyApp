/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var getSocketId = function(req) {
  return sails.sockets.getId(req);
}

var isSocket = function(req) {
  if(!req.isSocket) return false;
  return true;
}

module.exports = {
  getId: function(req, res) {
    if(!isSocket(req)) return res.badRequest('not a socket request');
    var id = getSocketId(req);
    return res.json(id); 
  },
  
  joinRoom: function(req, res) {
    if(!isSocket(req)) return res.badRequest('bad');
    if(!req.param('roomName')) return res.badRequest('room name must be provided');
    var roomName = req.param('roomName');
    sails.sockets.join(req, roomName, function(err) {
      if (err) {
        return res.serverError(err);
      }

      return res.json({
        id: getSocketId(req),
        message: 'Subscribed to room: '+roomName+'!'
      });
    }); 
  },

  leaveRoom: function(req, res) {
    if(!isSocket(req)) return res.badRequest('not a socket request');
    if(!req.param('roomName')) return res.badRequest('room name must be provided');
    var roomName = req.param('roomName');
    sails.sockets.leave(req, roomName, function(err) {
      if (err) {
        return res.serverError(err);
      }
      return res.json({
        id: getSocketId(req),
        message: 'Unsubscribed from room: '+roomName+'!'
      });
    });
  },

  send: function (req, res) {
    if (!req.param('data') || !req.param('connection') || !req.param('roomName')) {
        var msg = 'No `data`, `connection`, or `room` specified';
        sails.log.error('Chat :: ' + msg + ': - ' + req.param('connection') + ' - ' + req.param('roomName') + ' - ' + req.param('data'));
        return res.badRequest(msg);
    }
    var id = getSocketId(req);
    var info = id + ' sent "' + req.param('data') + '" from `' + req.param('connection') + '`.`' + req.param('roomName') + '`';
    sails.log.info('Socket.io - Chat :: ' + info);
    sails.sockets.broadcast(req.param('roomName'), req.param('connection'), req.param('data'), req);
    return res.ok(req.allParams());
  }, 

  /**
   * `ChatController.Summary()`
   */
  Summary: function (req, res) {
    res.locals.scripts = [
        'js/exclude/chat.js'
    ];
    return res.view('chat', {'chatConnection' : 'chat message'});
  }
};

