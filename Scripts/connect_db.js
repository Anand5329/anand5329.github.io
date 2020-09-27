var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "sql201.epizy.com",
//   user: "",//epiz_26833263
//   password: "",//asNmTTXQRRaGyO
//   database: "",//epiz_26833263_Blog
//   port: ""//3306
// });

var con = mysql.createConnection({
  host: "ensembldb.ensembl.org",
  user: "",//epiz_26833263
  password: "",//asNmTTXQRRaGyO
  database: "",//epiz_26833263_Blog
  port: ""//3306
});

  con.connect(function(err){
    if(err) throw err;
    else {
      console.log("Connected");
    }
  });
