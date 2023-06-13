<?php include "constant.php"; ?>
<?php include "include/header.php"; ?>
<!--  <div class="home_right_god"><img src="images/background/bg.png" alt=""></div>
   --> <!--Start rev slider wrapper-->
<div class="slider-traceperant"></div>
<section class="rev_slider_wrapper">
  <div id="slider1" class="rev_slider">
    <ul>
      <li><img src="images/slider_images/slider1.jpg" alt=""></li>
      <li><img src="images/slider_images/1.jpg" alt=""> </li>
      <li><img src="images/slider_images/4.jpg" alt=""> </li>
      <li><img src="images/slider_images/8.jpg" alt=""> </li>
    </ul>
  </div>

</section>
<!--End rev slider wrapper-->
<!--about start-->
<section class="about" style="background-image:url(images/background/about-bg.jpg);">
  <div class="container">
    <div class="item-box">
      <div class="row">
        <div class="single-column col-md-6 ">
          <div class="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" data-wow-offset="0" style="visibility: visible; animation-duration: 2s; animation-delay: 0.5s; animation-name: fadeIn;">
            <div class="post-content">
              <div class="sec-title">
                <h2>Welcome to G.P.INTERNATIONAL SCHOOL AND COLLEGE</h2>
              </div>
              <div class="text">
                <p style="text-align:justify;"> G.P INTERNATIONAL SCHOOL AND COLLEGE is an amicable school where students enjoy learning.
                  It follows a co-education system of education from classes 1 to 8th| based
                  On the norms of the CBSE.
                  In the year 2022, G.P. INTERNATIONAL School AND COLLEGE was set up in Jaunpur in collaboration with the General Council of Delhi. The school follows the CBSE curriculum.
                  Kids Academy ensures a holistic approach towards development of the
                  Students to all sections of the society regardless of their financial
                  Status, caste or creed.The school which began with 85 students on its roll now has 2565 students and a highly experienced teaching faculty consisting of 50 teachers.Our vision is to grow great citizens, empowered to
                  Live successfully in their personal and global lives. We ensure committed,
                  dedicated and caring staffs who strive to make your child's learning and
                  Social experiences fun and meaningful.
                  We offer opportunities for international exposure through overseas sports exchanges and by inviting Indian and foreign teams to the campus.
                  .</p>
              </div>
              <ul class="link_btn">
                <li><a href="Aboutus.php" class="thm-btn">Read More</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="single-column col-md-6 ">
            <img src="images/background/dpabout.jpg" height="60%" class="img-responsive about_right_god" alt="god">
          </div>
        </div>
      </div>
    </div>
</section>
<!--about end-->
<!--latest-news start-->
<section class="latest-news">
  <div class="container">
    <div class="content-box">
      <div class="row">
        <div class="item-list">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="sec-title text-center">
              <h2>Academic Calendar</h2>
              <div class="w3_agile_main_grid">
                <h3><i class="fa fa-calendar" aria-hidden="true"></i>List of Holidays</h3>
                <div class="w3_agile_main_grid1">
                  <div class="custom-calendar-wrap">
                    <div id="custom-inner" class="custom-inner">
                      <div class="w3ls-header">
                        <nav style="position: initial;"> <span id="custom-prev" class="custom-prev"></span> <span id="custom-next" class="custom-next"></span> <span id="custom-current" class="custom-current" title="Go to current date"></span> </nav>
                        <h2 id="custom-month" class="w3layouts-month">MARCH</h2>
                        <h4 id="custom-year" class="w3-agileits-year">2016</h4>
                      </div>
                      <div class="clear"> </div>
                      <div id="calendar" class="fc-calendar-container fc-agile"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="sec-title text-center">
              <h2>Quick Link</h2>
              <!-- <div class="anthem-carousel"><img src="images/about/Marisian-Anthem.png" alt=""> -->
              <div class="card-header">
                Featured
              </div>
              <ul>
                <li class="list-group-item"><a href="PhotoGallery.php">Photo Gallery</a></li>
                <li class="list-group-item"><a href="videogallery.php">Video Gallery</a></li>
                <li class="list-group-item"><a href="ourteacher.php">School Staff</a></li>
                <li class="list-group-item"><a href="TC.php">DOWNLOAD T.C</a></li>
                <li class="list-group-item"><a href="#">Prospectus</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="sec-title text-center">
            <h2>Notices & Updates</h2>
          </div>
          <div class="single-column about_carousel">

            <div class="card">
              <?php
              $url = $URL . "notification/read_notification.php";
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
              <div class="card-header">
                Notification &nbsp; <img src="images/new.gif" style="width: 40px; height: 30px;">
              </div>
              <ul class="list-group list-group-flush" style="overflow-y:auto; height: 350px;width:auto;">
                <?php

                $counter = 0;
                foreach ($result as $key => $value) {
                  foreach ($value as $key1 => $value1) {

                ?> 
                  <?php if($value1->pdf_status=="Uploaded"){?>
                    <li class="list-group-item"><a href="<?php echo $NOTIFICATION_PDF_PATH.$value1->id.".pdf" ?>" style="text-decoration:underline;" target="_blank"><?php echo $value1->n_title; ?></a></li>
                    <?php }else{ ?>
                    <li class="list-group-item"><a href="#" style="text-decoration:underline;"><?php echo $value1->n_title; ?></a></li>
                    <?php } ?>
                <?php }
                } ?>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<!--founder section end-->
