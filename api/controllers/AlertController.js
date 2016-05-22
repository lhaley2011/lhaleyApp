/**
 * AlertController
 *
 * @description :: Server-side logic for managing alerts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  send: function (req, res) {
console.log("alert controller");
    if (!req.param('data') || !req.param('connection')) {
        var msg = 'No `data` or  `connection` specified';
        sails.log.error('Chat :: ' + msg + ': - ' + req.param('connection') + ' - ' + req.param('data'));
        return res.badRequest(msg);
    }
    var info = 'alert sent "' + req.param('data') + '" from `' + req.param('connection');
    sails.log.info('Socket.io - Alert :: ' + info);
    sails.sockets.blast(req.param('connection'), req.param('data'));
    return res.ok(req.allParams());
  }
};

