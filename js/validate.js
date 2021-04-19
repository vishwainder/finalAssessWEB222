function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');
  var valid=true;
  var la = document.getElementById('lati').value;
  var lon = document.getElementById('longi').value;
  
  var prnErr = document.querySelector('#latERR');
  if(la > 90 || la < -90 || isNaN(la)) {
    valid = false;
    prnErr.innerText = " must be a valid Latitude (-90 to 90)";
  }
  else {
    prnErr.innerText = "";
  }

  var prnErr = document.querySelector('#longERR');
  if(lon > 180 || lon < -180 || isNaN(lon)) {
    valid = false;
    prnErr.innerText = " must be a valid Longitude (-180 to 180)";
  }
  else {
    prnErr.innerText = "";
  }

  if (valid===false){
    event.preventDefault();
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('#addObs');
  form.onsubmit = validate;
};
