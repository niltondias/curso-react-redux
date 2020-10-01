const mongoose = require('mongoose')

mongoose.Promise = global.Promise

modules.export = mongoose.connect('mongodb://localhost/todo')