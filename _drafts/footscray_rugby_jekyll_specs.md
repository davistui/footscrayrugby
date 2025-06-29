# Footscray Rugby Club Jekyll Website - Chiefs-Inspired Specifications

## Website Analysis: Chiefs.co.nz Key Features

Based on analysis of the professional Chiefs Rugby website, here are the essential capabilities to replicate for Footscray Rugby Club:

## Core Website Features

### 1. Hero Section with Match Countdown
- **Live countdown timer** to next match (Days:Hours:Minutes:Seconds)
- **"Buy Tickets" CTA button** linking to ticketing system
- **Dynamic match status** (upcoming matches vs. season ended)
- **Background hero image/video** with team branding

### 2. Main Content Sections
- **Fixtures section** ("nga Kēmu" - our fixtures)
- **Latest News** ("Kawe Purongo" - latest news) 
- **Merchandise showcase** ("Hokohoko" - merchandise)
- **Sponsors/Partners** ("Nga Tuhono" - our partners)
- **Team roster** ("Tūtaki ki te tīma" - meet the team)

### 3. E-commerce Integration
- **Merchandise shop** with product catalog
- **Jersey sales** (Home, Away, Retro versions)
- **Training gear** (polos, singlets, training kit)
- **Price display** and shopping cart functionality
- **"Shop Now" call-to-action buttons**

### 4. Advanced Features
- **Newsletter signup** with prize incentives
- **Social media integration**
- **Membership sales system**
- **Hospitality packages**
- **Partnership/Sponsorship inquiry forms**
- **Multi-language support** (Māori terms integrated)

## Technical Implementation for Jekyll

### Frontend Technologies Needed
```yaml
# Jekyll Configuration
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-paginate
  - jekyll-archives

# Custom Collections
collections:
  players:
    output: true
  fixtures:
    output: true
  news:
    output: true
  products:
    output: true
  sponsors:
    output: true
```

### Required JavaScript Functionality
- **Countdown Timer**: Real-time JavaScript countdown to next match
- **Product Carousel**: Rotating merchandise display
- **Image Galleries**: Team photos and action shots
- **Form Validation**: Contact forms, newsletter signup
- **Mobile Menu**: Responsive navigation
- **Smooth Scrolling**: Between page sections

### CSS/SCSS Framework
- **Modern Grid Layout**: CSS Grid and Flexbox
- **Custom Color Scheme**: Footscray club colors
- **Responsive Design**: Mobile-first approach
- **Animation Library**: Smooth transitions and hover effects
- **Typography**: Professional sports website styling

## Page Structure & Navigation

### Main Navigation
```
HOME
├── Hero with countdown
├── Latest news preview
├── Upcoming fixtures
├── Merchandise showcase
└── Newsletter signup

ABOUT
├── Club History
├── Our Values (mana, aiga concepts)
├── Committee/Leadership
├── Club Policies
└── Volunteers

TEAMS
├── Senior Men
├── Senior Women
├── Juniors/Youth
├── Player Profiles
└── Fixtures & Results

NEWS & EVENTS
├── Latest News
├── Match Reports
├── Social Events
├── Club Calendar
└── Archive

SHOP
├── Jerseys (Home/Away/Retro)
├── Training Gear
├── Accessories
├── Gift Cards
└── Shopping Cart

MEMBERSHIP
├── Membership Types
├── Benefits
├── Pricing
├── Online Registration
└── Renewals

SPONSORS
├── Our Partners
├── Sponsorship Packages
├── Partnership Benefits
└── Contact for Partnerships

CONTACT
├── Contact Information
├── Find Us/Directions
├── Committee Contacts
└── Inquiry Forms
```

## Data Structure (Jekyll Collections)

### _data/fixtures.yml
```yaml
- date: "2025-06-15"
  opponent: "Melbourne Rugby Club"
  venue: "Footscray Park"
  time: "3:00 PM"
  competition: "Dewar Shield"
  tickets_url: "#"
  
- date: "2025-06-22" 
  opponent: "Box Hill Rugby Club"
  venue: "Away"
  time: "2:30 PM"
  competition: "Dewar Shield"
  tickets_url: "#"
```

