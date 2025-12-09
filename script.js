
const mentorsData = [
  {
    id: 1,
    name: "Rachel Okonkwo",
    expertise: "Technology",
    category: "technology",
    title: "Lead Developer at Stripe",
    description: "Started coding at 16, dropped out of college to join a startup. Been building web apps for banks and fintech companies since 2014. I mostly work with React and Node, but honestly just love solving problems. Happy to chat about getting your first dev job or switching careers into tech.",
    tags: ["JavaScript", "React", "Career Switching"],
    initial: "RO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Webb",
    expertise: "Business",
    category: "business",
    title: "Small Business Owner",
    description: "Ran a food truck for 3 years before opening two restaurants in Austin. Failed my first business in 2015, learned a ton. Now I help people avoid the mistakes I made. Real talk about permits, funding, hiring, and keeping your sanity when things get rough.",
    tags: ["Small Business", "Restaurants", "Bootstrapping"],
    initial: "MW",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Priya Bansal",
    expertise: "Healthcare",
    category: "healthcare",
    title: "Registered Nurse, ER",
    description: "Working night shifts at County General for 8 years. Studied while raising two kids, so I get the struggle. The medical field isn't all Grey's Anatomy, but it's rewarding if you're okay with the chaos. Can help with nursing school apps, NCLEX prep, or just figuring out if healthcare is right for you.",
    tags: ["Nursing", "Patient Care", "Work-Life Balance"],
    initial: "PB",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Jordan Yi",
    expertise: "Arts & Design",
    category: "arts",
    title: "Freelance Graphic Designer",
    description: "Art school graduate, been freelancing since 2017. Work with everyone from local bands to tech startups. Portfolio got me through the door, but learning to deal with clients and price my work took years. I can help you build a portfolio that actually gets responses.",
    tags: ["Graphic Design", "Freelancing", "Portfolio Building"],
    initial: "JY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Alicia Ruiz",
    expertise: "Education",
    category: "education",
    title: "High School English Teacher",
    description: "Teaching at Lincoln High for 12 years. Did Teach for America right out of college, stayed because I actually like teenagers (most days). If you're thinking about teaching, I'll tell you the real ups and downs. Also happy to help with college essays - I've read thousands.",
    tags: ["Teaching", "College Prep", "English"],
    initial: "AR",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Devon Patel",
    expertise: "Technology",
    category: "technology",
    title: "Security Engineer",
    description: "Former script kiddie turned professional hacker (the legal kind). Self-taught, no degree. Work in cybersecurity for a healthcare company now. I run bug bounty programs on the side. Can teach you the basics of pentesting and help you understand if security is your thing.",
    tags: ["Security", "Pentesting", "Self-Taught"],
    initial: "DP",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Keisha Washington",
    expertise: "Business",
    category: "business",
    title: "Marketing Manager",
    description: "Worked my way up from social media intern to running campaigns for a mid-size e-commerce brand. Started in 2016 making $15/hour, now managing a team of six. Marketing isn't magic - it's testing, failing, and learning what actually works with real customers.",
    tags: ["Digital Marketing", "E-commerce", "Growth"],
    initial: "KW",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Sam Kowalski",
    expertise: "Healthcare",
    category: "healthcare",
    title: "Physical Therapist",
    description: "Got into PT after injuring myself playing college baseball. Finished my doctorate in 2018, now work with athletes and regular folks recovering from injuries. The schooling is intense but the job is pretty great. Happy to answer questions about PT school or rehab careers in general.",
    tags: ["Physical Therapy", "Sports Medicine", "Rehabilitation"],
    initial: "SK",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 9,
    name: "Nina Volkova",
    expertise: "Arts & Design",
    category: "arts",
    title: "Wedding Photographer",
    description: "Immigrated from Russia at 19, picked up photography to document my new life. Shot my first wedding in 2016 for $500, now booking 30+ weddings a year. Building a photography business is harder than taking good photos. I can help with the business side nobody teaches you.",
    tags: ["Photography", "Wedding", "Business"],
    initial: "NV",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const opportunitiesData = [
  {
    id: 1,
    title: "Code for Good Summer Session",
    type: "Workshop",
    category: "workshop",
    description: "8-week program at Metro Community College, Mon-Thu 6-9pm. Learn HTML, CSS, JavaScript by building a real website for a local nonprofit. Previous coding experience not required, just bring a laptop. Starts June 10th, 25 spots available.",
    duration: "June 10 - Aug 5",
    tags: ["Beginner Friendly", "JavaScript", "Nonprofits"],
    emoji: "💻"
  },
  {
    id: 2,
    title: "Startup Weekend",
    type: "Event",
    category: "event",
    description: "Form a team Friday night, build a product over the weekend, pitch to investors Sunday evening. Held at Innovation Hub downtown. $25 registration includes meals. Winners get $2,000 and 3 months free coworking space. Next one is Sept 15-17.",
    duration: "Sept 15-17",
    tags: ["Startups", "Pitch Competition", "Networking"],
    emoji: "🚀"
  },
  {
    id: 3,
    title: "St. Mary's Hospital Shadowing",
    type: "Internship",
    category: "internship",
    description: "Shadow nurses, techs, and docs in the ER and ICU. Tuesdays and Thursdays, 3-7pm. Need to commit to at least 8 weeks. You'll see everything from broken bones to heart attacks. Must be 18+ and complete a brief orientation. Applications open March 1st.",
    duration: "Flexible, 8+ weeks",
    tags: ["Healthcare", "Patient Care", "ER Experience"],
    emoji: "🏥"
  },
  {
    id: 4,
    title: "Portfolio Sprint Workshop",
    type: "Workshop",
    category: "workshop",
    description: "Four Saturday sessions at The Design Lab. Bring your sketches, photos, or designs - leave with a complete portfolio website. We'll cover layout, case studies, and hosting. Instructor is a UX designer at Adobe. Limited to 15 people. $75 total.",
    duration: "Saturdays, Oct 7-28",
    tags: ["Portfolio", "UX Design", "Web Design"],
    emoji: "🎨"
  },
  {
    id: 5,
    title: "Spring Job Fair",
    type: "Event",
    category: "event",
    description: "60+ employers ranging from retail to tech companies. Bring resumes (we'll have a critique station). Free headshots for LinkedIn. Workshops at 10am and 2pm on interview skills. Business casual recommended but not required. April 12th at Convention Center, 9am-3pm.",
    duration: "April 12, 9am-3pm",
    tags: ["Job Search", "Resume Help", "Interviews"],
    emoji: "🤝"
  },
  {
    id: 6,
    title: "Intro to Data Science",
    type: "Workshop",
    category: "workshop",
    description: "Learn Python and basic ML through real projects - predicting housing prices, analyzing Twitter sentiment. Tuesday/Thursday evenings at State University CS building. Taught by grad students. Need a laptop and basic programming knowledge. Free, but you need to apply.",
    duration: "Jan 14 - Feb 28",
    tags: ["Python", "Data Analysis", "Machine Learning"],
    emoji: "🤖"
  },
  {
    id: 7,
    title: "Social Media Internship - GreenLeaf Co",
    type: "Internship",
    category: "internship",
    description: "Help run Instagram and TikTok for a local sustainable fashion brand. 15-20 hrs/week, mostly remote. Create content, schedule posts, track metrics. Paid ($16/hr). Perfect if you're good at social media but want to learn the business side. Summer position, apply by May 1st.",
    duration: "Jun 1 - Aug 31",
    tags: ["Social Media", "Paid Internship", "Content Creation"],
    emoji: "📈"
  },
  {
    id: 8,
    title: "Youth Leadership Conference",
    type: "Event",
    category: "event",
    description: "Three days at Lake Vista Retreat Center. Workshops on public speaking, team management, conflict resolution. Mix of indoor sessions and outdoor team challenges. Keynote from the mayor and a startup founder. All meals included. Nov 3-5, $150 (scholarships available).",
    duration: "Nov 3-5",
    tags: ["Leadership", "Public Speaking", "Personal Development"],
    emoji: "👥"
  },
  {
    id: 9,
    title: "First Generation Scholarship",
    type: "Program",
    category: "program",
    description: "For students whose parents didn't attend college. $5,000/year renewable up to 4 years. Includes monthly meetups with mentors and past recipients. Priority given to students studying STEM, education, or healthcare. Need 3.0 GPA. Deadline: February 15th annually.",
    duration: "4 years (renewable)",
    tags: ["First-Gen", "Financial Aid", "Mentorship"],
    emoji: "🎓"
  }
];


// Navigation stuff

// smooth scroll when clicking nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // make clicked link active
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// add shadow to navbar when scrolling down
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// hamburger menu for mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// close menu when you click a link
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
    });
  });
}


