/* =================================================
   VOICE SEARCH SYSTEM : พระลึกลับแดนสยาม
   ใช้ร่วมกันทุกหน้า
================================================= */

function startVoice() {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("เบราว์เซอร์นี้ไม่รองรับคำสั่งเสียง");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "th-TH";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    const speechText = event.results[0][0].transcript.trim();
    console.log("🎤 ได้ยิน:", speechText);

    const links = document.querySelectorAll(".card a");
    let found = false;

    links.forEach(link => {
      const name = link.textContent.trim();

      // ค้นหาด้วยการ match บางส่วน
      if (speechText.includes(name) || name.includes(speechText)) {
        speak(`เปิด ${name} ให้แล้วครับเจ้านาย`);
        window.open(link.href, "_blank");
        found = true;
      }
    });

    if (!found) {
      speak("เจ้านายครับ ยังไม่มีรายชื่อพระครับเจ้านาย");
    }
  };

  recognition.onerror = function () {
    speak("ขออภัยครับเจ้านาย ระบบไม่สามารถรับคำสั่งเสียงได้");
  };
}

/* ================== SPEAK BACK ================== */
function speak(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "th-TH";
  speech.rate = 0.95;
  speech.pitch = 1;
  window.speechSynthesis.cancel(); // หยุดเสียงเดิมก่อน
  window.speechSynthesis.speak(speech);
}
