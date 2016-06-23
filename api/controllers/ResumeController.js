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
    return res.view('resumeOld');
  },
  
  pdf: function(req, res) {
    return res.view('resumePdf');
  },

  Test: function (req, res) {
    return res.view('resume', {resumeJSON: resume});
  }
};

var resume = [

  {
    'Title': 'Summary of Qualifications',
    'Description': 'Experience includes detailed knowledge of computer programming, with education in database skills. Experience in school has developed a hardworking and driven ability which includes completing tasks in a timely manner.',
    'Skills': {
      'Title': 'Knowledge and Skill Areas',
      'Data': [
        'Software development',
        'Object-oriented programming',
        'Problem analysis and resolution',
        'Requirement gathering and analysis',
        'Software testing and troubleshooting',
        'Technical writing skills'
      ]
    }
  },

  {
    'Title': 'Technical Knowledge and Expertise',
    'Data': [
      {
        'Title': 'Operating Systems',
        'Data': [
          'Microsoft',
          'Macintosh',
          'Linux',
          'Unix'
        ]
      },
      {
        'Title': 'Programing Languages',
        'Data': [
          'C++',
          'C#',
          'Scala',
          'Assembly',
          'PHP',
          'HTML',
          'CSS'
        ]
      },
      {
        'Title': 'Development Tools',
        'Data': [
          'Microsoft Visual Studios',
          'Xcode',
          'IntelliJ Idea'
        ]
      },
      {
        'Title': 'Certifications',
        'Data': [
          'Microsoft Office Specialist 2003 in Word and Excel'
        ]
      }
    ]
  },

  {
    'Title': 'Education',
    'Data': [
      {
        'School': 'Angelo State University',
        'Location': 'San Angelo, Texas',
        'Degree': 'Bachelor of Science in Computer Science',
        'Date': 'May 2015',
        'Minor': 'Mathematics',
        'Coursework': {
          'Title': 'Relevant Coursework',
          'Data': [
            'Java Programming',
            'Data Structures and Algorithms',
            'Theory of Algorithms',
            'Web Database Design',
            'Database Design and Management',
            'Digital Electronic Design',
            'Technical Writing',
            'Discrete Mathematics',
            'Calculus'
          ]
        }
      }
    ]
  },

  {
    'Title': 'Related Work Experience',
    'Data': [
      {
        'Title': 'Tutor',
        'Company': 'Angelo State University',
        'Location': 'San Angelo, Texas 76909',
        'StartDate': 'September 2014',
        'EndDate': 'May 2015',
        'Description': 'Help students enhance their mastery of concepts and academic skills in Computer Science.'
      },
      {
        'Title': 'Intern',
        'Company': 'Eduphoria',
        'Location': 'Austin, Texas',
        'StartDate': 'June 2015',
        'EndDate': 'August 2015',
        'Description': 'Eduphoria Intern Description'
      }
    ]
  },

  {
    'Title': '',
    'Data': [
      {
        'Name': 'Charlie Wooten Grant',
        'Date': '2011 & 2013',
        'Description': ''
      },
      {
        'Name': 'Cum Laude Honor',
        'Date': 'May 2011',
        'Description': ''
      }
    ]
  }
];
