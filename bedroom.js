image=""
status="";
function preload(){
image=loadImage("background_object_detecter");
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',model_loaded);
}
function modelLoaded() {
    console.log("model loaded");
    status=true;
    object_detector.detect(image,got_result);
}
function gotresults(results){

}