window.onload=function(){
	var more_product=document.getElementById("more_product");
	var right_bar=document.getElementById("fix");

	more_product.onmouseover=function(){
		right_bar.style.display="block";
	}
	right_bar.onmouseover=function(){
		right_bar.style.display="block";
	}
	right_bar.onmouseout=function(){
		right_bar.style.display="none";
	}
}
