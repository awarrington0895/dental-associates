<?php
    if(!isset($_POST['sub'])) die("No data was provided.");

    /* open database connection
        mysqli_connect(server, userID, password, databaseName)
        userID = root
        password = ''    this databae has no password
        databaseName = dentalassociates
    */
    $con = mysqli_connect('localhost','root','','dentalassociates');
    if (!$con) // check if the connection failed.
    {
        die('Could not connect: ' . mysqli_error($con));
    }
    // Create your query (any query: insert, delete, select, update)
    // attach the id provided by the user. this is extracted from PHP global variable $_POST array
	$apptID = $_POST['AppID'];
	$apptDate = $_POST['AppDate'];
	$apptTime = $_POST['AppTime'];
	$txName = $_POST['TName'];
	$ptNum = $_POST['PNum'];
    $sql = "INSERT INTO appointment (ApptID, ApptDate, ApptTime, TxName, PtNum) VALUES ('".$apptID."'".","."'".$apptDate."'".","."'".$apptTime."'".","."'".$txName."'".","."'".$ptNum."'".")";
    echo $sql."<br>"; // displays your query before executing it.
    $result = mysqli_query($con, $sql); // execute the query
    

    header("Location: Schedule_Appointment.html");
  
	exit();    
    // close database connection
    mysqli_close($con);
?>