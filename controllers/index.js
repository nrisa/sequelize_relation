const { User, Favorit } = require("../models/index.js");
 
module.exports.tes = (req, res) => {
    User.findAll()
        .then(result => {
            res.status(200).json({
                message: "ok!",
                data: result
            })
        })
  }

  module.exports.relasi = (req, res) => {
    User.findAll({
        include: [{model: Favorit}]
      })
      .then(result => {
        res.status(200).json({
            message: "ok!",
            data: result
        })
      })
  }
 
// Create product baru
module.exports.create = (req, res) => {
    User.create(req.body)
        .then(result => {
            res.status(200).json({
                message: "User Created",
                data: result
            })
        })
}

module.exports.createFavor = (req, res) => {
    Favorit.create(req.body)
        .then(result => {
            res.status(200).json({
                message: "Favorit Created",
                data: result
            })
        })
}
 