var updateAppointmentAPI = "http://dental/api/appointments";

function commitUpdate() {
	
	var updateRow = updateAppointmentAPI + '/' + appid.value;
	var test = appDate.value;
	
	
				fetch(updateRow)
				.then((response) => response.json())
				.then(function(data) {
					alert(data.length);
				})
	
}