function myFunction() {


				var videocontainer = document.getElementById("vid");
				var videosource = document.getElementById("mp4video");
				var el = document.getElementById("skipMessage");
				var newmp4;


	document.getElementById("single").style.display="none"; 
    document.getElementById("options").style.display="none"; 
    document.getElementById("credits").style.display="none";

    document.getElementById("vid").play();

	document.getElementById("vid").addEventListener("timeupdate", function(){
	
	if((this.currentTime >= 113) && (this.currentTime <= 113.9) && (document.getElementById("skipMessage").style.display = "none")) {
	
	
	this.currentTime=112;
	document.getElementById("vid").pause();
	
	document.getElementById("skipMessage").style.display="block";
	
	
	var el = document.getElementById("skipMessage");

		if (el.addEventListener) {
			el.addEventListener("click", function() {
				
				this.currentTime=112.5;
				document.getElementById("skipMessage").style.display="none";
				document.getElementById("vid").play();
				
			}, false);
		}
			
	
	}
	
    if(this.currentTime >= 113.6) {
	
	
	var el = document.getElementById("skipMessage");
	
		document.getElementById("choiceA").style.display="block";
        document.getElementById("vid").pause();
		
		var A1 = document.getElementById("A1");
		var A2 = document.getElementById("A2");
		if (A2.addEventListener) {
			A2.addEventListener("click", function() {
				document.getElementById("choiceA").style.display="none";
				
				newmp4 = "videos/A2.mp4";
				
					videocontainer.pause();
					videosource.setAttribute("src", newmp4);
					videocontainer.load();
					videocontainer.play();
				
			}, false);
		}
		if (A1.addEventListener) {
			A1.addEventListener("click", function() {
				
				this.currentTime=112.5;
				document.getElementById("choiceA").style.display="none";
				
				newmp4 = "videos/A1.mp4";
				
					videocontainer.pause();
					videosource.setAttribute("src", newmp4);
					videocontainer.load();
					videocontainer.play();
				
				}, false);
		
		});
						
						if((this.currentTime >= 25.6) && (this.currentTime <= 26.4)) {
						
						document.getElementById("vid").pause();
						document.getElementById("skipMessage").style.display="block";
						
							if (el.addEventListener) {
								el.addEventListener("click", function() {
									
									this.currentTime=26.7;
									document.getElementById("vid").play();
									document.getElementById("skipMessage").style.display="none";
									
									
								}, false);
							}
						
						}
						
						if((this.currentTime >= 31.2) && (this.currentTime <= 32)) {
						
								var A1_1 = document.getElementById("A1_1");
							
									document.getElementById("vid").pause();
									document.getElementById("choiceA1").style.display="block";
							
							if (A1_1.addEventListener) {
								A1_1.addEventListener("click", function() {
									
									this.currentTime=32.3;
									document.getElementById("choiceA1").style.display="none";
									document.getElementById("vid").play();
									
									newmp4 = "videos/A1_1.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
									
								}, false);
							}
							
							var A1_2 = document.getElementById("A1_2");
							
							if (A1_2.addEventListener) {
								A1_2.addEventListener("click", function() {
									
									this.currentTime=32.3;
									document.getElementById("choiceA1").style.display="none";
									document.getElementById("vid").play();
									
									newmp4 = "videos/A2.mp4";
				
										videocontainer.pause();
										videosource.setAttribute("src", newmp4);
										videocontainer.load();
										videocontainer.play();
									
								}, false);
							}
						}
}
});
}
