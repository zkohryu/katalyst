// Interactive Theme Switcher
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  
  // Update active state on theme buttons
  const buttons = document.querySelectorAll('.theme-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-theme-name') === themeName) {
      btn.classList.add// Interactive Theme Switcher
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  
  // Update active state on theme buttons
  const buttons = document.querySelectorAll('.theme-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-theme-name') === themeName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Log in mockup terminal
  addMockLog(`Theme updated: [${themeName}]`, 'THEME');
}

// Mockup Data for Interactive Tabs
const mockScreens = {
  fps: {
    title: "FPS Boost & Hardware Optimization",
    cards: [
      { title: "Ultimate Power Plan", desc: "Removes CPU clock throttle and locks maximum processor frequency.", btn: "Apply" },
      { title: "Temp & Prefetch Cleaner", desc: "Cleans junk caches that cause sudden in-game micro-stutters.", btn: "Apply" },
      { title: "RAM Working Set Flusher", desc: "Discharges unused background system memory to free up RAM.", btn: "Apply" },
      { title: "CPU Core Unparking", desc: "Prevents idle CPU cores from sleeping during gameplay.", btn: "Apply" }
    ]
  },
  ping: {
    title: "Ping Optimizer & Low Latency",
    cards: [
      { title: "Flush DNS Cache", desc: "Resets corrupted DNS routing to eliminate sudden ping spikes.", btn: "Reset" },
      { title: "Low-Latency DNS", desc: "Assigns the closest low-latency DNS servers for gaming.", btn: "Set" },
      { title: "TCP NoDelay (Nagle Off)", desc: "Eliminates packet buffering delay, inputs transmit instantly.", btn: "Apply" },
      { title: "Remove Network Throttling", desc: "Completely removes Windows multimedia network throttling.", btn: "Apply" }
    ]
  },
  games: {
    title: "Games & Custom Profiles",
    cards: [
      { title: "Valorant Protocol", desc: "Removes mouse lag and locks CPU core 1 priority.", btn: "Optimize" },
      { title: "Counter-Strike 2", desc: "Accelerates sub-tick packet delivery and reduces shader stutters.", btn: "Optimize" },
      { title: "FiveM GTA V", desc: "Eliminates texture loss delay and discharges VRAM cache.", btn: "Optimize" },
      { title: "League of Legends", desc: "Unlocks FPS limits and purges client memory leaks.", btn: "Optimize" }
    ]
  },
  settings: {
    title: "Appearance, Themes & Settings",
    cards: [
      { title: "What is your issue? (Profile)", desc: "Smart focus on LAG, BOTH, or FPS.", btn: "Set" },
      { title: "Dynamic Color Themes", desc: "Switch between Cyber Cyan, Neon Purple, and more.", btn: "Change" },
      { title: "Multi-Language Engine", desc: "Instant switching between English, German, and Russian.", btn: "Select" },
      { title: "Launch on PC Startup", desc: "Keep KatalystBooster ready as soon as Windows boots.", btn: "Enable" }
    ]
  }
};

