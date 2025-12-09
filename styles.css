/* Premium Dark Mode - Final Submission */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Design Tokens - Light Mode (Default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --bg-elevated: #ffffff;
  --bg-hover: #e2e8f0;
  --accent-primary: #3b82f6;
  --accent-hover: #2563eb;
  --accent-secondary: #0ea5e9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --border: rgba(0, 0, 0, 0.1);
  --border-hover: rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
  --transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --hero-overlay-start: rgba(255, 255, 255, 0.7);
  --hero-overlay-end: rgba(255, 255, 255, 0.85);
}

/* Dark Mode (System Preference) */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f0f0f;
    --bg-secondary: #121212;
    --bg-tertiary: #1a1a1a;
    --bg-elevated: #1e1e1e;
    --bg-hover: #252525;
    --accent-primary: #38bdf8;
    --accent-hover: #0ea5e9;
    --accent-secondary: #14b8a6;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.1);
    --border-hover: rgba(255, 255, 255, 0.2);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.7);
    --hero-overlay-start: rgba(15, 15, 15, 0.75);
    --hero-overlay-end: rgba(15, 15, 15, 0.9);
  }
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.25rem;
}

h3 {
  font-size: 1.875rem;
}

p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

a {
  color: var(--accent-primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--accent-hover);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  transition: var(--transition);
}

@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(15, 15, 15, 0.9);
  }
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

@media (prefers-color-scheme: dark) {
  .navbar.scrolled {
    background: rgba(15, 15, 15, 0.95);
  }
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.025em;
}

.logo:hover {
  color: var(--accent-primary);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width var(--transition);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Hero */
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  padding: 100px 0 5rem;
  background: linear-gradient(var(--hero-overlay-start), var(--hero-overlay-end)), url('images/background.png') center/cover fixed;
  border-bottom: 1px solid var(--border);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.08), transparent 60%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Layout */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 4rem 0;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 700px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary {
  background: var(--accent-primary);
  color: var(--bg-primary);
  box-shadow: 0 4px 14px rgba(56, 189, 248, 0.3);
}

.btn-primary:hover {
  background: var(--accent-hover);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4);
  transform: translateY(-2px);
  color: var(--bg-primary);
}

.btn-primary:focus {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.btn-secondary {
  background: var(--bg-elevated);
  color: var(--text-primary);
  border-color: var(--border);
}

.btn-secondary:hover {
  background: var(--bg-hover);
  border-color: var(--border-hover);
  transform: translateY(-1px);
}

.btn-secondary:focus {
  outline: 2px solid rgba(56, 189, 248, 0.5);
  outline-offset: 2px;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all var(--transition);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-muted);
  border: 2px solid var(--border);
  overflow: hidden;
  transition: var(--transition);
}

.card:hover .card-image {
  border-color: var(--accent-primary);
  transform: scale(1.05);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.card-subtitle {
  color: var(--accent-primary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  transition: var(--transition);
}

.tag:hover {
  background: var(--bg-hover);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

/* Search & Filter */
.search-filter {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-family: inherit;
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  background: var(--bg-hover);
}

.search-input::placeholder {
  color: var(--text-muted);
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 9999px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
}

.filter-btn:hover {
  background: var(--bg-hover);
  border-color: var(--border-hover);
  color: var(--text-primary);
}

.filter-btn:focus {
  outline: 2px solid rgba(56, 189, 248, 0.5);
  outline-offset: 2px;
}

.filter-btn.active {
  background: var(--accent-primary);
  color: var(--bg-primary);
  border-color: var(--accent-primary);
  box-shadow: 0 2px 8px rgba(56, 189, 248, 0.3);
}

/* Forms */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.875rem;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-family: inherit;
  transition: var(--transition);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  background: var(--bg-tertiary);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: 1rem;
}

.form-message {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  display: none;
}

.form-message.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
}

.form-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.stat-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Footer */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 4rem 0 2rem;
  margin-top: 5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.footer-section p,
.footer-section a {
  color: var(--text-muted);
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0.5rem;
  transition: var(--transition);
}

.footer-section a:hover {
  color: var(--text-primary);
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-link:hover {
  background: var(--bg-hover);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.875rem;
}

/* Utilities */
*:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Responsive - Mobile */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.5rem;
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    padding: 0.75rem 0;
  }

  .hero {
    min-height: 500px;
    padding-bottom: 3rem;
    background-attachment: scroll;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .search-filter {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    max-width: none;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    text-align: center;
    width: 100%;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .section {
    padding: 3rem 0;
  }

  .card,
  .contact-form {
    padding: 1.5rem;
  }

  .btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
}
