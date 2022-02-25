noseX=0;
noseY=0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw()
{
    background("#4169e1");
    fill('#9b1c31');
    stroke('black');
    square(noseX,noseY,difference);
    document.getElementById("square_size").innerHTML = "width and height of a square will be = " + difference + "px";
}

function modelLoaded()
{
    console.log("posenet work now");
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor( leftWristX - rightWristX);
    } 
}
