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
	$ptnum = $_POST['PNum'];
	$firstname = $_POST['FirsName'];
	$lastname = $_POST['LasName'];
	$preferredname = $_POST['PreferName'];
	$address = $_POST['Addres'];
	$city = $_POST['Cit'];
	$state = $_POST['Stat'];
	$zip = $_POST['Zi'];
	$primphone = $_POST['PriPhone'];
	$secphone = $_POST['SePhone'];
	$email = $_POST['Emai'];
	$allergies = $_POST['Allergie'];
	$insname = $_POST['InName'];
	$insnumber = $_POST['InNumber'];
	
    $sql = "UPDATE patient SET
	FirstName=     '".$firstname.     "'".","." 
	LastName=      '".$lastname.      "'".","." 
	PreferredName= '".$preferredname."'".","." 
	Address=       '".$address.      "'".","." 
	City=          '".$city.         "'".","." 
	State=         '".$state.        "'".","." 
	Zip=           '".$zip.          "'".","." 
	PrimPhone=     '".$primphone.    "'".","." 
	SecPhone=      '".$secphone.     "'".","."  
	Email=         '".$email.        "'".","." 
	Allergies=     '".$allergies.     "'".","." 
	InsName=       '".$insname.      "'".","." 
	InsNumber=     '".$insnumber.    "'"." 
	WHERE PtNum=   '".$ptnum."'";

    echo $sql."<br>"; // displays your query before executing it.
    $result = mysqli_query($con, $sql); // execute the query
    
    // you may create a table to make your result look organized
    echo "Table has been updated.";
 
   header("Location: Update_Patient.html");
  
	exit();  
    // close database connection
    mysqli_close($con);
?>
