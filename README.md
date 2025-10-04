# Footscray Rugby Club Website

Official website for Footscray Rugby Club - Melbourne's premier community rugby club.

## About

This website serves as the digital home for Footscray Rugby Club, providing information about the club, news, fixtures, sponsors, and membership.

## Technology Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting
- **Liquid** - Templating engine
- **HTML/CSS** - Frontend

## Local Development

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler gem

### Setup

1. Clone the repository:
```bash
git clone https://github.com/davistui/footscrayrugby.git
cd footscrayrugby
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser

## Project Structure

- `_includes/` - Reusable HTML components (header, footer, etc.)
- `_layouts/` - Page templates
- `_sponsors/` - Sponsor collection
- `_news/` - News articles collection
- `_players/` - Player profiles collection
- `_fixtures/` - Fixtures collection
- `assets/` - Static files (CSS, images, PDFs)
- `pages/` - Main site pages

## Collections

The site uses Jekyll collections for:
- News articles
- Player profiles
- Fixtures
- Sponsors
- Products (shop items)

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

## Contributing

For club members contributing to the website:
1. Create a new branch for your changes
2. Make your modifications
3. Test locally
4. Submit a pull request

## Contact

For website issues or suggestions, contact the club at info@footscrayrugby.com.au

## License

© 2025 Footscray Rugby Club. All rights reserved.