<!--our-service start-->
<section class="our-service">
  <div class="container">
    <div class="sec-title text-center">
      <h2>Our Facilities</h2>
    </div>
    <div class="item-box">
      <div class="row">
        <div class="column col-md-4 col-sm-12"> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-desktop"></span> </div>
            <h4>Computer & Digital Classes</h4>
            <p>Digital Class Room, Junior Computer Lab,
              Senior Computer Lab...</p>
          </a>
          <a href="#" class="item left">
            <div class="icon"><span class="fa fa-desktop"></span> </div>
            <h4>Vision</h4>
            <p style="text-align:justify;">Our quest is to create an educational system of useful individualized learning that stimulates passion and brilliance in every child.</p>
          </a>
          <a href="#" class="item left">
            <div class="icon"><span class="fa fa-desktop"></span> </div>
            <h4>Mission</h4>
            <p style="text-align:justify;">G.P. INTERNATIONAL SCHOOL AND COLLEGE always makes innumerable efforts to make the students come up with highest quality of education, incorporating right blend of personal integrity and the fundamental values. We work together in making the students extraordinaire in scholastic & co-scholastic area..</p>
          </a>
        </div>
        <div class="column col-md-4 col-sm-12"> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-child"></span> </div>
            <h4>Education</h4>
            <p style="text-align:justify;">The foundation of every nation is education. We believe that the objective of education is to prepare the young minds to be innovative thinkers and quick learners.</p>
          </a> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-book"></span> </div>
            <h4>College Library</h4>
            <p style="text-align:justify;">Strict silence should be observed inside the Library and in the vicinity at all... </p>
          </a> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-comments"></span> </div>
            <h4>Multi Purpose Halls</h4>
            <p style="text-align:justify;">The school has an Airconditioned hall for general meetings and convocation...</p>
          </a> </div>
        <div class="column col-md-4 col-sm-12"> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-child"></span> </div>
            <h4>Prayer Room</h4>
            <p style="text-align:justify;">"It is good to give thanks to the Lord To sing praises to Your name,O Most High...</p>
          </a> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-music"></span> </div>
            <h4>Technology</h4>
            <p style="text-align:justify;">Technology has now become a necessity for the generation next. It has to be integrated with education so that students keep pace with the ever changing global scenario. </p>
          </a> <a href="#" class="item left">
            <div class="icon"><span class="fa fa-futbol-o"></span> </div>
            <h4>Sports</h4>
            <p style="text-align:justify;">The school Provide all the sports facilities with trained sports teacher, G.P. INTERNATIONAL SCHOOL AND COLLEGE Mungra Badshahpur Jaunpur U.P. has the vision to use sports as tools for joyful learning and personality shaping. The school lays special emphasis on sports & fitness.</p>
          </a> </div>
      </div>
    </div>
  </div>
