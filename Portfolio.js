const SecondBlock = document.querySelector(".SecondBlock");
const SB1 = document.querySelector("#SB1 img");
const SB2= document.querySelector("#SB2");
const Links = document.querySelector(".ul");
const Menu = document.querySelector('.burger');




Menu.addEventListener("click",()=>{
	
	console.log(typeof(Links.style.visibility))
	if (Links.style.visibility === ''){
		Links.style.visibility = 'visible';
	}else if(Links.style.visibility === 'hidden'){
		Links.style.visibility = 'visible';
	}else if(Links.style.visibility === 'visible'){
		Links.style.visibility = 'hidden';
	}

});

if(window.outerWidth > 720){
	SecondBlock.onmouseover = ()=>{
		SB1.style.animationName = 'SB1';
		SB1.style.animationDuration = '1s';
		SB1.style.visibility = 'visible';
		SB2.style.animationName = 'SB2';
		SB2.style.animationDuration = '1s';
		SB2.style.visibility = 'visible';
	};
}