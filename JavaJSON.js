    const api = 'http://dental/api';
    
    function generateTable(tableData) {
        // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < tableData.length; i++) {
            for (var key in tableData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.id = "myTable";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1); // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < tableData.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = tableData[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

    function populateTable(resource) {
        fetch(api + resource)
            .then((response) => response.json())
            .then(function(data) {
                generateTable(data);
            })
    }
    
    function CreateTableFromJSON() {

        if (document.getElementById("decider").innerHTML == "Patients") {
            populateTable('/patients');

        } else if (document.getElementById("decider").innerHTML == "Appointments") {

            populateTable('/appointments');

        } else if (document.getElementById("decider").innerHTML == "Employees") {

            populateTable('/employees');


        } else if (document.getElementById("decider").innerHTML == "Payment Info") {
            var myTable = [{
                    "AcctNum": "1",
                    "PastDue": "2",
                    "PtNum": "2",
                    "PayID": "3",
                },
                {
                    "AcctNum": "2",
                    "PastDue": "30",
                    "PtNum": "3",
                    "PayID": "4",
                },
                {
                    "AcctNum": "3",
                    "PastDue": "35",
                    "PtNum": "4",
                    "PayID": "5",
                }
            ]
        }
        // // EXTRACT VALUE FOR HTML HEADER. 
        // var col = [];
        // for (var i = 0; i < myTable.length; i++) {
        //     for (var key in myTable[i]) {
        //         if (col.indexOf(key) === -1) {
        //             col.push(key);
        //         }
        //     }
        // }

        // // CREATE DYNAMIC TABLE.
        // var table = document.createElement("table");
        // table.id = "myTable";

        // // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        // var tr = table.insertRow(-1); // TABLE ROW.

        // for (var i = 0; i < col.length; i++) {
        //     var th = document.createElement("th"); // TABLE HEADER.
        //     th.innerHTML = col[i];
        //     tr.appendChild(th);
        // }

        // // ADD JSON DATA TO THE TABLE AS ROWS.
        // for (var i = 0; i < myTable.length; i++) {

        //     tr = table.insertRow(-1);

        //     for (var j = 0; j < col.length; j++) {
        //         var tabCell = tr.insertCell(-1);
        //         tabCell.innerHTML = myTable[i][col[j]];
        //     }
        // }

        // // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        // var divContainer = document.getElementById("showData");
        // divContainer.innerHTML = "";
        // divContainer.appendChild(table);
    }
    window.onload = CreateTableFromJSON();

    function myFunction() {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[mySelector.value];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }