/**
 * AboutController
 *
 * @description :: Server-side logic for managing abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `AboutController.Summary()`
   */
  Summary: function (req, res) {
    return res.view('about');
  }
};
