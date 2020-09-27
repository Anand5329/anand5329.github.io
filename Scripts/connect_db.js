var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db4free.net",
  user: "anand_doshi",
  password: "SD8CgHefJD$zuu8",
  database: "anand_doshi_blog",
  port: "3306"
});

  con.connect(function(err){
    if(err) throw err;
    else {
      console.log("Connected");
    }
  });
