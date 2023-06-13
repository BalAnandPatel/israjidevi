<?php
include '../../constant.php';
$n_title=ucfirst($_POST["n_title"]);
$created_on=date("Y-m-d H:i:s");
$created_by="Admin";
$pdf_status="Not_uploaded";
$pdf_status_success = "Uploaded";


$url = $URL . "notification/insert_notification.php";
$url_read_maxId=$URL . "notification/read_maxId.php";
$url_updateStatus=$URL . "notification/update_pdf_status.php";

$data = array(

  "n_title" => $n_title,
  "pdf_status" =>$pdf_status,
  "created_on" => $created_on, 
  "created_by" => $created_by 
);

//  print_r($data);
$postdata = json_encode($data);

$result_notification=url_encode_Decode($url,$postdata);
//  print_r($result_notification);
if($result_notification->message=="Successfull"){


  /* --- get maximum userid -----*/

    $data_maxId=array();
    $maxId_postdata = json_encode($data_maxId);
    $result_max_notification=url_encode_Decode($url_read_maxId,$maxId_postdata);
   $id=$result_max_notification->records[0]->id;

/*--- update the images in img folder inside user folder ---*/

    $target_dir = "../uploads/pdf/";
    $path="../uploads/pdf/pdf_".$id;
    // if (!is_dir($path)){
    // mkdir($path, 0777, true);
    // //echo "directory created";
    // }
    // else{ 
    //  // echo "unable to create directory";
    // }
    $target_file = $target_dir."pdf_".$id.".pdf";  

    $uploadOk = 1;
    $FileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    
    //Check if image file is a actual image or fake image
    // if(isset($_POST["submit"])) {
    //  $check = getimagesize($_FILES["pdf_file"]["tmp_name"]);

    //   if(($check !== false)){
        
    //     $uploadOk = 1;
    //   }
    //    else {
    //     $uploadOk = 0;
    //   }
    // }
    
    // Check if file already exists
    if (file_exists($target_file)) {
      $msg="file already exists";
      $uploadOk = 0;
      $_SESSION["notification_error"]=$msg;
      header('Location:../insert_notification.php');
    }
    

    // Check file size
    if ($_FILES["pdf_file"]["size"] > 9000000) {
      $msg="file is over size";
      $uploadOk = 0;
      $_SESSION["notification_error"]=$msg;
      header('Location:../insert_notification.php');
    }

    
    // Allow certain file formats
    if($FileType!= "pdf"){
      $uploadOk = 0;
      $msg="only pdf files are allowed";
      $_SESSION["notification_error"]=$msg;
      header('Location:../insert_notification.php');
    }
    
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        $msg="Sorry, your file was not uploaded.";
        header('Location:../insert_notification.php');
    
    } else {

      if (move_uploaded_file($_FILES["pdf_file"]["tmp_name"], $target_file)) {
      
        $data_UpdateStatus = array(
          "id"=>$id,
          "pdf_status" =>$pdf_status_success
        );

       $UpdateStatus_postdata = json_encode($data_UpdateStatus);
       $result_updateStatus=url_encode_Decode($url_updateStatus,$UpdateStatus_postdata);
       //print_r($result_updateStatus);

       $msg="Notification addded succesfully.";
       $_SESSION["notification_success"]=$msg;
       header('Location:../insert_notification.php');
      }
       else {
        //echo "Sorry, there was an error uploading your file.";
      
      $msg="Sorry, there was an error uploading your file.";
      // $_SESSION["notification_error"]=$msg;
      header('Location:../insert_notification.php');
    }
  }   
  
  $msg="Notification addded succesfully.";
  $_SESSION["notification_success"]=$msg;
}
else{
 header('Location:../insert_notification.php');
}

//}

function url_encode_Decode($url,$postdata){
$client = curl_init($url);
curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
curl_setopt($client, CURLOPT_POSTFIELDS, $postdata);
$response = curl_exec($client);
//print_r($response);
return $result = json_decode($response);  

}
