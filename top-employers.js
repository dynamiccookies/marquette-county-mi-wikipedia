var private, public, results, row;
var article = document.getElementsByTagName("article")[0];

// Declare and set variable with today's date formatted as: January 1, 2021
var today = new Date().toLocaleDateString("en-us",{year:'numeric',month:'long',day:'numeric'})

results = "===Top employers===\n<!-- Please use the script referenced on the talk page to update these tables -->\n" + 
	"''Last updated " + today + ".''\n\n" + 
	"According to the Lake Superior Community Partnership website,<ref>{{cite web |url=https://marquette.org/principal-employers/ |title=" + 
	article.getElementsByTagName("h1")[0].innerText + " |website=Lake Superior Community Partnership |access-date=" + today + 
	"}}</ref> the top employers in the county are:\n\n";

if(article.getElementsByTagName("h3")[0].innerText == "Private Employers:"){
    private = article.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	results += "{|\n|- valign='top'\n|\n{| class='wikitable sortable'\n|-\n! Private Employer\n! # of Employees";

	for (row = 1; row < private.length; row++) {

		employer  = private[row].getElementsByTagName("td")[0].innerText;
		employees = private[row].getElementsByTagName("td")[1];

		if(employees.innerHTML.startsWith("<strong>")){employees = "'''" + employees.innerText + "'''";} 
		else {employees = employees.innerText;}

		results += "\n|-\n|" + employer + "\n|" + employees;
	}

	results += "\n|}\n| &nbsp;&nbsp;&nbsp;&nbsp;\n|\n";
}

if(article.getElementsByTagName("h3")[1].innerText == "Public Employers:"){
    public = article.getElementsByTagName("table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	results += "{| class='wikitable sortable'\n|-\n! Public Employer\n! # of Employees";

	for (row = 1; row < public.length; row++) {

		employer  = public[row].getElementsByTagName("td")[0].innerText;
		employees = public[row].getElementsByTagName("td")[1];

		if(employees.innerHTML.startsWith("<strong>")){employees = "'''" + employees.innerText + "'''";} 
		else {employees = employees.innerText;}

		results += "\n|-\n|" + employer + "\n|" + employees;
	}

	results += "\n|}\n|}\n<nowiki>*</nowiki>Bolded values have been updated for the current year.";
}

console.log(results);
copy(results);
