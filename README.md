# resizeable
Script to autorezise image based on browser width

# How to use
Export resizeable.js to your html file as an inline script or use resizeable.func.js if you want to use it on your own js file

The default use of resizeable is resizeable(id, aspect=true, ratio="4:3", size=0)

Where id is the id of the image

Aspect define if the image follows a certain aspect ratio

Ratio is the size of the aspect ratio

Size is the int number use to calculate the height through multiplication

## Example
resizeable("img", false, null, 0.35)

This will find a div or image with id of "img", without using a certain aspect ratio, and size of the height will be multiplied by 0.35

You can try in index.html I've made inside demo folder

FOR THIS VERSION, ASPECT RATIO STILL CAN'T BE USED AND WILL BE IMPLEMENTED ON FUTURE UPDATE
