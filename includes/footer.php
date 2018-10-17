<?php include('footer-links.php');?>
  <footer>
    <div class="footer-container wrapper">
      <div class="footer-container__information">
		  <a href="index.php" class="footer-container__home-link">BM Digital Solutions</a>
		  <div class="footer-container__contact-info">
				<div class="footer-container__contact-info__links">
					<i class="fa fa-envelope"></i>
					<a href="mailto:<?php echo $email_address;?>"><?php echo $email_address;?></a>
				</div>	
				<div class="footer-container__contact-info__links">
					<i class="fa fa-phone"></i>
					<a href=""><?php echo $phone_number;?></a>
				</div>
		  </div>
      </div>
      <div class="footer-container__social-links">
		<a href="<?php echo $facebook;?>" target="_blank">
			<i class="fa fa-facebook-f"></i>
		</a>
		<a href="<?php echo $linkedin;?>" target="_blank">
			<i class="fa fa-linkedin"></i>
		</a>
		<a href="<?php echo $twitter;?>" target="_blank">
			<i class="fa fa-twitter"></i>
		</a>
		<a href="twitter.com" target="_blank">
			<i class="fa fa-instagram"></i>
		</a>
      </div>
    </div>
  </footer>
  <?php include('includes/header-nav.php'); ?>
  <?php include('includes/contact.php'); ?>
	<script>
    AOS.init();
	</script>
</body>

</html>
