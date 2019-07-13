function myFunction() {


				var videocontainer = document.getElementById("vid");
				var videosource = document.getElementById("mp4video");
				var el = document.getElementById("skipMessage");
				var A1 = document.getElementById("A1");
				var A2 = document.getElementById("A2");
				var A1_1 = document.getElementById("A1_1");
				var A1_2 = document.getElementById("A1_2");
				var x = document.getElementById("myDIV");
                                var newposter = "pitch-black-image.png";
				var newmp4;


	document.getElementById("single").style.display="none"; 
    document.getElementById("options").style.display="none"; 
    document.getElementById("credits").style.display="none";

    document.getElementById("vid").play();

    videosource.setAttribute("poster",newposter);

	document.getElementById("vid").addEventListener("timeupdate", function(){
	
							if((this.currentTime >= 111) && (this.currentTime <=111.8)){

							this.currentTime = 111.9;
							document.getElementById("vid").pause();

							document.getElementById("skipMessage").style.display="block";


							}

						    if(this.currentTime >= 113.6) {

							
							document.getElementById("choiceA").style.display="block";
							
							document.getElementById("vid").pause();

                                                        document.getElementById("layer1").style.display="block";

						}

                                                if (window.getComputedStyle(layer1).display === "block") {

						if((this.currentTime >= 25.6) && (this.currentTime <= 26.4)) {
						
						this.currentTime=26.5;
						document.getElementById("vid").pause();
						document.getElementById("skipMessage").style.display="block";
						}
						
						if((this.currentTime >= 31.2) && (this.currentTime <= 32.2)) {
							
									document.getElementById("vid").pause();
									document.getElementById("choiceA1").style.display="block";
							
						}
                                                }

                                                if (el.addEventListener) {
								el.addEventListener("click", function() {
									
									this.currentTime+=1;
									document.getElementById("vid").play();
									document.getElementById("skipMessage").style.display="none";
									
									
								}, false);
						}

                                                if (A1.addEventListener) {
							A1.addEventListener("click", function() {

								this.currentTime=115;
								document.getElementById("choiceA").style.display="none";

								newmp4 = "videos/A1.mp4";

									videocontainer.pause();
									videosource.setAttribute("src", newmp4);
									videocontainer.load();
									videocontainer.play();
                                                                        document.getElementById("layer1").style.display="block";

								}, false);
							}

						if (A2.addEventListener) {
							A2.addEventListener("click", function() {
								
										
								document.getElementById("choiceA").style.display="none";

										newmp4 = "videos/A2.mp4";

											videocontainer.pause();
											videosource.setAttribute("src", newmp4);
											videocontainer.load();
											videocontainer.play();
                                                                                        document.getElementById("layer1").style.display="block";

									}, false);
						}
	    					
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
});
}

