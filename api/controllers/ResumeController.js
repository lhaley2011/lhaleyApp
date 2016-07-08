/**
 * ResumeController
 *
 * @description :: Server-side logic for managing resumes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `ResumeController.Summary()`
   */
  Summary: function (req, res) {
    return res.view('resume', {
      styles: ['styles/exclude/resume.css']
    });    
  }
}
