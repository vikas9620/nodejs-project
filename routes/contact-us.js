;
const express = require("express");

const router = express.Router();
const contactuscontroller = require("../controllers/contactus");
const successcontroller = require("../controllers/contactus");
router.get("/contact-us", contactuscontroller.contactuscontroller );
router.post("/success", successcontroller.successcontroller );

module.exports = router;
