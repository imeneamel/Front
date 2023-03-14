var express = require("express");
var app = express();

app.use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const apiServ = {

start: function(port) {
        app.use(express.json());

        app.get("/test", function(req,res){
            const testObj = {
                test: "test"
            };

            console.log("call done");
            res.json(testObj);
        });

        app.get("/api/customers", function(req,res) {
            const customers = business.getAllCustomers();
            res.json(customers);
        });

        app.listen(port, function() {
            console.log("Server running on port " + port);
        });
    }
    
};

module.exports = apiServ;

