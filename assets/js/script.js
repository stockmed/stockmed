function forgotPassword() {
    alert("Contact Administrator");
    document.getElementsByTagName("INPUT").value = "";
}

function loginVolunteer() {
    const name = document.getElementsByTagName("INPUT")[0].value;
    if (name == "admin@stockmed.in")
    {
        alert ("Welcome Admin");
        window.open("admin.html");
    }
    else {
        alert("Welcome " + name);
        window.open("volunteer.html");
    }
}

function stockSearch() {
  document.getElementById("sSearch").style.display = "table";
    let pin = document.forms["stSearch"]["pincode"].value;
    if (pin == "624601")
    {
      document.getElementById("sSearch").innerHTML = "<table border = '1'>" +
                '<tr>' +
                  '<th rowspan = "2">Center</th>' +
                  '<th rowspan = "2">Map Location</th>' +
                  '<th colspan = "2">Dose 1</th> ' +
                  '<th colspan = "3">Dose 2</th> ' +
                '</tr>' +
                '<tr>' +
                  '<th>Covidshield</th>' +
                  '<th>Covaxin</th> ' +
                  '<th>Covidshield</th>' +
                  '<th>Covaxin</th> ' +
                '</tr>' +
                '<tr>' +
                  '<td>Palani Govt. Hospital</td>' +
                  '<td><a href="https://goo.gl/maps/SH5uLVvsUGMZ8ydo6">Here</a></td>' +
                  '<td>No Stock</td>' +
                  '<td>100</td>' +
                  '<td>No Stock</td>' +
                  '<td>100</td>' +                  
                '</tr>' +
                '<tr>' +
                  '<td>Palani UPHC</td>' +
                  '<td><a href="https://goo.gl/maps/NhW3THRNjS7aV4p4A">Nearby of this Location</a></td>' +
                  '<td>125</td>' +
                  '<td>100</td>' +
                  '<td>125</td>' +
                  '<td>100</td>' +                  
                '</tr>'
      }
      else {
        document.getElementById("sSearch").innerHTML = "This PINCODE is not in our Database"
      }    
}

function locationSearch() {	
    document.getElementById("locationSearch").style.display = "table";
    let pin = document.forms["locsearch"]["pincode"].value;
    if (pin == "624601")
    {
      document.getElementById("locationSearch").innerHTML = "<table border = '1'>" +
                '<tr>' +
                  '<th>Center</th>' +
                  '<th>Address</th> ' +
                  '<th>Contact</th> ' +
                  '<th>Map Location</th>' +
                '</tr>' +
                '<tr>' +
                  '<td>Palani Govt. Hospital</td>' +
                  '<td>Adivaram,<br>South Anna Nagar,<br>Palani</td>' +
                  '<td>7449247983</td>' +
                  '<td><a href="https://goo.gl/maps/SH5uLVvsUGMZ8ydo6">Here</a></td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Palani UPHC</td>' +
                  '<td>Angalamman Kovil, <br>Palani</td>' +
                  '<td>Unknown</td>' +
                  '<td><a href="https://goo.gl/maps/NhW3THRNjS7aV4p4A">Nearby of this Location</a></td>' +
                '</tr>'
      }
      else if (pin == "534002")
    {
      document.getElementById("locationSearch").innerHTML = "<table border = '1'>" +
                '<tr>' +
                  '<th>Center</th>' +
                  '<th>Address</th> ' +
                  '<th>Contact</th> ' +
                  '<th>Map Location</th>' +
                '</tr>' +
                '<tr>' +
                  '<td>Ramesh Hospital</td>' +
                  '<td>Uppu Rama Rao St,<br> Ramachandra Rao Pet,<br>Eluru</td>' +
                  '<td>+918499918777</td>' +
                  '<td><a href="https://maps.app.goo.gl/nbCcqXCt78kPG6ZeA">Here</a></td>' +
                '</tr>' 
      }
      else if (pin == "625020" || pin == "625007")
    {
      document.getElementById("locationSearch").innerHTML = "<table border = '1'>" +
                '<tr>' +
                  '<th>Center</th>' +
                  '<th>Address</th> ' +
                  '<th>Contact</th> ' +
                  '<th>Map Location</th>' +
                '</tr>' +
                '<tr>' +
                  '<td>Apollo Speciality Hospitals</td>' +
                  '<td>80 Feet Rd,<br>KK Nagar,<br>Madurai</td>' +
                  '<td>+914522580892</td>' +
                  '<td><a href="https://goo.gl/maps/HQoS7gJVewwdoFZA6">Here</a></td>' +
                '</tr>' + 
                '<tr>' +
                  '<td>Devadoss Hospitals Pvt Ltd</td>' +
                  '<td>75/1, Alagar Kovil Main Rd,<br>Surveyor Colony,<br>Madurai</td>' +
                  '<td>+914524521000</td>' +
                  '<td><a href="https://g.page/devadosshospitals?share">Here</a></td>' +
                '</tr>'
              }
      else {
        document.getElementById("locationSearch").innerHTML = "This PINCODE is not in our Database"
      }       
}