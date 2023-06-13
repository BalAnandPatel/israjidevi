<?php include "include/header.php"; ?>	  






  <!--about start-->
  <section class="page-title">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-6 col-sm-6 col-xs-12 pull-left">
          <h1>Transfer Certificate</h1>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 pull-right text-right path"><a href="index.php">Home</a>&ensp;&gt;&ensp;<a href="TC.php">Transfer Certificate</a> </div>
        <div class="overlay"></div>
      </div>
    </div>
  </section>
  <!--about end-->
  <style>
  .btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}</style>
  <section class="our-courses">
    <div class="container">
    <div class="col-md-12 col-sm-12 col-xs-12">
		<center>
	  <form action="http://dparadiseschool.com/TC.php" method="GET">
      <div class="text-center">
		<div class="form-group">
		  <label for="usr">Enter SR Number:</label>
		  <center><input type="text" name="sr_no" required style="width:250px;" class="form-control" id="usr"><br><button type="Submit" class="btn"><i class="fa fa-download"></i> Download</button></center>
		</div>
      </div>
	  </form>
	  </center>
    </div>
		  </div>
  </section>
  <div id="calendar" class="fc-calendar-container fc-agile" style="display:none;"></div>




<?php include "include/footer.php"; ?>