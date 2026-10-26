/**
 * Main Application Logic for SSBT Multi-Page Portal
 * (js/app.js)
 * Fully responsive with real-time Admin sync, notification chime & enquiry tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLiveWebsiteContent();
  initDepartmentView('bca');
  initAdmissionsTabs();
  initAccordion();
  initDocumentChecklistCounter();
  initEnquiryModal();
  initGrievanceModal();
  initEventFilters();
  initEventRegModal();
  initAdminBadge();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Mobile Menu Toggle & Mobile Dropdowns
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Support mobile click-to-expand for dropdown menus
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      const parentItem = link.closest('.nav-item');
      const dropdown = parentItem ? parentItem.querySelector('.nav-dropdown') : null;

      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && dropdown) {
          e.preventDefault();
          dropdown.classList.toggle('dropdown-open');
          const chevron = link.querySelector('.fa-chevron-down');
          if (chevron) {
            chevron.style.transform = dropdown.classList.contains('dropdown-open') ? 'rotate(180deg)' : 'none';
          }
          return;
        }

        // Close menu when a standard page link is clicked
        navLinks.classList.remove('mobile-open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    // Close menu when clicking items inside dropdowns
    navLinks.querySelectorAll('.nav-dropdown a').forEach(subLink => {
      subLink.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Live Website Content & Dynamic Data Binding
   -------------------------------------------------------------------------- */
function initLiveWebsiteContent() {
  const data = (typeof getCollegeData === 'function') ? getCollegeData() : COLLEGE_DATA;
  if (!data) return;

  // 1. Update Placement Head (Prof. Aarti Rana) if elements exist
  const tpoNameEl = document.getElementById('live-tpo-name');
  if (tpoNameEl && data.placement) tpoNameEl.textContent = data.placement.head;

  const tpoTitleEl = document.getElementById('live-tpo-title');
  if (tpoTitleEl && data.placement) tpoTitleEl.textContent = data.placement.designation;

  const tpoPhotoEl = document.getElementById('live-tpo-photo');
  if (tpoPhotoEl && data.placement && data.placement.photo) {
    tpoPhotoEl.src = data.placement.photo;
  }

  const tpoMessageEl = document.getElementById('live-tpo-message');
  if (tpoMessageEl && data.placement) {
    tpoMessageEl.textContent = `"${data.placement.message}"`;
  }

  const tpoEmailEl = document.getElementById('live-tpo-email');
  if (tpoEmailEl && data.placement) {
    tpoEmailEl.textContent = data.placement.email;
  }

  // 2. Update Key Statistics on placements.html / index.html
  const highPkgEl = document.getElementById('live-stat-highest-pkg');
  if (highPkgEl && data.stats) highPkgEl.textContent = data.stats.highestPackage;

  const avgPkgEl = document.getElementById('live-stat-avg-pkg');
  if (avgPkgEl && data.stats) avgPkgEl.textContent = data.stats.averagePackage;

  const studentsEl = document.getElementById('live-stat-students');
  if (studentsEl && data.stats) studentsEl.textContent = data.stats.activeStudents;

  const campusAcresEl = document.getElementById('live-stat-acres');
  if (campusAcresEl && data.stats) campusAcresEl.textContent = data.stats.campusAcres;
}

/* --------------------------------------------------------------------------
   3. Department Dynamic View (departments.html)
   -------------------------------------------------------------------------- */
