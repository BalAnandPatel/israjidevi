<?php include "constant.php"; ?>
<?php include "include/header.php"; ?>
<?php
$url = $URL . "gallery/read_gallery.php";
$data = array();
//print_r($data);
$postdata = json_encode($data);
$client = curl_init($url);
curl_setopt($client, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($client, CURLOPT_POSTFIELDS, $postdata);
$response = curl_exec($client);
//print_r($response);
$result = json_decode($response);
//print_r($result);
?>
<link rel="stylesheet" href="common/css/compact-gallery.css">

<!--about start-->
<section class="page-title">
   <div class="container">
      <div class="row clearfix">
         <div class="col-md-6 col-sm-6 col-xs-12 pull-left">
            <h1>School Photo Album</h1>
         </div>
         <div class="col-md-6 col-sm-6 col-xs-12 pull-right text-right path"><a href="index.php">Home</a>&ensp;&gt;&ensp;<a href="PhotoGallery.php">Photo Gallery</a> </div>
         <div class="overlay"></div>
      </div>
   </div>
</section>
<!--about end-->
<br>
<section class="course-single">
   <div class="container">
      <div class="row">
         <div class="col-sm-3">
            <ul id="nav-tabs-wrapper" class="nav nav-tabs nav-pills nav-stacked well">
               <li class="active"><a href="PhotoGallery.php">Gallery Album</a></li>
               <li><a href="videogallery.php">Video Album</a></li>
            </ul>
         </div>

         <div class="col-sm-9">
            <div class="tab-content">
               <div role="tabpanel" class="tab-pane fade in active" id="vtab1">
                  <div class="latest-gallery text-center">
                     <div class="masonary-layout filter-layout" style="position: relative;">

                        <?php
                        $counter = 0;
                        foreach ($result as $key => $value) {
                           foreach ($value as $key1 => $value1) {
                        ?>
                              <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 filter-item">
                                 <div class="single-item">
                                    <div class="img-box">
                                       <img class="img-fluid img-thumbnail rounded-0" src="<?php echo $GALLERY_IMG_PATH."gallery_img".$value1->id.".png"; ?>" style="height:30rem;">
                                    </div>
                                 </div>
                              </div>
                        <?php }
                        } ?>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<div id="calendar" class="fc-calendar-container fc-agile" style="display:none;"></div>



<!-- <section class="gallery-block compact-gallery">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                        <img class="img-fluid image" src="admin/uploads/album/1.jpg">
                </div>

                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                        <img class="img-fluid image" src="admin/uploads/album/2.jpg">
                </div>

                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                        <img class="img-fluid image" src="admin/uploads/album/3.jpg">
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                        <img class="img-fluid image" src="admin/uploads/album/1.jpg">
                </div>

                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                        <img class="img-fluid image" src="admin/uploads/album/2.jpg">
                </div>

                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                        <img class="img-fluid image" src="admin/uploads/album/3.jpg">
                </div>
            </div>

            </div>
        </div>
    </section> -->

<?php include "include/footer.php"; ?>