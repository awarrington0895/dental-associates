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
	$empNum = $_POST['EmNum'];
	$firsName = $_POST['FirsName'];
	$lasName = $_POST['LasName'];
	$rol = $_POST['Rol'];
    $sql = "UPDATE employee SET FirstName= '".$firsName."'".","." LastName= '".$lasName."'".","." Role= '".$rol."'"." WHERE EmpNum= '".$empNum."'";

    echo $sql."<br>"; // displays your query before executing it.
    $result = mysqli_query($con, $sql); // execute the query
    
    // you may create a table to make your result look organized
    echo "Table has been updated.";
 
   header("Location: Update_Employee.html");
  
	exit();  
    // close database connection
    mysqli_close($con);
?>
