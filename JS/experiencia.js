document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      var icon = toggle.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isOpen ? 'close' : 'menu';
      }
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        var icon = toggle.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = 'menu';
        }
      });
    });
  }

  var bars = document.querySelectorAll('.progress-bar');
  if (bars.length) {
    bars.forEach(function (bar) {
      var finalWidth = bar.style.width || '0%';
      bar.dataset.finalWidth = finalWidth;
      bar.style.width = '0%';
    });

    var skillsSection = document.querySelector('[data-skills-section="true"]');
    if (skillsSection) {
      var observed = false;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || observed) return;
          observed = true;

          bars.forEach(function (bar, index) {
            setTimeout(function () {
              bar.style.width = bar.dataset.finalWidth || '0%';
            }, index * 80);
          });

          observer.disconnect();
        });
      }, {
        threshold: 0.2
      });

      observer.observe(skillsSection);
    }
  }

  var thumbs = Array.from(document.querySelectorAll('img.modal-thumb'));
  var modal = document.getElementById('modal-img');
  var modalImg = document.getElementById('modal-img-content');

  if (modal && modalImg && thumbs.length) {
    var current = 0;

    function openModal(index) {
      current = index;
      modalImg.src = thumbs[current].getAttribute('data-full') || thumbs[current].src;
      modal.classList.add('is-open');
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modalImg.src = '';
    }

    function prevImg() {
      current = (current - 1 + thumbs.length) % thumbs.length;
      openModal(current);
    }

    function nextImg() {
      current = (current + 1) % thumbs.length;
      openModal(current);
    }

    thumbs.forEach(function (img, i) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(i);
      });
    });

    var prevButton = document.getElementById('modal-prev');
    var nextButton = document.getElementById('modal-next');
    var closeButton = document.getElementById('close-modal-img');

    if (prevButton) {
      prevButton.addEventListener('click', function (e) {
        prevImg();
        e.stopPropagation();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function (e) {
        nextImg();
        e.stopPropagation();
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', function (e) {
        closeModal();
        e.stopPropagation();
      });
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'Escape') closeModal();
    });
  }

  // Toggle 'Ver más / Ver menos' for Guardián del ALBA
  (function(){
    var more = document.getElementById('gd-more');
    var less = document.getElementById('gd-less');
    var p2 = document.getElementById('gd-p2');
    if (more && less && p2) {
      p2.style.maxHeight = '0';
      p2.style.opacity = '0';
      p2.style.transition = 'max-height 300ms ease, opacity 300ms ease';
      more.addEventListener('click', function () {
        p2.style.opacity = '1';
        p2.style.maxHeight = '500px';
        p2.classList.remove('opacity-0');
        p2.setAttribute('aria-hidden','false');
        more.setAttribute('aria-expanded','true');
        more.classList.add('hidden');
      });
      less.addEventListener('click', function () {
        p2.style.opacity = '0';
        p2.style.maxHeight = '0';
        p2.classList.add('opacity-0');
        p2.setAttribute('aria-hidden','true');
        more.setAttribute('aria-expanded','false');
        more.classList.remove('hidden');
      });
    }
  })();

});
