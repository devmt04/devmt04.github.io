function navbarStatus(){
	if(window.pageYOffset >= document.getElementById("start").offsetTop && window.pageYOffset < document.getElementById("start").offsetTop + document.getElementById("start").offsetHeight){
		document.getElementById("navbar-start").style.color = "#A867FF";
		document.getElementById("navbar-about").style.color = "white";
		document.getElementById("navbar-work").style.color = "white";
		document.getElementById("navbar-contact").style.color = "white";	
	}else if(window.pageYOffset >= document.getElementById("about").offsetTop && window.pageYOffset < document.getElementById("about").offsetTop + document.getElementById("about").offsetHeight){
		document.getElementById("navbar-start").style.color = "white";
		document.getElementById("navbar-about").style.color = "#A867FF";
		document.getElementById("navbar-work").style.color = "white";
		document.getElementById("navbar-contact").style.color = "white";	
	}else if(window.pageYOffset >= document.getElementById("work").offsetTop && window.pageYOffset < document.getElementById("work").offsetTop + document.getElementById("work").offsetHeight ){
		document.getElementById("navbar-start").style.color = "white";
		document.getElementById("navbar-about").style.color = "white";
		document.getElementById("navbar-work").style.color = "#A867FF";
		document.getElementById("navbar-contact").style.color = "white";	
	}
	// }else if(window.pageYOffset <= window.scrollMaxY && window.pageYOffset >= document.getElementById('contact').offsetHeight){
	// 	document.getElementById("navbar-start").style.color = "white";
	// 	document.getElementById("navbar-about").style.color = "white";
	// 	document.getElementById("navbar-work").style.color = "white";
	// 	document.getElementById("navbar-contact").style.color = "#A867FF";	
	// };

}

function scrollToSection(section, duration){
    const startingY = window.pageYOffset;
	const diff = section.offsetTop - startingY;
	let startTime;

	window.requestAnimationFrame(function step(timestamp) {
	  if (!startTime) startTime = timestamp;
	  const timeElapsed = timestamp - startTime;
	  const percentage = Math.min(timeElapsed / duration, 1);

	  window.scrollTo(0, startingY + diff * percentage);

	  if (timeElapsed < duration) {
	    window.requestAnimationFrame(step);
	  }
	});
}


about_area = document.getElementById('about-text-code');
about_area_lines = document.getElementsByClassName("about-text-code-line");
numberOfLines = about_area_lines.length;
about_linedisplay = document.getElementById("about-text-linenumber");


for(let i = 1; i<numberOfLines+1;i++){
	about_linedisplay.innerHTML += "<span>"+i+"</span>";
}


about_linedisplay_lines = about_linedisplay.getElementsByTagName("span");


for(let i = 0; i<numberOfLines;i++){
	// height = about_area_lines[i].offsetHeight;
	// getComputedStyle(about_area_lines[1]).height
	singleLineHeight = parseInt(getComputedStyle(about_area_lines[0]).height);
	newlineFactor = parseInt(getComputedStyle(about_area_lines[i]).height) / singleLineHeight;
	about_linedisplay_lines[i].style.marginBottom += (newlineFactor-1)*singleLineHeight+"px";
}


const resizeObserver = new ResizeObserver(entries => {
  // const newWidth = entries[0].contentRect.width;
  for(let i = 0; i<numberOfLines;i++){
	singleLineHeight = parseInt(getComputedStyle(about_area_lines[0]).height);
	newlineFactor = parseInt(getComputedStyle(about_area_lines[i]).height) / singleLineHeight;
	about_linedisplay_lines[i].style.marginBottom = (newlineFactor-1)*singleLineHeight+"px";
  }
});
resizeObserver.observe(about_area);


function focuslinenumber(index){
	about_linedisplay_lines[index].style.color = "#C0C0C0";
}

function defocuslinenumber(index){
	about_linedisplay_lines[index].style.color = "#7D7D7D";
}

// animate__animated animate__fadeInRight
document.addEventListener("DOMContentLoaded", function() {
	isListnerPause = false;
	document.getElementById("start").addEventListener('wheel', function(event){
		if(!isListnerPause){	
			isListnerPause = true;
			setTimeout(function (){
				isListnerPause = false;
			}, 500);	

			let delta = event.deltaY;
		 	if(delta>0){
		        scrollToSection(document.getElementById("about"), 500);
		 	}
		}
	});

	window.addEventListener("scroll", function (event) {
		const elements = document.getElementsByClassName("about-text-code-line");
		for(let i = 0; i<elements.length; i++){
			if(elements[i].classList.contains("animate__animated") == false){
				if (elements[i].getBoundingClientRect().top <= window.innerHeight && elements[i].getBoundingClientRect().bottom >= 0) {
		  				elements[i].style.visibility = "visible";
			  			elements[i].className+=" animate__animated animate__fadeInRight";
				}
			}

		}

		const workItems = document.getElementsByClassName("work-items");
		for(let i = 0; i<workItems.length; i++){
			if(workItems[i].classList.contains("animate__animated") == false){
				if (workItems[i].getBoundingClientRect().top  <= window.innerHeight  && workItems[i].getBoundingClientRect().bottom >= 0) {
	  				workItems[i].className+=" animate__animated animate__flipInX";
				}

			}
		}
	});



	navbarStatus();
	window.addEventListener("scroll", navbarStatus);
});