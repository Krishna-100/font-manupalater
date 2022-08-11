function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
}

function modelloaded(){
    console.log("PoseNet model is initialised");
}

function gotPoses(results) {
if(results.length >0) {
    console.log(results);
}
}