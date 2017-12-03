var updateAppointmentAPI = "http://dental/api/appointment/update";

var e = document.getElementById("dropDownMenu");

function commitUpdate() {
		
	var updateRow = updateAppointmentAPI + '/' + appid.value;
		
		
		 // semi colons are required after let statements
  
  			var updateObject = { // This will go in fetchData.  Easy tiger.  Try var instead of let this go around.  I think it also may be a scope issue.
					appt_date: appDate.value, 
					appt_time: appTime.value,
					tx_name: e.options[e.selectedIndex].text,
					pt_name: Ptnum.value
					};
			
		
				var fetchData = {
          
					method: 'PUT',
					body: updateObject, // Here is where the updateObject variable goes.  As in it is fine to leave it in variable form and just reference it here.
					headers: new Headers() 
				};
				
				fetch(updateRow, fetchData)
				.then((response) => response.text())
				.then(function(data) {
				console.log(data);
				});
				
	
}