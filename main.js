
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    
    canvas = createCanvas(470,390);
    canvas.position(1,14);
    video.center()


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}


function modelLoaded()
{
    console.log("poseNet is inecilized");
}

function gotposes(results){
if(length.results > 0){
    console.log(results);
}
}