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
    res.locals.scripts = [
        'js/exclude/home-image-load.js'
    ];
    res.locals.styles = [
        'styles/exclude/home.css'
    ];
    return res.view('home');
  }
};
