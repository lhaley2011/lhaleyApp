/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `ProjectsController.Summary()`
   */
  Summary: function (req, res) {
    return res.view('projects');
  }
};
