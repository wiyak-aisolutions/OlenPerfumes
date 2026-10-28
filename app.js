(function () {
  var P = window.OLEN_PRODUCTS || [], CFG = window.OLEN_CONFIG || {};
  var PAGE = 60;
  var SALE = CFG.sale === true;  // sale version: old prices crossed out, no 3-for-2 or first-order offers
  var CODE = "badressam";  // discount code: gives the 20-25% price (the "sp" price of each product)
  var USE_PHOTOS = CFG.photos === true;  // false: crisp drawings (the photos are small); see config.js

  var T = {
    ar: {
      cur: "ج.م", items: "قطعة", nav_shop: "المجموعة", nav_boxes: "بوكسات الهدايا", nav_how: "بكل هدوء", cart: "حقيبتك",
      tr1_t: "BUY 2 GET 1", tr1_s: "على العطور فقط", tr2_t: "خصم 10%", tr2_s: "على كل الأسعار", tr3_t: "ثبات يدوم", tr3_s: "من 8 إلى 12 ساعة", tr4_t: "+45 ماركة", tr4_s: "عالمية وعربية في مكان واحد",
      offer_fine: "",
      ticker: ["BUY 2 GET 1 على العطور", "خصم 10% على كل الأسعار", "ثبات العطور يدوم من 8 إلى 12 ساعة", "الأحجام ممكن تختلف حسب المتاح"],
      pr: [{e:"عرض على العطور",t:"BUY 2 GET 1",s:"كل الأسعار عليها خصم 10%. و BUY 2 GET 1 بيتحسب لو بيوفر أكتر.",c:"تسوّق العطور",go:"all",k:["OLEN-343","OLEN-062"],th:"wine"},{e:"للهدايا",t:"بوكسات جاهزة",s:"متغلفة ومختارة بعناية، جاهزة تتهادى.",c:"شوف البوكسات",go:"boxes",k:["OLEN-214"],th:"sand"}],
      boxes_title: "بوكسات الهدايا", boxes_all: "عرض كل البوكسات", boxes_lead: "هدية جاهزة، متغلفة ومختارة بعناية.",
      brands_eb: "أكتر من 45 ماركة", brands_title: "تسوّق حسب الماركة", picks_eb: "مختارات Olen", picks_title: "عطور بنحبها", view_all: "عرض الكل", shop_eb: "كل العطور والبوكسات", nav_brands: "الماركات", n_scents: "عطر", shop_now: "تسوّق الآن",
      add_bag: "أضف للحقيبة", details: "تفاصيل العطر", offer_or: "والأسعار عليها خصم 10%",
      sl: [
        {e: "Olen Perfumes", t: "أكتر من<br>مجرد ريحة", s: "مختارات من أشهر الماركات العالمية والعربية، في مكان واحد.", c: "استكشف المجموعة", go: "all", k: ["OLEN-363", "OLEN-066", "OLEN-172", "OLEN-089"], th: "sand"},
        {p: "OLEN-359", e: "Tom Ford", t: "Lost Cherry", m: "كرز غامق ولوز مُر، ونهاية فانيليا دافية.", th: "wine"},
        {p: "OLEN-089", e: "Kayali", t: "Vanilla Candy", m: "فانيليا وكراميل وسكر بني. حلاوة ناعمة بتفضل معاك.", th: "blush"},
        {p: "OLEN-035", e: "Maison Francis Kurkdjian", t: "Baccarat Rouge 540", m: "زعفران وعنبر وخشب أرز. العطر اللي الكل بيسأل عليه.", th: "champagne"},
        {p: "OLEN-185", e: "Chanel", t: "Bleu de Chanel", m: "حمضيات منعشة وبخور وخشب. أناقة كل يوم.", th: "night"}
      ],
      hero_eyebrow: "عطور مختارة بعناية",
      hero_title: "اختار العطر<br>اللي بيشبهك",
      hero_text: "مجموعة هادية من العطور وبوكسات الهدايا. خد وقتك، وتصفّح براحتك.",
      cta_shop: "استكشف المجموعة", cta_boxes: "بوكسات الهدايا",
      o1_t: "BUY 2 GET 1", o1_s: "",
      o2_t: "الأسعار عليها خصم 10%", o2_s: "",
      shop_title: "المجموعة", search_ph: "دوّر بالاسم أو الماركة",
      sort: { feat: "الترتيب الافتراضي", asc: "السعر: من الأقل", desc: "السعر: من الأعلى" },
      all: "الكل", boxes: "بوكسات الهدايا", more: "المزيد", none: "مفيش نتائج. جرّب كلمة تانية.",
      how_title: "بكل هدوء",
      s1_t: "اختار", s1_s: "تصفّح، دوّر بالاسم، وافتح أي قطعة تشوفها عن قرب.",
      s2_t: "اجمع", s2_s: "ضيف المفضّل عندك لحقيبتك، والعروض بتتحسب لوحدها.",
      s3_t: "كمّل", s3_s: "سيب بياناتك، وإحنا نكمل الباقي بكل عناية.",
      foot_t: "عطور وبوكسات هدايا، مختارة بعناية.", foot_fine: "الأسعار قابلة للتغيير، والأحجام والتوفر حسب المتاح.", size_note: "الأحجام ممكن تختلف حسب المتاح.", q3: "ثبات يدوم من 8 إلى 12 ساعة", longev: "الثبات", notes_t: "تركيبة العطر", n_top: "الافتتاحية", n_heart: "القلب", n_base: "القاعدة",
      cart_title: "حقيبتك", det_title: "كام تفصيلة بسيطة", fin_title: "خطوة أخيرة",
      empty: "حقيبتك فاضية. اتمشّى في المجموعة براحتك.", sub: "المجموع", d_b: "BUY 2 GET 1", d_f: "خصم 10% على القطعة",
      total: "الإجمالي", first: "ده أول طلب ليّ (خصم 10%)", name: "الاسم", addr: "المدينة والعنوان", notes: "ملاحظة (اختياري)",
      det_lead: "علشان نجهّز طلبك صح.", cont: "متابعة", review: "مراجعة الطلب", back: "رجوع", edit: "تعديل الطلب",
      fin_t: "طلبك جاهز", fin_s: "علشان نكمل، بيوصلنا طلبك على واتساب، وهناك نأكد معاك كل حاجة بنفسنا.", send: "إرسال عبر واتساب",
      sn: "الشحن والتوصيل بنأكدهم معاك هناك.", add: "أضف للحقيبة", added: "اتضاف لحقيبتك", qty: "الكمية", size: "الحجم", view: "عرض الحقيبة",
      close: "إغلاق", remove: "حذف", orderHead: "طلب جديد من Olen", lbl_name: "الاسم", lbl_addr: "العنوان",
      lbl_notes: "ملاحظات", lbl_sub: "المجموع", lbl_disc: "الخصم", lbl_total: "الإجمالي", lbl_first: "أول طلب", code_ph: "كود الخصم", code_apply: "تطبيق", code_ok: "تم تطبيق الكود، الخصم من 20% إلى 25%", code_bad: "الكود مش مظبوط، اتأكد منه وجرّب تاني", d_c: "خصم الكود", lbl_code: "كود الخصم"
    },
    en: {
      cur: "EGP", items: "pieces", nav_shop: "Collection", nav_boxes: "Gift boxes", nav_how: "Gently", cart: "Bag",
      tr1_t: "BUY 2 GET 1", tr1_s: "perfumes only", tr2_t: "10% off", tr2_s: "every price shown", tr3_t: "Long-lasting", tr3_s: "8 to 12 hours", tr4_t: "45+ houses", tr4_s: "global and Arabic, in one place",
      offer_fine: "",
      ticker: ["BUY 2 GET 1 on perfumes", "10% off every price shown", "Perfumes last 8 to 12 hours", "Sizes may vary depending on availability"],
      pr: [{e:"On perfumes",t:"BUY 2 GET 1",s:"Every price already shows 10% off. BUY 2 GET 1 applies if it saves you more.",c:"Shop perfumes",go:"all",k:["OLEN-343","OLEN-062"],th:"wine"},{e:"For gifting",t:"Ready gift boxes",s:"Wrapped, chosen with care and ready to give.",c:"See the boxes",go:"boxes",k:["OLEN-214"],th:"sand"}],
      boxes_title: "Gift Boxes", boxes_all: "See all gift boxes", boxes_lead: "Ready to give, beautifully packed and chosen with care.",
      brands_eb: "45+ houses", brands_title: "Shop by brand", picks_eb: "Olen picks", picks_title: "Scents we love", view_all: "View all", shop_eb: "Every perfume and gift box", nav_brands: "Brands", n_scents: "scents", shop_now: "Shop now",
      add_bag: "Add to bag", details: "Scent details", offer_or: "prices already 10% off",
      sl: [
        {e: "Olen Perfumes", t: "More than<br>a scent", s: "The world's and the region's best-loved houses, in one place.", c: "Explore the collection", go: "all", k: ["OLEN-363", "OLEN-066", "OLEN-172", "OLEN-089"], th: "sand"},
        {p: "OLEN-359", e: "Tom Ford", t: "Lost Cherry", m: "Dark cherry, bitter almond and a warm vanilla finish.", th: "wine"},
        {p: "OLEN-089", e: "Kayali", t: "Vanilla Candy", m: "Vanilla, caramel and brown sugar. A soft sweetness that stays.", th: "blush"},
        {p: "OLEN-035", e: "Maison Francis Kurkdjian", t: "Baccarat Rouge 540", m: "Saffron, amberwood and cedar. The one everyone asks about.", th: "champagne"},
        {p: "OLEN-185", e: "Chanel", t: "Bleu de Chanel", m: "Fresh citrus, incense and woods. Everyday elegance.", th: "night"}
      ],
      hero_eyebrow: "Fragrance, gently chosen",
      hero_title: "Find the scent<br>that feels like you.",
      hero_text: "A quiet, carefully curated collection of perfumes and gift boxes. Take your time.",
      cta_shop: "Explore the collection", cta_boxes: "Gift boxes",
      o1_t: "BUY 2 GET 1", o1_s: "",
      o2_t: "prices already 10% off", o2_s: "",
      shop_title: "The Collection", search_ph: "Search by name or brand",
      sort: { feat: "Featured", asc: "Price: low to high", desc: "Price: high to low" },
      all: "All", boxes: "Gift boxes", more: "Show more", none: "Nothing found. Try another word.",
      how_title: "Gently, in three steps",
      s1_t: "Choose", s1_s: "Wander, search by name, and open any piece to see it up close.",
      s2_t: "Gather", s2_s: "Add your favourites to your bag. Offers are applied for you.",
      s3_t: "Complete", s3_s: "Leave your details and we will take care of the rest.",
      foot_t: "Perfumes and gift boxes, chosen with care.", foot_fine: "Prices may change. Sizes and availability depend on what is in stock.", size_note: "Sizes may vary depending on availability.", q3: "Long-lasting: 8 to 12 hours", longev: "Longevity", notes_t: "Composition", n_top: "Top", n_heart: "Heart", n_base: "Base",
      cart_title: "Your bag", det_title: "A few details", fin_title: "One last step",
      empty: "Your bag is empty. Wander through the collection.", sub: "Subtotal", d_b: "BUY 2 GET 1", d_f: "10% off every piece",
      total: "Total", first: "This is my first order (10% off)", name: "Name", addr: "City and address", notes: "A note (optional)",
      det_lead: "So we can prepare your order properly.", cont: "Continue", review: "Review my order", back: "Back", edit: "Edit order",
      fin_t: "Your order is ready", fin_s: "To finish, your order reaches us on WhatsApp, where we confirm everything with you personally.", send: "Send via WhatsApp",
      sn: "Shipping and delivery are confirmed with you there.", add: "Add to bag", added: "Added to your bag", qty: "Quantity", size: "Size", view: "View bag",
      close: "Close", remove: "Remove", orderHead: "New order from Olen", lbl_name: "Name", lbl_addr: "Address",
      lbl_notes: "Notes", lbl_sub: "Subtotal", lbl_disc: "Discount", lbl_total: "Total", lbl_first: "First order", code_ph: "Discount code", code_apply: "Apply", code_ok: "Code applied, 20% to 25% off", code_bad: "That code is not valid. Please check it and try again", d_c: "Code discount", lbl_code: "Discount code"
    }
  };

  if (SALE) {
    Object.assign(T.ar, {
      ticker: ["عرض خاص لعملاء ومتابعين بدر عصام", "خصم من <bdi dir=\"ltr\">20%</bdi> إلى <bdi dir=\"ltr\">25%</bdi> على كل المنتجات", "السعر القديم عليه شطب والسعر بعد الخصم جنبه", "ثبات العطور يدوم من 8 إلى 12 ساعة", "الأحجام ممكن تختلف حسب المتاح"],
      hero_eyebrow: "خاص لعملاء ومتابعين بدر عصام", hero_title: "خصم من <bdi dir=\"ltr\">20%</bdi><br>إلى <bdi dir=\"ltr\">25%</bdi>",
      hero_text: "عرض مخصوص ليكم: نفس التشكيلة المختارة بعناية بأسعار أقل. هتلاقي السعر القديم عليه شطب والسعر بعد الخصم جنبه.",
      tr1_t: "خصم <bdi dir=\"ltr\">20% – 25%</bdi>", tr1_s: "على كل المنتجات", tr2_t: "السعر بعد الخصم", tr2_s: "ظاهر جنب السعر القديم",
      offer_fine: "العرض خاص بعملاء ومتابعين بدر عصام. الخصم محسوب على السعر القديم المكتوب على كل منتج."
    });
    Object.assign(T.en, {
      ticker: ["Exclusive for Badr Essam's customers & followers", "20% to 25% off everything", "Old price crossed out, sale price beside it", "Perfumes last 8 to 12 hours", "Sizes may vary depending on availability"],
      hero_eyebrow: "For Badr Essam's customers & followers", hero_title: "20% to 25% off<br>everything.",
      hero_text: "An offer made for you: the same carefully chosen collection, for less. The old price is crossed out and your price after the discount sits beside it.",
      tr1_t: "20% – 25% off", tr1_s: "on every piece", tr2_t: "Sale price", tr2_s: "shown beside the old price",
      offer_fine: "This offer is for Badr Essam's customers and followers. The discount is calculated on the old price shown on each product."
    });
  }

  var $ = function (id) { return document.getElementById(id); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var byId = {}; P.forEach(function (p) { byId[p.id] = p; });

  var lang = (location.search.match(/[?&]lang=(ar|en)/) || [])[1] || store.get("olen-lang") ||
    ((navigator.language || "").slice(0, 2) === "en" ? "en" : "ar");
  var cart = {}; try { cart = JSON.parse(store.get("olen-cart") || "{}") || {}; } catch (e) { cart = {}; }
  Object.keys(cart).forEach(function (k) { if (!byId[k]) delete cart[k]; });
  var codeOn = store.get("olen-code") === "1", codeMsg = "", cat = "all", q = "", sort = "feat", shown = PAGE, first = false, modalId = null, view = "cart";
  var fields = { fname: "", faddr: "", fnotes: "" };

  var t = function (k) { return T[lang][k]; };
  var fmt = function (n) { return Number(n).toLocaleString("en-US"); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var money = function (n) { return fmt(n) + " " + t("cur"); };
  var name = function (p) { return p.n[lang]; };
  var priceHtml = function (p) { return (p.old ? '<s class="was">' + fmt(p.old) + "</s> " : "") + fmt(p.price); };
  var badge = function (p) { return p.old ? '<span class="off" dir="ltr">-' + p.pct + "%</span>" : ""; };

  var ICON = {
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.88.9-3-.2-.32A8.2 8.2 0 1 1 12.04 20.1Zm4.5-6.15c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12s-.63.8-.78.96c-.14.17-.28.18-.53.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.33.98 2.5c.12.16 1.7 2.6 4.1 3.65 1.52.65 2.1.7 2.86.59.46-.07 1.45-.6 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z"/></svg>'
  };

  /* ---------- language ---------- */
  function applyLang() {
    var h = document.documentElement; h.lang = lang; h.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i]").forEach(function (e) { e.innerHTML = t(e.dataset.i); });
    document.querySelectorAll("[data-ip]").forEach(function (e) { e.placeholder = t(e.dataset.ip); });
    $("lang").textContent = lang === "ar" ? "EN" : "عربي";
    var tk = t("ticker").map(function (s) { return "<span>" + s + "</span>"; }).join("");
    $("track").innerHTML = tk + tk + tk + tk;
    $("sort").innerHTML = ["feat", "asc", "desc"].map(function (k) { return '<option value="' + k + '"' + (k === sort ? " selected" : "") + ">" + t("sort")[k] + "</option>"; }).join("");
    $("more").textContent = t("more");
    $("dclose").setAttribute("aria-label", t("close"));
    var soc = [];
    if (CFG.instagram) soc.push('<a href="' + esc(CFG.instagram) + '" target="_blank" rel="noopener">Instagram</a>');
    if (CFG.facebook) soc.push('<a href="' + esc(CFG.facebook) + '" target="_blank" rel="noopener">Facebook</a>');
    $("social").innerHTML = soc.join("");
    buildSlides(); buildRail(); buildTiles(); drawChips(); renderGrid(); renderCart(); if (modalId) openModal(modalId, true);
  }

  /* ---------- collection ---------- */
  var brandCount = {};
  P.forEach(function (p) { if (!p.box) { var b = p.b.en; brandCount[b] = (brandCount[b] || 0) + 1; } });
  var brandOrder = Object.keys(brandCount).sort(function (a, b) {
    return (a === "Other Brands") - (b === "Other Brands") || brandCount[b] - brandCount[a];
  });
  var brandAr = {}; P.forEach(function (p) { brandAr[p.b.en] = p.b.ar; });

  function drawChips() {
    var list = [["all", t("all")], ["boxes", t("boxes")]].concat(brandOrder.map(function (b) { return ["b:" + b, lang === "ar" ? brandAr[b] : b]; }));
    $("chips").innerHTML = list.map(function (c) {
      return '<button class="chip" type="button" data-cat="' + esc(c[0]) + '" aria-pressed="' + (c[0] === cat) + '">' + esc(c[1]) + "</button>";
    }).join("");
  }
  function filtered() {
    var s = q.toLowerCase();
    var list = P.filter(function (p) {
      if (cat === "boxes" && !p.box) return false;
      if (cat.indexOf("b:") === 0 && (p.box || p.b.en !== cat.slice(2))) return false;
      return !s || (p.n.ar + " " + p.n.en + " " + p.b.ar + " " + p.b.en).toLowerCase().indexOf(s) > -1;
    });
    if (sort === "asc") list = list.slice().sort(function (a, b) { return a.price - b.price; });
    if (sort === "desc") list = list.slice().sort(function (a, b) { return b.price - a.price; });
    return list;
  }
  function fitStyle(p) {  // clean photos: zoom so the product itself fills the 4:5 card (bounds from crop.js)
    var c = (window.OLEN_CROP || {})[p.id]; if (!p.o || !c) return "";
    var w = c[2] - c[0], h = c[3] - c[1], s = Math.min(0.9 / h, 0.8 / w, 2.2);
    if (s <= 1.02) return "";
    var tx = -s * ((c[0] + c[2]) / 2 - 0.5) * 100, ty = -s * ((c[1] + c[3]) / 2 - 0.5) * 80;
    return ' style="--fit:translate(' + tx.toFixed(1) + "%," + ty.toFixed(1) + "%) scale(" + s.toFixed(3) + ')"';
  }
  function cardHtml(p, i) {
      return '<div class="card glass" style="animation-delay:' + ((i || 0) % 12) * 45 + 'ms"><div class="ph' + (USE_PHOTOS ? "" : " art") + '" data-open="' + p.id + '" style="cursor:pointer">' + (USE_PHOTOS ? '<img loading="lazy" decoding="async"' + (p.w ? ' class="w"' : p.m ? ' class="o m"' : p.o ? ' class="o"' : '') + ' src="' + p.img + '" alt="' + esc(name(p)) + '"' + fitStyle(p) + '>' : p.a) +
        '<button class="plus" type="button" data-add="' + p.id + '" aria-label="' + t("add") + '">' + ICON.plus + "</button>" + badge(p) + "</div>" +
        '<div class="info"><div class="brand caps">' + esc(p.b[lang]) + '</div><h3><a href="#" data-open="' + p.id + '" style="text-decoration:none">' + esc(name(p)) + "</a></h3>" +
        '<div class="sz">' + esc(p.s[lang]) + '</div><div class="pr num">' + priceHtml(p) + " <small>" + t("cur") + "</small></div></div></div>";
  }

  /* ---------- covers: each bottle on its own plinth, in an Olen arch ---------- */
  var CROP = window.OLEN_CROP || {};
  var HS = { 1: [1], 2: [1, 0.86], 3: [0.84, 1, 0.84], 4: [0.82, 1, 0.92, 0.82] };  // back bottles a little smaller
  function ratio(id) { var c = CROP[id] || [0, 0, 1, 1]; return (c[2] - c[0]) / (c[3] - c[1]); }
  function bottle(id, k, n, lazy) {  // the photo cropped to the product, so it stands right on the plinth
    var p = byId[id]; if (!p) return "";
    var c = CROP[id] || [0, 0, 1, 1], w = c[2] - c[0], h = c[3] - c[1];
    return '<span class="bw" style="--k:' + k + ";--hs:" + HS[n][k] + '"><i class="sh"></i><span class="bt" style="aspect-ratio:' + (w / h).toFixed(3) + '" data-open="' + p.id + '"><img src="' + p.img + '" alt="' + esc(name(p)) +
      '" style="width:' + (100 / w).toFixed(2) + "%;height:" + (100 / h).toFixed(2) + "%;left:" + (-100 * c[0] / w).toFixed(2) + "%;top:" + (-100 * c[1] / h).toFixed(2) + '%"' + (lazy ? ' loading="lazy"' : "") + "></span></span>";
  }
  function scene(ids, lazy) {
    ids = ids.filter(function (id) { return byId[id]; });
    var n = ids.length, sum = ids.reduce(function (t, id, k) { return t + ratio(id) * HS[n][k]; }, 0);
    return '<div class="arch' + (n > 1 ? " wide" : "") + '"></div><div class="plinth"></div><div class="bottles" style="--sum:' + sum.toFixed(3) + ";--avail:" + (100 - (n - 1) * 4) + '">' + ids.map(function (id, k) { return bottle(id, k, n, lazy); }).join("") + "</div>";
  }
  var slideIdx = 0, slideTimer = null;
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function buildSlides() {
    var html = "", all = t("sl");
    all.forEach(function (s, i) {
      var p = s.p && byId[s.p], txt;
      if (p) {  // a perfume story: house, name, mood, composition, price, add to bag
        var comp = p.nt ? [["n_top", p.nt.top], ["n_heart", p.nt.heart], ["n_base", p.nt.base]].filter(function (r) { return r[1] && r[1].length; })
          .map(function (r) { return "<div><b>" + t(r[0]) + "</b><span>" + r[1].slice(0, 3).map(esc).join(" · ") + "</span></div>"; }).join("") : "";
        txt = '<div class="eyebrow caps"><span class="no">No. ' + pad2(i) + "</span>" + esc(s.e) + '</div><h1 dir="ltr">' + esc(s.t) + "</h1><p>" + s.m + "</p>" +
          (comp ? '<div class="comp"><div class="ct caps">' + t("notes_t") + "</div>" + comp + "</div>" : "") +
          '<div class="sbuy"><span class="sp num">' + priceHtml(p) + " <small>" + t("cur") + "</small></span>" +
          '<button class="btn" type="button" data-add="' + p.id + '">' + t("add_bag") + '</button><a class="slink" href="#" data-open="' + p.id + '">' + t("details") + ' <span class="arw">→</span></a></div>';
        s.k = [p.id];
      } else {
        txt = '<div class="eyebrow caps">' + s.e + "</div><h1>" + s.t + "</h1><p>" + s.s + "</p>" +
          '<div class="soffer"><span class="stamp-s">BUY 2 GET 1</span><span>' + t("offer_or") + "</span></div>" +
          '<a class="btn" href="#shop" data-go="' + s.go + '">' + s.c + ' <span class="arw">→</span></a>';
      }
      html += '<div class="slide cv th-' + s.th + (p ? " prod" : " intro") + (i === slideIdx ? " on still" : "") + '" aria-hidden="' + (i !== slideIdx) + '">' +
        (p ? '<span class="wm" aria-hidden="true">' + pad2(i) + "</span>" : "") + scene(s.k) + '<div class="stxt">' + txt + "</div></div>";
    });
    $("slides").innerHTML = html; $("stot").textContent = pad2(all.length);
    showCount();
  }
  function showCount() {  // "02 / 05" and the progress line under it
    $("scur").textContent = pad2(slideIdx + 1);
    var f = $("sfill"); f.classList.remove("run"); void f.offsetWidth; f.classList.add("run");
  }
  function goSlide(n) {
    var all = $("slides").children, count = all.length; if (!count) return;
    slideIdx = (n + count) % count;
    Array.prototype.forEach.call(all, function (el, i) { el.classList.remove("still"); el.classList.toggle("on", i === slideIdx); el.setAttribute("aria-hidden", i !== slideIdx); });
    showCount();
    restartAuto();
  }
  function restartAuto() {
    clearInterval(slideTimer);
    if (!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) slideTimer = setInterval(function () { goSlide(slideIdx + 1); }, 6500);
  }

  /* ---------- brand covers, picks, promos ---------- */
  var CARD_THEMES = ["sand", "blush", "champagne", "sage", "wine", "night"];
  var PICKS = ["OLEN-004", "OLEN-359", "OLEN-089", "OLEN-035", "OLEN-363", "OLEN-185", "OLEN-308", "OLEN-066", "OLEN-172", "OLEN-183", "OLEN-050", "OLEN-343"];
  function heroOf(list) {  // a clean photo of a single bottle (tall crop), else the first photo
    var good = list.filter(function (p) { var c = CROP[p.id]; return p.o && c && (c[2] - c[0]) / (c[3] - c[1]) < 0.85; });
    return (good[0] || list[0]).id;
  }
  function buildTiles() {
    $("brail").innerHTML = brandOrder.filter(function (b) { return b !== "Other Brands"; }).map(function (b, i) {
      var list = P.filter(function (p) { return !p.box && p.b.en === b; });
      return '<a class="bcard cv th-' + CARD_THEMES[i % CARD_THEMES.length] + '" href="#shop" data-go="b:' + esc(b) + '">' + scene([heroOf(list)], true).replace(/ data-open="[^"]*"/g, "") +
        '<div class="btx"><span class="bm">OLEN</span><b>' + esc(lang === "ar" ? brandAr[b] : b) + "</b><small>" + list.length + " " + t("n_scents") + '</small></div><span class="bgo caps">' + t("shop_now") + ' <span class="arw">→</span></span></a>';
    }).join("");
    $("prail").innerHTML = PICKS.filter(function (id) { return byId[id]; }).map(function (id) { return cardHtml(byId[id]); }).join("");
    $("promos").innerHTML = t("pr").map(function (x) {
      return '<div class="promo cv th-' + x.th + '">' + scene(x.k) + '<div class="stxt"><div class="eyebrow caps">' + x.e + "</div><h3>" + x.t + "</h3><p>" + x.s + '</p><a class="btn" href="#shop" data-go="' + x.go + '">' + x.c + ' <span class="arw">→</span></a></div></div>';
    }).join("");
  }
  function buildRail() {
    $("rail").innerHTML = P.filter(function (p) { return p.box; }).map(function (p) { return cardHtml(p, 0); }).join("");
    var names = brandOrder.map(function (b) { return lang === "ar" ? brandAr[b] : b; }).filter(function (b) { return b !== "Other Brands" && b !== "ماركات متنوعة"; });
    var row = names.map(function (b) { return "<span>" + esc(b) + "</span>"; }).join("");
    $("bbtrack").innerHTML = row + row;
  }

  function renderGrid() {
    var list = filtered(), part = list.slice(0, shown);
    $("count").textContent = list.length + " " + t("items");
    $("grid").innerHTML = part.map(function (p, i) {
      return cardHtml(p, i);
    }).join("") || '<p class="empty">' + t("none") + "</p>";
    $("more").hidden = list.length <= shown;
  }

  /* ---------- bag ---------- */
  function save() { store.set("olen-cart", JSON.stringify(cart)); }
  function add(id, n) { cart[id] = Math.max(0, (cart[id] || 0) + n); if (!cart[id]) delete cart[id]; save(); renderCart(); }
  function lines() { return Object.keys(cart).map(function (id) { return { p: byId[id], qty: cart[id] }; }); }
  function totals() {
    var ls = lines(), sub = 0, units = [];
    var reg = 0;  // the same bag at the normal prices (p.old)
    ls.forEach(function (l) { sub += l.p.price * l.qty; reg += (l.p.old || l.p.price) * l.qty; if (!l.p.box) for (var i = 0; i < l.qty; i++) units.push(l.p.old || l.p.price); });  // gift boxes are not part of BUY 2 GET 1
    units.sort(function (a, b) { return b - a; });
    var free = 0, freeN = 0; if (!SALE) for (var i = 2; i < units.length; i += 3) { free += units[i]; freeN++; }
    // prices already show 10% off; BUY 2 GET 1 (on the normal prices) replaces that only when it saves more
    var disc = 0, kind = "", viaB = SALE ? 0 : sub - (reg - free);
    if (viaB > 0) { disc = viaB; kind = "b"; }
    var cd = 0; if (codeOn && !SALE) ls.forEach(function (l) { cd += (l.p.price - l.p.sp) * l.qty; });
    if (cd > disc) { disc = cd; kind = "c"; }
    return { sub: sub, disc: disc, kind: kind, total: sub - disc, freeN: freeN, count: ls.reduce(function (a, l) { return a + l.qty; }, 0) };
  }
  function rows(tt) {
    return '<div class="r"><span>' + t("sub") + '</span><span class="num">' + money(tt.sub) + "</span></div>" +
      (tt.disc ? '<div class="r disc"><span>' + (tt.kind === "b" ? t("d_b") : tt.kind === "c" ? t("d_c") : t("d_f")) + '</span><span class="num">− ' + money(tt.disc) + "</span></div>" : "") +
      '<div class="r tot"><span>' + t("total") + '</span><span class="num">' + money(tt.total) + "</span></div>";
  }
  function renderCart() {
    var ls = lines(), tt = totals();
    $("cn").textContent = tt.count;
    var bar = $("cartbar"); bar.classList.toggle("on", tt.count > 0);
    bar.innerHTML = "<span>" + t("view") + " (" + tt.count + ")</span><span class='num'>" + money(tt.total) + "</span>";
    if (!ls.length) view = "cart";
    var step = { cart: 0, details: 1, final: 2 }[view];
    $("dt").textContent = t(view === "cart" ? "cart_title" : view === "details" ? "det_title" : "fin_title");
    Array.prototype.forEach.call($("dots").children, function (d, i) { d.className = i <= step ? "on" : ""; });
    if (!ls.length) { $("dbody").innerHTML = '<div class="cempty">' + t("empty") + "</div>"; $("sum").innerHTML = ""; return; }

    if (view === "cart") {
      $("dbody").innerHTML = ls.map(function (l) {
        return '<div class="line">' + (USE_PHOTOS ? '<img src="' + l.p.img + '" alt="">' : '<div class="th">' + l.p.a + "</div>") + '<div><h4>' + esc(name(l.p)) + '</h4><div class="m">' + esc(l.p.s[lang]) + " · " + money(l.p.price) +
          '</div><div class="qty"><button type="button" data-q="-1" data-id="' + l.p.id + '" aria-label="-">−</button><span class="num">' + l.qty +
          '</span><button type="button" data-q="1" data-id="' + l.p.id + '" aria-label="+">+</button></div></div>' +
          '<div class="lp num">' + money(l.p.price * l.qty) + '<button class="rm" type="button" data-q="-999" data-id="' + l.p.id + '">' + t("remove") + "</button></div></div>";
      }).join("") + (SALE ? "" : '<div class="codebox"><div class="crow"><input id="codein" type="text" autocapitalize="off" autocomplete="off" placeholder="' + t("code_ph") + '" value="' + (codeOn ? CODE : "") + '"><button type="button" id="codego">' + t("code_apply") + '</button></div><div class="cmsg ' + (codeOn ? "ok" : codeMsg ? "bad" : "") + '">' + (codeOn ? t("code_ok") : codeMsg) + "</div></div>");
      $("sum").innerHTML = rows(tt) + '<button class="go" id="tocheck" type="button">' + t("cont") + "</button>";
    } else if (view === "details") {
      $("dbody").innerHTML = '<p class="lead">' + t("det_lead") + '</p><div class="fields"><input id="fname" type="text" autocomplete="name" placeholder="' + t("name") + '">' +
        '<input id="faddr" type="text" autocomplete="street-address" placeholder="' + t("addr") + '"><textarea id="fnotes" rows="3" placeholder="' + t("notes") + '"></textarea></div>';
      $("sum").innerHTML = rows(tt) + '<button class="go" id="toreview" type="button">' + t("review") + '</button><button class="link" id="backcart" type="button">' + t("back") + "</button>";
      keepFields();
    } else {
      $("dbody").innerHTML = ls.map(function (l) {
        return '<div class="mini"><span>' + esc(name(l.p)) + (l.p.s[lang] ? " · " + esc(l.p.s[lang]) : "") + " × " + l.qty + '</span><span class="num">' + money(l.p.price * l.qty) + "</span></div>";
      }).join("") + '<div class="reveal"><span>' + ICON.wa + "</span><div><b>" + t("fin_t") + "</b><p>" + t("fin_s") + "</p></div></div>";
      $("sum").innerHTML = rows(tt) + '<button class="go wa" id="send" type="button">' + ICON.wa + t("send") + '</button><button class="link" id="backdet" type="button">' + t("edit") + "</button>";
    }
  }
  function keepFields() {
    ["fname", "faddr", "fnotes"].forEach(function (id) {
      var e = $(id); if (!e) return; e.value = fields[id]; e.addEventListener("input", function () { fields[id] = e.value; e.classList.remove("bad"); });
    });
  }

  /* ---------- the final message ---------- */
  function waUrl(text) { return "https://wa.me/" + (CFG.whatsapp || "") + "?text=" + encodeURIComponent(text); }
  function openWa(text) { var w = window.open(waUrl(text), "_blank", "noopener"); if (!w) location.href = waUrl(text); }
  function orderText() {
    var tt = totals(), L = T[lang], out = [L.orderHead, ""];
    lines().forEach(function (l, i) {
      out.push((i + 1) + ") " + l.p.n[lang] + (l.p.s[lang] ? " (" + l.p.s[lang] + ")" : "") + " x" + l.qty + " = " + money(l.p.price * l.qty) + (l.p.old ? " (" + (lang === "ar" ? "كان " : "was ") + money(l.p.old * l.qty) + ")" : ""));
    });
    out.push("", L.lbl_sub + ": " + money(tt.sub));
    if (tt.disc) out.push(L.lbl_disc + " (" + (tt.kind === "b" ? L.d_b : tt.kind === "c" ? L.lbl_code + " " + CODE : L.d_f) + "): -" + money(tt.disc));
    out.push(L.lbl_total + ": " + money(tt.total), "");
    out.push(L.lbl_name + ": " + fields.fname, L.lbl_addr + ": " + fields.faddr);
    if (fields.fnotes) out.push(L.lbl_notes + ": " + fields.fnotes);
    return out.join("\n");
  }

  /* ---------- overlays ---------- */
  function toast(m) { var e = $("toast"); e.textContent = m; e.classList.add("on"); clearTimeout(toast.h); toast.h = setTimeout(function () { e.classList.remove("on"); }, 1700); }
  function scrim(on) { $("scrim").classList.toggle("on", on); document.body.style.overflow = on ? "hidden" : ""; }
  function openDrawer() { closeModal(); view = "cart"; renderCart(); $("drawer").classList.add("on"); scrim(true); }
  function closeDrawer() { $("drawer").classList.remove("on"); if (!$("modal").classList.contains("on")) scrim(false); }
  function openModal(id, keep) {
    var p = byId[id]; if (!p) return; modalId = id;
    var qty = 1;
    $("mbox").innerHTML = '<button class="x" id="mclose" type="button" aria-label="' + t("close") + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5l14 14M19 5 5 19"/></svg></button>' +
      '<div class="im' + (USE_PHOTOS ? (p.m ? " o m" : p.o ? " o" : "") : " art") + '">' + (USE_PHOTOS ? '<img src="' + p.img + '" alt="' + esc(name(p)) + '">' : p.a) + '</div><div class="tx"><div class="caps" style="color:var(--gold-d)">' + esc(p.b[lang]) + '</div><h2 id="mt">' + esc(name(p)) + "</h2>" +
      (p.s[lang] ? '<div class="caps" style="color:var(--muted)">' + t("size") + " · " + esc(p.s[lang]) + "</div>" : "") +
      '<div style="color:var(--muted);font-size:13px">' + t("size_note") + "</div>" +
      (p.box || /splash/i.test(p.n.en) ? "" : '<div class="caps" style="color:var(--muted);margin-top:6px">' + t("q3") + "</div>") +  // not on gift boxes or body splash
      (p.nt ? '<div class="notes"><div class="caps" style="color:var(--gold-d)">' + t("notes_t") + "</div>" + [["n_top", p.nt.top], ["n_heart", p.nt.heart], ["n_base", p.nt.base]].filter(function (r) { return r[1] && r[1].length; }).map(function (r) { return '<div class="nrow"><b>' + t(r[0]) + "</b><span>" + r[1].map(esc).join(" · ") + "</span></div>"; }).join("") + "</div>" : "") +
      '<div class="price num">' + priceHtml(p) + (p.old ? ' <span class="off" dir="ltr">-' + p.pct + "%</span>" : "") + " <small>" + t("cur") + "</small></div>" +
      '<div class="qrow"><span class="caps">' + t("qty") + '</span><div class="qty"><button type="button" id="mm" aria-label="-">−</button><span class="num" id="mq">1</span><button type="button" id="mp" aria-label="+">+</button></div></div>' +
      '<button class="btn shine" id="madd" type="button">' + t("add") + "</button></div>";
    $("modal").classList.add("on"); scrim(true);
    $("mm").onclick = function () { qty = Math.max(1, qty - 1); $("mq").textContent = qty; };
    $("mp").onclick = function () { qty = Math.min(99, qty + 1); $("mq").textContent = qty; };
    $("madd").onclick = function () { add(id, qty); closeModal(); toast(t("added")); };
    $("mclose").onclick = closeModal;
    if (!keep) $("mclose").focus();
  }
  function closeModal() { modalId = null; $("modal").classList.remove("on"); if (!$("drawer").classList.contains("on")) scrim(false); }

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-add]"); if (a) { e.stopPropagation(); add(a.dataset.add, 1); toast(t("added")); return; }
    var o = e.target.closest("[data-open]"); if (o) { e.preventDefault(); openModal(o.dataset.open); return; }
    var c = e.target.closest("[data-cat]"); if (c) { cat = c.dataset.cat; shown = PAGE; drawChips(); renderGrid(); return; }
    var qb = e.target.closest("[data-q]"); if (qb) { add(qb.dataset.id, parseInt(qb.dataset.q, 10)); return; }
    var sd = e.target.closest("[data-slide]"); if (sd) { goSlide(parseInt(sd.dataset.slide, 10)); return; }
    var go = e.target.closest("[data-go]"); if (go) { e.preventDefault(); cat = go.dataset.go; shown = PAGE; drawChips(); renderGrid(); $("shop").scrollIntoView({ behavior: "smooth" }); return; }
    var id = e.target.closest("button"); id = id && id.id;
    if (id === "codego") {
      var v = ($("codein").value || "").trim().toLowerCase();
      codeOn = v === CODE; codeMsg = codeOn ? "" : t("code_bad"); store.set("olen-code", codeOn ? "1" : "0"); renderCart(); return;
    }
    if (id === "tocheck") { view = "details"; renderCart(); return; }
    if (id === "backcart") { view = "cart"; renderCart(); return; }
    if (id === "backdet") { view = "details"; renderCart(); return; }
    if (id === "toreview") {
      var bad = ["fname", "faddr"].filter(function (k) { return !fields[k].trim(); });
      if (bad.length) { bad.forEach(function (k) { $(k).classList.add("bad"); }); $(bad[0]).focus(); return; }
      view = "final"; renderCart(); return;
    }
    if (id === "send") { openWa(orderText()); return; }
    if (e.target.id === "modal") closeModal();
  });
  document.addEventListener("change", function (e) { if (e.target.id === "firstbox") { first = e.target.checked; renderCart(); } });
  $("scrim").onclick = function () { closeDrawer(); closeModal(); };
  $("dclose").onclick = closeDrawer;
  $("cartbtn").onclick = openDrawer; $("cartbar").onclick = openDrawer;
  $("lang").onclick = function () { lang = lang === "ar" ? "en" : "ar"; store.set("olen-lang", lang); applyLang(); };
  function setQuery(v, from) {
    q = v.trim(); shown = PAGE; $("q").value = v; $("hq").value = v;
    if (q && cat !== "all") { cat = "all"; drawChips(); }  // search looks through everything, not just the chosen brand
    renderGrid();
    if (from === "hq" && q) { var s = $("shop").getBoundingClientRect(); if (s.top > 200 || s.bottom < 0) $("shop").scrollIntoView(); }
  }
  $("q").addEventListener("input", function (e) { setQuery(e.target.value, "q"); });
  $("hq").addEventListener("input", function (e) { setQuery(e.target.value, "hq"); });
  $("sort").onchange = function (e) { sort = e.target.value; renderGrid(); };
  $("more").onclick = function () { shown += PAGE; renderGrid(); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); closeModal(); } });

  $("sprev").onclick = function () { goSlide(slideIdx - 1); };  // the arrows sit in reading order, so they mirror in Arabic by themselves
  $("snext").onclick = function () { goSlide(slideIdx + 1); };
  $("slider").addEventListener("mouseenter", function () { clearInterval(slideTimer); });
  $("slider").addEventListener("mouseleave", restartAuto);
  (function () {  // swipe on phones
    var x0 = null;
    $("slider").addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    $("slider").addEventListener("touchend", function (e) {
      if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) goSlide(slideIdx + ((dx < 0) === (document.documentElement.dir !== "rtl") ? 1 : -1));
    });
  })();
  document.querySelectorAll("[data-rail]").forEach(function (b) {  // arrows above a rail; scroll follows the reading direction
    b.onclick = function () { var r = $(b.dataset.rail), d = +b.dataset.dir * (document.documentElement.dir === "rtl" ? -1 : 1); r.scrollBy({ left: d * r.clientWidth * 0.8, behavior: "smooth" }); };
  });
  // gentle reveal while scrolling; everything stays visible without it
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });
    setTimeout(function () { document.querySelectorAll(".rv").forEach(function (el) { el.classList.add("in"); }); }, 2500);
  }

  applyLang();
  restartAuto();
})();