// Interactive Mock Tab Switching
function switchMockTab(tabKey) {
  // Update sidebar button states
  document.querySelectorAll('.mock-nav-item').forEach(el => {
    if (el.getAttribute('data-tab') === tabKey) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const screenData = mockScreens[tabKey];
  if (!screenData) return;

  // Update header
  const headerEl = document.getElementById('mockHeaderTitle');
  if (headerEl) headerEl.textContent = screenData.title;

  // Update cards
  const container = document.getElementById('mockCardsContainer');
  if (container) {
    container.innerHTML = '';
    screenData.cards.forEach(c => {
      const card = document.createElement('div');
      card.className = 'mock-card';
      card.innerHTML = `
        <div class="mock-card-title">${c.title}</div>
        <div class="mock-card-desc">${c.desc}</div>
        <button class="mock-card-btn" onclick="triggerMockAction('${c.title}')">${c.btn}</button>
      `;
      container.appendChild(card);
    });
  }

  addMockLog(`Tab switched: [${tabKey.toUpperCase()}]`, 'INFO');
}

// Trigger action inside mockup
function triggerMockAction(featureName) {
  addMockLog(`${featureName} successfully applied!`, 'SUCCESS');
}

// Quick boost inside mockup
function triggerQuickBoost() {
  addMockLog('--- STARTING ALL OPTIMIZATIONS ---', 'RUN');
  setTimeout(() => addMockLog('CPU cores successfully unparked', 'SUCCESS'), 250);
  setTimeout(() => addMockLog('Ultimate Performance power plan activated', 'SUCCESS'), 500);
  setTimeout(() => addMockLog('TCP NoDelay & DNS cache optimized', 'SUCCESS'), 750);
  setTimeout(() => addMockLog('System running at peak gaming performance!', 'SUCCESS'), 1000);
}

// Add log to mock terminal
function addMockLog(msg, type = 'INFO') {
  const terminal = document.getElementById('mockTerminal');
  if (!terminal) return;

  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];

  let tagClass = 'log-info';
  let tagText = '● INFO';
  if (type === 'SUCCESS') {
    tagClass = 'log-success';
    tagText = '✓ OK';
  } else if (type === 'RUN') {
    tagClass = 'log-info';
    tagText = '► RUN';
  } else if (type === 'THEME') {
    tagClass = 'log-info';
    tagText = 'THEME';
  }

  const logLine = document.createElement('div');
  logLine.innerHTML = `<span style="color:#6e7681">[${timeStr}]</span> <span class="${tagClass}">[${tagText}]</span> ${msg}`;
  terminal.appendChild(logLine);
  terminal.scrollTop = terminal.scrollHeight;
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Initial mockup setup
  switchMockTab('fps');
});

// Copy Contact Info to Clipboard
function copyContact(text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopiedFeedback(btnElement);
    }).catch(() => {
      fallbackCopy(text, btnElement);
    });
  } else {
    fallbackCopy(text, btnElement);
  }
}

function showCopiedFeedback(btnElement) {
  const textSpan = btnElement.querySelector('.btn-text');
  if (!textSpan) return;
  const original = textSpan.textContent;
  textSpan.textContent = '✓ Copied!';
  btnElement.classList.add('copied');
  setTimeout(() => {
    textSpan.textContent = original;
    btnElement.classList.remove('copied');
  }, 2200);
}

function fallbackCopy(text, btnElement) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showCopiedFeedback(btnElement);
  } catch (err) {
    prompt('Press Ctrl+C to copy:', text);
  }
  document.body.removeChild(textArea);
}
('active');
    } else {// Interactive Theme Switcher
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  
  // Update active state on theme buttons
  const buttons = document.querySelectorAll('.theme-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-theme-name') === themeName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Log in mockup terminal
  addMockLog(`Arayüz teması güncellendi: [${themeName}]`, 'THEME');
}