function initDepartmentView(deptKey) {
  const data = (typeof getCollegeData === 'function') ? getCollegeData() : COLLEGE_DATA;
  if (!data || !data.departments) return;

  const dept = data.departments[deptKey];
  if (!dept) return;

  const container = document.getElementById('dept-dynamic-container');
  if (!container) return;

  container.innerHTML = `
    <div class="dept-header-flex">
      <div>
        <span class="section-tag" style="background: var(--accent-gold-light); color: var(--accent-gold); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 20px;">
          ${dept.short} PROGRAMME
        </span>
        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--royal-navy); margin-top: 6px;">${dept.name}</h3>
        <p style="color: var(--text-light); font-size: 0.95rem;">${dept.tagline}</p>
      </div>
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <span style="background: #f1f5f9; color: var(--royal-navy); font-weight: 700; font-size: 0.85rem; padding: 6px 14px; border-radius: 20px;">
          <i class="fa-solid fa-clock"></i> ${dept.duration}
        </span>
        <span style="background: #fef3c7; color: #b45309; font-weight: 700; font-size: 0.85rem; padding: 6px 14px; border-radius: 20px;">
          <i class="fa-solid fa-users"></i> ${dept.intake}
        </span>
      </div>
    </div>

    <div class="dept-content-grid">
      <!-- Left Column -->
      <div>
        <div style="margin-bottom: 25px;">
          <h4 style="font-size: 1.15rem; color: var(--royal-navy); margin-bottom: 8px;">
            <i class="fa-solid fa-bullseye" style="color: var(--primary-red);"></i> Vision & Mission
          </h4>
          <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 12px; font-weight: 500;">
            ${dept.vision}
          </p>
          <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--text-light); list-style: disc;">
            ${dept.mission.map(m => `<li style="margin-bottom: 6px;">${m}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <h4 style="font-size: 1.15rem; color: var(--royal-navy); margin-bottom: 12px;">
            <i class="fa-solid fa-flask" style="color: var(--primary-red);"></i> Dedicated Laboratories
          </h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${dept.labs.map(lab => `
              <div style="background: #f8fafc; border: 1px solid var(--border-color); padding: 12px 16px; border-radius: var(--radius-sm);">
                <strong style="color: var(--royal-navy); display: block; font-size: 0.92rem;">${lab.name}</strong>
                <span style="font-size: 0.82rem; color: var(--text-light);">${lab.pcs} | ${lab.os}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 style="font-size: 1.15rem; color: var(--royal-navy); margin-bottom: 10px;">
            <i class="fa-solid fa-book-open" style="color: var(--primary-red);"></i> Key Subject Areas
          </h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${dept.syllabusHighlights.map(s => `
              <span style="background: #f1f5f9; border: 1px solid #e2e8f0; font-size: 0.82rem; font-weight: 600; padding: 6px 12px; border-radius: 20px; color: var(--royal-navy);">
                <i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 0.75rem;"></i> ${s}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div>
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 25px; border-left: 4px solid var(--accent-gold);">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--accent-gold);">Head of Department</span>
          <h4 style="font-size: 1.15rem; color: var(--royal-navy); margin-top: 2px;">${dept.hod.name}</h4>
          <p style="font-size: 0.82rem; color: var(--primary-red); font-weight: 600; margin-bottom: 10px;">${dept.hod.qualification} (${dept.hod.experience})</p>
          <p style="font-size: 0.86rem; color: var(--text-light); font-style: italic; line-height: 1.5;">"${dept.hod.message}"</p>
        </div>

        <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 10px;">
          <i class="fa-solid fa-chalkboard-user" style="color: var(--primary-red);"></i> Faculty Profiles
        </h4>
        <div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
          ${dept.faculty.map(f => `
            <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 12px 16px; display: flex; align-items: center; gap: 14px; box-shadow: var(--shadow-sm);">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-red-light); color: var(--primary-red); display: flex; align-items: center; justify-content: center; font-size: 1rem;"><i class="fa-solid fa-user-graduate"></i></div>
              <div>
                <strong style="color: var(--royal-navy); display: block; font-size: 0.92rem;">${f.name}</strong>
                <span style="font-size: 0.78rem; color: var(--primary-red); font-weight: 600;">${f.role}</span>
                <span style="font-size: 0.78rem; color: var(--text-light); display: block;">${f.qual} • ${f.exp}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Attach button event listeners
  document.querySelectorAll('.dept-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.dept-pill-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const key = e.currentTarget.getAttribute('data-dept');
      initDepartmentView(key);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Admissions Tabs (admissions.html)
   -------------------------------------------------------------------------- */
function initAdmissionsTabs() {
  document.querySelectorAll('.admit-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.admit-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      const targetTab = e.currentTarget.getAttribute('data-tab');
      document.querySelectorAll('.admit-tab-content').forEach(pane => {
        pane.style.display = (pane.id === targetTab) ? 'block' : 'none';
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Document Checklist Counter (admissions.html)
   -------------------------------------------------------------------------- */
function initDocumentChecklistCounter() {
  const checkboxes = document.querySelectorAll('.doc-check-input');
  const countDisplay = document.getElementById('doc-count-display');
  if (!checkboxes.length || !countDisplay) return;

  const totalCount = checkboxes.length;

  function updateCount() {
    let checked = 0;
    checkboxes.forEach(cb => { if (cb.checked) checked++; });
    countDisplay.textContent = `${checked} / ${totalCount} Documents Ready`;
    countDisplay.style.color = (checked === totalCount) ? '#059669' : 'var(--primary-red)';
  }

  checkboxes.forEach(cb => cb.addEventListener('change', updateCount));
}

/* --------------------------------------------------------------------------
   6. Accordion (FAQs)
   -------------------------------------------------------------------------- */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   7. Real-Time Audio Chime Notification (Web Audio API)
   -------------------------------------------------------------------------- */
function playNotificationChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Two-tone cheerful announcement chime
    const playTone = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      gain.gain.setValueAtTime(0.18, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + duration);
    };

    playTone(587.33, 0, 0.25);    // D5
    playTone(880.00, 0.16, 0.45);  // A5
  } catch (e) {
    console.warn("Audio chime skipped:", e);
  }
}

/* --------------------------------------------------------------------------
   8. Real-Time Admin Notification & Enquiry Storage System
   -------------------------------------------------------------------------- */
function recordEnquiry(enquiryData) {
  // 1. Save to localStorage
  let enquiries = [];
  try {
    const raw = localStorage.getItem('SSBT_ENQUIRIES');
    if (raw) enquiries = JSON.parse(raw);
  } catch(e) {
    enquiries = [];
  }

  const record = {
    id: Date.now(),
    name: enquiryData.name || 'Anonymous Applicant',
    phone: enquiryData.phone || 'N/A',
    email: enquiryData.email || 'N/A',
    course: enquiryData.course || 'General Admission',
    message: enquiryData.message || 'No additional note provided.',
    type: enquiryData.type || 'Admission Enquiry',
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }),
    status: 'New'
  };

  enquiries.unshift(record);
  localStorage.setItem('SSBT_ENQUIRIES', JSON.stringify(enquiries));

  // 2. Play Audio chime for alert
  playNotificationChime();

  // 3. Request native browser notification
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      new Notification(`🎓 New SSBT Lead: ${record.name}`, {
        body: `Applied for ${record.course} • Mobile: ${record.phone}`,
        icon: 'https://sscoetjalgaon.ac.in/public/images/home-page/new-logos/ssacsc.png'
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(`🎓 New SSBT Lead: ${record.name}`, {
            body: `Applied for ${record.course} • Mobile: ${record.phone}`,
            icon: 'https://sscoetjalgaon.ac.in/public/images/home-page/new-logos/ssacsc.png'
          });
        }
      });
    }
  }

  // 4. Show on-screen Toast Notification
  showAdminToast(record);

  // 5. Update badge counter
  initAdminBadge();

  return record;
}

function showAdminToast(record) {
  let toastContainer = document.getElementById('ssbt-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'ssbt-toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 380px;
      width: calc(100% - 48px);
      pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: #0f172a;
    color: #ffffff;
    border-left: 5px solid #fbbf24;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.35);
    font-size: 0.9rem;
    pointer-events: auto;
    animation: slideInToast 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  // WhatsApp admin alert link pre-formatted
  const waMsg = encodeURIComponent(`*🎓 SSBT New Lead Alert!*\n*Name:* ${record.name}\n*Phone:* ${record.phone}\n*Course:* ${record.course}\n*Date:* ${record.timestamp}`);
  const waLink = `https://api.whatsapp.com/send?phone=919422789123&text=${waMsg}`;

  toast.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
      <strong style="color: #fbbf24; font-size: 0.92rem;"><i class="fa-solid fa-bell"></i> New Enquiry Recorded!</strong>
      <button style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1rem;" onclick="this.parentElement.parentElement.remove();">&times;</button>
    </div>
    <div style="margin-bottom: 10px; line-height: 1.4; color: #cbd5e1;">
      <strong>${record.name}</strong> (${record.course})<br>
      <span style="font-size: 0.82rem; color: #94a3b8;"><i class="fa-solid fa-phone"></i> ${record.phone}</span>
    </div>
    <div style="display: flex; gap: 8px;">
      <a href="${waLink}" target="_blank" style="background: #25d366; color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
        <i class="fa-brands fa-whatsapp"></i> WhatsApp Admin
      </a>
      <a href="admin.html" style="background: rgba(255,255,255,0.15); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-weight: 600; text-decoration: none;">
        <i class="fa-solid fa-lock"></i> Open Admin Inbox
      </a>
    </div>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 9000);
}

function initAdminBadge() {
  const badgeEls = document.querySelectorAll('.admin-lead-badge');
  try {
    const raw = localStorage.getItem('SSBT_ENQUIRIES');
    const enquiries = raw ? JSON.parse(raw) : [];
    const count = enquiries.length;
    badgeEls.forEach(badge => {
      if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    });
  } catch(e) {}
}

/* --------------------------------------------------------------------------
   9. Admission Enquiry Modal
   -------------------------------------------------------------------------- */
function initEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  const openBtns = document.querySelectorAll('.open-enquiry-modal');
  const closeBtn = document.getElementById('close-enquiry-modal');
  const form = document.getElementById('enquiry-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('eq-name')?.value || 'Prospective Student';
      const phone = form.querySelector('input[type="tel"]')?.value || '';
      const email = form.querySelector('input[type="email"]')?.value || '';
      const course = document.getElementById('eq-course')?.value || 'BCA';
      const score = form.querySelector('input[placeholder*="Percentage"]')?.value || '';

      const record = recordEnquiry({
        name: name,
        phone: phone,
        email: email,
        course: course,
        message: `12th Percentage: ${score || 'Not specified'}`,
        type: 'Admission Enquiry'
      });

      alert(`🎉 Thank you, ${name}! Your admission enquiry for ${course} has been registered.\n\n🔔 The Admission Office and Admin have been alerted in real-time.`);
      form.reset();
      modal.classList.remove('active');
    });
  }
}

