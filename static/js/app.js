// from data.js
const tableData = data;

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
  let dateValue = datetime.property("Date");
  console.log(dateValue)

  let cityValue = city.property("City");
  console.log(cityValue);

  let stateValue = state.property("State");
  console.log(stateValue);

  let countryValue = country.property("Country");
  console.log(countryValue);

  let shapeValue = shape.property("Shape");
  console.log(shapeValue);

    // 4c. Save the id of the filter that was changed as a variable.
  let filtereddatetime = datetime.attr("#datetime");
  console.log(datetime);

  let filteredcity = city.attr("#city");
  console.log(city)

  let filteredstate = state.attr("#state");
  console.log(state)

  let filteredcountry = country.attr("#country");
  console.log(country)

  let filteredshape = shape.attr("#shape");
  console.log(shape)

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (datetimeValue) {
    filters[datetime] = datetimeValue;

    }
  else{
      delete filters[datetime];
    }
  if (cityValue){
    filters[city] = cityValue;

  }
  else {
    delete filters[city];
  }

  if (stateValue){
    filters[state] = stateValue;
  }
  else {
    delete filters[state];
  }

  if (countryValue){
    filters[country] = countryValue;
  }
  else {
    delete filters[country];
  }

  if (shapeValue){
    filters[shape] = shapeValue;
  }
  else {
    delete filters[shape];
  }
  
  updateFilters();

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  let filterdate = d3.select("#datetime").property("1/10/2010");
  let filtercity = d3.select("#city").property("willow");
  let filterstate = d3.select("#state").property("ak");
  let filtercountry = d3.select("#country").property("us");
  let filtershape = d3.select("#shape").property("formation");
  // let filteredData = tableData;

  // // Apply `filter` to the table data to only keep the
  //     // rows where the `datetime` value matches the filter value
  // filteredData = tableData.filter(row => row.datetime === date);
  // filteredData = tableData.filter(row => row.city === city);
  // filteredData = tableData.filter(row => row.shape === shape);
  // filteredData = tableData.filter(row => row.country === country);
  // filteredData = tableData.filter(row => row.state === state);

  
    // 8. Set the filtered data to the tableData.
  var filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
  Object.entries(filters).forEach(([filterdatetime, datetimeValue]) => {
    filteredData = filteredData.filter(row => row[filterdatetime] === datetimeValue);
    cell.text(val);
  });  
  Object.entries(filters).forEach(([filtercity, cityValue]) => {
    filteredData = filteredData.filter(row => row[filtercity] === cityValue);
    cell.text(val);
  });
  Object.entries(filters).forEach(([filterstate, stateValue]) => {
    filteredData = filteredData.filter(row => row[filterstate] === stateValue);
    cell.text(val);
  });
  Object.entries(filters).forEach(([filtercountry, countryValue]) => {
    filteredData = filteredData.filter(row => row[filtercountry] === countryValue);
    cell.text(val);
  });
  Object.entries(filters).forEach(([filtershape, shapeValue]) => {
    filteredData = filteredData.filter(row => row[filtershape] === shapeValue);
    cell.text(val);
  });
    
    // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
};
  
  // 2. Attach an event to listen for changes to each filter
d3.selectAll("#input").on("filters", updateFilters);

  
//   // Build the table when the page loads
buildTable(tableData);