// Mockup Data for Interactive Tabs
const mockScreens = {
  fps: {
    title: "🚀 FPS Boost & Donanım Optimizasyonu",
    cards: [
      { title: "⚡ Nihai Güç Planı", desc: "CPU saat hızı frenlemesini kaldırarak tam frekans sağlar.", btn: "Uygula" },
      { title: "🧹 Temp & Prefetch Temizliği", desc: "Oyunlarda anlık takılmalara yol açan önbelleği temizler.", btn: "Uygula" },
      { title: "🧠 RAM Boşaltma", desc: "Kullanılmayan arkaplan sistem işlemlerini tahliye eder.", btn: "Uygula" },
      { title: "🔥 CPU Core Unparking", desc: "Boştaki çekirdeklerin uykuya geçmesini önler.", btn: "Uygula" }
    ]
  },
  ping: {
    title: "🌐 Ping Optimizer & Düşük Gecikme",
    cards: [
      { title: "🔄 Flush DNS", desc: "Bozuk DNS yönlendirmelerini sıfırlar, ping sıçramalarını önler.", btn: "Sıfırla" },
      { title: "🌐 Düşük Gecikmeli DNS", desc: "En yakın oyun sunucusuna daha hızlı rota çizen DNS atar.", btn: "Ayarla" },
      { title: "⚡ TCP NoDelay (Nagle Kapat)", desc: "Paket gecikmesini iptal eder, hareketler anında gider.", btn: "Uygula" },
      { title: "📶 Ağ Sınırlayıcısını Kaldır", desc: "Windows bant genişliği kısma mekanizmasını kaldırır.", btn: "Uygula" }
    ]
  },
  games: {
    title: "🎮 Uygulamalar & Özel Oyun Profilleri",
    cards: [
      { title: "🎯 Valorant Protocol", desc: "Input lag ve fare gecikmesini sıfırlar, CPU 1. çekirdeğe kilitler.", btn: "Optimize Et" },
      { title: "💣 Counter-Strike 2", desc: "Sub-tick paket gönderimini hızlandırır, shader stutter azaltır.", btn: "Optimize Et" },
      { title: "🚗 FiveM GTA V", desc: "Doku yükleme (texture loss) gecikmelerini önler, VRAM boşaltır.", btn: "Optimize Et" },
      { title: "⚔️ League of Legends", desc: "FPS kilidini kaldırır, istemci arkaplan bellek sızıntısını temizler.", btn: "Optimize Et" }
    ]
  },
  settings: {
    title: "⚙️ Görünüm, Tema ve Sistem Ayarları",
    cards: [
      { title: "🎯 Sorunun Ne? (Profil)", desc: "LAG / BOTH / FPS odaklı akıllı profil seçimi.", btn: "Ayarla" },
      { title: "🎨 Dinamik Renk Teması", desc: "Cyber Cyan, Neon Purple, Emerald Ghost, Crimson Blood.", btn: "Değiştir" },
      { title: "🌍 Çoklu Dil Desteği", desc: "Türkçe, English, Deutsch, Русский tek tıkla geçiş.", btn: "Seç" },
      { title: "⚙️ Başlangıçta Otomatik Başla", desc: "PC açılışında KatalystBooster hazır ve aktif olsun.", btn: "Aktif" }
    ]
  }
};

// Interactive Mock Tab Switching
function switchMockTab(tabKey) {
  // Update sidebar button states
  document.querySelectorAll('.mock-nav-item').forEach(el => {
    if (el.getAttribute('data-tab') === tabKey) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const screenData = mockScreens[tabKey];
  if (!screenData) return;

  // Update header
  const headerEl = document.getElementById('mockHeaderTitle');
  if (headerEl) headerEl.textContent = screenData.title;

  // Update cards
  const container = document.getElementById('mockCardsContainer');
  if (container) {
    container.innerHTML = '';
    screenData.cards.forEach(c => {
      const card = document.createElement('div');
      card.className = 'mock-card';
      card.innerHTML = `
        <div class="mock-card-title">${c.title}</div>
        <div class="mock-card-desc">${c.desc}</div>
        <button class="mock-card-btn" onclick="triggerMockAction('${c.title}')">${c.btn}</button>
      `;
      container.appendChild(card);
    });
  }

  addMockLog(`Sekme değiştirildi: [${tabKey.toUpperCase()}]`, 'INFO');
}

// Trigger action inside mockup
function triggerMockAction(featureName) {
  addMockLog(`${featureName} başarıyla uygulandı!`, 'SUCCESS');
}

// Quick boost inside mockup
function triggerQuickBoost() {
  addMockLog('--- TÜM OPTİMİZASYONLAR BAŞLATILDI ---', 'RUN');
  setTimeout(() => addMockLog('CPU çekirdekleri uykudan çıkarıldı (Unparked)', 'SUCCESS'), 250);
  setTimeout(() => addMockLog('Nihai Güç Planı aktif edildi (Ultimate Performance)', 'SUCCESS'), 500);
  setTimeout(() => addMockLog('TCP NoDelay & DNS önbellek optimize edildi', 'SUCCESS'), 750);
  setTimeout(() => addMockLog('✨ Sistem en yüksek hız modunda!', 'SUCCESS'), 1000);
}

// Add log to mock terminal
function addMockLog(msg, type = 'INFO') {
  const terminal = document.getElementById('mockTerminal');
  if (!terminal) return;

  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];

  let tagClass = 'log-info';
  let tagText = '● INFO';
  if (type === 'SUCCESS') {
    tagClass = 'log-success';
    tagText = '✓ OK';
  } else if (type === 'RUN') {
    tagClass = 'log-info';
    tagText = '► RUN';
  } else if (type === 'THEME') {
    tagClass = 'log-info';
    tagText = '🎨 THEME';
  }

  const logLine = document.createElement('div');
  logLine.innerHTML = `<span style="color:#6e7681">[${timeStr}]</span> <span class="${tagClass}">[${tagText}]</span> ${msg}`;
  terminal.appendChild(logLine);
  terminal.scrollTop = terminal.scrollHeight;
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Initial mockup setup
  switchMockTab('fps');
});

