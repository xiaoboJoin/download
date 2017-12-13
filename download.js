var http = require('http');
var fs = require('fs');
var https = require('https');

var filename = 'pic.png';

var file = fs.createWriteStream("video.mp4");
//var url = 'http://124.14.14.211/6973DE08D394871C75F19676A/03000A01005A29CE3AE8C201233E8D57EFDC0E-FEAF-D8B9-7B3A-E43E7F91A591.mp4?ali_redirect_domain=vali-dns.cp31.ott.cibntv.net&ccode=0502&duration=71&expire=18000&psid=1bec849b39c09855fd19402e4a790b33&ups_client_netip=65f4876c&ups_ts=1513177620&ups_userid=355948493&utid=HIsMEiMKG1kCAWX0h1EKryf%2F&vid=XMzIxMzgxMDYyNA%3D%3D&vkey=A060f96dcf65f37e2e4c459599d178df0';

var url  ='https://www.tumblr.com/video/jayson250/168498021555/700/';
// var request = http.get("https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=842778058,3301014873&fm=173&s=9941E91748336486B604C9C30300F0A3&w=300&h=225&img.JPEG", function(response) {
//   response.pipe(file);
// });

var request = https.get(url, function(response) {
    response.pipe(file);
  });
