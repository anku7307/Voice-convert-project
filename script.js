
function convert(){
    let a=document.getElementById('text')
   let speech = new SpeechSynthesisUtterance(a.value)
//    console.log(speech);
      window.speechSynthesis.speak(speech)
      a.value = "";
}

function voiceToText(){
      let a = new webkitSpeechRecognition()
       a.continuous=true
       a.start()
       a.onresult=function(b){
            // console.log(b.results[0][0].transcript);

              document.getElementById("text").value=b.results[0][0].transcript
       }

}