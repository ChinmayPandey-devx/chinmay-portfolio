document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  
  // Check local storage for theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    if (htmlEl.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Render Featured Work
  const featuredContainer = document.getElementById('featured-container');
  // Take first two projects for featured work
  const featuredProjects = projects.slice(0, 2);
  
  featuredProjects.forEach(project => {
    const card = document.createElement('a');
    card.href = project.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="project-content">
        <span class="project-category">${project.category}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-skills">
          ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <span class="project-link">Read Case Study</span>
      </div>
    `;
    featuredContainer.appendChild(card);
  });

  // Render Portfolio
  const portfolioList = document.getElementById('portfolio-list');
  const filterTabs = document.getElementById('filter-tabs');
  const searchInput = document.getElementById('search-input');

  function renderPortfolio(data) {
    portfolioList.innerHTML = '';
    if (data.length === 0) {
      portfolioList.innerHTML = '<p style="color: var(--text-tertiary); grid-column: 1/-1;">No projects found matching your criteria.</p>';
      return;
    }
    
    data.forEach(project => {
      const card = document.createElement('a');
      card.href = project.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="project-content">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <div class="project-skills">
            ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
          <span class="project-link">Read Case Study</span>
        </div>
      `;
      portfolioList.appendChild(card);
    });
  }

  renderPortfolio(projects);

  // Filtering & Search
  let currentFilter = 'all';
  let searchQuery = '';

  function applyFilters() {
    let filtered = projects;
    
    if (currentFilter !== 'all') {
      filtered = filtered.filter(p => p.category === currentFilter);
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.summary.toLowerCase().includes(q) ||
        p.skills.some(s => s.toLowerCase().includes(q))
      );
    }
    
    renderPortfolio(filtered);
  }

  filterTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      // Update active class
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      currentFilter = e.target.getAttribute('data-filter');
      applyFilters();
    }
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  // Render Experience Timeline
  const timelineContainer = document.getElementById('timeline-container');
  experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="timeline-role">${exp.role}</h3>
        <div class="timeline-company">${exp.company}</div>
        <div class="timeline-details">
          <p><strong>Impact:</strong> ${exp.impact}</p>
          <p><strong>Responsibilities:</strong> ${exp.responsibilities}</p>
          <p><strong>Outcomes:</strong> ${exp.outcomes}</p>
          <p><strong>Key Learnings:</strong> ${exp.learnings}</p>
        </div>
      </div>
    `;
    timelineContainer.appendChild(item);
  });

  // Render Skills
  const skillsContainer = document.getElementById('skills-container');
  skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });

  // Render Certifications
  const certContainer = document.getElementById('certifications-container');
  certifications.forEach(cert => {
    const div = document.createElement('div');
    div.className = 'cert-card';
    div.textContent = cert;
    certContainer.appendChild(div);
  });

  // Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
});
