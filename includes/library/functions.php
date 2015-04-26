<?php

/* * *********************************
 * HERE BE ALL THE FUNCTIONS
 *//////////////////////////////////

/**
 * REDIRECT FUNCTION 
 */
function redirect_to($page) {
    header("Location: " . $page);
    exit();
}

/**
 * CAROUSEL FUNCTIONS
 */
//Calculate angle 
function createCarousel() {
    $array = [];
    $count = 0;
    foreach (glob("../includes/img/carousel/*") as $imgLoc) {
        echo $array[$count];
        $array[$count] = array("img"=> $imgLoc, "rotateY"=> 0, "rotateX"=> 0, "translateZ"=> 0, "angle"=> 0); 
        $count++;
    }
    $angle = adjustAngle($count);
    
    for($i=0;$i<sizeof($array);$i++) {
        $array[$i]["angle"] = $angle;
    }
    $arrayFixY = adjustRotateY($array, $angle);
    $arrayFixYFixX = adjustRotateX($arrayFixY, $angle);
    $arrayFixYFixXFixZ = adjustTranslateZ($arrayFixYFixX, $angle);
    return $arrayFixYFixXFixZ;
}

function adjustAngle($numOfSlices) {
    //Like a pie we calculate the angles of each slice based on how many slices 
    //there are. 360/number of slices
    $angle = 360/$numOfSlices;
    return $angle;
}

function adjustTranslateZ($array, $angle) {
    $translateZ = 105/tan(deg2rad($angle/2));
    for ($i=0; $i < sizeof($array); $i++) {
        $array[$i]["translateZ"] = $translateZ ."px";
    }
    return $array;
}

function adjustRotateY($array, $angle) {
    $rotation = 0;
    for ($i=0; $i < sizeof($array); $i++) {
        if($i === 0) {
            $array[$i]["rotateY"] = 0 . "deg";
        }else{
            $rotation = $rotation + $angle;
            $array[$i]["rotateY"] = $rotation . "deg";
        }
    }
    return $array;
}

function adjustRotateX($array, $angle) {
    $rotation = 0;
    for ($i=0; $i < sizeof($array); $i++) {
        if($i === 0) {
            $array[$i]["rotateX"] = 0 . "deg";
        }else{
            $rotation = $rotation + $angle;
            $array[$i]["rotateX"] = $rotation . "deg";
        }
    }
    return $array;
}

?>
