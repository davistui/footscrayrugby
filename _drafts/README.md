# Footscray Rugby Club Jekyll Website

A professional Jekyll-based website for Footscray Rugby Club, inspired by the Chiefs Rugby website design.

## Features

- **Dynamic Match Countdown Timer** - Live countdown to next match
- **Jekyll Collections** - Players, Fixtures, News, Products, Sponsors
- **Responsive Design** - Mobile-first approach
- **E-commerce Ready** - Product catalog structure
- **SEO Optimized** - Jekyll SEO tags and sitemap
- **Modern UI** - Clean, professional sports website design

## Prerequisites

- Ruby (version 2.5 or higher)
- Bundler gem (`gem install bundler`)

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
bundle install
```

## Development

Run the Jekyll development server:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

### Live Reload

For development with live reload:

```bash
bundle exec jekyll serve --livereload
```

## Building for Production

Build the static site:

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Structure

```
├── _layouts/          # Page templates
├── _includes/         # Reusable components
├── _data/            # Data files (fixtures.yml)
├── _players/         # Player profiles
├── _fixtures/        # Match fixtures
├── _news/           # News articles
├── _products/       # Shop products
├── _sponsors/       # Sponsor information
├── assets/          # CSS, JS, images
├── pages/           # Static pages
└── _config.yml      # Jekyll configuration
```

## Adding Content

### Adding a Player

Create a new file in `_players/` directory:

```yaml
---
name: "Player Name"
position: "Position"
number: 10
photo: "/assets/images/players/player-name.jpg"
bio: "Player biography"
debut: "2023"
games: 25
tries: 8
height: "180cm"
weight: "85kg"
---
```

### Adding News

Create a new file in `_news/` directory:

```yaml
---
title: "News Title"
date: 2025-06-15
author: "Author Name"
categories: [news, events]
tags: [tag1, tag2]
image: "/assets/images/news/article.jpg"
excerpt: "Brief description"
---

Article content here...
```

### Adding Products

Create a new file in `_products/` directory:

```yaml
---
title: "Product Name"
price: 99.99
category: "jerseys"
image: "/assets/images/products/product.jpg"
description: "Product description"
sizes: ["S", "M", "L", "XL"]
in_stock: true
featured: true
sku: "PROD-001"
---
```

## Customization

### Colors

Edit the CSS variables in `assets/css/main.css`:

```css
:root {
  --primary-color: #003DA5; /* Blue */
  --secondary-color: #ED1C24; /* Red */
}
```

### Navigation

Edit `_includes/header.html` to modify the navigation menu.

### Homepage Sections

Edit `_layouts/home.html` to customize homepage sections.

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `jekyll build`
3. Publish directory: `_site`

## E-commerce Integration

For full e-commerce functionality, integrate with:
- **Snipcart** - Add to `_layouts/default.html`
- **Stripe** - Payment processing
- **Formspree** - Contact forms

## License

This project is licensed under the MIT License.

## Support

For issues or questions, contact: info@footscrayrugby.com.au