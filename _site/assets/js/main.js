// Team logo mapping
const teamLogoMap = {
  'harlequins': '/assets/images/club logos/harlequins.webp',
  'box hill': '/assets/images/club logos/boxhill.webp',
  'endeavour hills': '/assets/images/club logos/endeavourhills.webp',
  'power house': '/assets/images/club logos/powerhouse.webp',
  'moorabbin': '/assets/images/club logos/rams.webp',
  'kiwi hawthorn': '/assets/images/club logos/kiwihawthorn.webp',
  'melbourne unicorns': '/assets/images/club logos/unicorns.webp',
  'melbourne university': '/assets/images/club logos/melbuni.webp',
  'western districts': '/assets/images/club logos/westerndistrict.webp',
  'southern districts': '/assets/images/club logos/southerndistricts.webp',
  'shepparton': '/assets/images/club logos/shepparton.webp',
  'brimbank': '/assets/images/club logos/brimbank.webp',
  'footscray': '/assets/images/club logos/doggies.webp',
  // Alternate name variations
  'rams': '/assets/images/club logos/rams.webp',
  'powerhouse': '/assets/images/club logos/powerhouse.webp',
  'westerndistricts': '/assets/images/club logos/westerndistrict.webp'
};

// Function to get team logo
function getTeamLogo(teamName) {
  // Convert to lowercase and remove grade suffixes
  let cleanName = teamName.toLowerCase()
    .replace(/\s*(1st xv|2nd xv|3rd grade|4th grade|championship|colts|womens|women's team|women)$/i, '')
    .replace(/\s*\/.*$/, '') // Remove anything after a slash
    .trim();
  
  // Handle special cases first
  const specialCases = {
    'melbourne university / melbourne unicorns': 'melbourne university',
    'bye': '/assets/images/logos/opponent-placeholder.svg',
    'tbd': '/assets/images/logos/opponent-placeholder.svg'
  };
  
  if (specialCases[cleanName]) {
    if (specialCases[cleanName].startsWith('/assets/')) {
      return specialCases[cleanName];
    }
    cleanName = specialCases[cleanName];
  }
  
  // Check direct mapping
  if (teamLogoMap[cleanName]) {
    return teamLogoMap[cleanName];
  }
  
  // Try common variations for teams that might have slightly different names
  const variations = [
    cleanName.replace(/\s+/g, ''), // Remove all spaces
    cleanName.replace(/\s+/g, ' '), // Normalize spaces
    cleanName.replace(/\s*rugby\s*club\s*/i, '').trim(), // Remove "rugby club"
    cleanName.replace(/\s*fc\s*/i, '').trim() // Remove "FC"
  ];
  
  for (const variation of variations) {
    if (teamLogoMap[variation]) {
      return teamLogoMap[variation];
    }
  }
  
  // Fallback to placeholder
  return '/assets/images/logos/opponent-placeholder.svg';
}

// Make getTeamLogo globally available
window.getTeamLogo = getTeamLogo;

// Mobile Menu Toggle - Improved for all pages
function initMobileMenu() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (!navbarToggle || !navbarMenu) {
    console.log('Mobile menu elements not found');
    return;
  }

  // Create mobile menu overlay if it doesn't exist
  let overlay = document.querySelector('.mobile-menu-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(overlay);
  }
  
  function toggleMenu() {
    const isActive = navbarMenu.classList.contains('active');
    navbarMenu.classList.toggle('active');
    
    if (!isActive) {
      // Opening menu
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
    } else {
      // Closing menu
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
      document.body.style.overflow = '';
    }
    
    // Animate hamburger menu
    const spans = navbarToggle.querySelectorAll('span');
    if (spans.length >= 3) {
      if (navbarMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  }
  
  // Remove existing event listeners to prevent duplicates
  navbarToggle.removeEventListener('click', toggleMenu);
  navbarToggle.addEventListener('click', toggleMenu);
  
  // Close menu when clicking overlay
  overlay.removeEventListener('click', function() {
    if (navbarMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
  overlay.addEventListener('click', function() {
    if (navbarMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // Close menu when clicking a nav link
  const navLinks = navbarMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbarMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navbarMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
}

// Initialize mobile menu on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
});

// Home page fixtures data (simplified version for carousel)
const homeFixturesData = {
  firstGrade: [
    { date: "2025-07-19", opponent: "Kiwi Hawthorn", venue: "Away - Lewin Reserve", time: "3:15 PM", special: "", grade: "Senior Men" },
    { date: "2025-08-02", opponent: "Melbourne Unicorns", venue: "Away - Melbourne Rugby Club 1", time: "3:15 PM", special: "", grade: "Senior Men" },
    { date: "2025-08-09", opponent: "Melbourne University", venue: "Away - HG Smith Oval 1", time: "3:15 PM", special: "", grade: "Senior Men" },
    { date: "2025-08-16", opponent: "Harlequins", venue: "Home - Footscray Rugby Club 1", time: "3:15 PM", special: "", grade: "Senior Men" }
  ],
  secondGrade: [
    { date: "2025-07-19", opponent: "Kiwi Hawthorn", venue: "Away - Lewin Reserve", time: "1:30 PM", special: "", grade: "Second Grade" },
    { date: "2025-08-02", opponent: "Melbourne Unicorns", venue: "Away - Melbourne Rugby Club 1", time: "1:30 PM", special: "", grade: "Second Grade" },
    { date: "2025-08-09", opponent: "Melbourne University", venue: "Away - HG Smith Oval 1", time: "1:30 PM", special: "", grade: "Second Grade" },
    { date: "2025-08-16", opponent: "Harlequins", venue: "Home - Footscray Rugby Club 1", time: "1:30 PM", special: "", grade: "Second Grade" }
  ],
  thirdGrade: [
    { date: "2025-07-19", opponent: "Kiwi Hawthorn", venue: "Away - Lewin Reserve", time: "12:00 PM", special: "", grade: "Third Grade" },
    { date: "2025-08-02", opponent: "Melbourne Unicorns", venue: "Away - Melbourne Rugby Club 2", time: "12:00 PM", special: "", grade: "Third Grade" },
    { date: "2025-08-09", opponent: "Melbourne University", venue: "Away - HG Smith Oval 2", time: "12:00 PM", special: "", grade: "Third Grade" },
    { date: "2025-08-16", opponent: "Harlequins", venue: "Home - Footscray Rugby Club 2", time: "12:00 PM", special: "", grade: "Third Grade" }
  ],
  fourthGrade: [
    { date: "2025-07-19", opponent: "Southern Districts", venue: "Away - Geelong Rugby Club 1", time: "1:15 PM", special: "", grade: "Fourth Grade" },
    { date: "2025-08-02", opponent: "Shepparton", venue: "Away - VE Vibert Reserve 1", time: "1:15 PM", special: "", grade: "Fourth Grade" },
    { date: "2025-08-09", opponent: "Power House", venue: "Home - Footscray Rugby Club 1", time: "1:15 PM", special: "", grade: "Fourth Grade" }
  ],
  colts: [
    { date: "2025-07-19", opponent: "TBD", venue: "TBD", time: "TBD", special: "", grade: "Colts" },
    { date: "2025-08-02", opponent: "TBD", venue: "TBD", time: "TBD", special: "", grade: "Colts" },
    { date: "2025-08-09", opponent: "TBD", venue: "TBD", time: "TBD", special: "", grade: "Colts" }
  ],
  womens: [
    { date: "2025-07-19", opponent: "Melbourne University / Melbourne Unicorns", venue: "Home - Footscray Rugby Club 2", time: "1:30 PM", special: "", grade: "Women's Team" },
    { date: "2025-08-02", opponent: "TBD", venue: "TBD", time: "TBD", special: "", grade: "Women's Team" },
    { date: "2025-08-09", opponent: "Endeavour Hills", venue: "Away - Endeavour Hills Rugby Club 2", time: "1:30 PM", special: "", grade: "Women's Team" },
    { date: "2025-08-16", opponent: "TBD", venue: "TBD", time: "TBD", special: "", grade: "Women's Team" }
  ]
};

// Enhanced date parsing for better mobile compatibility
function parseFixtureDateTime(dateString, timeString) {
  try {
    // Handle TBD time
    if (timeString === 'TBD' || !timeString) {
      return new Date(dateString + 'T12:00:00');
    }
    
    // Convert 12-hour time to 24-hour for better parsing
    let time24 = timeString;
    if (timeString.includes('PM') && !timeString.startsWith('12:')) {
      const [time, period] = timeString.split(' ');
      const [hours, minutes] = time.split(':');
      time24 = (parseInt(hours) + 12) + ':' + minutes;
    } else if (timeString.includes('AM') && timeString.startsWith('12:')) {
      time24 = timeString.replace('12:', '00:').replace(' AM', '');
    } else {
      time24 = timeString.replace(/ (AM|PM)/g, '');
    }
    
    // Create ISO string for better cross-browser compatibility
    const isoString = dateString + 'T' + time24.padStart(5, '0') + ':00';
    return new Date(isoString);
  } catch (e) {
    console.warn('Date parsing error:', e);
    return new Date(dateString + 'T12:00:00');
  }
}

// Countdown Timer
function initCountdown() {
  const countdownElement = document.getElementById('matchCountdown');
  if (!countdownElement) return;
  
  try {
    // Use homeFixturesData for home page, fixturesData for fixtures page
    const dataSource = typeof fixturesData !== 'undefined' ? fixturesData : homeFixturesData;
    
    // Get only first grade fixtures
    const firstGradeFixtures = dataSource.firstGrade || [];
    const now = new Date().getTime();
    let nextFixture = null;
    
    // Find the next upcoming first grade fixture
    for (const fixture of firstGradeFixtures) {
      const fixtureDate = parseFixtureDateTime(fixture.date, fixture.time);
      
      if (fixtureDate.getTime() > now) {
        nextFixture = fixture;
        break;
      }
    }
    
    if (nextFixture) {
      // Update fixture information
      document.getElementById('nextOpponent').textContent = nextFixture.opponent.replace(/\s*(1st XV|2nd XV|3rd Grade|Womens)$/i, '');
      const cleanVenue = nextFixture.venue.replace(/^(Home - |Away - )/, '');
      document.getElementById('nextVenue').textContent = cleanVenue;
      
      // Update opponent logo
      const opponentLogo = document.getElementById('opponentLogo');
      if (opponentLogo) {
        opponentLogo.src = getTeamLogo(nextFixture.opponent);
        opponentLogo.alt = nextFixture.opponent;
      }
      
      // Change buy tickets button to link to fixtures page
      const buyTicketsBtn = document.getElementById('buyTickets');
      buyTicketsBtn.href = '/fixtures';
      buyTicketsBtn.textContent = 'View Fixtures';
      
      // Start countdown using improved date parsing
      const fixtureDate = parseFixtureDateTime(nextFixture.date, nextFixture.time);
      const fixtureTime = fixtureDate.getTime();
      
              const countdownInterval = setInterval(function() {
          const now = new Date().getTime();
          const distance = fixtureTime - now;
        
        if (distance < 0) {
          clearInterval(countdownInterval);
          document.getElementById('countdownTimer').innerHTML = '<p>Match in Progress</p>';
          return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Get countdown elements
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const daysContainer = daysElement.parentElement;
        
        // Show/hide days based on time remaining
        if (days === 0) {
          // Hide days when less than 24 hours
          daysContainer.style.display = 'none';
        } else {
          // Show days when more than 24 hours
          daysContainer.style.display = 'block';
          daysElement.textContent = String(days).padStart(2, '0');
        }
        
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
      }, 1000);
    } else {
      // No upcoming fixtures
      document.getElementById('matchCountdown').innerHTML = '<p>Season has ended. Check back for next season\'s fixtures!</p>';
    }
  } catch (error) {
    console.error('Error loading fixtures:', error);
    console.error('Error details:', error.message);
    // Fallback to static countdown for demo
    startDemoCountdown();
  }
}

// Demo countdown (fallback)
function startDemoCountdown() {
  // Set a demo match 7 days from now
  const demoDate = new Date();
  demoDate.setDate(demoDate.getDate() + 7);
  demoDate.setHours(15, 0, 0, 0);
  
  document.getElementById('nextOpponent').textContent = 'vs Melbourne Rugby Club';
  document.getElementById('nextVenue').textContent = 'Home - Footscray Park';
  
  const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = demoDate.getTime() - now;
    
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdownTimer').innerHTML = '<p>Match in Progress</p>';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  }, 1000);
}

// Load fixtures carousel for homepage ONLY
function loadFixtures() {
  console.log('loadFixtures called on:', window.location.pathname);
  
  // Only run on home page - check if we're on fixtures page
  if (window.location.pathname.includes('/fixtures')) {
    console.log('Skipping - on fixtures page');
    return;
  }
  
  // Look specifically for the home page fixtures grid
  const fixturesGrid = document.getElementById('fixturesGrid');
  console.log('fixturesGrid found:', !!fixturesGrid);
  if (!fixturesGrid) {
    console.log('No fixturesGrid element - not on home page');
    return;
  }
  
  console.log('Loading home page fixtures carousel...');
  
  try {
    // Use homeFixturesData for home page, fixturesData for fixtures page
    const dataSource = typeof fixturesData !== 'undefined' ? fixturesData : homeFixturesData;
    console.log('Data source:', dataSource ? 'found' : 'not found');
    console.log('Using data source:', typeof fixturesData !== 'undefined' ? 'fixturesData' : 'homeFixturesData');
    
    const now = new Date();
    const gradeNames = ['firstGrade', 'secondGrade', 'thirdGrade', 'fourthGrade', 'womens'];
    const carouselFixtures = [];
    
    // Get next upcoming fixture from each grade
    gradeNames.forEach(gradeName => {
      const gradeFixtures = dataSource[gradeName];
      if (gradeFixtures) {
        // Handle both array format (home page) and object format (fixtures page)
        const fixtures = Array.isArray(gradeFixtures) ? gradeFixtures : gradeFixtures.upcoming || [];
        const nextFixture = fixtures.find(fixture => new Date(fixture.date) >= now);
        if (nextFixture) {
          carouselFixtures.push(nextFixture);
        }
      }
    });
    
    if (carouselFixtures.length === 0) {
      fixturesGrid.innerHTML = '<p class="no-fixtures">No upcoming fixtures scheduled.</p>';
      return;
    }
    
    // Create carousel container
    const carouselHTML = `
      <div class="fixtures-carousel-container">
        <div class="fixtures-carousel" id="fixturesCarousel">
          ${carouselFixtures.map((fixture, index) => createCarouselCard(fixture, index)).join('')}
        </div>
        <div class="carousel-dots" id="carouselDots">
          ${carouselFixtures.map((_, index) => `<button class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>`).join('')}
        </div>
      </div>
    `;
    
    fixturesGrid.innerHTML = carouselHTML;
    initCarousel(carouselFixtures.length);
    
  } catch (error) {
    console.error('Error loading fixtures:', error);
    fixturesGrid.innerHTML = '<p>Unable to load fixtures at this time.</p>';
  }
}

function createCarouselCard(fixture, index) {
  const date = new Date(fixture.date);
  const formattedDate = date.toLocaleDateString('en-AU', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short' 
  });
  
  const isHome = fixture.venue.includes('Home');
  const cleanVenue = fixture.venue.replace(/^(Home - |Away - )/, '');
  const venueType = isHome ? 'Home' : 'Away';
  
  // Determine home and away teams
  const homeTeam = isHome ? 'Footscray' : fixture.opponent;
  const awayTeam = isHome ? fixture.opponent : 'Footscray';
  const homeTeamLogo = isHome ? getTeamLogo('footscray') : getTeamLogo(fixture.opponent);
  const awayTeamLogo = isHome ? getTeamLogo(fixture.opponent) : getTeamLogo('footscray');
  
  // Use the same structure as fixtures page cards
  return `
    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
      <div class="fixture-card upcoming-fixture">
        <div class="fixture-date-top">${formattedDate}</div>
        <div class="fixture-teams-upcoming-wrapper">
          <div class="fixture-teams-upcoming">
            <div class="team-section">
              <div class="team-logo">
                <img src="${homeTeamLogo}" alt="${homeTeam}" onerror="this.style.display='none'">
              </div>
              <div class="team-name">${homeTeam}</div>
            </div>
            <div class="vs-section">
              <div class="vs-text">VS</div>
            </div>
            <div class="team-section">
              <div class="team-logo">
                <img src="${awayTeamLogo}" alt="${awayTeam}" onerror="this.style.display='none'">
              </div>
              <div class="team-name">${awayTeam}</div>
            </div>
          </div>
        </div>
        <div class="fixture-details-bottom">
          <div class="fixture-time">${fixture.time}</div>
          <div class="fixture-venue">${cleanVenue} <span class="venue-type">(${venueType})</span></div>
          <div class="fixture-grade-badge">${fixture.grade}</div>
          ${fixture.special ? `<div class="fixture-special">${fixture.special}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

let currentSlide = 0;
let slideCount = 0;
let carouselInterval;

function initCarousel(totalSlides) {
  slideCount = totalSlides;
  startAutoSlide();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
  restartAutoSlide();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.getElementById('fixturesCarousel');
  const dots = document.querySelectorAll('.carousel-dot');
  const slides = document.querySelectorAll('.carousel-slide');
  
  if (carousel) {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
  
  // Update slide visibility
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

function startAutoSlide() {
  if (slideCount > 1) {
    carouselInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
  }
}

function restartAutoSlide() {
  clearInterval(carouselInterval);
  startAutoSlide();
}

// Sponsors carousel is now handled by pure CSS animation

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add a small delay for mobile devices to ensure everything is ready
  setTimeout(function() {
    initCountdown();
    loadFixtures();
    initHeroCarousel();
  }, 100);
});

// Hero Background Carousel
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  
  let currentHeroSlide = 0;
  
  function showNextSlide() {
    // Remove active class from current slide
    slides[currentHeroSlide].classList.remove('active');
    
    // Move to next slide
    currentHeroSlide = (currentHeroSlide + 1) % slides.length;
    
    // Add active class to new slide
    slides[currentHeroSlide].classList.add('active');
  }
  
  // Change slide every 5 seconds
  setInterval(showNextSlide, 5000);
}