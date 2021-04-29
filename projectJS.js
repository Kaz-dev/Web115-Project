function createResume()
{
	var x = document.getElementById("email").value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		alert("Not a valid e-mail address");
		return false;
		}
		else{
		var userName = document.getElementById("userName").value;
		var city = document.getElementById("city").value;
		var state = document.getElementById("state").value;
		var zip = document.getElementById("zip").value;
		var phoneNo = document.getElementById("phoneNo").value;
		var email = document.getElementById("email").value;
		var twitter = document.getElementById("twitter").value;
		var personalData = document.getElementById("personalData").value;
		var codingSkill1 = document.getElementById("codingSkill1").value;
		var codingSkill2 = document.getElementById("codingSkill2").value;
		var skillDesc1 = document.getElementById("skillDesc1").value;
		var skillDesc2 = document.getElementById("skillDesc2").value;
		var technicalskills = document.getElementById("technicalskills").value;
		var technicalskills2 = document.getElementById("technicalskills2").value;
		var technicalskills3 = document.getElementById("technicalskills3").value;
		var technicalskills4 = document.getElementById("technicalskills4").value;
		var technicalskills5 = document.getElementById("technicalskills5").value;
		var technicalskills6 = document.getElementById("technicalskills6").value;
		var careerObj = document.getElementById("careerObj").value;
		var college = document.getElementById("college").value;
		var colLoc = document.getElementById("colLoc").value;
		var major = document.getElementById("major").value;
		var gpa = document.getElementById("gpa").value;
		var jobTitle1 = document.getElementById("jobTitle1").value;
		var jobTitle2 = document.getElementById("jobTitle2").value;
		var jobTitle3 = document.getElementById("jobTitle3").value;
		var job1 = document.getElementById("job1").value;
		var job2 = document.getElementById("job2").value;
		var job3 = document.getElementById("job3").value;
		var experience = document.getElementById("exp1").value;
		var fromDate1 = document.getElementById("fromDate1").value;
		var toDate1 = document.getElementById("toDate1").value;
		var experience1 = document.getElementById("exp2").value;
		var fromDate2 = document.getElementById("fromDate2").value;
		var toDate2 = document.getElementById("toDate2").value;
		var experience2 = document.getElementById("exp3").value;
		var fromDate3 = document.getElementById("fromDate3").value;
		var toDate3 = document.getElementById("toDate3").value;


		myText = ("<html>\n<head>\n<title>Resume</title>\n<link rel='stylesheet' type='text/css' href='subStyle.css' media='all' />\n<link rel='stylesheet' type='text/css' href='resumeStyle.css'>\n</head>\n<body>\n");
		myText += ("<div id='doc2' class='yui-t7'>\n<div id='inner'>");
		myText += ("<div id='hd'><div class='yui-gc'><div class='yui-u first'><h1>"+userName+"</h1><h2>"+city+", "+state+" "+zip+"</h2></div><div class='yui-u'><div class='contact-info'><h3><a href='https://twitter.com/"+twitter+"'>@"+twitter+"</a></h3><h3><a href='mailto:"+email+"'>"+email+"</a></h3><h3>"+phoneNo+"</h3></div></div></div></div>");
		myText += ("<div id='bd'><div id='yui-main'><div class='yui-b'><div class='yui-gf'><div class='yui-u first'><h2>Profile</h2></div><div class='yui-u'><p class='enlarge'>"+personalData+"</p></div></div>");
		myText += ("<div class='yui-gf'><div class='yui-u first'><h2>Skills</h2></div><div class='yui-u'><div class='talent'><h2>"+codingSkill1+"</h2><p>"+skillDesc1+"	</p></div><div class='talent'><h2>"+codingSkill2+"</h2><p>"+skillDesc2+"	 </p></div><div class='talent'><h2>Career Objectives</h2><p>"+careerObj+"</p></div></div></div>");
		myText += ("<div class='yui-gf'><div class='yui-u first'><h2>Technical</h2></div><div class='yui-u'><ul class='talent'><li>"+technicalskills+"</li><li>"+technicalskills2+"</li><li class='last'>"+technicalskills3+"</li></ul><ul class='talent'><li>"+technicalskills4+"</li><li>"+technicalskills5+"</li><li class='last'>"+technicalskills6+"</li></ul></div></div>");
		myText += ("<div class='yui-gf'><div class='yui-u first'><h2>Experience</h2></div><div class='yui-u'><div class='job'><h2>"+job1+"</h2><h3>"+jobTitle1+"</h3><h4>"+fromDate1+" - "+toDate1+"</h4><p>"+experience+" </p></div><div class='job'><h2>"+job2+"</h2><h3>"+jobTitle2+"</h3><h4>"+fromDate2+" - "+toDate2+"</h4><p>"+experience1+" </p></div><div class='job last'><h2>"+job3+"</h2><h3>"+jobTitle3+"</h3><h4>"+fromDate3+" - "+toDate3+"</h4><p>"+experience2+" </p></div></div></div>");
		myText += ("<div class='yui-gf last'><div class='yui-u first'><h2>Education</h2></div><div class='yui-u'><h2>"+college+" - "+colLoc+"</h2><h3>"+major+" &mdash; <strong>"+gpa+" GPA</strong> </h3></div></div></div></div></div>");
		myText += ("<div id='ft'><p>"+userName+" &mdash; <a href='mailto:"+email+"'>"+email+"</a> &mdash; "+phoneNo+"</p></div></div></div>");
		myText += ("</div></body>\n</html>");
		
		flyWindow = window.open('about:blank','myPop','width=1000,height=500,left=200,top=200');
	flyWindow.document.write(myText);
	
	}
	}
	$(function(){
	
	$('input[type="date"]').datepicker();
	});