</section>
<!--our-service end-->
<!--call-to-action section-->
<!--<section class="call-to-action">
   <div class="container">
     <div class="overlay">
       <div class="row">
         <div class="col-md-9">
           <h3>Apply Now Alumni Registration</h3>
         </div>
         <div class="col-md-3">
           <ul class="link_btn">
             <li><a href="#" target="_blank" class="thm-btn">Apply Now</a> </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   </section>-->
<!--call-to-action section end -->
<!--our-courses section
   <section class="our-courses">
   
    <div class="container">
     <div class="col-md-12 col-sm-12">
      <div class="sec-title text-center">
         <h2>Percent  Wise Achievers (Board Examination Toppers of Class XII) 2018-19</h2>
       </div>
     
   <iframe src="http://siteadministrator.eduscol.in/Website/Toppers12P?schoolCode=RIALKO&amp;mainAccountId=4" class="topper_XII" scrolling="no"></iframe>
     <div class="S_Achiever"><a href="PercentXIIAchieves.html" class="thm-btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
    </div>
     
       
      <div class="col-md-12 col-sm-12 clearfix">&nbsp;</div>
     <hr>
        <div class="col-md-12 col-sm-12">&nbsp;</div>
     <div class="col-md-12 col-sm-12">
     <!-- <div class="sec-title text-center">
         <h2>Subject Wise Achievers (Board Examination Toppers of Class XII) 2017-18</h2>
       </div>
     
   <iframe src="http://siteadministrator.eduscol.in/Website/Toppers12?schoolCode=RIALKO&mainAccountId=4" class="topper_XII" scrolling="no"></iframe>
     <div class="S_Achiever"><a href="SubjectXIIAchieves.html" class="thm-btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
    </div>-->
<!--<div class="col-md-12 col-sm-12 clearfix">&nbsp;</div>
   <hr>
      <div class="col-md-12 col-sm-12">&nbsp;</div>
   <div class="col-md-12 col-sm-12">
    <div class="sec-title text-center">
       <h2>Subject Wise Achievers (Board Examination Toppers of Class X) 2017-18</h2>
     </div>
   
   <iframe src="http://siteadministrator.eduscol.in/Website/Toppers10?schoolCode=RIALKO&mainAccountId=4" class="topper_X" scrolling="no"></iframe>
   <div class="S_Achiever"><a href="StudentAchieves.html" class="thm-btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
   </div>-->
<div class="col-md-12 col-sm-12 clearfix">&nbsp;</div>
<!-- <hr>
   <div class="col-md-12 col-sm-12">&nbsp;</div>
   
   <div class="col-md-12 col-sm-12">
   <div class="sec-title text-center">
    <h2>Percent  Wise Achievers (Board Examination Toppers of Class X) 2018-19</h2>
   </div>
   
   <iframe src="http://siteadministrator.eduscol.in/Website/Toppers10P?schoolCode=RIALKO&amp;mainAccountId=4" class="topper_X" scrolling="no"></iframe>
   <div class="S_Achiever"><a href="PercentXAchieves.html" class="thm-btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
   </div>
   
   
   </div>
   
   </section>
   <!--our-courses section end-->
<!--team section-->
<!--<section class="our-team">
   <div class="container">
     <div class="sec-title text-center">
       <h2>Student's Birthday</h2>
     </div>
     <div class="content-box">
       <div class="row">
         <div class="item-list">
           <div class="column col-md-3 col-sm-6">
             <div class="single-team">
               <div class="img-holder"> <span></span>
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div class="content-holder">
                 <h3><a href="#">Student Name</a></h3>
                 <p>Student Date of Birth</p>
               </div>
             </div>
           </div>
           <div class="column col-md-3 col-sm-6">
             <div class="single-team">
               <div class="img-holder"> <span></span>
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div class="content-holder">
                 <h3><a href="#">Student Name</a></h3>
                 <p>Student Date of Birth</p>
               </div>
             </div>
           </div>
           <div class="column col-md-3 col-sm-6">
             <div class="single-team">
               <div class="img-holder"> <span class="female"></span>
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div class="content-holder">
                 <h3><a href="#">Student Name</a></h3>
                 <p>Student Date of Birth</p>
               </div>
             </div>
           </div>
           <div class="column col-md-3 col-sm-6">
             <div class="single-team">
               <div class="img-holder"> <span class="female"></span>
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div class="content-holder">
                 <h3><a href="#">Student Name</a></h3>
                 <p>Student Date of Birth</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </section>-->