// Copy Contact Info to Clipboard
function copyContact(text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopiedFeedback(btnElement);
    }).catch(() => {
      fallbackCopy(text, btnElement);
    });
  } else {
    fallbackCopy(text, btnElement);
  }
}

function showCopiedFeedback(btnElement) {
  const textSpan = btnElement.querySelector('.btn-text');
  if (!textSpan) return;
  const original = textSpan.textContent;
  textSpan.textContent = '✓ Kopyalandı!';
  btnElement.classList.add('copied');
  setTimeout(() => {
    textSpan.textContent = original;
    btnElement.classList.remove('copied');
  }, 2200);
}

function fallbackCopy(text, btnElement) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showCopiedFeedback(btnElement);
  } catch (err) {
    prompt('Kopyalamak için Ctrl+C tuşlarına basın:', text);
  }
  document.body.removeChild(textArea);
}


      btn.classList.remove('active');
    }
  });

  // Log in mockup terminal
  addMockLog(`Arayüz teması güncellendi: [${themeName}]`, 'THEME');
}

// Mockup Data for Interactive Tabs
const mockScreens = {
  fps: {
    title: "🚀 FPS Boost & Donanım Optimizasyonu",
    cards: [
      { title: "⚡ Nihai Güç Planı", desc: "CPU saat hızı frenlemesini kaldırarak tam frekans sağlar.", btn: "Uygula" },
      { title: "🧹 Temp & Prefetch Temizliği", desc: "Oyunlarda anlık takılmalara yol açan önbelleği temizler.", btn: "Uygula" },
      { title: "🧠 RAM Boşaltma", desc: "Kullanılmayan arkaplan sistem işlemlerini tahliye eder.", btn: "Uygula" },
      { title: "🔥 CPU Core Unparking", desc: "Boştaki çekirdeklerin uykuya geçmesini önler.", btn: "Uygula" }
    ]
  },
  ping: {
    title: "🌐 Ping Optimizer & Düşük Gecikme",
    cards: [
      { title: "🔄 Flush DNS", desc: "Bozuk DNS yönlendirmelerini sıfırlar, ping sıçramalarını önler.", btn: "Sıfırla" },
      { title: "🌐 Düşük Gecikmeli DNS", desc: "En yakın oyun sunucusuna daha hızlı rota çizen DNS atar.", btn: "Ayarla" },
      { title: "⚡ TCP NoDelay (Nagle Kapat)", desc: "Paket gecikmesini iptal eder, hareketler anında gider.", btn: "Uygula" },
      { title: "📶 Ağ Sınırlayıcısını Kaldır", desc: "Windows bant genişliği kısma mekanizmasını kaldırır.", btn: "Uygula" }
    ]
  },
  games: {
    title: "🎮 Uygulamalar & Özel Oyun Profilleri",
    cards: [
      { title: "🎯 Valorant Protocol", desc: "Input lag ve fare gecikmesini sıfırlar, CPU 1. çekirdeğe kilitler.", btn: "Optimize Et" },
      { title: "💣 Counter-Strike 2", desc: "Sub-tick paket gönderimini hızlandırır, shader stutter azaltır.", btn: "Optimize Et" },
      { title: "🚗 FiveM GTA V", desc: "Doku yükleme (texture loss) gecikmelerini önler, VRAM boşaltır.", btn: "Optimize Et" },
      { title: "⚔️ League of Legends", desc: "FPS kilidini kaldırır, istemci arkaplan bellek sızıntısını temizler.", btn: "Optimize Et" }
    ]
  },
  settings: {
    title: "⚙️ Görünüm, Tema ve Sistem Ayarları",
    cards: [
      { title: "🎯 Sorunun Ne? (Profil)", desc: "LAG / BOTH / FPS odaklı akıllı profil seçimi.", btn: "Ayarla" },
      { title: "🎨 Dinamik Renk Teması", desc: "Cyber Cyan, Neon Purple, Emerald Ghost, Crimson Blood.", btn: "Değiştir" },
      { title: "🌍 Çoklu Dil Desteği", desc: "Türkçe, English, Deutsch, Русский tek tıkla geçiş.", btn: "Seç" },
      { title: "⚙️ Başlangıçta Otomatik Başla", desc: "PC açılışında KatalystBooster hazır ve aktif olsun.", btn: "Aktif" }
    ]
  }
};

