// Declare article variable and store entire article element into it
var article = document.getElementsByTagName("article")[0];

// Declare blank variables
var private, public, results, row;

// Declare and set variable with today's date formatted as: January 1, 2021
var today = new Date().toLocaleDateString("en-us",{year:'numeric',month:'long',day:'numeric'})

// Declare results string variable and store header, date, and descriptive sentence with reference
results = "===Top employers===\n<!-- Please use the script referenced on the talk page to update these tables -->\n" + 
	"''Last updated " + today + ".''\n\n" + 
	"According to the Lake Superior Community Partnership website,<ref>{{cite web |url=https://marquette.org/principal-employers/ |title=" + 
	article.getElementsByTagName("h1")[0].innerText + " |website=Lake Superior Community Partnership |access-date=" + today + 
	"}}</ref> the top employers in the county are:\n\n";

// Test if first h3 header is Private Employers
if(article.getElementsByTagName("h3")[0].innerText == "Private Employers:"){

	// Set private variable to all rows in first tbody element inside first table element inside article element
    private = article.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");

	// Append static column header string to results variable
	results += "{|\n|- valign='top'\n|\n{| class='wikitable sortable'\n|-\n! Private Employer\n! # of Employees";

	// Loop through each row in private variable starting with second row (skipping headings)
	for (row = 1; row < private.length; row++) {

		// Set employer variable current row's first cell's text
		employer  = private[row].getElementsByTagName("td")[0].innerText;

		// Set employees variable to current row's second cell
		employees = private[row].getElementsByTagName("td")[1];

		// If current row's second cell contains "<strong>", wrap text in 3 single quotes and store in employees variable
		if(employees.innerHTML.startsWith("<strong>")){employees = "'''" + employees.innerText + "'''";} 

		// Else, if cell doesn't contain "<strong>", store text in employees variable
		else {employees = employees.innerText;}

		// Build Wikipedia markdown for table row and append to results variable
		results += "\n|-\n|" + employer + "\n|" + employees;
	}

	// Append closing markdown for first table to results variable
	results += "\n|}\n| &nbsp;&nbsp;&nbsp;&nbsp;\n|\n";
}

// Test if second h3 header is Public Employers
if(article.getElementsByTagName("h3")[1].innerText == "Public Employers:"){

	// Set public variable to all rows in first tbody element inside second table element inside article element
    public = article.getElementsByTagName("table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr");

	// Append static column header string to results variable
	results += "{| class='wikitable sortable'\n|-\n! Public Employer\n! # of Employees";

	// Loop through each row in public variable starting with second row (skipping headings)
	for (row = 1; row < public.length; row++) {

		// Set employer variable current row's first cell's text
		employer  = public[row].getElementsByTagName("td")[0].innerText;

		// Set employees variable to current row's second cell
		employees = public[row].getElementsByTagName("td")[1];

		// If current row's second cell contains "<strong>", wrap text in 3 single quotes and store in employees variable
		if(employees.innerHTML.startsWith("<strong>")){employees = "'''" + employees.innerText + "'''";} 

		// Else, if cell doesn't contain "<strong>", store text in employees variable
		else {employees = employees.innerText;}

		// Build Wikipedia markdown for table row and append to results variable
		results += "\n|-\n|" + employer + "\n|" + employees;
	}

	// Append closing markdown for second table to results variable along with text about bold values
	results += "\n|}\n|}\n<nowiki>*</nowiki>Bolded values have been updated for the current year.";
}

// Push results variable contents to console
console.log(results);

// Copy results variable contents to clipboard
copy(results);
