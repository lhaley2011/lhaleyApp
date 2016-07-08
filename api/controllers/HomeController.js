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
    return res.view('home', {
      scripts: ['js/exclude/home-image-load.js'],
      styles: ['styles/exclude/home.css']
    });
  }
};