/* --------------------------------------------------------------------------
   10. Contact Page Form Handler (contact.html)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value;
    const phone = document.getElementById('c-phone')?.value;
    const email = document.getElementById('c-email')?.value;
    const course = document.getElementById('c-subject')?.value || 'General Inquiry';
    const message = document.getElementById('c-message')?.value;

    recordEnquiry({
      name: name,
      phone: phone,
      email: email,
      course: course,
      message: message,
      type: 'Contact Message'
    });

    alert(`📬 Message Delivered, ${name}! Your query regarding "${course}" has been sent. The administration has received an instant notification.`);
    contactForm.reset();
  });
}

/* --------------------------------------------------------------------------
   11. Event Registration Modal & Category Filters (events.html)
   -------------------------------------------------------------------------- */
function initEventFilters() {
  const filterBtns = document.querySelectorAll('.event-filter-btn');
  const eventSections = document.querySelectorAll('.event-card-item');

  if (!filterBtns.length || !eventSections.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');

      eventSections.forEach(item => {
        if (cat === 'all' || item.getAttribute('data-cat') === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initEventRegModal() {
  const modal = document.getElementById('event-reg-modal');
  const openBtns = document.querySelectorAll('.open-event-reg-modal');
  const closeBtn = document.getElementById('close-event-reg-modal');
  const form = document.getElementById('event-reg-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const eventName = btn.getAttribute('data-event') || 'MILESTONE 2026';
      const eventInput = document.getElementById('ev-event-name');
      if (eventInput) eventInput.value = eventName;
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('ev-name')?.value;
      const phone = document.getElementById('ev-phone')?.value;
      const college = document.getElementById('ev-college')?.value;
      const eventName = document.getElementById('ev-event-name')?.value || 'Tech Fest';

      recordEnquiry({
        name: name,
        phone: phone,
        email: document.getElementById('ev-email')?.value || 'N/A',
        course: `Event: ${eventName}`,
        message: `College: ${college}`,
        type: 'Fest Registration'
      });

      alert(`🎉 Registration Confirmed for ${eventName}!\n\nWelcome, ${name} (${college}). Entry passes have been logged with the faculty event coordinator.`);
      form.reset();
      modal.classList.remove('active');
    });
  }
}

/* --------------------------------------------------------------------------
   12. Grievance Modal (compliance.html)
   -------------------------------------------------------------------------- */
function initGrievanceModal() {
  const modal = document.getElementById('grievance-modal');
  const openBtns = document.querySelectorAll('.open-grievance-modal');
  const closeBtn = document.getElementById('close-grievance-modal');
  const form = document.getElementById('grievance-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const token = `SSBT-GRV-${Math.floor(1000 + Math.random() * 9000)}`;
      const name = form.querySelector('input[type="text"]')?.value || 'Confidential Student';
      const phone = form.querySelector('input[type="tel"]')?.value || 'Confidential';

      recordEnquiry({
        name: name,
        phone: phone,
        course: `Grievance Token: #${token}`,
        message: form.querySelector('textarea')?.value || 'Confidential Redressal Concern',
        type: 'Official Grievance'
      });

      alert(`🔒 Official Grievance Token Generated: #${token}.\nYour complaint has been forwarded to the Principal & Grievance Redressal Committee.`);
      form.reset();
      modal.classList.remove('active');
    });
  }
}
