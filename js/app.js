const cards = [...document.querySelectorAll(".card")];

function showHeard(text){
  document.getElementById("voiceBox").innerHTML =
    "🗣️ ได้ยินว่า: <b>" + text + "</b>";
}

function filterCards(keyword){
  cards.forEach(c=>{
    c.style.display = c.innerText.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
}

function startAI(){
  document.getElementById("voiceBox").innerHTML = "🎙️ กำลังฟัง...";

  listen(sentence=>{
    showHeard(sentence);

    const result = aiUnderstand(sentence);

    if(result){
      speak(result.reply);

      // แสดงเฉพาะการ์ดที่เกี่ยวข้อง
      let shown = false;
      result.keywords.forEach(k=>{
        cards.forEach(c=>{
          if(c.innerText.toLowerCase().includes(k)){
            c.style.display = "block";
            shown = true;
          }
        });
      });

      if(!shown){
        cards.forEach(c=>c.style.display="none");
      }

    }else{
      cards.forEach(c=>c.style.display="none");
      speak("เจ้านายผมยังไม่ได้เขียนโค้ดครับ");
    }
  });
}
