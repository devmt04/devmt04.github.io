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



// const targetSection = document.getElementById("about");
// const targetOffset = targetSection.offsetTop;
// const duration = 500;

// document.getElementById("start").addEventListener('wheel', function(event){
// 	let delta = event.deltaY;
//  	if(delta>0){
//         scrollToSection(targetOffset, duration);
//  	}
// });


// var startY;
// document.getElementById("start").addEventListener('touchstart', function(event) {
// 	startY = event.touches[0].clientY;
// });
// document.getElementById("start").addEventListener('touchmove', function(event) {
// 	let delta = event.touches[0].clientY;
//  	if(delta<startY){
//         scrollToSection(targetOffset, duration);
//  	}
// });


// function scrollToSection(targetOffset, duration) {
// 	const startingY = window.pageYOffset;
// 	const diff = targetOffset - startingY;
// 	let start;

// 	// Use requestAnimationFrame to create smooth animation
// 	window.requestAnimationFrame(function step(timestamp) {
// 	  if (!start) start = timestamp;
// 	  const timeElapsed = timestamp - start;
// 	  const percentage = Math.min(timeElapsed / duration, 1);

// 	  // Calculate new scroll position using easing function
// 	  window.scrollTo(0, startingY + diff * percentage);

// 	  // Continue scrolling until duration is reached
// 	  if (timeElapsed < duration) {
// 	    window.requestAnimationFrame(step);
// 	  }
// 	}
// );
// }