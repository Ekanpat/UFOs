// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
  let datetime = d3.select("#datetime");
  let city = d3.select("#city");
  let state = d3.select("#state");
  let country = d3.select("#country");
  let shape = d3.select("#shape");
    // 4b. Save the value that was changed as a variable.
  let dateValue = datetime.property("value");
  console.log(dateValue)

  let cityValue = city.property("value");
  console.log(cityValue);

  let stateValue = state.property("value");
  console.log(stateValue);

  let countryValue = country.property("value");
  console.log(countryValue);

  let shapeValue = shape.property("value");
  console.log(shapeValue);

    // 4c. Save the id of the filter that was changed as a variable.
  let filterdatetime = datetime.attr("id");
  console.log(filterdatetime);

  let filtercity = city.attr("id");
  console.log(filtercity)

  let filterstate = state.attr("id");
  console.log(filterstate)

  let filtercountry = country.attr("id");
  console.log(filtercountry)

  let filtershape = shape.attr("id");
  console.log(filtershape)

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (dateValue) {
    filters[filterdatetime] = dateValue;

    }
  else{
      delete filters[filterdatetime];
    }
  if (cityValue){
    filters[filtercity] = cityValue;
  }
  else {
    delete filters[filtercity];
  }

  if (stateValue){
    filters[filterstate] = stateValue;
  }
  else {
    delete filters[filterstate];
  }

  if (countryValue){
    filters[filtercountry] = countryValue;
  }
  else {
    delete filters[filtercountry];
  }

  if (shapeValue){
    filters[filtershape] = shapeValue;
  }
  else {
    delete filters[filtershape];
  }
  
  // updateFilters();

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  // let filterdate = d3.select("id").property("value");
  // let filtercity = d3.select("id").property("alue");
  // let filterstate = d3.select("id").property("value");
  // let filtercountry = d3.select("id").property("value");
  // let filtershape = d3.select("id").property("value");
  // // let filteredData = tableData;

  console.log(filters);
    // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

  Object.entries(filters).forEach(([id, value]) => {
    filteredData = filteredData.filter(row => row[id] === value);
  });  
      
    // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
};
  
  // 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

  
//   // Build the table when the page loads
buildTable(tableData);
