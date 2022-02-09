function jsAjax(){
    //Step 1: Define the data request
    var request = new Request('data/MegaCities.geojson');
    //Step 2: Define Fetch parameters
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve the data
    fetch(request, init)
};

window.onload = jsAjax();
