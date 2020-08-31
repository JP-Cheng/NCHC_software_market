const mongoose = require('mongoose');
const fs = require('fs');

const dbRoute = 'mongodb://visitor:123456@203.145.221.232:27017/softwareMarket';
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log("connected to the database");
    var ProgressModel = mongoose.model('autobuild_event_state', new mongoose.Schema({
        "name": { type: String, require: true },
        "triggerTime": String,
        "sourceUpdate": Boolean,
        "scriptUpdate": Boolean,
        "fetch": Boolean,
        "build": Boolean,
        "commit": Boolean,
        "version": String,
        "lastUpdate": String,
        "lastSuccessfulUpdate": String
    }));
    const p_content_s = { name: "Centos" };
    search(p_content_s, {}, ProgressModel, "progress", "Progress file written!");

    function search(content, field, model, filename, info) {
        model.find(content, field, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                let str = JSON.stringify(result[0], null, "\t")
                fs.writeFile("./" + filename + ".json", str, function (err) {
                    if (err) {
                        console.log(err)
                    }
                    console.log(info)
                })
            }
        });
    };
});

mongoose.connection.then(() => mongoose.disconnect());
mongoose.connection.catch(err => console.log('cannot connect'));
