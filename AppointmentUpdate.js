var updateAppointmentAPI = "http://dental/api/appointment/add";

function check() {
	
	var e = document.getElementById("dropDownMenu");
var strUser = e.options[e.selectedIndex].text;
alert(appid.value);
alert(appDate.value);
alert(appTime.value);
alert(strUser);
alert(Ptnum.value);
}

/*
function commitUpdate() {
	
	var updateRow = updateAppointmentAPI + '/' + appid.value;
		
		
		 let updateObject = {
			appt_date: appDate.value 
			appt_time: appTime.value
  }
				let fetchData = {
					method: 'PUT',
					headers = new Headers()
				}
				fetch(updateRow, fetchData)
				.then((response) => response.text())
				.then(function(data) {
				console.log(data);
				});
	
}
*/