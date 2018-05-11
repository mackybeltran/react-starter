const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
    }
  })
})

    return app
  }
}
