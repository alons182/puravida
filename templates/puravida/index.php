<?php
/**
 * @package     Joomla.Administrator
 * @subpackage  Templates.Puravida
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;



$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$this->language = $doc->language;


$itemid   = $app->input->getCmd('Itemid', '');

// Add JavaScript Frameworks
//JHtml::_('bootstrap.framework');

// Add Stylesheets
//$doc->addStyleSheet('templates/'.$this->template.'/css/normalize.min.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/main.css');



?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" >
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<jdoc:include type="head" />
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700' rel='stylesheet' type='text/css'>
	<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/modernizr-2.6.2.min.js"></script>
     
     
</head>

 <body class="<?php echo ($itemid ? ' bgid-' . $itemid : '')?>">
        <div class="header-top">
            <div class="inner">
                <jdoc:include type="modules" name="languajes" style="none" />
                <jdoc:include type="modules" name="btn-login" style="xhtml" />
            </div>  
        </div>
        <header>
            <div class="inner">
                
                <a href="<?php echo $this->baseurl ?>" class="logo"><img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/logo.png" alt="Pura vida Teaching" /></a>
                <div id="btn_nav"><i class="icon-menu"></i></div>
                <nav class="menu">
                    <jdoc:include type="modules" name="menu" style="none" />
                </nav>

            </div>
        </header>
        
        <?php if ($this->countModules('banner')) : ?>
            <section class="banner">
                
                <jdoc:include type="modules" name="banner" style="none" />
               
            </section>
         <?php endif; ?>
         <?php if ($this->countModules('header-section')) : ?>
            <section class="header-section">
                <div class="inner">
                     <jdoc:include type="modules" name="header-section" style="none" />
                </div>
               
               
            </section>
         <?php endif; ?>
        <section class="main inner">
                <jdoc:include type="message" />
                <jdoc:include type="component" />
               
                <?php if ($this->countModules('files')) : ?>
                <section class="files">
                   <jdoc:include type="modules" name="files" style="none" />
                </section>
                <?php endif; ?>
                 <?php if ($this->countModules('video')) : ?>
                <section class="section-video">
                    <jdoc:include type="modules" name="video" style="none" />
                </section>
                <?php endif; ?>
            
        </section>
        <footer>
            <em class="tear"></em>
            <div class="inner">
                <div class="column column-contact">
                    <jdoc:include type="modules" name="contact-footer" style="none" />
                    <div class="redes">
                        <a href="#"><i class="icon icon-facebook"></i></a>
                        <a href="#"><i class="icon icon-twitter"></i></a>
                        <a href="#"><i class="icon icon-googleplus"></i></a>
                    </div>
                </div>
                <div class="column column-links">
                    <h3>Links</h3>
                    <nav class="menu-footer">
                        <jdoc:include type="modules" name="menu-footer" style="none" />
                    </nav>
                </div>
                <div class="column column-logo">
                     <a href="#"><img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/logo.png" alt="Pura vida Teaching"/></a>
                </div>
            </div>
        </footer>
        <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery-1.11.0.min.js"><\/script>')</script>-->
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.cycle2.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
        <jdoc:include type="modules" name="debug" style="none" />
    </body>

</html>
