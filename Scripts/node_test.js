var request = require('request');

request.get("https://app.infinityfree.net/accounts/epiz_26833263", {json: true}, function(err, res, body) {
  if(err) throw err;
  else {
    console.log("Connected");
  }
})
