/**
 * Main Application Logic for SSBT Multi-Page Portal
 * (demo-college-website/js/app.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDepartmentView('bca');
  initAdmissionsTabs();
  initAccordion();
  initDocumentChecklistCounter();
  initEnquiryModal();
  initGrievanceModal();
});

/* --------------------------------------------------------------------------
   1. Mobile Menu Toggle
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

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
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
   2. Department Dynamic View (departments.html)
   -------------------------------------------------------------------------- */
function initDepartmentView(deptKey) {
  if (typeof COLLEGE_DATA === 'undefined' || !COLLEGE_DATA.departments) return;
  const dept = COLLEGE_DATA.departments[deptKey];
  if (!dept) return;

  const container = document.getElementById('dept-dynamic-container');
  if (!container) return;

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px; margin-bottom: 30px;">
      <div>
        <span class="section-tag" style="background: var(--accent-gold-light); color: var(--accent-gold); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 20px;">
          ${dept.short} PROGRAMME
        </span>
        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--royal-navy); margin-top: 6px;">${dept.name}</h3>
        <p style="color: var(--text-light); font-size: 0.95rem;">${dept.tagline}</p>
      </div>
      <div style="display: flex; gap: 15px;">
        <span style="background: #f1f5f9; color: var(--royal-navy); font-weight: 700; font-size: 0.85rem; padding: 6px 14px; border-radius: 20px;">
          <i class="fa-solid fa-clock"></i> ${dept.duration}
        </span>
        <span style="background: #fef3c7; color: #b45309; font-weight: 700; font-size: 0.85rem; padding: 6px 14px; border-radius: 20px;">
          <i class="fa-solid fa-users"></i> ${dept.intake}
        </span>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 35px;">
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
            <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 12px 16px; display: flex; align-items: center; gap: 14px;">
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
   3. Admissions Tabs (admissions.html)
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
   4. Interactive Document Checklist Counter (admissions.html)
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
   5. Accordion (FAQs)
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
   6. Admission Enquiry Modal
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
      const name = document.getElementById('eq-name').value;
      const course = document.getElementById('eq-course').value;
      alert(`🎉 Thank you, ${name}! Your admission enquiry for ${course} has been registered. The SSBT Admission Office will contact you shortly.`);
      form.reset();
      modal.classList.remove('active');
    });
  }
}

/* --------------------------------------------------------------------------
   7. Grievance Modal
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
      alert(`🔒 Official Grievance Token Generated: #SSBT-GRV-${Math.floor(1000 + Math.random() * 9000)}. Your grievance has been forwarded to the Principal & Grievance Redressal Committee.`);
      form.reset();
      modal.classList.remove('active');
    });
  }
}
