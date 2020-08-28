const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');
const { SearchSource } = require('jest');



const dbRoute = 'mongodb://visitor:123456@203.145.221.232:27017/softwareMarket';
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log("connected to the database");
    //mongodb的表格名稱最後要加s, mongoose的表格名稱要少一個s

    var Model = mongoose.model('software_data', new mongoose.Schema({
        "name": { type: String, require: true },
        "domain": { type: String },
        "category": { type: String },
        "sub category": { type: String },
        "version": { type: String },
        "description": { type: String },
        "parallelized": { type: Boolean },
        "accelerator_support": { type: Boolean },
        "platform": { type: String },
        "virtualized": { type: String },
        "recipe": { type: String },
        "last successful update": { type: String },
        "web site": { type: String },
        "citation": { type: String }
    }));
    
    // //Insert
    // const content_i = { "name": "Centos", "domain": "public", "version": "8.0.1905", "web site": "https://wiki.centos.org/FrontPage"}
    // const stuffInsert = new Model(content_i)
    // stuffInsert.save(function(err){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log("Successfully inserted the data")
    //     }
    // });
    //Search

    const content_s = { name: "Mysql" };
    search(content_s, {}, Model, "result", "Software data file written！");
    
    
    
    function search(content, field, model, filename, info) {
        model.find(content, field, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                let str = JSON.stringify(result[0],null,"\t")
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

// foo().then()
mongoose.connection.then(() => mongoose.disconnect());
mongoose.connection.catch(err => console.log('cannot connect'));




