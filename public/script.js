/*
 to respond to the submit button
*/



function solve(){
  console.log("solve is called")
    // access the form defined in index and create a form data object using FormData()
    const form = document.getElementById('input_form');
    const formData = new FormData(form);

    


    
form.submit()
  }
    






  // PLEASE STUDY THE CODES BELOW, BUT DO NOT CHANGE ANYTHING 

  // this function will create the needed input fields and corresponding Going checkboxes for the number of expected guests

  
  // A quick data dump on Output div to show users input on the browser.
  function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Output <h2>';
    for (let [key, value] of formData.entries()){
      outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData)
    console.log(formData.entries())
  }
  