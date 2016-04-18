/*---------- Canvas Rectangle --------------*/
	var rect = document.getElementById("rectCanvas");
	var rectx = rect.getContext("2d");	
	rectx.rect(20, 20, 100, 100);
	rectx.shadowBlur=30;
	rectx.shadowOffsetX=10;
	rectx.shadowColor="#1d1d1d";
	rectx.fillStyle = "red";
	rectx.fill();

/*---------- Canvas Circle --------------*/
	var circ = document.getElementById("cirCanvas");
	var circx = circ.getContext("2d");
	circx.beginPath();
    circx.arc(70, 70, 60, 0, 2 * Math.PI);
	circx.shadowBlur=20;
	circx.shadowColor="#1d1d1d";
    circx.fillStyle = "green";
    circx.fill();    

/*---------- Canvas Text --------------*/
	var mText = document.getElementById("textCanvas");
	var textx = mText.getContext("2d");
	textx.font="30px Comic Sans MS";	
	textx.fillStyle = "teal";
	textx.fillText("Hello......",10,40);
	
	 

