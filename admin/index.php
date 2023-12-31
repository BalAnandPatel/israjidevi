<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>G P INTERNATIONAL SCHOOL AND COLLEGE</title>
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="../common/plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="../common/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../common/dist/css/adminlte.min.css">

  <!--favicon-->
  <link rel="apple-touch-icon" sizes="180x180" href="../images/logo/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/logo/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../images/logo/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="../images/logo/favicon_io/site.webmanifest">
</head>
<body class="hold-transition login-page" style="background: url(../images/slider_images/slider1.jpg);background-size:cover;background-repeat: no-repeat;">
<div class="login-box">
  <div class="login-logo">
    <a href="../index.php"><img src="../images/logo/f.png" style="width:15%;"></a>
  </div>
  <center>
    <h4><a href="../index.php"><b>G P INTERNATIONAL SCHOOL AND COLLEGE</b></a></h4>
    <p><b>Welcome Back!!</b></p>
  </center>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Enter your Id and Password to login</p>

      <form action="action/adm_login_post.php" method="post">
        <div class="input-group mb-3">
          <input type="text" name="userName" class="form-control" placeholder="Email" autocomplete="off" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="password" class="form-control" placeholder="Password" autocomplete="off" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <p class="mb-1">
      <i class="fa fa-lock"></i>
        <a href="adm_forgot-password.php">I forgot my password</a>
      </p>
      <!-- <p class="mb-0">
      <i class="fa fa-user"></i>
        <a href="register.php" class="text-center">Register a new membership</a>
      </p> -->
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
<!-- jQuery -->
<script src="../common/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../common/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../common/dist/js/adminlte.min.js"></script>
</body>
</html>
