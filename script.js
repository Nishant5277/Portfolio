const teamData = {
  marcus: {
    name: "Marcus Thorne",
    role: "Co-founder & Systems Engineer",
    tagline: "Distributed Systems & Infrastructure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqwXWOS2ls8uWCMOZiuXQi-hf_DUzbAIzXlPfMSWrWLUiNjwrpAc7bdnvlzO2ib42SBKPvwrvkNnL2pytP3QxKeXHeOemaIBvii1YLzK0Hcqc3JjGsD9pOWPoLrAp6O3q5gX4BzM5zxAeG6ZQbVH6lTdB85xhpz9BRGuQRaRgDmC0QUEy8KWrZjfLzfQe-TMypEGXwQmxxR37SqGSh-Tu4YACYR1eYoXA9jY-z7sPM5d3lmwFN2HqR",
    bio: "Marcus approaches infrastructure with the mindset of a horologistâ€”every component must serve a purpose, and efficiency is non-negotiable. Before MacroBox, he spent a decade scaling backend services for high-frequency trading platforms. He believes the best code is the code you delete.",
    skills: [
      { label: "Go / Rust", value: "90%" },
      { label: "Kubernetes / Docker", value: "85%" },
      { label: "PostgreSQL / Redis", value: "95%" },
      { label: "System Architecture", value: "100%" }
    ],
    tags: ["AWS", "Terraform", "Kafka", "gRPC"],
    projects: [
      { title: "Project One", desc: "Enterprise Arch", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsXJRifGwUhlFGTg3wxfztTqDoCTgOBoOBEser6jqWCp95f9sqh7v4IsAxiWkUDm6RTTfqT5isGNeHNuzT6hOQ7qalA466_pb890-DNlvrxJvqUPpb620OCbe4Dlmy2Q3AiFiWv5cbTD7r-9Om1-SkXrn5ELXoOMwCtUfpROLjNgMgHTw3pEVxNhCs_XJYpsNM3HDr8K4FpY87CIAFGcYyPdfGxASFrulZRlHp3vODdrkpHTD9_hcP" },
      { title: "Atmosphere Four", desc: "Infrastructure", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4K1OMxDWnleiXxVuAyx9uojpOKj_SCmbxGjG4hMmn_IYxiMvlmnt9uhjNGjX15zuKhHOz-26QSjZiTjrBc9VBC_4mk4QGk9m8SsFyblrxLb9iixt3WF-kNp6lv8LKD6Y4mUpuyxnD48vL21jK8p576FrTr8RjFC2tTFjeoJTpcxWsGPCHbveGM7znLnQnKv390tCqcpT1HdsBhd6ANLZRx7sMMYesvPZewAxFIGVVSB2IXyvx86d-" }
    ],
    uniqueFeature: `
      <div class="bg-brand-bg/50 rounded-lg p-6 border border-brand/10">
        <p class="text-xs uppercase tracking-widest opacity-60 mb-4">Live Metrics</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="text-2xl serif-text">99.999%</div>
            <div class="text-[10px] uppercase tracking-wider opacity-50">Global Uptime</div>
          </div>
          <div>
            <div class="text-2xl serif-text">&lt;12ms</div>
            <div class="text-[10px] uppercase tracking-wider opacity-50">Avg Latency</div>
          </div>
          <div>
            <div class="text-2xl serif-text">14.2k</div>
            <div class="text-[10px] uppercase tracking-wider opacity-50">Deploys (YTD)</div>
          </div>
          <div>
            <div class="text-2xl serif-text">0</div>
            <div class="text-[10px] uppercase tracking-wider opacity-50">Dropped Packets</div>
          </div>
        </div>
      </div>
    `
  },
  elara: {
    name: "Elara Vance",
    role: "Creative Technologist",
    tagline: "Interactive Design & Frontend Architecture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfYk8vQeCDgMKccCQshkAa42sjVY8ilidLvUdfGEBU4cHU4FOrl05HjECSzq5DtgME_7NFLRJYWNwWTBeCbliVTcVENhaQ0TDsStmz9k9PevzCR0BARhKrWIsZziIECX8iJlf9we6qIIKy_ZjVuHZjrAN7OPvI1kqYkwO4ObEDjCujpfXxGJojtGZeVmmX5D47UBhH39C2b27a2nOZ0V2Kx92ta-RoaWLhMQq2EkckErVSbTNN20oP",
    bio: "Bridging the gap between motion and logic. Elara obsesses over 60fps animations, accessible state management, and typographic scale. She crafts interfaces that feel less like software and more like physical objects reacting to touch.",
    skills: [
      { label: "React / Vue", value: "95%" },
      { label: "WebGL / Three.js", value: "80%" },
      { label: "CSS Architecture", value: "100%" },
      { label: "Motion Design", value: "90%" }
    ],
    tags: ["Framer Motion", "GSAP", "Tailwind", "Figma"],
    projects: [
      { title: "System Two", desc: "Identity & UI", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ005Y-MsLW39yydSxWg-dobJFNfkZtPvQgHK41GPwkO06v5s4LLuIooyy5dCwpMfa_qDlY4_mKPIv7AOCgyaPoTXN_gfrobllKAlZ0n4kd8eulgQWBzEospxcd7yRpb7-fGuahF2MyA5DsN31Q-PHlvtieW17EhL8iGccObMg-u2SoJZJDa0qLHVgFtqHDkn37wwVJG95Idr0iwCWW-hqFt-Q0FvLEdcp7hphS1yhAzNcLUHj6g4L" },
      { title: "Study Three", desc: "Performance", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtCEiASl871wvYGo1pWq5Rpfj26WTIZu0e4PqanTEB7HSOERO6TzhYkvRylhAvepqfzeGwa7bY4kaiDuwg-RBuMoN7YTsj_ojpGysYOFQl-fF0WgeJ4UFgpzRfw4Tjlue4rh1ajZBqPKzO_8GT2ctQIKYY3LsL_uZk6U5gwoZV4dVjbqMmGjpjudqh5hSSDC9_FOddUncdzSXDCHh189dK5SgCpErAjqRFrsWqr1uTwcB38BRFS7gQ" }
    ],
    uniqueFeature: `
      <div class="bg-brand-bg/50 rounded-lg p-6 border border-brand/10 h-full flex flex-col justify-center items-center overflow-hidden relative">
        <p class="text-xs uppercase tracking-widest opacity-60 absolute top-4 left-4">Component State</p>
        <div class="w-32 h-16 bg-white rounded-full flex items-center p-1 shadow-sm mt-4 border border-brand/5 relative cursor-pointer group">
          <div class="w-14 h-14 bg-brand rounded-full transition-transform duration-500 ease-out group-hover:translate-x-16"></div>
        </div>
        <p class="text-[10px] mt-6 opacity-40">Interactive Demo: Hover to toggle</p>
      </div>
    `
  },
  jonas: {
    name: "Jonas Reed",
    role: "Principal Architect",
    tagline: "Full-Stack Cloud & Database Optimization",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuCDTDOJQ4P8egFI-bdS2YrjI5btJuyJXTL5gtu8wfpLmceLkS6NGaps5cyR0zmTOaiV-1A6mKXUEEIDLMqosP3BbDgkAhlf1wF7xWH28sLUYcZQOoECz-YDxYHiB40xVoUMnkjAR6cQ57Dl7DcxWF8Te_42qJPvdqElbnSxOiBaOhDG4H4djZ2syPbSlFPy4DH9HKhLixNxElK6rYl3C_6lU52y4bXeQusn0HpksSPdFaYN3IH8mA",
    bio: "Jonas maps chaos into order. With a background in enterprise data modeling and distributed caching, he ensures the foundational layer of every project is robust, secure, and infinitely scalable.",
    skills: [
      { label: "Node.js / Python", value: "95%" },
      { label: "GraphQL / REST", value: "90%" },
      { label: "NoSQL / GraphDB", value: "85%" },
      { label: "Cloud Security", value: "95%" }
    ],
    tags: ["Prisma", "Elasticsearch", "Vercel", "Redis"],
    projects: [
      { title: "Project One", desc: "Enterprise Arch", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsXJRifGwUhlFGTg3wxfztTqDoCTgOBoOBEser6jqWCp95f9sqh7v4IsAxiWkUDm6RTTfqT5isGNeHNuzT6hOQ7qalA466_pb890-DNlvrxJvqUPpb620OCbe4Dlmy2Q3AiFiWv5cbTD7r-9Om1-SkXrn5ELXoOMwCtUfpROLjNgMgHTw3pEVxNhCs_XJYpsNM3HDr8K4FpY87CIAFGcYyPdfGxASFrulZRlHp3vODdrkpHTD9_hcP" },
      { title: "Atmosphere Four", desc: "Infrastructure", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4K1OMxDWnleiXxVuAyx9uojpOKj_SCmbxGjG4hMmn_IYxiMvlmnt9uhjNGjX15zuKhHOz-26QSjZiTjrBc9VBC_4mk4QGk9m8SsFyblrxLb9iixt3WF-kNp6lv8LKD6Y4mUpuyxnD48vL21jK8p576FrTr8RjFC2tTFjeoJTpcxWsGPCHbveGM7znLnQnKv390tCqcpT1HdsBhd6ANLZRx7sMMYesvPZewAxFIGVVSB2IXyvx86d-" }
    ],
    uniqueFeature: `
      <div class="bg-brand-bg/50 rounded-lg p-6 border border-brand/10 h-full flex flex-col justify-center">
        <p class="text-xs uppercase tracking-widest opacity-60 mb-6">Architecture topology</p>
        <div class="flex items-center justify-between px-4">
           <div class="w-12 h-12 border border-brand/20 rounded flex items-center justify-center text-xs">Client</div>
           <div class="h-[1px] w-8 bg-brand/20"></div>
           <div class="w-16 h-16 border border-accent bg-accent/5 rounded flex items-center justify-center text-xs">API Gateway</div>
           <div class="h-[1px] w-8 bg-brand/20"></div>
           <div class="flex flex-col gap-2">
             <div class="w-12 h-8 border border-brand/20 rounded flex items-center justify-center text-[10px]">DB</div>
             <div class="w-12 h-8 border border-brand/20 rounded flex items-center justify-center text-[10px]">Cache</div>
           </div>
        </div>
      </div>
    `
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Preloader Logic
  const preloader = document.getElementById("preloader");
  const preloaderText = document.getElementById("preloader-text");
  const preloaderBar = document.getElementById("preloader-bar");

  if (preloader) {
    // Start text animation slightly after load
    setTimeout(() => {
      if (preloaderText) preloaderText.style.transform = "translateY(0)";
      if (preloaderBar) preloaderBar.style.width = "100%";
    }, 100);

    // Slide up the preloader and re-enable scrolling
    setTimeout(() => {
      preloader.style.transform = "translateY(-100%)";
      document.body.classList.remove("overflow-hidden", "preloading");
    }, 1800);

    // Remove from DOM completely
    setTimeout(() => {
      preloader.remove();
    }, 2900);
  }

  const modal = document.getElementById("team-modal");
  const closeBtn = document.getElementById("close-modal");
  const modalImage = document.getElementById("modal-image");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalBio = document.getElementById("modal-bio");
  const modalSkills = document.getElementById("modal-skills");
  const modalTags = document.getElementById("modal-tags");
  const modalProjects = document.getElementById("modal-projects");
  const modalUnique = document.getElementById("modal-unique");

  let lastFocusedElement = null;
  let activeCard = null;

  const cards = document.querySelectorAll(".team-card");

  cards.forEach(card => {
    card.addEventListener("click", () => openModal(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  function populateModal(memberKey) {
    const data = teamData[memberKey];
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.name;
    modalName.textContent = data.name;
    modalRole.textContent = data.role;
    modalBio.textContent = data.bio;

    // Populate skills
    modalSkills.innerHTML = data.skills.map(skill => `
      <div class="skill-bar-container mb-4">
        <div class="flex justify-between text-xs mb-1">
          <span>${skill.label}</span>
          <span class="opacity-60">${skill.value}</span>
        </div>
        <div class="h-[2px] w-full bg-brand/10 rounded-full overflow-hidden">
          <div class="h-full bg-accent skill-bar-fill" style="--fill: ${skill.value}"></div>
        </div>
      </div>
    `).join("");

    // Populate tags
    modalTags.innerHTML = data.tags.map(tag => `
      <span class="px-3 py-1 border border-brand/20 rounded-full text-[10px] uppercase tracking-wider">${tag}</span>
    `).join("");

    // Populate projects
    modalProjects.innerHTML = data.projects.map(proj => `
      <a href="#work" class="group/proj block mb-4 border border-brand/10 rounded-lg p-2 hover:border-brand/30 transition-colors flex gap-4 items-center">
        <div class="w-16 h-12 rounded overflow-hidden flex-shrink-0">
          <img src="${proj.img}" class="w-full h-full object-cover group-hover/proj:scale-105 transition-transform duration-500" alt="${proj.title}">
        </div>
        <div>
          <div class="text-sm serif-text">${proj.title}</div>
          <div class="text-[10px] uppercase tracking-widest opacity-60">${proj.desc}</div>
        </div>
      </a>
    `).join("");

    // Populate unique feature
    modalUnique.innerHTML = data.uniqueFeature;
  }

  function openModal(card) {
    const memberKey = card.dataset.member;
    lastFocusedElement = card;
    activeCard = card;

    const img = card.querySelector("img");
    const title = card.querySelector("h3");

    populateModal(memberKey);

    // Apply View Transition names dynamically
    img.style.viewTransitionName = "hero-image";
    title.style.viewTransitionName = "hero-name";

    if (!document.startViewTransition) {
      showModalWithoutTransition();
      return;
    }

    document.startViewTransition(() => {
      // Remove names from card
      img.style.viewTransitionName = "none";
      title.style.viewTransitionName = "none";
      
      // Add names to modal elements
      modalImage.style.viewTransitionName = "hero-image";
      modalName.style.viewTransitionName = "hero-name";
      
      showModalState();
    });
  }

  function closeModal() {
    if (!document.startViewTransition || !activeCard) {
      hideModalState();
      return;
    }

    const img = activeCard.querySelector("img");
    const title = activeCard.querySelector("h3");

    document.startViewTransition(() => {
      modalImage.style.viewTransitionName = "none";
      modalName.style.viewTransitionName = "none";

      img.style.viewTransitionName = "hero-image";
      title.style.viewTransitionName = "hero-name";

      hideModalState();
    }).finished.then(() => {
      img.style.viewTransitionName = "none";
      title.style.viewTransitionName = "none";
    });
  }

  function showModalState() {
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    // Small delay to trigger internal animations
    requestAnimationFrame(() => {
      modal.classList.add("modal-animating-in");
    });
    closeBtn.focus();
  }

  function showModalWithoutTransition() {
    showModalState();
  }

  function hideModalState() {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    modal.classList.remove("modal-animating-in");
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
    activeCard = null;
  }

  /* â”€â”€ Custom cursor (desktop only) â”€â”€ */
  (function () {
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    // Only run on fine-pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mx = -200, my = -200;  // start off-screen
    let rx = -200, ry = -200;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    });

    (function animRing() {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(animRing);
    })();

    const hoverSel = "a, button, [role='button'], .team-card, .ticker-item, li[class*='cursor-pointer']";
    document.querySelectorAll(hoverSel).forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cur-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cur-hover"));
    });

    document.addEventListener("mouseleave", () => { mx = -200; my = -200; });
  })();

  /* â”€â”€ Scroll reveal â”€â”€ */
  (function () {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  })();

  /* â”€â”€ Animated stat counters â”€â”€ */
  (function () {
    const counters = document.querySelectorAll(".stat-count");
    if (!counters.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        const dur    = 1400;
        const t0     = performance.now();
        (function tick(now) {
          const p   = Math.min((now - t0) / dur, 1);
          const val = Math.round((1 - Math.pow(1 - p, 3)) * target);
          el.textContent = val + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
  })();

  /* â”€â”€ Work gallery 3D tilt (desktop only) â”€â”€ */
  (function () {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.querySelectorAll(".work-tilt").forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
        const y = ((e.clientY - r.top)  / r.height - 0.5) * 10;
        card.style.transform =
          `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.025)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  })();

  /* â”€â”€ Add work-tilt class to gallery cards â”€â”€ */
  document.querySelectorAll("#work .group.cursor-pointer").forEach(el => {
    el.classList.add("work-tilt");
  });

  /* â”€â”€ Ticker: touch-hold to pause on mobile â”€â”€ */
  (function () {
    document.querySelectorAll(".ticker-track").forEach(track => {
      track.addEventListener("touchstart", () => {
        track.style.animationPlayState = "paused";
      }, { passive: true });
      track.addEventListener("touchend", () => {
        track.style.animationPlayState = "running";
      });
    });
  })();


  /* ═══════════════════════════════════════════
     SCROLL PROGRESS BAR
     ═══════════════════════════════════════════ */
  (function () {
    var bar = document.getElementById("scroll-progress");
    if (!bar) return;
    window.addEventListener("scroll", function () {
      var s = document.documentElement;
      var pct = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
      bar.style.width = pct + "%";
    }, { passive: true });
  })();

  /* ═══════════════════════════════════════════
     HEADER — glass blur on scroll + active nav
     ═══════════════════════════════════════════ */
  (function () {
    var hdr = document.getElementById("site-header");
    if (!hdr) return;

    // Glass on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 60) {
        hdr.classList.add("scrolled");
      } else {
        hdr.classList.remove("scrolled");
      }
    }, { passive: true });

    // Active nav via IntersectionObserver
    var sections = ["about","team","work","contact"].map(function(id){
      return document.getElementById(id);
    }).filter(Boolean);

    var navLinks = document.querySelectorAll(".nav-link");

    var sectionObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          navLinks.forEach(function(a) {
            a.classList.toggle("active", a.dataset.section === id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(function(s){ sectionObs.observe(s); });

    // Smooth scroll offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener("click", function(e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        var offset = hdr.offsetHeight + 16;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  })();

  /* ═══════════════════════════════════════════
     MOBILE HAMBURGER NAV
     ═══════════════════════════════════════════ */
  (function () {
    var toggle  = document.getElementById("nav-toggle");
    var overlay = document.getElementById("mobile-nav");
    var closeBtn = document.getElementById("close-mobile-nav");
    if (!toggle || !overlay) return;

    var isOpen = false;

    function openNav() {
      isOpen = true;
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      toggle.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      isOpen = false;
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", function() {
      isOpen ? closeNav() : openNav();
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeNav);
    }

    // Close when a link is tapped
    overlay.querySelectorAll("a").forEach(function(a) {
      a.addEventListener("click", closeNav);
    });

    // Close on Escape
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && isOpen) closeNav();
    });
  })();

  /* ═══════════════════════════════════════════
     BACK TO TOP
     ═══════════════════════════════════════════ */
  (function () {
    var btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    }, { passive: true });

    btn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  })();

  /* ═══════════════════════════════════════════
     IMAGE SLIDERS & LIGHTBOX (WORK GALLERY)
     ═══════════════════════════════════════════ */
  (function () {
    const sliders = document.querySelectorAll(".slider-container");
    const prevBtns = document.querySelectorAll(".slider-prev");
    const nextBtns = document.querySelectorAll(".slider-next");

    // Synchronized Auto-scroll logic for all sliders
    let autoScrollInterval;
    
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        sliders.forEach(slider => {
          // If at the end, jump to start, else scroll next
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
          }
        });
      }, 3000); // 3 second delay
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    // Start auto-scroll by default
    startAutoScroll();

    sliders.forEach(slider => {
      // Pause ALL sliders on hover or touch of ANY slider
      if (slider.parentElement) {
        slider.parentElement.addEventListener('mouseenter', stopAutoScroll);
        slider.parentElement.addEventListener('mouseleave', startAutoScroll);
        slider.parentElement.addEventListener('touchstart', stopAutoScroll, {passive: true});
        slider.parentElement.addEventListener('touchend', startAutoScroll);
      }
      
      // Lightbox logic for images inside this slider
      const images = slider.querySelectorAll("img");
      images.forEach(img => {
        img.addEventListener("click", (e) => {
          e.stopPropagation();
          openImageModal(img.src, img.alt);
        });
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the card click
        const targetId = btn.getAttribute("data-target");
        const slider = document.getElementById(targetId);
        if (slider) {
          slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
        }
      });
    });

    nextBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the card click
        const targetId = btn.getAttribute("data-target");
        const slider = document.getElementById(targetId);
        if (slider) {
          slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
        }
      });
    });

    // Lightbox Modal Logic
    const imageModal = document.getElementById("image-modal");
    const imageModalImg = document.getElementById("image-modal-img");
    const closeImageModalBtn = document.getElementById("close-image-modal");
    const imageModalBackdrop = document.getElementById("image-modal-backdrop");

    function openImageModal(src, alt) {
      if (!imageModal || !imageModalImg) return;
      imageModalImg.src = src;
      imageModalImg.alt = alt || 'Large Screenshot';
      imageModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }

    function closeImageModal() {
      if (!imageModal) return;
      imageModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      setTimeout(() => {
        if (imageModalImg) imageModalImg.src = '';
      }, 300); // clear after fade out
    }

    if (closeImageModalBtn) closeImageModalBtn.addEventListener("click", closeImageModal);
    if (imageModalBackdrop) imageModalBackdrop.addEventListener("click", closeImageModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && imageModal && imageModal.getAttribute("aria-hidden") === "false") {
        closeImageModal();
      }
    });

  })();

});
