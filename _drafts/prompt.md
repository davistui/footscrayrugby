# Prompt Template


# Tasks
## Navigation bar
* the about tab, leave club history and committee, remove the rest
* Remove junior/youths

## Home pages
* Change header to Footscray Rugby Union Club
* Remove sub heading
* Remove Nga Kemu and change to Upcomming Features
* Remove to all the ladder sections
* Change from Kawe Purongo - Latest News to News
* Make the news card have a bit more shadow
* Change Hokohoko - Merchandise to Merchandise
* Change Nga Tuhono - Our Partners to - Partners. Make this section a carousel with small cards that rotate and find some placeholder images for now
* Change the Stay Connected and  Join our newsletter for exclusive updates, match results, and special offers into black inc

## Senior Men page
* Objective: Create a player showcase page with interactive cards displaying team roster information without individual player pages.
Requirements:
* Grid layout of player cards (3-4 cards per row on desktop, responsive)
* Card content: Player photo, name, position, jersey number
* Interactive hover effects revealing additional info (age, height, weight, years at club)
* Modal/popup option for expanded player details when clicked
* Filter functionality by position (forwards, backs, all)
* Mobile-optimized card layout (single column on mobile)

## Senior Womens page
* Similar to Senior Mens Page

## Shop
Objective: Create a professional e-commerce shop page selling Footscray Rugby Club merchandise using Snipcart + Stripe integration.
Product Categories:

Jerseys (Home, Away, Retro, Training)
Polos & Casual Wear (Club polos, t-shirts, hoodies)
Training Gear (Shorts, singlets, track suits)
Accessories (Caps, beanies, scarves, drink bottles)
Kids/Youth (Junior jerseys, school items)

Page Features:

Product grid layout with category filtering
Product cards showing image, name, price, "Add to Cart" button
Product detail modals or expandable sections (sizes, colors, description)
Size/color selection using Snipcart custom fields
Featured products section highlighting best sellers
Shopping cart sidebar or popup
Mobile-responsive design

Technical Implementation:

Snipcart integration with data attributes on product buttons
Jekyll collection _products with YAML front matter
Stripe payment processing via Snipcart
Image optimization and lazy loading
Inventory management through Snipcart dashboard

Example product data: title: "Home Jersey 2025"
price: 120.00
category: "jerseys"
image: "/assets/images/products/home-jersey.jpg"
sizes: ["S", "M", "L", "XL", "XXL"]
colors: ["Navy", "Gold"]
featured: true
in_stock: true

## Sponsors
Objective: Create compelling sponsorship pages to attract and showcase business partners, driving revenue growth for Footscray Rugby Club.
Page Structure:

Our Partners (showcase current sponsors)
Become a Sponsor (attract new partnerships)
Sponsorship Packages (detailed offerings)

Our Partners Page:

Hero section with partnership value proposition
Sponsor logo grid organized by partnership tier (Premium, Gold, Silver, Community)
Featured partner spotlights with testimonials and case studies
Partnership success metrics (digital reach, community engagement)
Thank you message highlighting community impact

Become a Sponsor Page:

Benefits overview with compelling statistics (560,000+ digital views, 200+ members)
Partnership opportunities breakdown:

Jersey sponsorship
Ground signage
Digital/social media packages
Event sponsorship
Community programs


ROI calculator or value proposition graphics
Contact form for partnership inquiries
Downloadable sponsorship prospectus (PDF)

Sponsorship Packages Page:

Tiered package comparison table (Premium/Gold/Silver/Bronze)
Package inclusions (logo placement, social media mentions, event tickets)
Pricing structure (annual investment levels)
Add-on opportunities (additional events, hospitality, merchandise)
Custom package builder or inquiry form

Technical Features:

Responsive logo grids with hover effects
Interactive package comparison tool
Lead capture forms with CRM integration
Social proof elements (testimonials, partner count)
Call-to-action buttons throughout ("Partner With Us", "Download Prospectus")

Content Strategy:

Emphasize community connection and local business support
Highlight club's growth trajectory and digital reach
Include partnership success stories and testimonials
Showcase family-friendly, inclusive club values

Key Messaging:

"Join the Footscray Family"
"Invest in Community Rugby Excellence"
"Your Brand, Our Passion, Shared Success"

##Contact
Brief: Contact Page with Multiple Contact Methods
Objective: Create a comprehensive contact page that makes it easy for visitors to reach the club through multiple channels and find the club location.

Page Layout:

Hero section with welcoming message (existing "Get in Touch" text)
Multi-column contact information layout
Interactive contact form
Embedded Google Maps with training ground location
Quick contact cards for different inquiries
Contact Information Sections:

1. General Contact Details:

Primary contact info (existing email, phone, address)
Social media links (Facebook, Instagram, Twitter)
Office hours or response time expectations
2. Training Information:

Training times (existing schedule)
"New Players Welcome" callout
Training contact person for inquiries
What to bring/expect for first training
3. Committee Contacts:

Contact cards for each committee member (existing contacts)
Specific inquiry routing (membership, sponsorship, general)
Profile photos if available
Interactive Elements:

Contact Form with routing:

Inquiry type dropdown (New Member, Sponsorship, General, Complaint)
Form fields: Name, Email, Phone, Subject, Message
Auto-routing to appropriate committee member
Form validation and confirmation message
Google Maps Integration:

Embedded map using provided link (https://maps.app.goo.gl/s3kAieD6S9ueJN3F8)
Directions button linking to Google Maps
Public transport information if relevant
Parking details for training and match days
Additional Features:

FAQ section addressing common inquiries
Emergency contact information
Accessibility information for facilities
"Find Us" visual directions or landmarks
Technical Implementation:

Responsive grid layout for contact sections
Form handling (Formspree, Netlify Forms, or similar)
Google Maps embed code integration
Mobile-optimized contact cards and form
Schema markup for business information (SEO)
Call-to-Action Elements:

"Join Training This Week" button
"Download Club Info Pack" link
"Follow Us on Social" buttons
"Book a Club Tour" option
Mobile Considerations:

Click-to-call phone numbers
Click-to-email addresses
Maps app integration for directions
Simplified form for mobile users
This creates a comprehensive contact hub that serves multiple user needs while driving engagement and membership growth.