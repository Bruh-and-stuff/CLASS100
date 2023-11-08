var vc = window.webkitSpeechRecognition

var rec = new vc

function start_r(){
    document.getElementById("textbox").innerHTML = ""
    rec.start()
    
}

rec.onresult = function(event){
 
    console.log(event)

    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    if(content == "take my selfie"){
    speaking();
    }
}

function speaking(){
    var sts = window.speechSynthesis
    var tData = "Taking Pic in 10 seconds.    10. 9. 8. 7. 6. 5. 4. 3. 2. 1. Picture taken."

    var spoken = new SpeechSynthesisUtterance(tData)
    sts.speak(spoken)

    Webcam.attach(AIC)
    setTimeout(function(){
        takeSnap()
        save()
    }, 9000);
    
}

AIC = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

function takeSnap(){
    console.log("functionRegistered")
    Webcam.snap(function(snapped){
        document.getElementById("result").innerHTML = "<img id='resultIMG' src='"+snapped+"' >"
    });
};

function save(){
    aLink = document.getElementById("picture");
    myImage = document.getElementById("resultIMG").src;
    aLink.href = myImage
    aLink.click()
}
