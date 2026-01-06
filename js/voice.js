/* =================================================
   VOICE SEARCH SYSTEM : พระลึกลับแดนสยาม
   FILE : voice.js
   ใช้ร่วมกับ amulet-data.js
================================================= */

/* 🎤 เริ่มระบบสั่งงานด้วยเสียง */
function startVoice() {

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("เบราว์เซอร์นี้ไม่รองรับคำสั่งเสียง");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "th-TH";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  speak("เจ้านายครับ โปรดออกคำสั่งได้เลยครับ");

  recognition.onresult = function (event) {
    let speechText = event.results[0][0].transcript.trim();
    console.log("🎤 ได้ยิน:", speechText);

    /* ===============================
       🔍 หมวดถามว่ามีพระอะไรบ้าง
    =============================== */
    if (
      speechText.includes("มีพระอะไร") ||
      speechText.includes("มีพระอะไรบ้าง") ||
      speechText.includes("ตอนนี้มีพระอะไร") ||
      speechText.includes("ในระบบมีพระอะไร")
    ) {
      listAllAmulets();
      return;
    }

    /* ===============================
       🔍 ค้นหาพระตามชื่อ / keyword
    =============================== */

    speechText = speechText
      .replace("ค้นหา", "")
      .replace("เปิด", "")
      .replace("ดู", "")
      .trim();

    let found = false;

    for (const amulet of amulets) {
      const match =
        speechText.includes(amulet.name) ||
        (amulet.keywords &&
          amulet.keywords.some(keyword =>
            speechText.includes(keyword)
          ));

      if (match) {
        speak(`เปิด ${amulet.name} ให้แล้วครับเจ้านาย`);
        window.open(amulet.url, "_blank");
        found = true;
        break;
      }
    }

    if (!found) {
      speak("เจ้านายครับ ยังไม่พบพระในระบบครับ");
    }
  };

  recognition.onerror = function () {
    speak("ขออภัยครับเจ้านาย ระบบรับคำสั่งเสียงขัดข้อง");
  };
}

/* 📜 อ่านรายชื่อพระทั้งหมด */
function listAllAmulets() {
  if (!amulets || amulets.length === 0) {
    speak("ขณะนี้ยังไม่มีข้อมูลพระในระบบครับ");
    return;
  }

  const names = amulets.map(a => a.name).join(" , ");
  speak(`ตอนนี้ในระบบมีพระทั้งหมด ${amulets.length} รายการ ได้แก่ ${names}`);
}

/* 🔊 ระบบพูดตอบกลับ */
function speak(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "th-TH";
  speech.rate = 0.95;
  speech.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}
