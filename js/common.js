/*-----menu-----------------------------------------*/
clickMenu = function(menu) {
	var getEls = document.getElementById(menu).getElementsByTagName("LI");
	var getAgn = getEls;

	for (var i=0; i<getEls.length; i++) {
			getEls[i].onclick=function() {
				for (var x=0; x<getAgn.length; x++) {
				getAgn[x].className=getAgn[x].className.replace("unclick", "");
				getAgn[x].className=getAgn[x].className.replace("click", "unclick");
				}
			if ((this.className.indexOf('unclick'))!=-1) {
				this.className=this.className.replace("unclick", "");;
				}
				else {
				this.className+=" click";
				}
			}
		}
	}
/*-----js-slider_mini*/	
jQuery(function(){
	jQuery(".slider-mini__gallery").jCarouselLite({
	btnNext: ".slider-mini__next",
	btnPrev: ".slider-mini__prev"
	});
});