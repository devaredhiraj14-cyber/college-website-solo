# 🎓 SSBT College Website: Multi-Page Architecture & Comparison Guide

This updated guide explains the **Multi-Page Website Structure** in `demo-college-website/`, created in response to your feedback.

Your original raw files in the root folder (`App.jsx`, `Header.jsx`, `AdmissionPage.jsx`, `final-department.html`, `final-placement.html`) remain **completely untouched**.

---

## 🏛️ What Was Changed Based on Your Feedback

### 1. Separate Pages (Multi-Page Architecture)
Instead of a single-page hash-scroll layout, the website is now cleanly split into **separate, dedicated HTML pages**:
1. [`index.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/index.html) — **Grand Homepage** (Grandeur, Fests, Founder Tribute, Principal's Desk, Infrastructure, Recruiters).
2. [`about.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/about.html) — **About Us & Heritage** (Detailed SSBT Trust History since 1983, Smt. Pratibha Patil Founder section, Principal's full vision, Governance).
3. [`departments.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/departments.html) — **Academic Departments** (BCA, BBA, B.Sc. CS, B.Sc. DS with HOD messages, lab specifications, faculty, syllabus).
4. [`events.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/events.html) — **Campus Life & Fests** (Detailed breakdown of *MILESTONE*, *VASANTOTSAV*, *KHEL-MAHOTSAV*, and photo gallery).
5. [`admissions.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/admissions.html) — **Admissions 2026-27** (Eligibility, Fee table, interactive document checklist with live counter, scholarships, FAQs).
6. [`placements.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/placements.html) — **Placements** (TPO message, packages: ₹7.5 LPA, top recruiter logos, testimonials).
7. [`compliance.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/compliance.html) — **Statutory & IQAC** (Anti-Ragging with 24x7 helpline `1800-180-5522`, ICC / Women's Cell, Online Grievance Redressal modal).
8. [`contact.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/contact.html) — **Contact Us** (Department directory, how to reach campus, interactive Google Map).

---

### 2. No Inquiry Form on Homepage Entry
* **Before:** Websites that immediately throw an admission enquiry card on the first screen look like commercial coaching classes rather than a prestigious institution.
* **Now:** The homepage hero is grand, welcoming, and prestigious. It highlights the **25-acre lush green campus**, academic excellence, and invites visitors to explore **Fests & Campus Life**, **Institutional Heritage**, or **Academics**.

---

### 3. Special Presidential Tribute: Smt. Pratibha Devisingh Patil
* Smt. Pratibha Tai Patil is the **Founder & Chief Patron** of **Shram Sadhana Bombay Trust (SSBT)**, established in 1983.
* As the **12th President of India** and the **First Woman President of the Republic of India**, her name is a point of immense pride for the entire college.
* The homepage and `about.html` feature a **Presidential Tribute Card** with an emblem badge, formal portrait, her vision quote, and key historical milestones.

---

### 4. Principal's Profile & Leadership Desk
* **Dr. G. K. Patnaik** (Principal, Ph.D. in Computer Science & Engineering) is highlighted with:
  * Official photograph and academic leadership profile.
  * 28+ years of educational experience and 65+ research papers.
  * Direct welcome message from the Principal's Desk.
  * Contact button connecting directly with the Principal's office.

---

### 5. "Big and Fancy" College Fests & Functions
SSBT Bambhori hosts some of the largest student festivals in Maharashtra. These are showcased with high-impact cards and dedicated pages:
* **"MILESTONE" (National Level Technical Symposium):**
  * 3,000+ national participants.
  * 24-Hour Code-a-Thon, Robo-War & Obstacle Race, LAN Gaming, and Paper Presentations.
  * ₹1,50,000+ cash prizes.
* **"VASANTOTSAV" (Mega 3-Day Annual Cultural Gathering):**
  * Musical concert nights with Bollywood celebrities in our open-air amphitheatre.
  * Classical & Western Dance competitions, drama, traditional Maharashtrian pageantry (Lavani/Powada), and high-energy DJ nights.
* **"KHEL-MAHOTSAV" (Annual Sports Gala):**
  * Floodlight Cricket Cup, Football, Volleyball, Athletics (100m, 400m, relays), and Indoor Gymkhana sports.
* **Infrastructure Grandeur:**
  * 1,000-seater air-conditioned central auditorium.
  * 35,000-volume Central Knowledge Library.
  * High-performance GPU computing laboratories.

---

## ⚖️ "What to Do" vs "What NOT to Do" Summary

| Area | ❌ What NOT to Do | ✅ What to Do (Now Implemented) |
| :--- | :--- | :--- |
| **Homepage Experience** | Don't put an aggressive enquiry form on the first fold. | Present the college as prestigious, grand, and welcoming with high-resolution campus visuals. |
| **Page Architecture** | Don't cram 7,000 lines into one single file or keep loose unlinked pages. | Use clean separate `.html` pages linked through a unified sticky navbar. |
| **Institutional Pride** | Don't omit the college founder's history. | Prominently feature **Smt. Pratibha Devisingh Patil** (12th President of India & SSBT Founder) and **Principal Dr. G. K. Patnaik**. |
| **Campus Culture** | Don't present the college as just classrooms. | Showcase mega fests (*MILESTONE*, *VASANTOTSAV*, *KHEL-MAHOTSAV*) to prove vibrant campus life to prospective students. |
| **Statutory Mandates** | Don't forget compliance links (Anti-Ragging, ICC, Grievance). | Provide an easily discoverable **Statutory & IQAC** section with working helplines and token-tracked grievance forms. |

---

## 🚀 How to Open and Test
1. In Windows File Explorer, open:
   `C:\Users\devar\OneDrive\Pictures\Desktop\git tutorial\college website\demo-college-website\`
2. **Double-click [`index.html`](file:///c:/Users/devar/OneDrive/Pictures/Desktop/git%20tutorial/college%20website/demo-college-website/index.html)** in Chrome or Edge.
3. Click the navigation links at the top to jump between **About Us**, **Departments**, **Campus Life & Fests**, **Admissions**, **Placements**, **Statutory & IQAC**, and **Contact Us**.
