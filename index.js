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