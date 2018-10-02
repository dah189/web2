
var start=true;

//when click on the course, program begin.
function begin() {  	
    var student = prompt("Please enter the student name:", "");
    
    if (student == '' || student == null) {
    	alert("Please input the student's name.");
    	return;
    }
    var advisor = prompt("Please enter the advisor name", "");
    
    if (advisor == '' || advisor == null) {
    	alert("Please input the advisor's name.");
    	return;
    }

    //trasfer the month
    var now = new Date();

    var fornode1=document.createTextNode("Prepared for "+ student + " by "+ advisor);
    var brnode=document.createElement("br");
    var fornode2=document.createTextNode(" ("+(now.getMonth() + 1)+"/"+now.getDate()+"/"+(now.getFullYear())+")");
    fnode=document.getElementById("for");
    fnode.appendChild(fornode1);
    fnode.appendChild(brnode);
    fnode.appendChild(fornode2);
    intro_elem=document.getElementById("intro");
    intro_elem.removeChild(intro_elem.childNodes[0]);
}



//select the course from the left
function select(obj) {
	if (start) {
	    begin(); 
		start=false;
	}
	if (obj.getAttribute("class")=="selected") {
		alert("Can't choose slected courses");
		return;
	}

			id = obj.getAttribute("id");
			if (id < 2300) {
				course_elem = document.getElementById("F");
				count_elem = document.getElementById("fc");   
			}
			else if (id < 2400) {
			    course_elem = document.getElementById("C");
				count_elem = document.getElementById("cc");
			}
			else if (id < 2500) {
				var area = prompt("Should this be 'C'ognitive or 'S'ystems", "");
				if (area.toUpperCase().charAt(0)=="C") {	
					course_elem = document.getElementById("C");
					count_elem = document.getElementById("cc");
				}
				else if(area.toUpperCase().charAt(0)=="S"){
					course_elem = document.getElementById("S");
					count_elem = document.getElementById("sc");	
				}
				else{
					alert("Can't choose this courses without area.");
					return;
				}
			}	
			else {
				course_elem = document.getElementById("S");
				count_elem = document.getElementById("sc");
			}

	newnode = obj.cloneNode(true);	
	newnode.setAttribute("onclick", "deselect(this)");
	obj.setAttribute("class", "selected");
	newnode.setAttribute("class", "chosen");
	course_elem.appendChild(newnode);
	count = course_elem.childNodes.length;
	ctnode = document.createTextNode(count);
	count_elem.removeChild(count_elem.childNodes[0]);
	count_elem.appendChild(ctnode);

	
}


//deselect the course from the right
function deselect(obj){
	var answer = confirm('Are you sure to drop this course?');
	if (answer) {
		d_id = obj.getAttribute("id");
	    course_elem = obj.parentNode;
	    course_elem.removeChild(obj);
	    countid = course_elem.getAttribute("id").toLowerCase()+"c"; 
	    count = course_elem.childNodes.length;
	    ctnode=document.createTextNode(count);
	    count_elem=document.getElementById(countid);
	    count_elem.removeChild(count_elem.childNodes[0]);
	    count_elem.appendChild(ctnode);
	    classstaus = document.getElementById(d_id);
	    classstaus.setAttribute("class", "free");
	}
}




