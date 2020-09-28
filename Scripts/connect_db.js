var mysql = require('mysql');

var table_name = "Blog_Posts";

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
      fetch();
    }
  });

var fetch = function() {
  con.query("SELECT * FROM "+table_name, function(err, result) {
    if(err) throw err;
    else {
      for(var i=0; i<result.length; i++)
      {
        var row = result[i];
        console.log(row);
      }
    }
  });
};
