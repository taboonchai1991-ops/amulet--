/* =========================================
   AMULET DATA : ใช้ร่วม Search + Voice
========================================= */

const amulets = [
  {
    name: "พระสามกรุเวียงท่ากานเชียงใหม่",
    url: "https://photos.app.goo.gl/NdjgmtvmYvhDnP1v7",
    keywords: ["เวียงท่ากาน", "สามกรุ", "เชียงใหม่"]
  },
  {
    name: "พระเครื่องกรุงเทพมหานคร",
    url: "https://photos.app.goo.gl/GcmfNfKeiCzaTsFH8",
    keywords: ["กรุงเทพ", "กทม"]
  },
  {
    name: "พระเครื่องเมืองอยุธยา",
    url: "https://photos.app.goo.gl/4XQMKJAjMaJmFzZAA",
    keywords: ["อยุธยา"]
  },
  {
    name: "พระเครื่องเมืองอุตรดิตถ์",
    url: "https://photos.app.goo.gl/ghfZLTKCveMozpgk7",
    keywords: ["อุตรดิตถ์"]
  },
  {
    name: "หลวงปู่ฝั้น อาจาโร วัดป่าอุดมสมพร",
    url: "https://icedrive.net/s/YTVRj2Q2F5C7jw7iVATySXz12t4D",
    keywords: ["หลวงปู่ฝั้น", "ฝั้น", "สกลนคร"]
  },
  {
    name: "พระเครื่องนครนายกและปทุมธานี",
    url: "https://photos.app.goo.gl/jJDwJFZQPw72Wsr6A",
    keywords: ["นครนายก", "ปทุมธานี"]
  },
  {
    name: "หลวงปู่ไข่ วัดเชิงเลน",
    url: "https://icedrive.net/s/Q5S1Yi6twu4xQTwf58gR3DPRY3uy",
    keywords: ["หลวงปู่ไข่", "วัดเชิงเลน", "ไข่"]
  },
  {
    name: "พระเครื่องเมืองตรัง",
    url: "https://photos.app.goo.gl/BnHAyBYBLhnTxndCA",
    keywords: ["ตรัง"]
  },
  {
    name: "พระเครื่องอ่างทอง",
    url: "https://photos.app.goo.gl/nw9RMNeWse2gnxgk7",
    keywords: ["อ่างทอง"]
  },
  {
    name: "พระผงสุพรรณ",
    url: "https://photos.app.goo.gl/yEmxTfQwAXW33bAw7",
    keywords: ["สุพรรณ"]
  },
  {
    name: "พระเปิมลำพูน",
    url: "https://photos.app.goo.gl/WQLyGwurT1kKj5Kn9",
    keywords: ["ลำพูน", "พระเปิม"]
  },
  {
    name: "พระรอดมหาวันพิมพ์กลาง",
    url: "https://photos.app.goo.gl/SHUqBow99Rx5Ar1R6",
    keywords: ["พระรอด", "มหาวัน", "พิมพ์กลาง"]
  },
  {
    name: "พระเครื่องนครปฐม",
    url: "https://photos.app.goo.gl/UQ2cR1LrqMvJePWVA",
    keywords: ["นครปฐม"]
  },
  {
    name: "พระรอดมหาวันพิมพ์ใหญ่",
    url: "https://icedrive.net/s/fhBkPzfWzVVVGSPSgYkt3AvR3NyF",
    keywords: ["พระรอด", "พิมพ์ใหญ่"]
  },
  {
    name: "พระพุทโธน้อย แม่ชีบุญเรือน",
    url: "https://icedrive.net/s/vYkgSS3vTYAvVbkA97vSTki4tfXF",
    keywords: ["พุทโธน้อย", "แม่ชีบุญเรือน"]
  },
  {
    name: "หลวงพ่อเกษร วัดท่าพระ",
    url: "https://icedrive.net/s/jb992PRiWg2htBuxaB4bZ1f6R7i8",
    keywords: ["หลวงพ่อเกษร", "วัดท่าพระ"]
  },
  {
    name: "พระปรุหนัง หลวงพ่อเนียม",
    url: "https://mega.nz/folder/bK4yjIaA#iLp1GuhiwRVVpPshQ1YpXQ",
    keywords: ["ปรุหนัง", "หลวงพ่อเนียม", "เนียม"]
  },
  {
    name: "หลวงพ่อแก้ว พิมพ์ปั่น",
    url: "https://icedrive.net/s/kB2a6552k1QyT4bzhaGYtB1F5fT7",
    keywords: ["หลวงพ่อแก้ว", "พิมพ์ปั่น"]
  },
  {
    name: "หลวงพ่อวงษ์ วัดทุ่งผักกูด",
    url: "https://icedrive.net/s/kB2a6552k1QyT4bzhaGYtB1F5fT7",
    keywords: ["หลวงพ่อวงษ์", "วัดทุ่งผักกูด"]
  },
  {
    name: "หลวงปู่พริ้ง วัดบางปะกอก",
    url: "https://icedrive.net/s/1Bjz968YDNt3YaiQ8tBR1FTW3gX8",
    keywords: ["หลวงปู่พริ้ง", "หลวงพ่อพริ้ง"]
  },
  {
    name: "พระกรุวังบัว เพชรบุรี",
    url: "https://icedrive.net/s/3i8uCCFhB2Z5F4xv1tx2uikikYTa",
    keywords: ["พระกรุวังบัว", "กรุวังบัว", "เพชรบุรี"]
  },
  {
    name: "พระพิมพ์เศียรแหลม หลวงพ่อเนียม",
    url: "https://mega.nz/folder/GGRmEajK#0fctrh7UpyNlGaZU5Yftwg",
    keywords: ["เศียรแหลม", "หลวงพ่อเนียม"]
  },
  {
    name: "พระเชตุพน หลวงพ่อเนียม",
    url: "https://icedrive.net/s/9f4SPuf1Yvg5C8D4Q3u9vg1YBNW4",
    keywords: ["พระเชตุพน", "หลวงพ่อเนียม"]
  }
];
