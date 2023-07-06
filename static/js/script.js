//emulator
let iframe = document.getElementById("iframe");
// centering the iframe
let container_width = (window.screen.width/100)*90;
iframe.style.marginLeft = (window.screen.width - container_width)/2

// adjusting scale to check responsives
function adjustScale() {
  let frame_width = iframe.offsetWidth;
  let frame_height = iframe.offsetHeight;

  let scaleVal = container_width / frame_width;
  iframe.style.transform = `scale(${scaleVal})`;
  setIframeHeight((window.screen.height/100)*50)// ses the iframe height 50% of the screen
  iframe.parentElement.style.height = getScaledHeight() + 30 // sets the height of parent div of iframe to fit the iframe in the div
  
}

adjustScale()


function getScaledHeight(){
    var rect = iframe.getBoundingClientRect();
    var scaledHeight = rect.height;

    return scaledHeight
}


// for range slider
const slider = document.getElementById("slider");
slider.value = container_width
    function generateColor() {
      let value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
      slider.style.background = `linear-gradient(to right, #a755f7, #a755f7 ${value}%, #eee ${value}%, #eee) no-repeat`;
      slider.nextElementSibling.innerHTML = slider.value + "px"
    }
    generateColor()
    
    slider.addEventListener("input", generateColor)


// change width
function changeWidth(width){
    iframe.style.width = width
    adjustScale()
    slider.width = width;
    generateColor()
}

//  width
slider.value = iframe.offsetWidth
slider.addEventListener("input",(event)=>{
    event.preventDefault();
    changeWidth(slider.value)
})

slider.addEventListener("change",(event)=>{
    event.preventDefault();
    iframe.scrollIntoView({behavior:"smooth"})
})


function setIframeHeight(desiredHeight) {
  // Calculate the scaling factor
  var containerWidth = (window.screen.width / 100) * 90;
  var frameWidth = iframe.offsetWidth;
  var scaleVal = containerWidth / frameWidth;

  // Calculate the scaled height
  var scaledHeight = desiredHeight / scaleVal;

  // Calculate the difference
  var heightDifference = scaledHeight - iframe.offsetHeight;
  
  iframe.style.height = iframe.offsetHeight + heightDifference
  return heightDifference;
}


// auto scroll
let messageAlert = document.querySelector(".alert")

if (messageAlert == null){
    slider.scrollIntoView({ behavior:'smooth'})
}
else{
    // scroll to alert
    messageAlert.scrollIntoView({ behavior: 'smooth' });
}

