function listen(callback){
  if(!('webkitSpeechRecognition' in window)){
    alert("เบราว์เซอร์ไม่รองรับคำสั่งเสียง");
    return;
  }

  const rec = new webkitSpeechRecognition();
  rec.lang = "th-TH";
  rec.start();

  rec.onresult = e => {
    callback(e.results[0][0].transcript);
  };
}

function speak(text){
  const s = new SpeechSynthesisUtterance(text);
  s.lang = "th-TH";
  speechSynthesis.cancel();
  speechSynthesis.speak(s);
}
