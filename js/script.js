// Анимация появления карточек при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
  });

  // Переключение языка
  const langBtn = document.getElementById('lang-switch');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const currentLang = langBtn.dataset.lang || 'pl';
      const nextLang = currentLang === 'pl' ? 'en' : 'pl';

      document.querySelectorAll('[data-pl][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${nextLang}`);
      });

      langBtn.dataset.lang = nextLang;
      langBtn.textContent = nextLang === 'pl' ? 'EN' : 'PL';
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Массив с именами фото из папки img/gallery/
  const galleryImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
	"23.jpg"
    // добавляй новые имена по мере загрузки новых фото
  ];

  let currentIndex = 0;
  const galleryImageEl = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function showImage(index) {
    galleryImageEl.classList.add('gallery-fade-out');
    setTimeout(() => {
      galleryImageEl.src = `img/gallery/${galleryImages[index]}`;
      galleryImageEl.classList.remove('gallery-fade-out');
    }, 500);
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
    "23.jpg"
    // сюда добавляй новые фото
  ];

  let currentIndex = 0;

  // Элементы галереи
  const galleryImageEl = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Элементы лайтбокса
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function showImage(index) {
    galleryImageEl.classList.add('gallery-fade-out');
    setTimeout(() => {
      galleryImageEl.src = `img/gallery/${galleryImages[index]}`;
      galleryImageEl.classList.remove('gallery-fade-out');
    }, 500);
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });

  // Открытие лайтбокса по клику на фото
  galleryImageEl.addEventListener('click', () => {
    lightboxImage.src = galleryImageEl.src;
    lightbox.classList.remove('lightbox-hidden');
  });

  // Закрытие лайтбокса
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('lightbox-hidden');
  });

  // Листание фото в лайтбоксе
  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = `img/gallery/${galleryImages[currentIndex]}`;
  });

  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImage.src = `img/gallery/${galleryImages[currentIndex]}`;
  });

  // Закрытие лайтбокса по клику вне фото
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('lightbox-hidden');
    }
  });

  // Закрытие лайтбокса по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains('lightbox-hidden')) {
      lightbox.classList.add('lightbox-hidden');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
    "23.jpg"
    // сюда добавляй новые фото
  ];

  let currentIndex = 0;

  // Элементы галереи
  const galleryImageEl = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Элементы лайтбокса
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function showImage(index) {
    galleryImageEl.classList.add('gallery-fade-out');
    setTimeout(() => {
      galleryImageEl.src = `img/gallery/${galleryImages[index]}`;
      galleryImageEl.classList.remove('gallery-fade-out');
    }, 500);
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });

  // Открытие лайтбокса по клику на фото
  galleryImageEl.addEventListener('click', () => {
    lightboxImage.src = galleryImageEl.src;
    lightbox.classList.remove('lightbox-hidden');
  });

  // Закрытие лайтбокса
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('lightbox-hidden');
  });

  // Листание фото в лайтбоксе
  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = `img/gallery/${galleryImages[currentIndex]}`;
  });

  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImage.src = `img/gallery/${galleryImages[currentIndex]}`;
  });

  // Закрытие лайтбокса по клику вне фото
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('lightbox-hidden');
    }
  });

  // Закрытие лайтбокса по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains('lightbox-hidden')) {
      lightbox.classList.add('lightbox-hidden');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryImage = document.getElementById("galleryImage");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxPrev = document.getElementById("lightboxPrev");

  const galleryImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"20.jpg",
	"21.jpg",
	"22.jpg",
    "23.jpg"
  ];

  let currentIndex = 0;

  function showLightbox(index) {
    currentIndex = index;
    lightboxImage.src = `img/gallery/${galleryImages[index]}`;
    lightbox.classList.remove("lightbox-hidden");
  }

  function closeLightbox() {
    lightbox.classList.add("lightbox-hidden");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImage.src = `img/gallery/${galleryImages[currentIndex]}`;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = `img/gallery/${galleryImages[currentIndex]}`;
  }

  // Открытие при клике по изображению в галерее
  galleryImage.addEventListener("click", () => showLightbox(currentIndex));

  // Кнопки управления
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", showNext);
  lightboxPrev.addEventListener("click", showPrev);

  // Закрытие по клавише Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });
});

