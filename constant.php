<?php
session_start();
date_default_timezone_set('Asia/Kolkata');
$BASE_URL="website/index.php";
// website file path on server

// $URL="http://krishilimited.com/api/src/";
// $ADMIN_IMG_PATH="http://krishilimited.com/user/img/";
// $GALLERY_IMG_PATH="http://krishilimited.com/admin/image/gallery/";

// website file path on localhost
$URL="http://localhost/gpinternational/api/src/";
$GALLERY_IMG_PATH="http://localhost/gpinternational/admin/uploads/album/";
$NOTIFICATION_PDF_PATH="http://localhost/gpinternational/admin/uploads/pdf/pdf_";

$SECRET_KEY = "dKgLINTEL2013aN99840$@";  
$ISSUER_CLAIM = "GLINTEL TECHNOLOGY PVT LTD"; // this can be the servername
$AUDIENCE_CLAIM = "PSP NEWS";

$LOGIN_SUCCESS_MSG="Login Successful";
$LOGIN_FAILED_MSG="Request Failed";

?>