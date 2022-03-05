song1="";
song2="";
left_y=0;
left_x=0;
right_y=0;
right_x=0;
function preload()
{
    song1=loadSound('song.mp3');
    song2=loadSound('palat.mp3');
}
function setup()
{
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,gotPoses);
    posenet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,450,450);
}
function play()
{
    song1.play();
}
function gotPoses(results)
{
if (results.length>0)
{
    console('left_x=' + left_x,'left_y=' +left_y)
}
}