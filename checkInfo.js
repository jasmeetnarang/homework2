function checkPassword(event){
	var password = document.getElementById("password").value;	
	if(password === "12345678"){
		document.getElementById("submitted").innerHTML = "Welcome Back";
		event.preventDefault();
		return true;
	}
	else {	
		alert("Password did not match");
		return false;
	}
	
}

