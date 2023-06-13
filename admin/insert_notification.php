<?php
include "include/header.php";
?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Add Notification</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">Notification</li>
            <li class="breadcrumb-item active">Add Notification</li>
          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">


    <div class="container-fluid">

      <?php
      if (isset($_SESSION["notification_success"])) {
        echo '<div class="alert alert-success rounded-0" role="alert">' . $_SESSION["notification_success"] . '</div>';
        unset($_SESSION["notification_success"]);
      } else if (isset($_SESSION["notification_error"])) {
        echo '<div class="alert alert-danger rounded-0" role="alert">' . $_SESSION["notification_error"] . '</div>';
        unset($_SESSION["notification_error"]);
      }


      ?>

      <!-- SELECT2 EXAMPLE -->
      <div class="card card-default">
        <div class="card-header">
          <h3 class="card-title">Add Notification</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <form action="action/notification_post.php" method="post" enctype="multipart/form-data">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="name">Notification Title*</label>
                  <input type="text" class="form-control" name="n_title" id="exampleFormControlInput1" placeholder="Title" autocomplete="off" required>
                </div>
              </div>

            </div>

            <!-- <div class="row">
              <div class="col-md-12">
              <div class="form-group">
               <label for="name">Are you want to upload pdf</label>
                </div>
                <div class="form-group">
                  <label class="radio-inline">
                    <input type="radio" name="optradio" checked>yes
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="optradio">No
                  </label>
                </div>
              </div>
            </div> -->

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="post">Upload Notification PDF</label>
                  <input type="file" class="form-control" name="pdf_file" id="exampleFormControlInput1" placeholder="Enter post hear" autocomplete="off">
                  <strong id="emailHelp" class="form-text text-danger">Notification file should be in PDF format.</strong>
                </div>
              </div>
            </div>

            <!-- /.row -->
            <div class="btn-group w-auto">
              <button type="submit" name="submit" class="btn btn-success col start">
                <i class="fas fa-plus"></i><span> Add details</span>
              </button>
            </div>

        </div>
        </form>
        <!-- /.card-body -->
        <div class="card-footer">
          G.P.INTERNATIONAL SCHOOL AND COLLEGE
        </div>
      </div>
      <!-- /.card -->


      <div class="row">
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
<!-- /.content-wrapper -->
<?php include "include/footer.php"; ?>