<!--team section end-->
<!--app start-->
<!--<section id="testimonials" class="parallax">
   <div class="container">
     <div class="row">
       <div class="testimonials-title">
         <h3><strong> EduSCOL Web and Mobile Portal For Parent </strong> </h3>
         <h4></h4>
       </div>
       <div class="col-xs-12 col-sm-6 col-md-6"> <img src="images/about/Portal.png" alt="app" class="app-image"> </div>
       <div class="col-xs-12 col-sm-6 col-md-6">
         <ul>
           <li><a href="#" class="get-app-icon" target="_blank"><i class="fa fa-android" aria-hidden="true"></i> <span>android</span></a></li>
           <li> <a href="#" class="get-app-icon" target="_blank"><i class="fa fa-windows" aria-hidden="true"></i> <span>windows</span></a></li>
           <li><a href="#" class="get-app-icon" target="_blank"><i class="fa fa-apple" aria-hidden="true"></i> <span>apple</span></a></li>
         </ul>
         <aside class="app-text">School SMS through "RIALKO"</aside>
       </div>
     </div>
   </div>
   </section>
   app end-->
<!--Staffs start-->
<!--<section class="latest-news">
   <div class="container">
     <div class="sec-title text-center">
       <h2>Our Staff</h2>
     </div>
     <div class="content-box">
       <div class="row">
         <div class="item-list">
           <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="item">
               <figure class="image-box"> <img src="images/Staffs/1.jpg" alt="Staffs Image">
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </figure>
               <br>
               <h4><a href="blog-details.html">Community of Sisters</a></h4>
             </div>
           </div>
           <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="item">
               <figure class="image-box"> <img src="images/Staffs/2.jpg" alt="Staffs Image">
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </figure>
               <br>
               <h4><a href="#">Supervising Team</a></h4>
             </div>
           </div>
           <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="item">
               <figure class="image-box"> <img src="images/Staffs/3.jpg" alt="Staffs Image">
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </figure>
               <br>
               <h4><a href="#">Supporting Staff</a></h4>
             </div>
           </div>
           <div class="col-md-3 col-sm-6 col-xs-12">
             <div class="item">
               <figure class="image-box"> <img src="images/Staffs/4.jpg" alt="Staffs Image">
                 <div class="overlay">
                   <div class="inner">
                     <ul class="social">
                       <li><a href="#"><i class="fa fa-link"></i></a> </li>
                     </ul>
                   </div>
                 </div>
               </figure>
               <br>
               <h4><a href="#">Teaching Staff</a></h4>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </section>-->
<!--Staffs end-->
<!--Gallery-two-->
<section class="feature-two">
<?php
$url = $URL . "gallery/read_limit_gallery.php";
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
  <div class="sec-title text-center">
    <h2>Our Photo Gallery Album </h2>
  </div>
  <div class="feature-two-carousel">
    <?php
    $counter = 0;
    foreach ($result as $key => $value) {
      foreach ($value as $key1 => $value1) {
    ?>
        <div class="single-item">
          <a href="PhotoGallery.php">
            <div class="image-holder"> <img class="img-fluid" src="<?php echo $GALLERY_IMG_PATH."gallery_img".$value1->id.".png"; ?>" alt="Awesome Image" /></div>
          </a>
        </div>
    <?php }
    } ?>
  </div>
</section>
<!--Gallery-two end-->
<?php include "include/footer.php"; ?>