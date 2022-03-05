song1="";
song2="";
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
}
function draw()
{
    image(video,0,0,450,450);
}
function play()
{
    song1.play();
}