function zoom()
{

		thumb.setAttribute("class","thumb grande");
		celu.setAttribute("class","visible ");
		celu.setAttribute("height","150");
}

function otro()
{

		thumb.setAttribute("class","thumb ");
		celu.setAttribute("class","invisible");
		celu.setAttribute("height","120");
}

function zoom2()
{

		thumb2.setAttribute("class","thumb grande");
		celu2.setAttribute("class","visible ");
}

function otro2()
{

		thumb2.setAttribute("class","thumb ");
		celu2.setAttribute("class","invisible");
}

function zoom3()
{

		thumb3.setAttribute("class","thumb grande");
		celu3.setAttribute("class","visible ");
}

function otro3()
{

		thumb3.setAttribute("class","thumb ");
		celu3.setAttribute("class","invisible");
}

function zoom4()
{

		thumb4.setAttribute("class","thumb grande");
		celu4.setAttribute("class","visible ");
}

function otro4()
{

		thumb4.setAttribute("class","thumb ");
		celu4.setAttribute("class","invisible");
}

function zoom5()
{

		thumb5.setAttribute("class","thumb grande");
		celu5.setAttribute("class","visible ");
}

function otro5()
{

		thumb5.setAttribute("class","thumb ");
		celu5.setAttribute("class","invisible");
}

function zoom6()
{

		thumb6.setAttribute("class","thumb grande");
		celu6.setAttribute("class","visible ");
}

function otro6()
{

		thumb6.setAttribute("class","thumb ");
		celu6.setAttribute("class","invisible");
}

var thumb=document.getElementById("thumb");
var celu=document.getElementById("celu");
var thumb2=document.getElementById("thumb2");
var celu2=document.getElementById("celu2");
var thumb3=document.getElementById("thumb3");
var celu3=document.getElementById("celu3");
var thumb4=document.getElementById("thumb4");
var celu4=document.getElementById("celu4");
var thumb5=document.getElementById("thumb5");
var celu5=document.getElementById("celu5");
var thumb6=document.getElementById("thumb6");
var celu6=document.getElementById("celu6");

thumb.addEventListener("mouseover",zoom);
thumb.addEventListener("mouseout",otro);

thumb2.addEventListener("mouseover",zoom2);
thumb2.addEventListener("mouseout",otro2);

thumb3.addEventListener("mouseover",zoom3);
thumb3.addEventListener("mouseout",otro3);

thumb4.addEventListener("mouseover",zoom4);
thumb4.addEventListener("mouseout",otro4);

thumb5.addEventListener("mouseover",zoom5);
thumb5.addEventListener("mouseout",otro5);

thumb6.addEventListener("mouseover",zoom6);
thumb6.addEventListener("mouseout",otro6);


