function preload(){
classifier=ml5.imageClassifier("DoodleNet")    
}

function setup(){
    var canvas=createCanvas(280,280);
    canvas.center()
    background("white");
    canvas.mouseReleased(classifyCanvas)
    var synth=window.speechSynthesis;
}

function draw(){
    strokeWeight(13)
    stroke(127.5)

    if(
        mouseIsPressed        
    )

    {
    line(pmouseX,pmouseY,mouseX,mouseY)
    }

}

function classifyCanvas(){
    classifier.classify (canvas,gotResult)
}

function gotResult(error,result){
 if(
    error
 )
 {console.log ("error")}

console.log (result)
document.getElementById("tag").innerHTML="es un "+result[0].label;
document.getElementById("nombreDelDibujo").innerHTML="estoy seguro un "+ Math.round (result[0].confidence*100)+"%";
var utterthis=new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterthis)
}

function delet(){
    background ("white")

}