const fs = require("fs");
// const proc = require("process");

const filename = "/data/customers.json";

let dataLayer = {

    getAllCustomers : function() {
return dataLayer.getAllCustomers();
    },

    getCustomers : function(number, page) {
        if(number === undefined || page === undefined){
            number = defaultNumber;
            page = defaultPage;
        }

        resCustomers.page = page;
        resCustomers.numberByPage = number;
        resCustomers.totalPage = Math.cell(resCustomers.total/number);

        return resCustomers;
    },

    getNextId : function(){
        //
    },

    addCustomer : function(customer){
        //
    },

    getCustomers : function(number, page){
        let rawdata = fs.readFileSync(filename);
        let customers = JSON.parse(rawdata);

        const total = customers.length;

        if (number && page){
            customers = customers.slice((page - 1) * number, page);

        }

        const result = {
            total : total,
            result : customers
        };

        return result;
    }
};

module.exports = dataLayer;