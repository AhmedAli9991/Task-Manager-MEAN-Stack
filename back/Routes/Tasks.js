var express = require("express");
var router = express.Router();
var Tasks = require("../Controler/Tasks");

router.route("/add").post(Tasks.Add);
router.route("/view").get(Tasks.ViewAll);
router.route("/:id").get(Tasks.ViewOne).delete(Tasks.delete).put(Tasks.update);

module.exports = router;
