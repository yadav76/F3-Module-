// Retrieving ip address from local storage
let ipAddress = window.localStorage.getItem('ip');
// let postOfficeArray = [];
// let postOfficeBranchTypeArray = [];

//------------------------------------------------------------------------------------------------------------------------------------
const ipEl = document.getElementById('ip');
const latEl = document.getElementById('latitude');
const longEl = document.getElementById('longitude');
const cityEl = document.getElementById('cityName');
const regionEl = document.getElementById('regionName');
const orgEl = document.getElementById('orgName');
const hostEl = document.getElementById('hostName');
const timeZoneEl = document.getElementById('time-zone');
const dateTimeEl = document.getElementById('date-time');
const pinCodeEl = document.getElementById('pincode');
const messageEl = document.getElementById('message');
const searchBoxInputEl = document.getElementById('search-box');
const mapDisplayEl = document.getElementById('map-display');
const displayPostOfficesDiv = document.getElementById('details-tile-flex');
ipEl.textContent = ipAddress

//------------------------------------------------------------------------------------------------------------------------------------
// Functions

// 01. Display location on map
function displayMap(latitude, longitude) {
  let html = `
  <iframe 
  src="https://maps.google.com/maps?q=${latitude}, ${longitude}&output=embed" 
  width="100%" 
  height="100%" 
  frameborder="0" 
  style="border:0">
  </iframe>
  `
  mapDisplayEl.innerHTML = html;
}

// 02. Display Post offices in given pincode below map in card forms
function displayPostOffices(poName, poBranch, poDeliveryStatus, poDistrict, poDivision) {
  let html = `
  <div class="details-tiles ${poName.toLowerCase()} ${poBranch.toLowerCase()}">
    <p class="details">Name: <span id="poName">${poName}</span> </p>
    <p class="details">Branch Type: <span id="poBranch">${poBranch}</span></p>
    <p class="details">Delivery Status: <span id="poDeliveryStatus">${poDeliveryStatus}</span></p>
    <p class="details">District: <span id="poDistrict">${poDistrict}</span></p>
    <p class="details">Division: <span id="poDivision">${poDivision}</span></p>
  </div>
  `
  displayPostOfficesDiv.insertAdjacentHTML('beforeend', html);
}

//------------------------------------------------------------------------------------------------------------------------------------

// Fetching data from url and also adding event listener to search box

fetch(`https://ipinfo.io/${ipAddress}/geo?token=2f12b9591109d8`)
  .then(response => response.json())
  .then((data) => {
    [lat, long] = data.loc.split(',');
    latEl.textContent = lat;
    longEl.textContent = long;
    cityEl.textContent = data.city;
    regionEl.textContent = data.region;
    orgEl.textContent = data.org;
    hostEl.textContent = `There is no 'host' property given in the object`
    displayMap(lat, long);
    timeZoneEl.textContent = data.timezone;
    dateTimeEl.textContent = new Date().toLocaleString("en-US", { timeZone: `${data.timezone}` });
    pinCodeEl.textContent = data.postal;
    return data.postal;
  })
  .then((pin) => {
    let pinCode = pin;
    fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
      .then(response => response.json())
      .then((postalDataArray) => {
        // Storing all post offices present in that pin code in an array
        let postalData = postalDataArray[0];
        // console.log(postalData);
        messageEl.textContent = postalData.Message;
        let postOfficesInPincodeArray = postalData.PostOffice;

        // display postoffices present in that pincode
        postOfficesInPincodeArray.forEach(postOffice => {
          displayPostOffices(postOffice.Name, postOffice.BranchType, postOffice.DeliveryStatus, postOffice.District, postOffice.Division)
        });

        //----------------------------------------------------
        // Adding event listener on search bar
        searchBoxInputEl.addEventListener('change', (e) => {
          e.preventDefault();
          // storing all postal office card elements in an array
          let postOfficeArray = document.querySelectorAll('.details-tiles');
          // Adding hidden class to all elements
          postOfficeArray.forEach((postOffice) => {
            postOffice.classList.add('hidden');
          })
          // storing search value
          let searchValue = searchBoxInputEl.value.toLowerCase();
          // searching for that specific element
          postOfficeArray.forEach((postOfficeElement) => {
            // console.log(postOfficeElement);
            if (postOfficeElement.classList.contains(searchValue) || postOfficeElement.classList.contains(searchValue)) {
              postOfficeElement.classList.remove('hidden');
            }
          })
        })
        //----------------------------------------------------
      })
      .catch(postalError => {
        console.error(postalError.message);
      })
  })
  .catch((error) => {
    console.error(error.message);
  })


  //https://api.postalpincode.in/pincode/411001