// mentor card functions


function createMentorCard(mentor) {
  const imageContent = mentor.image
    ? `<img src="${mentor.image}" alt="${mentor.name}">`
    : mentor.initial;

  return `
    <div class="card" data-category="${mentor.category}">
      <div class="card-image">${imageContent}</div>
      <h3 class="card-title">${mentor.name}</h3>
      <p class="card-subtitle">${mentor.title}</p>
      <p class="card-description">${mentor.description}</p>
      <div class="card-tags">
        ${mentor.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderMentors(mentors = mentorsData) {
  const mentorsGrid = document.getElementById('mentorsGrid');
  if (!mentorsGrid) return;
  mentorsGrid.innerHTML = mentors.map(mentor => createMentorCard(mentor)).join('');
}

renderMentors();

// search bar for mentors page
const mentorSearch = document.getElementById('mentorSearch');
mentorSearch.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const activeFilter = document.querySelector('#mentorFilters .filter-btn.active').dataset.filter;

  let filtered = mentorsData;

  // filter by category first
  if (activeFilter !== 'all') {
    filtered = filtered.filter(mentor => mentor.category === activeFilter);
  }

  // then filter by search term
  if (searchTerm) {
    filtered = filtered.filter(mentor =>
      mentor.name.toLowerCase().includes(searchTerm) ||
      mentor.expertise.toLowerCase().includes(searchTerm) ||
      mentor.title.toLowerCase().includes(searchTerm) ||
      mentor.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  renderMentors(filtered);
});

// category filter buttons
const mentorFilters = document.querySelectorAll('#mentorFilters .filter-btn');
mentorFilters.forEach(button => {
  button.addEventListener('click', () => {
    // highlight the active button
    mentorFilters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    const searchTerm = mentorSearch.value.toLowerCase();

    let filtered = mentorsData;

    // filter mentors by category
    if (filter !== 'all') {
      filtered = filtered.filter(mentor => mentor.category === filter);
    }

    // also apply search if there is one
    if (searchTerm) {
      filtered = filtered.filter(mentor =>
        mentor.name.toLowerCase().includes(searchTerm) ||
        mentor.expertise.toLowerCase().includes(searchTerm) ||
        mentor.title.toLowerCase().includes(searchTerm)
      );
    }

    renderMentors(filtered);
  });
});


// opportunities page stuff


function createOpportunityCard(opportunity) {
  return `
    <div class="card" data-category="${opportunity.category}">
      <div class="card-image">${opportunity.emoji}</div>
      <h3 class="card-title">${opportunity.title}</h3>
      <p class="card-subtitle">${opportunity.type} • ${opportunity.duration}</p>
      <p class="card-description">${opportunity.description}</p>
      <div class="card-tags">
        ${opportunity.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderOpportunities(opportunities = opportunitiesData) {
  const opportunitiesGrid = document.getElementById('opportunitiesGrid');
  if (!opportunitiesGrid) return;
  opportunitiesGrid.innerHTML = opportunities.map(opp => createOpportunityCard(opp)).join('');
}

renderOpportunities();

// setup filters for opportunities page
function initOpportunityFilters() {
  const opportunityFiltersContainer = document.getElementById('opportunityFilters');
  if (opportunityFiltersContainer) {
    const opportunityFilters = opportunityFiltersContainer.querySelectorAll('.filter-btn');
    opportunityFilters.forEach(button => {
      button.addEventListener('click', () => {
        // update which button looks active
        opportunityFilters.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        if (filter === 'all') {
          renderOpportunities(opportunitiesData);
        } else {
          const filtered = opportunitiesData.filter(opp => opp.category === filter);
          renderOpportunities(filtered);
        }
      });
    });
  }
}


// contact form validation
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // grab all the form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
      };

      // check if required fields are filled
      if (!formData.name || !formData.email || !formData.interest || !formData.message) {
        showFormMessage('Please fill in all required fields.', 'error', formMessage);
        return;
      }

      // make sure email looks valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error', formMessage);
        return;
      }

      // show success message
      showFormMessage('Thank you! Your application has been submitted successfully. We\'ll be in touch soon!', 'success', formMessage);

      contactForm.reset();

      // log what was submitted
      console.log('Form submitted:', formData);
    });
  }
}

function showFormMessage(message, type, formMessage) {
  if (formMessage) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // make sure the message shows up
    formMessage.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;');

    // hide message after 5 sec
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }
}


// smooth scrolling for anchor links


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});





console.log('🎉 MentorUp loaded successfully!');
console.log(`📊 ${mentorsData.length} mentors and ${opportunitiesData.length} opportunities available.`);
