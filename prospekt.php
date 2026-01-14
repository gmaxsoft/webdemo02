<div class="page-wrapper">

    <?php include_once('nav.php'); ?>

    <!--Page Title-->
    <section class="page-title bg-a">
        <div class="auto-container">
            <div class="content-box">
                <h1><?php echo $pageTitle; ?></h1>
                <div class="bread-crumb"><a href="index.php">Start</a> / <a href="#" class="current"><?php echo $pageTitle; ?></a></div>
            </div>
        </div>
    </section>

    <!--Gallery Section-->
    <section class="gallery-section full-width" id="gallery-section">
        <div class="auto-container">

            <!--Section Title-->
            <div class="sec-title">
                <div class="text">
                    <?php echo $pageContent; ?>
                </div>
            </div>

            <!--Filter-->
            <div class="filters">
                <?php echo $galleryModuleCat->view_cat(); ?>
            </div>

        </div>

        <div class="images-container">
            <div class="filter-list clearfix">
                <?php echo $galleryModuleCat->view_gallery(); ?>
            </div>
        </div>


    </section>

    <!--Intro Section-->
    <section class="intro-section">
        <div class="auto-container">
            <div class="outer-box clearfix">
                <span class="anim-image wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1000ms"><img src="<?php echo $dirThemepath; ?>/images/logo-white.png" alt="Logo" class="maxw-logo"></span>
                <div class="col-md-9 col-sm-7 col-xs-12">
                    <?php echo $staticBlockModule->getBlock("przerywnik"); ?>
                </div>
                <div class="col-md-3 col-sm-5 col-xs-12 text-right">
                    <a href="kontakt/5/" class="theme-btn btn-style-two">KONTAKT</a>
                </div>
            </div>
        </div>
    </section>

    <!--Main Footer-->
    <footer class="main-footer">
        <div class="auto-container">

            <?php include_once('page_footer.php'); ?>

        </div>
    </footer>

</div>
