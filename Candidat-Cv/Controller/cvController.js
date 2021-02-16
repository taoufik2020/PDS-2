const Cv = require("../models/Cv");
const formidable = require("formidable");
const fs = require("fs");
exports.createCv = (req, res) => {
  // verifier es ce que upload marche ou pas

  let form = new formidable.IncomingForm();

  form.keepExtensions = true;

  form.parse(req, (errr, fields, files) => {
    if (errr) {
      return res.json({
        error: "image not uploaded",
      });
    }
    // fields contient body
    let cv = new Cv(fields);
    console.log("fields.photo", fields);
    if (files.photo) {
      if (files.photo.size > Math.pow(10, 8)) {
        return res.send({
          error: "size should be less then 10",
        });
      }
      //files.photo.path existe dans la memoire
      cv.photo.data = fs.readFileSync(files.photo.path);
      cv.photo.contentType = files.photo.type;
    }

    cv.save()
      .then((cv) => {
        res.send({
          cv,
        });
      })
      .catch((error) => {
        return res.json({
          error,
        });
      });
  });
};
