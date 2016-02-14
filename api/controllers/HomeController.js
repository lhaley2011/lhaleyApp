/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  // Image: function (req, res) {
  //   return res.attachment('/images/home_landscape.gif');
  // },

  Home: function (req, res) {
    return res.redirect('/');
  },

  /**
   * `HomeController.Summary()`
   */
  Summary: function (req, res) {
    // console.log(req);
    return res.view('home');
  }
};
