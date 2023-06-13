<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// get database connection
include_once '../../config/database.php';
  
//instantiate reg object
include_once '../../objects/notification.php';
  
$database = new Database();
$db = $database->getConnection();
  
$update_status = new Notice($db);
  
// get posted data
$data = json_decode(file_get_contents("php://input"));
//print_r($data);
$update_status->id=$data->id;

// mavarke sure data is not empty
if(
    !empty($data->pdf_status)
)

{
   
    $update_status->pdf_status=$data->pdf_status;

   

    if($update_status->updatePdfStatus()){
  
        // set response code - 201 created
        http_response_code(201);
  
        // tell the user
        echo json_encode(array("message" => "Notice Status Updated Successfully"));
    }
  
    // if unable to create the reg, tell the user
    else{
  
        // set response code - 503 service unavailable
        http_response_code(503);
  
        // tell the user
        echo json_encode(array("message" => "Unable to update Notice Status"));
    }
}
  
// tell the user data is incomplete
else{
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array("message" => "Unable to update Notice Status. Data is incomplete."));
}
?>