//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    //get the div id
    //var theid = document.querySelector("#mydiv").getAttribute('id');

    //theid is 'myDiv'; add it as text to the div
    //document.querySelector("#mydiv").insertAdjacentHTML('beforeend',theid);
    
    //add the class 'foo' to the div
    //document.querySelector("#mydiv").setAttribute('class', 'foo');

    //get the div id
    var theid = document.querySelector("#mydiv").id;

    //set the id to newdiv
    //document.querySelector("#mydiv").id = "newdiv";
    
    //set the class 
    //document.querySelector("#newdiv").className = "foo";

    //iterate over each script element and add each one's source url as text to the div
    //document.querySelectorAll("script").forEach(function(selectedScript){
        //var thesource = selectedScript.src;
        //document.querySelector("#newdiv").insertAdjacentHTML('beforeend',thesource);
    //})
    document.querySelector("#mydiv").appendChild(table);
        //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });
    
    //document.querySelector("#newdiv").appendChild(table);
    
    //named handler function for removable listener
    //function clickme(){
        //alert('Yeah Green Bay! Go Packers!');
    //};

    //add the event listener
    //document.querySelector("table").addEventListener("click", clickme)

    //remove the event listener
    //document.querySelector("table").removeEventListener('click', clickme)

    
}

document.addEventListener('DOMContentLoaded',initialize)






/*//initialize function called when script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();*/
