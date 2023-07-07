# Device Emulator

## Description

Device Emulator is a Django web application that allows you to emulate different devices and view webpages on them. It provides a user-friendly interface for selecting devices and rendering webpages, making it easy to test the ```responsiveness``` and layout of websites.Here is a [Demo](https://dienesh89.github.io/Device_emulator/).

## Purpose

It is made for the beginner's who are trying make web app on ```android``` just like me and They cannot use chrome's dev tools,but now,They can use ```kiwi browser``` for the other browser's dev tools and ```device emulator``` to check responsiveness.

## working
It works on two css properties ```width``` and ```scale``` here is the function which do it:
```js
let container_width = (window.screen.width/100)*90;
iframe.style.marginLeft = (window.screen.width - container_width)/2 // centering the frame

// adjusting scale to check responsives
function adjustScale() {
  let frame_width = iframe.offsetWidth;
  let frame_height = iframe.offsetHeight;

  let scaleVal = container_width / frame_width;
  iframe.style.transform = `scale(${scaleVal})`;
  setIframeHeight((window.screen.height/100)*50)// ses the iframe height 50% of the screen
  iframe.parentElement.style.height = getScaledHeight() + 30 // sets the height of parent div of iframe to fit the iframe in the div
  
}

```

- ```container_width``` is 90% width of the screen it will be width of iframe
- Scaling the iframe of any ```width(width given by user)``` to be fit inside the ```div(container_width)```

With this function we can check responsiveness like this:
```js
// w is the width(in px) you wanted to see your page
let w = 1024
iframe.style.width = `${w}px`

// now call the adjustScale function
adjustScale() // after calling this function you can see your page in the width of 1024px
```        
## Installation
You have to install it to use beacuse any ```free``` django hosting service is ```not available```.
### For Android
To install,follow these steps respectively:

- [Setup Termux app](https://www.geeksforgeeks.org/how-to-install-termux-on-android/amp/)

- Run command:
```shell
   apt update && apt upgrade
```
- Run command:
```shell
   pkg install python==3.11.4
```
- Run command:
```shell
   pkg install git
```
- Run command:
```shell
   git clone https://github.com/dienesh89/Device_emulator
```
- Run command:
```shell
   cd device_emulator
```
- Run command:
```shell
   pip install -r requirements.txt
```
- Run command:
```shell
   python manage.py runserver
```
- Now,go to the ```http://127.0.0.1:8000``` in your browser
  
![page1](https://dienesh89.github.io/Device_emulator/readme_images/page1.jpg)

![page2](https://dienesh89.github.io/Device_emulator/readme_images/page2.jpg)  

![page3](https://dienesh89.github.io/Device_emulator/readme_images/page3.jpg)  

**For Desktop:** Run all these given commands in command prompt.

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue in the GitHub repository.# Device_emulator
