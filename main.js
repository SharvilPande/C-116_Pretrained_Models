noseX = 0;
noseY = 0;

function preload() {
   clown_image = loadImage("https://i.postimg.cc/gk97vD3y/clown-nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
    }
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_image, noseX-15, noseY-15, 30, 30);

}

function take_snaphot() {
    save("filtered_image.png");
}