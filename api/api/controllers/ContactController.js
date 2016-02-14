/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `ContactController.Summary()`
   */
  Summary: function (req, res) {
    return res.view('contact');
  }
};
