const STORAGE_KEY = "ziyang-web-lang";

const messages = {
  "nav.home": { zh: "首页", en: "Home" },
  "nav.about": { zh: "关于我", en: "About" },
  "nav.contact": { zh: "联系我", en: "Contact" },
  "lang.toggle": { zh: "English", en: "中文" },

  "page.index.title": { zh: "Ziyang Web", en: "Ziyang Web" },
  "page.about.title": { zh: "关于我 - Ziyang Web", en: "About - Ziyang Web" },
  "page.contact.title": { zh: "联系我 - Ziyang Web", en: "Contact - Ziyang Web" },
  "page.tokyo.title": { zh: "东京 - Ziyang Web", en: "Tokyo - Ziyang Web" },
  "page.kyoto.title": { zh: "京都 - Ziyang Web", en: "Kyoto - Ziyang Web" },
  "page.osaka.title": { zh: "大阪 - Ziyang Web", en: "Osaka - Ziyang Web" },

  "home.hero.title": {
    zh: "你好，欢迎来到 Ziyang Web！",
    en: "Welcome to Ziyang Web!",
  },
  "home.hero.subtitle": {
    zh: "这是我用 Cursor 做的第一页。下面是我的一些旅行照片展示。",
    en: "This is my first page built with Cursor. Below are photos from my travels.",
  },
  "home.gallery.title": { zh: "我的日本之旅", en: "My Trip to Japan" },
  "home.gallery.hint": {
    zh: "点击卡片进入详情页，查看更多内容与照片。",
    en: "Click a card to open its detail page with more text and photos.",
  },
  "home.card.tapHint": { zh: "点击进入详情页", en: "Open detail page" },

  "home.card.tokyo.alt": { zh: "东京旅行照片", en: "Tokyo travel photo" },
  "home.card.tokyo.title": { zh: "东京", en: "Tokyo" },
  "home.card.tokyo.highlight": {
    zh: "亮点：涩谷十字路口与东京塔夜景",
    en: "Highlights: Shibuya Crossing and Tokyo Tower at night",
  },
  "home.card.tokyo.desc": {
    zh: "记录在东京的一段旅程。",
    en: "Memories from my time in Tokyo.",
  },
  "home.card.tokyo.detail": {
    zh: "东京节奏很快，但交通很方便。我喜欢在傍晚看城市灯光，感觉整座城市都在发光。",
    en: "Tokyo moves fast, but getting around is easy. I love watching the city lights in the evening—it feels like the whole city is glowing.",
  },
  "home.card.tokyo.tag1": { zh: "夜景", en: "Night views" },
  "home.card.tokyo.tag2": { zh: "购物", en: "Shopping" },
  "home.card.tokyo.tag3": { zh: "拉面", en: "Ramen" },

  "home.card.kyoto.alt": { zh: "京都旅行照片", en: "Kyoto travel photo" },
  "home.card.kyoto.title": { zh: "京都", en: "Kyoto" },
  "home.card.kyoto.highlight": {
    zh: "亮点：伏见稻荷千本鸟居与清水寺",
    en: "Highlights: Fushimi Inari torii gates and Kiyomizu-dera",
  },
  "home.card.kyoto.desc": {
    zh: "记录在京都的一段旅程。",
    en: "Memories from my time in Kyoto.",
  },
  "home.card.kyoto.detail": {
    zh: "京都更安静，适合慢慢走。古老的街道和寺庙很有味道，是我这次旅行最喜欢的城市之一。",
    en: "Kyoto is quieter and perfect for slow walks. The old streets and temples have so much character—it was one of my favorite cities on this trip.",
  },
  "home.card.kyoto.tag1": { zh: "寺庙", en: "Temples" },
  "home.card.kyoto.tag2": { zh: "和服", en: "Kimono" },
  "home.card.kyoto.tag3": { zh: "抹茶", en: "Matcha" },

  "home.card.osaka.alt": { zh: "大阪旅行照片", en: "Osaka travel photo" },
  "home.card.osaka.title": { zh: "大阪", en: "Osaka" },
  "home.card.osaka.highlight": {
    zh: "亮点：道顿堀与大阪城",
    en: "Highlights: Dotonbori and Osaka Castle",
  },
  "home.card.osaka.desc": {
    zh: "记录在大阪的一段旅程。",
    en: "Memories from my time in Osaka.",
  },
  "home.card.osaka.detail": {
    zh: "大阪很有生活气息，好吃的东西特别多。晚上在道顿堀附近逛，热闹又开心。",
    en: "Osaka feels lively and full of great food. Walking around Dotonbori at night was busy, fun, and delicious.",
  },
  "home.card.osaka.tag1": { zh: "章鱼烧", en: "Takoyaki" },
  "home.card.osaka.tag2": { zh: "大阪城", en: "Osaka Castle" },
  "home.card.osaka.tag3": { zh: "街景", en: "Street scenes" },

  "trip.back": { zh: "← 返回首页", en: "← Back to Home" },
  "trip.photos.title": { zh: "旅行照片", en: "Travel Photos" },
  "trip.photos.zoomHint": { zh: "点击照片可放大", en: "Click a photo to enlarge" },

  "trip.tokyo.photo1.alt": { zh: "东京旅行照片 1", en: "Tokyo travel photo 1" },
  "trip.tokyo.photo1.caption": { zh: "东京照片 1", en: "Tokyo photo 1" },
  "trip.tokyo.photo2.alt": { zh: "东京旅行照片 2", en: "Tokyo travel photo 2" },
  "trip.tokyo.photo2.caption": { zh: "东京照片 2", en: "Tokyo photo 2" },
  "trip.tokyo.photo3.alt": { zh: "东京旅行照片 3", en: "Tokyo travel photo 3" },
  "trip.tokyo.photo3.caption": { zh: "东京照片 3", en: "Tokyo photo 3" },
  "trip.tokyo.photo4.alt": { zh: "东京旅行照片 4", en: "Tokyo travel photo 4" },
  "trip.tokyo.photo4.caption": { zh: "东京照片 4", en: "Tokyo photo 4" },

  "trip.kyoto.photo1.alt": { zh: "京都旅行照片 1", en: "Kyoto travel photo 1" },
  "trip.kyoto.photo1.caption": { zh: "京都照片 1", en: "Kyoto photo 1" },
  "trip.kyoto.photo2.alt": { zh: "京都旅行照片 2", en: "Kyoto travel photo 2" },
  "trip.kyoto.photo2.caption": { zh: "京都照片 2", en: "Kyoto photo 2" },
  "trip.kyoto.photo3.alt": { zh: "京都旅行照片 3", en: "Kyoto travel photo 3" },
  "trip.kyoto.photo3.caption": { zh: "京都照片 3", en: "Kyoto photo 3" },
  "trip.kyoto.photo4.alt": { zh: "京都旅行照片 4", en: "Kyoto travel photo 4" },
  "trip.kyoto.photo4.caption": { zh: "京都照片 4", en: "Kyoto photo 4" },

  "trip.osaka.photo1.alt": { zh: "大阪旅行照片 1", en: "Osaka travel photo 1" },
  "trip.osaka.photo1.caption": { zh: "大阪照片 1", en: "Osaka photo 1" },
  "trip.osaka.photo2.alt": { zh: "大阪旅行照片 2", en: "Osaka travel photo 2" },
  "trip.osaka.photo2.caption": { zh: "大阪照片 2", en: "Osaka photo 2" },
  "trip.osaka.photo3.alt": { zh: "大阪旅行照片 3", en: "Osaka travel photo 3" },
  "trip.osaka.photo3.caption": { zh: "大阪照片 3", en: "Osaka photo 3" },
  "trip.osaka.photo4.alt": { zh: "大阪旅行照片 4", en: "Osaka travel photo 4" },
  "trip.osaka.photo4.caption": { zh: "大阪照片 4", en: "Osaka photo 4" },

  "about.heading": { zh: "关于我", en: "About Me" },
  "about.body": {
    zh: "你好！我正在学习做网站，希望你喜欢。",
    en: "Hi! I am learning to build websites. I hope you enjoy it.",
  },

  "contact.heading": { zh: "联系我", en: "Contact Me" },
  "contact.intro": {
    zh: "填写下面的表单，留言会发送到我的邮箱 ziyangt25@gmail.com。",
    en: "Fill out the form below and your message will be sent to ziyangt25@gmail.com.",
  },
  "contact.form.name": { zh: "你的姓名", en: "Your Name" },
  "contact.form.name.placeholder": { zh: "例如：小明", en: "e.g. Alex" },
  "contact.form.email": { zh: "电子邮箱", en: "Email" },
  "contact.form.email.placeholder": {
    zh: "例如：you@example.com",
    en: "e.g. you@example.com",
  },
  "contact.form.message": { zh: "留言内容", en: "Message" },
  "contact.form.message.placeholder": {
    zh: "想说的话写在这里…",
    en: "Type your message here…",
  },
  "contact.form.submit": { zh: "发送留言", en: "Send Message" },
  "contact.form.sending": { zh: "发送中…", en: "Sending…" },
  "contact.form.success": {
    zh: "谢谢！你的留言已发送，我会尽快回复。",
    en: "Thank you! Your message has been sent. I will reply as soon as I can.",
  },
  "contact.form.error.notConfigured": {
    zh: "邮件功能还没完成设置。请网站主人先在 contact-config.js 里填入 Web3Forms 的 access key。",
    en: "Email is not configured yet. The site owner needs to add a Web3Forms access key in contact-config.js.",
  },
  "contact.form.error.sendFailed": {
    zh: "发送失败，请稍后再试，或直接发邮件到 ziyangt25@gmail.com。",
    en: "Could not send your message. Please try again later or email ziyangt25@gmail.com directly.",
  },

  "lightbox.close": { zh: "关闭", en: "Close" },
  "lightbox.prev": { zh: "上一张", en: "Previous photo" },
  "lightbox.next": { zh: "下一张", en: "Next photo" },
};

function getLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "zh";
  } catch (error) {
    return "zh";
  }
}

function applyLang(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    const entry = messages[key];
    if (entry) {
      element.textContent = entry[lang];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    const key = element.getAttribute("data-i18n-placeholder");
    const entry = messages[key];
    if (entry) {
      element.placeholder = entry[lang];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
    const key = element.getAttribute("data-i18n-alt");
    const entry = messages[key];
    if (entry) {
      element.alt = entry[lang];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
    const key = element.getAttribute("data-i18n-aria");
    const entry = messages[key];
    if (entry) {
      element.setAttribute("aria-label", entry[lang]);
    }
  });

  const pageTitleKey = document.body.getAttribute("data-page-title");
  if (pageTitleKey && messages[pageTitleKey]) {
    document.title = messages[pageTitleKey][lang];
  }
}

function toggleLang() {
  const nextLang = getLang() === "zh" ? "en" : "zh";
  try {
    localStorage.setItem(STORAGE_KEY, nextLang);
  } catch (error) {
    /* Safari 用访达打开本地网页时可能无法使用 localStorage */
  }
  applyLang(nextLang);
}

window.getLang = getLang;
window.applyLang = applyLang;
window.getSiteMessage = function (key) {
  const entry = messages[key];
  if (!entry) {
    return "";
  }
  return entry[getLang()];
};

document.addEventListener("DOMContentLoaded", function () {
  try {
    applyLang(getLang());
  } catch (error) {
    applyLang("zh");
  }

  const toggleButton = document.getElementById("lang-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleLang);
  }
});