### _players/
```yaml
---
name: "Player Name"
position: "Flanker"
number: 7
photo: "/assets/images/players/player-name.jpg"
bio: "Player biography"
debut: "2023"
games: 45
tries: 12
---
```

### _products/
```yaml
---
title: "Footscray Home Jersey 2025"
price: 120.00
category: "jerseys"
image: "/assets/images/products/home-jersey.jpg"
description: "Official home jersey"
sizes: ["S", "M", "L", "XL", "XXL"]
in_stock: true
featured: true
---
```

## Essential Integrations

### 1. Ticketing System
- **External integration** (similar to Chiefs' Flicket system)
- **Event management** for match tickets
- **Membership processing**
- **Payment gateway** integration

### 2. E-commerce Platform
- **Jekyll + Snipcart** (recommended for static sites)
- **Stripe integration** for payments
- **Inventory management**
- **Order processing system**

### 3. Content Management
- **Forestry CMS** or **Netlify CMS** for non-technical content editing
- **Automated content publishing**
- **Media library management**
- **SEO optimization tools**

### 4. Email Marketing
- **MailChimp integration** for newsletters
- **Automated email campaigns**
- **Member communications**
- **Event notifications**

## Mobile-First Features

### Responsive Design Elements
- **Touch-friendly navigation**
- **Swipeable image carousels**
- **Mobile-optimized forms**
- **Fast loading images** (WebP format)
- **Progressive Web App** capabilities

### Performance Optimization
- **Image compression** and lazy loading
- **Critical CSS** inlining
- **JavaScript minification**
- **CDN integration** for assets
- **Caching strategies**

## SEO & Analytics

### Search Engine Optimization
- **Structured data markup** for events/organization
- **Meta tags optimization**
- **XML sitemaps**
- **Open Graph tags** for social sharing
- **Local SEO** for Melbourne/Footscray area

### Analytics Integration
- **Google Analytics 4**
- **Facebook Pixel**
- **Conversion tracking**
- **User behavior analysis**
- **Performance monitoring**

## Development Roadmap

### Phase 1: Core Structure (Week 1-2)
- [ ] Jekyll site setup with all page templates
- [ ] Basic navigation and responsive design
- [ ] Content collections setup
- [ ] Hero section with placeholder countdown

### Phase 2: Dynamic Features (Week 3-4)
- [ ] JavaScript countdown timer implementation
- [ ] News/blog functionality
- [ ] Player profiles and team pages
- [ ] Contact forms and newsletter signup

### Phase 3: E-commerce Integration (Week 5-6)
- [ ] Snipcart shopping cart integration
- [ ] Product catalog and checkout process
- [ ] Payment processing setup
- [ ] Inventory management system

### Phase 4: Advanced Features (Week 7-8)
- [ ] Member portal and login system
- [ ] Event ticketing integration
- [ ] CMS setup for content editing
- [ ] Performance optimization and testing

### Phase 5: Launch & Optimization (Week 9-10)
- [ ] Content migration and population
- [ ] SEO optimization and testing
- [ ] Analytics setup and monitoring
- [ ] User acceptance testing and refinements

## Budget Considerations

### Free Components
- **Jekyll hosting** on GitHub Pages
- **Basic analytics** with Google Analytics
- **Contact forms** with Formspree free tier

### Paid Components (Monthly)
- **Custom domain**: $10-15/year
- **Snipcart e-commerce**: $10/month (after free transactions)
- **Email marketing**: $10-20/month (MailChimp)
- **CMS hosting**: $0-25/month (depending on choice)
- **Payment processing**: 2.9% + 30¢ per transaction

### Total Estimated Cost
- **Initial setup**: Free (using free tiers)
- **Monthly ongoing**: $20-45/month (depending on sales volume)
- **Annual domain**: $10-15/year

This Jekyll-based approach provides all the professional features of the Chiefs website while maintaining cost-effectiveness suitable for a local rugby club.