//This is a resizeable script, used to make responsive image
//Just change the id variable in image
let ratioSize = [
    {
        "ratio":"4:3",
        "size": 3
    },
    {
        "ratio":"16:9",
        "size": 9
    }
]

function resizeable(id, aspect=true, ratio="4:3", size=0){
    if(aspect != true){
        ratio = "";
    }

    else{
        ratioSize.forEach((element) => {
            if (element.ratio == ratio){
                size = element.size;
            }
            else{
                size = 0;
                console.log("invalid ratio, reverting to default size");
            }
        });
    }

    //On Load
    let image = document.getElementById(id);
    window.addEventListener("load", () => {
        let imageWidth = image.offsetWidth;
        let CalcHeight = parseInt(imageWidth) * size;
        let imageHeight = CalcHeight + "px";
        image.style.height = imageHeight;
    });
    
    //On Resize window
    window.addEventListener("resize", () => {
        let imageWidth = image.offsetWidth;
        let CalcHeight = parseInt(imageWidth) * size;
        let imageHeight = CalcHeight + "px";
        image.style.height = imageHeight;
    });
}