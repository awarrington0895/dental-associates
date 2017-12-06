var treatmentAPI = "http://dental/api/treatments";
var treatmentDrop = document.createElement("select");
treatmentDrop.setAttribute("name", "dropDownMenu"); 
var options = document.createElement('option');

options.innerHTML = "Select what Treatment you want";
options.setAttribute("value", '"' + '"');
treatmentDrop.appendChild(options);

document.getElementById("div1").appendChild(treatmentDrop);


	fetch(treatmentAPI)
	.then((response) => response.json())
	.then(function(data) {
					
        for(var i = 0; i < data.length; i++)
		{
		var option = document.createElement('option');
		option.innerHTML = data[i].TxName;
		option.setAttribute("value", '"' + data[i].TxName + '"');
		treatmentDrop.appendChild(option);
		}
		})			

