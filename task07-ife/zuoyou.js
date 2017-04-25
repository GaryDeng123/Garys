
	function $(id)
	{
		return document.getElementById(id);
	}
//diyige
	$("nav14").onmouseover = function()
	{
		$("nav14").style.opacity = 0.5;
		$("nav12").style.opacity = 0;
	}
	$("nav14").onmouseout = function()
	{
		$("nav14").style.opacity = 0;
		$("nav12").style.opacity = 0;
	}
	$("nav12").onmouseover = function()
	{
		$("nav12").style.opacity = 0.5;
		$("nav14").style.opacity = 0;
	}
	$("nav12").onmouseout = function()
	{
		$("nav14").style.opacity = 0;
		$("nav12").style.opacity = 0;
	}
//dierge
	$("nav21").onmouseover = function()
	{
		$("nav21").style.opacity = 0.5;
		$("nav23").style.opacity = 0;
	}
	$("nav21").onmouseout = function()
	{
		$("nav21").style.opacity = 0;
		$("nav23").style.opacity = 0;
	}
	$("nav23").onmouseover = function()
	{
		$("nav23").style.opacity = 0.5;
		$("nav21").style.opacity = 0;
	}
	$("nav23").onmouseout = function()
	{
		$("nav23").style.opacity = 0;
		$("nav21").style.opacity = 0;
	}
//disange
	$("nav32").onmouseover = function()
	{
		$("nav32").style.opacity = 0.5;
		$("nav34").style.opacity = 0;
	}
	$("nav32").onmouseout = function()
	{
		$("nav32").style.opacity = 0;
		$("nav34").style.opacity = 0;
	}
	$("nav34").onmouseover = function()
	{
		$("nav34").style.opacity = 0.5;
		$("nav32").style.opacity = 0;
	}
	$("nav34").onmouseout = function()
	{
		$("nav32").style.opacity = 0;
		$("nav34").style.opacity = 0;
	}
//disige
	$("nav41").onmouseover = function()
	{
		$("nav41").style.opacity = 0.5;
		$("nav43").style.opacity = 0;
	}
	$("nav41").onmouseout = function()
	{
		$("nav41").style.opacity = 0;
		$("nav43").style.opacity = 0;
	}
	$("nav43").onmouseover = function()
	{
		$("nav43").style.opacity = 0.5;
		$("nav41").style.opacity = 0;
	}
	$("nav43").onmouseout = function()
	{
		$("nav43").style.opacity = 0;
		$("nav41").style.opacity = 0;
	}
//diyige
	$("nav14").onclick = function()
	{
		show4();
	}
	$("nav12").onclick = function()
	{
		show2();
	}
//dierge
	$("nav21").onclick = function()
	{
		show1();
	}
	$("nav23").onclick = function()
	{
		show3();
	}
//disange
	$("nav32").onclick = function()
	{
		show2();
	}
	$("nav34").onclick = function()
	{
		show4();
	}
//disige
	$("nav41").onclick = function()
	{
		show1();
	}
	$("nav43").onclick = function()
	{
		show3();
	}

	function show1()
	{
		$("dot1").style.color = "#e74f4d";
		$("dot2").style.color = "#ddd";
		$("dot3").style.color = "#ddd";
		$("dot4").style.color = "#ddd";
		$("group1").style.webkitTransform = "scale(1,1)";
		$("group2").style.webkitTransform = "scale(0,0)";		
		$("group3").style.webkitTransform = "scale(0,0)";	
		$("group4").style.webkitTransform = "scale(0,0)";	
	}
	function show2()
	{
		$("dot2").style.color = "#e74f4d";
		$("dot1").style.color = "#ddd";
		$("dot3").style.color = "#ddd";
		$("dot4").style.color = "#ddd";
		$("group2").style.webkitTransform = "scale(1,1)";
		$("group1").style.webkitTransform = "scale(0,0)";		
		$("group3").style.webkitTransform = "scale(0,0)";	
		$("group4").style.webkitTransform = "scale(0,0)";			
	}
	function show3()
	{
		$("dot3").style.color = "#e74f4d";
		$("dot2").style.color = "#ddd";
		$("dot1").style.color = "#ddd";
		$("dot4").style.color = "#ddd";
		$("group3").style.webkitTransform = "scale(1,1)";
		$("group2").style.webkitTransform = "scale(0,0)";		
		$("group1").style.webkitTransform = "scale(0,0)";	
		$("group4").style.webkitTransform = "scale(0,0)";	
	}
	function show4()
	{
		$("dot4").style.color = "#e74f4d";
		$("dot2").style.color = "#ddd";
		$("dot3").style.color = "#ddd";
		$("dot1").style.color = "#ddd";
		$("group4").style.webkitTransform = "scale(1,1)";
		$("group2").style.webkitTransform = "scale(0,0)";		
		$("group3").style.webkitTransform = "scale(0,0)";	
		$("group1").style.webkitTransform = "scale(0,0)";	
	}




	$("dot1").onclick = function()
	{
		show1();
	}
	$("dot2").onclick = function()
	{
		show2();
	}
	$("dot3").onclick = function()
	{
		show3();
	}
	$("dot4").onclick = function()
	{
		show4();
	}

