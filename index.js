const customers = [
    {"id":1,"email":"isidro_von@hotmail.com","first":"Torrey","last":"Veum","company":"Google","created_at":"2014-12-25T04:06:27.981Z","country":"Switzerland"},
    {"id":2,"email":"frederique19@gmail.com","first":"Micah","last":"Sanford","company":"Google","created_at":"2014-07-03T16:08:17.044Z","country":"Democratic People's Republic of Korea"},
    {"id":3,"email":"fredy54@gmail.com","first":"Hollis","last":"Swift","company":"Microsoft","created_at":"2014-08-18T06:15:16.731Z","country":"Tunisia"},
    {"id":4,"email":"braxton29@hotmail.com","first":"Perry","last":"Leffler","company":"Microsoft","created_at":"2014-07-10T11:31:40.235Z","country":"Chad"},
    {"id":5,"email":"turner59@gmail.com","first":"Janelle","last":"Hagenes","company":"Amazon","created_at":"2014-04-21T15:05:43.229Z","country":"Swaziland"},
    {"id":6,"email":"halie47@yahoo.com","first":"Charity","last":"Bradtke","company":"Google","created_at":"2014-09-21T21:59:18.892Z","country":"Lebanon"},
    {"id":7,"email":"loren_yundt@gmail.com","first":"Dejah","last":"Kshlerin","company":"Facebook","created_at":"2014-11-11T12:20:53.154Z","country":"Egypt"},
    {"id":8,"email":"kenton_macejkovic80@hotmail.com","first":"Ellen","last":"Schaefer","company":"Google","created_at":"2014-07-23T02:00:28.649Z","country":"Israel"},
    {"id":9,"email":"pascale5@yahoo.com","first":"Sven","last":"Funk","company":"Facebook","created_at":"2014-04-11T12:43:28.977Z","country":"Macao"},
    {"id":10,"email":"frank34@yahoo.com","first":"Ryleigh","last":"Cole","company":"Google","created_at":"2014-10-18T05:50:28.626Z","country":"Congo"},
    {"id":11,"email":"harry65@hotmail.com","first":"Cooper","last":"Grimes","company":"Apple","created_at":"2014-04-29T06:41:20.214Z","country":"Reunion"},
    {"id":12,"email":"kiana.schowalter@gmail.com","first":"Esteban","last":"Homenick","company":"Google","created_at":"2014-12-29T18:46:35.269Z","country":"Guadeloupe"},
    {"id":13,"email":"josh_batz60@gmail.com","first":"Lucinda","last":"Waters","company":"Amazon","created_at":"2015-03-13T12:15:50.844Z","country":"Lebanon"},
    {"id":14,"email":"zula36@hotmail.com","first":"Jarvis","last":"Grimes","company":"Amazon","created_at":"2014-04-23T23:56:11.268Z","country":"Ghana"}];

addEventListener("DOMContentLoaded",
    function(){
        console.log("Document chargé");
        $("#customers").loadTemplate($("#tpmCustomer"),customers);
    });
