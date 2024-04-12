const path = require('path')
const rootDir = require('../util/path');

exports.contactuscontroller = (req, res, next) => {

    res.sendFile(path.join(rootDir, "views", "contact-us.html"));
   
  }
  exports.successcontroller = (req, res, next) => {
  
    res.send("Form successfuly filled")
  }