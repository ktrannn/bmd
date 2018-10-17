<div class="contact-page">
    <div class="menu-close menu-close--left">
        <i class="fa fa-times-circle"></i>
    </div>
    <div class="contact-page__information">
        <h3>Send Us An Email</h3>
        <form action="">
            <input required type="text" placeholder="Name">
            <input required type="email" placeholder="Email">
            <textarea required placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
        <div class="contact-page__social-links">
            <a href="mailto:<?php echo $email_address;?>"><i class="fa fa-envelope"></i><?php echo $email_address;?></a>
            <a href=""><i class="fa fa-phone"></i><?php echo $phone_number;?></a>
        </div>
    </div>
</div>
