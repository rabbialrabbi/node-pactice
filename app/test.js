var fs = require('fs');
var http= require('https');

fs.writeFile(__dirname +"/index.html", "<h1>Hello World</h1>", function(error){
	if(error){
		return console.log(error);
	}else{
		return console.log("Congrate");
	}
});

var photoLink= 'https://imge.com/wp-content/uploads/2019/02/IMGE-Social-Share.png';
http.get(photoLink, function(process){
	process.pipe(fs.createWriteStream(__dirname+"/image.jpg"))
});

