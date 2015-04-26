<?php $pagename = "Animations"; ?>
<?php include("header.php"); ?>
<?php
//$blankArray = [];
$imgArray = createCarousel();
?>
<section class="row">
    <div class="column-10 centered">
        <div class="copyDiv">
            <h2>Dynamic Images *Carousel*</h2>
            <p>
                The carousel, uses Front-End languages in conjunction with Back-End ones to create a Dynamic 3D rotating carousel. 
            </p>
        </div>
    </div>
</section>
<section class="row">
    <div class="column-10 centered">
        <div class="container centered">
            <div class="carousel" data-angle="<?php echo $imgArray[0]["angle"]; ?>" data-translate="<?php echo $imgArray[0]["translateZ"]; ?>">
                <?php foreach ($imgArray as $img) : ?>
                    <div class="carouselImgs" style="transform: rotateY(<?php echo $img["rotateY"]; ?>) translateZ(<?php echo $img["translateZ"]; ?>); 
                         -webkit-transform: rotateY(<?php echo $img["rotateY"]; ?>) translateZ(<?php echo $img["translateZ"]; ?>);">
                        <img src="<?php echo $img["img"]; ?>"/>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <span class="button" id="left"><</span><span class="button" id="right">></span>
    </div>
</section>
<section class="row">
    <div class="column-10 centered">
        <div class="copyDiv">
            <h4>To the code...</h4>
            <code>
                <pre>
                $imgArray = createCarousel();
                </pre>
            </code>
        </div>
    </div>
</section>
<script type="text/javascript">
    //var ie = !(navigator.userAgent.indexOf("MSIE") < 0);
    var ie = false;
    if (navigator.appName === "Microsoft Internet Explorer" || 
            navigator.userAgent.match(/Trident.*rv[ :]*11\./)) {
        ie = true;
    }
    var head = document.getElementsByTagName('head')[0];
    if(ie === false) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "includes/js/carousel.js";
        head.appendChild(script); 
    }else{
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "includes/js/carousel_IE.js";
        head.appendChild(script); 
    }
</script>
<?php include("footer.php"); ?>