// Interactive Mock Tab Switching
function switchMockTab(tabKey) {
  // Update sidebar button states
  document.querySelectorAll('.mock-nav-item').forEach(el => {
    if (el.getAttribute('data-tab') === tabKey) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const screenData = mockScreens[tabKey];
  if (!screenData) return;

  // Update header
  const headerEl = document.getElementById('mockHeaderTitle');
  if (headerEl) headerEl.textContent = screenData.title;

  // Update cards
  const container = document.getElementById('mockCardsContainer');
  if (container) {
    container.innerHTML = '';
    screenData.cards.forEach(c => {
      const card = document.createElement('div');
      card.className = 'mock-card';
      card.innerHTML = `
        <div class="mock-card-title">${c.title}</div>
        <div class="mock-card-desc">${c.desc}</div>
        <button class="mock-card-btn" onclick="triggerMockAction('${c.title}')">${c.btn}</button>
      `;
      container.appendChild(card);
    });
  }

  addMockLog(`Sekme değiştirildi: [${tabKey.toUpperCase()}]`, 'INFO');
}

// Trigger action inside mockup
function triggerMockAction(featureName) {
  addMockLog(`${featureName} başarıyla uygulandı!`, 'SUCCESS');
}

// Quick boost inside mockup
function triggerQuickBoost() {
  addMockLog('--- TÜM OPTİMİZASYONLAR BAŞLATILDI ---', 'RUN');
  setTimeout(() => addMockLog('CPU çekirdekleri uykudan çıkarıldı (Unparked)', 'SUCCESS'), 250);
  setTimeout(() => addMockLog('Nihai Güç Planı aktif edildi (Ultimate Performance)', 'SUCCESS'), 500);
  setTimeout(() => addMockLog('TCP NoDelay & DNS önbellek optimize edildi', 'SUCCESS'), 750);
  setTimeout(() => addMockLog('✨ Sistem en yüksek hız modunda!', 'SUCCESS'), 1000);
}

// Add log to mock terminal
function addMockLog(msg, type = 'INFO') {
  const terminal = document.getElementById('mockTerminal');
  if (!terminal) return;

  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];

  let tagClass = 'log-info';
  let tagText = '● INFO';
  if (type === 'SUCCESS') {
    tagClass = 'log-success';
    tagText = '✓ OK';
  } else if (type === 'RUN') {
    tagClass = 'log-info';
    tagText = '► RUN';
  } else if (type === 'THEME') {
    tagClass = 'log-info';
    tagText = '🎨 THEME';
  }

  const logLine = document.createElement('div');
  logLine.innerHTML = `<span style="color:#6e7681">[${timeStr}]</span> <span class="${tagClass}">[${tagText}]</span> ${msg}`;
  terminal.appendChild(logLine);
  terminal.scrollTop = terminal.scrollHeight;
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Initial mockup setup
  switchMockTab('fps');
});

// Copy Contact Info to Clipboard
function copyContact(text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopiedFeedback(btnElement);
    }).catch(() => {
      fallbackCopy(text, btnElement);
    });
  } else {
    fallbackCopy(text, btnElement);
  }
}

function showCopiedFeedback(btnElement) {
  const textSpan = btnElement.querySelector('.btn-text');
  if (!textSpan) return;
  const original = textSpan.textContent;
  textSpan.textContent = '✓ Kopyalandı!';
  btnElement.classList.add('copied');
  setTimeout(() => {
    textSpan.textContent = original;
    btnElement.classList.remove('copied');
  }, 2200);
}

function fallbackCopy(text, btnElement) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showCopiedFeedback(btnElement);
  } catch (err) {
    prompt('Kopyalamak için Ctrl+C tuşlarına basın:', text);
  }
  document.body.removeChild(textArea);
}

