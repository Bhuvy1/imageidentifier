Webcam.set(
{
  width : 350,
  height : 300,
  Image_format : 'png',
  png_quality : 90,

  constraint : {facingMode: "environment"}
}
      
);


camera = document.getElementById("camera");
Webcam.attach("#camera")



