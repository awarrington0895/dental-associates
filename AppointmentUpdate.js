var updateAppointmentAPI = "http://dental/api/appointment/update";

var e = document.getElementById("dropDownMenu");

function commitUpdate() {
		
	var updateRow = updateAppointmentAPI + '/' + appid.value;
		
  	var updateObject = {
		appt_date: appDate.value, 
		appt_time: appTime.value,
		tx_name: "Culture-lower urinary",
		pt_num: Ptnum.value
		};		
	
		var fetchData = {
			method: 'PUT',
			body: updateObject, 
			headers: new Headers() 
			};
					
		JSON.stringify(fetchData);
		
		fetch(updateRow, fetchData)
		.then((response) => response.text())
		.then(function(data) {
		console.log(data);
		});
}