/*function jsAjax(){
    //Step 1: Define the data request
    var request = new Request('data/MegaCities.geojson');
    //Step 2: Define Fetch parameters
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve the data
    fetch(request, init)
        .then(conversion) //step 4 convert data to usable form
        .then(callback) //step 5 send retrieved data to a callback function

};

//define conversion callback function
function conversion(response){
    //convert data to usable form
    return response.json();
}

//define callback function
function callback(response){
    //Task using the data go here
    console.log(JSON.stringify(response));
}

window.onload = jsAjax();*/

/*function jsAjax(){
    //use fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(conversion) //convert data to usable form
        .then(callback) //send retrieved data to a callback function
};

//Define conversion callback function
function conversion(response){
    //convert data to usable form
    return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax()*/

//define a fetch request 
/*function jsAjax(){
    //use fetch to retrieve the datta
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json()
        })
        .then(callback)
};

//define callback function
function callback(response){
    var myData = response;
    //task using the data go here
    nextFunction(myData);
}
function nextFunction(data){
    console.log(data);//contains response data held by myData in the callback
};

window.onload = jsAjax();*/

//initialize function cities and addEvents called when the script loads
function initialize(){
	cities();
	addEvents();
};

//Function to create and append table with values of cityPop array
function cities(){
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//create the table element
	var table = document.createElement("table");

	//create header row
	var headerRow = document.createElement("tr");

	//add the "city" and "population" columns to the header row
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")

	//Add the row to the table
	table.appendChild(headerRow);
	
	//Loop to add a new row for each city
	for (var i = 0; i < cityPop.length; i++){
		//assigning a longer string to a variable
		var rowHtml ="<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population +"</td></tr>";
		//add the rows html string to the table
		table.insertAdjacentHTML('beforeend', rowHtml);
	};


	
	
	
	//use query selector to access mydiv and 
	document.querySelector("#mydiv").appendChild(table);
	//Call the addColumns(cityPop) function
	addColumns(cityPop);
};



//Function to add CitySize header and fill in rows with 'Small', 'medium' and 'large' 
function addColumns(cityPop){

	//for each loop for creating City Size header and filling in rows 
	document.querySelectorAll("tr").forEach(function(row, i){
		// if else statement for setting parameters of size of city
    	if (i == 0){
			row.insertAdjacentHTML("beforeend", "<th>City Size</th>");
    	} else {

		
			var citySize ;
			console.log('Testing')
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
				row.insertAdjacentHTML('beforeend', citySize);

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
				row.insertAdjacentHTML('beforeend', citySize);
    		} else {
    			citySize = 'Large';
				row.insertAdjacentHTML('beforeend', citySize);
    		};
			
			
		
    	};
		
    });
	
	
};



//function to add events such as mouse over and click interactions
function addEvents(){
	
	//add event 'mouseover' function for the table using querySelector to select table
	document.querySelector("table").addEventListener("mouseover", function(){
		//Parameters for the color that the table changes during mouseover using conditional statement 
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
			
		};

		document.querySelector("table").style.color = color;
	});
		
	//Function for clicking on the table and seeing a pop up 'Hey, you clicked me!'
	function clickme(){
	
		alert('Hey, you clicked me!');
	};
	//Use querySelector to select table and calling the click me function  
	document.querySelector("table").addEventListener('click', clickme)
};


//call the initialize function when the window has loaded
document.addEventListener('DOMContentLoaded', initialize);
//Example 2.7 line 1 USE THIS AS AN EXAMPLE FOR THE DEBUG LAB 

function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){
    //tasks using the data go here
    //console.log(response)
    console.log(JSON.stringify(response));

    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response))
}
//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))

window.onload = jsAjax();