# Business Elite Theme

A professional, corporate business theme for RustPress. Perfect for consulting firms, agencies, enterprises, and professional service providers.

## Features

- **Professional Design**: Clean, corporate aesthetic with modern UI patterns
- **15 Page Templates**: Complete set of business-focused pages
- **Light/Dark Mode**: Built-in theme toggle with smooth transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Scroll Animations**: Subtle entrance animations on scroll
- **Interactive Components**: FAQ accordion, counter animations, mega menu
- **Contact Form**: Ready-to-use form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## Installation

1. Copy the `business-elite` folder to your RustPress `themes` directory
2. Set `theme = "business-elite"` in your site configuration
3. Customize content in your markdown files

## Page Templates

| Template | File | Description |
|----------|------|-------------|
| Homepage | `home.html` | Hero, clients, services, stats, testimonials |
| About | `about.html` | Company story, mission, values, history |
| Team | `team.html` | Leadership and team member profiles |
| Services | `services.html` | Service offerings with process overview |
| Service Detail | `service-detail.html` | Individual service page |
| Case Studies | `case-studies.html` | Portfolio of client work |
| Case Study | `case-study.html` | Individual case study |
| Pricing | `pricing.html` | Pricing tiers with comparison |
| Blog | `blog.html` | Blog listing with featured post |
| Post | `post.html` | Individual blog post |
| Contact | `contact.html` | Contact form and info |
| Careers | `careers.html` | Job listings and culture |
| FAQ | `faq.html` | Frequently asked questions |
| Privacy | `privacy.html` | Privacy policy |
| 404 | `404.html` | Error page |

## Configuration

### Site Variables

Configure these in your site's `config.toml`:

```toml
[site]
name = "Your Company Name"
tagline = "Your tagline here"
email = "hello@yourcompany.com"
phone = "+1 (555) 123-4567"
address = "123 Business Ave, Suite 100"
city = "San Francisco, CA 94105"

[site.social]
twitter = "https://twitter.com/yourcompany"
linkedin = "https://linkedin.com/company/yourcompany"
```

### Theme Colors

Edit `assets/css/style.css` to customize the color palette:

```css
:root {
  /* Primary Colors */
  --color-primary: #1E40AF;      /* Blue */
  --color-primary-dark: #1E3A8A;
  --color-secondary: #059669;    /* Green */
  --color-accent: #F59E0B;       /* Amber */

  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #F8FAFC;
  --bg-tertiary: #F1F5F9;

  /* Text Colors */
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-tertiary: #94A3B8;
}
```

## Components

### Buttons

```html
<!-- Primary Button -->
<a href="#" class="btn btn--primary">Get Started</a>

<!-- Secondary Button -->
<a href="#" class="btn btn--secondary">Learn More</a>

<!-- Outline Button -->
<a href="#" class="btn btn--outline">Contact Us</a>

<!-- Ghost Button -->
<a href="#" class="btn btn--ghost">View Details</a>

<!-- Button Sizes -->
<a href="#" class="btn btn--primary btn--sm">Small</a>
<a href="#" class="btn btn--primary btn--lg">Large</a>
```

### Cards

```html
<!-- Service Card -->
<div class="service-card">
  <div class="service-icon"><!-- SVG Icon --></div>
  <h3 class="service-title">Strategy</h3>
  <p class="service-text">Description text here.</p>
  <a href="#" class="service-link">Learn More →</a>
</div>

<!-- Team Card -->
<div class="team-card">
  <div class="team-image">
    <img src="photo.jpg" alt="Name">
  </div>
  <div class="team-info">
    <h3 class="team-name">John Smith</h3>
    <p class="team-role">CEO & Founder</p>
  </div>
</div>

<!-- Pricing Card -->
<div class="pricing-card">
  <div class="pricing-header">
    <h3 class="pricing-name">Professional</h3>
    <div class="pricing-price">$2,500<span>/month</span></div>
  </div>
  <ul class="pricing-features">
    <li class="included">Feature one</li>
    <li class="included">Feature two</li>
  </ul>
  <a href="#" class="btn btn--primary">Get Started</a>
</div>

<!-- Featured Pricing -->
<div class="pricing-card pricing-card--featured">
  <!-- Same structure with highlighted styling -->
</div>
```

### Sections

```html
<!-- Section with Label -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-label">Our Services</span>
      <h2 class="heading-xl">What We Offer</h2>
    </div>
    <!-- Content -->
  </div>
</section>

<!-- Secondary Background -->
<section class="section bg-secondary">
  <!-- Content -->
</section>
```

### Animations

Add scroll animations to any element:

```html
<!-- Fade Up -->
<div data-animate="fade-up">Content</div>

<!-- Fade Up with Delay -->
<div data-animate="fade-up" data-delay="100">Content</div>
<div data-animate="fade-up" data-delay="200">Content</div>

<!-- Scale Animation -->
<div data-animate="scale">Content</div>
```

### FAQ Accordion

```html
<div class="faq-item">
  <button class="faq-question">
    Your question here?
    <span class="faq-icon"><!-- Chevron SVG --></span>
  </button>
  <div class="faq-answer">
    <div class="faq-answer-inner">
      Your answer text here.
    </div>
  </div>
</div>
```

### Counter Animation

```html
<div class="stat-number" data-count="500">0</div>
```

## Typography

```html
<!-- Headings -->
<h1 class="heading-display">Display Heading</h1>
<h2 class="heading-xl">Extra Large</h2>
<h3 class="heading-lg">Large Heading</h3>
<h4 class="heading-md">Medium Heading</h4>
<h5 class="heading-sm">Small Heading</h5>

<!-- Lead Text -->
<p class="lead">Larger intro paragraph text.</p>

<!-- Gradient Text -->
<span class="text-gradient">Highlighted Text</span>
```

## Grid System

```html
<!-- 2 Columns -->
<div class="grid grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3 Columns -->
<div class="grid grid-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- 4 Columns -->
<div class="grid grid-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

## Forms

```html
<form id="contact-form" data-ajax>
  <div class="form-group">
    <label for="name" class="form-label">Name *</label>
    <input type="text" id="name" name="name" class="form-input" required>
  </div>

  <div class="form-group">
    <label for="email" class="form-label">Email *</label>
    <input type="email" id="email" name="email" class="form-input" required>
  </div>

  <div class="form-group">
    <label for="subject" class="form-label">Subject</label>
    <select id="subject" name="subject" class="form-select">
      <option value="">Select an option</option>
      <option value="general">General Inquiry</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message" class="form-label">Message</label>
    <textarea id="message" name="message" class="form-textarea" rows="5"></textarea>
  </div>

  <button type="submit" class="btn btn--primary">Submit</button>
</form>
```

## Dark Mode

The theme includes automatic dark mode support. Users can toggle between modes using the theme switcher in the header. Dark mode styles are defined in the CSS using media queries and CSS variables.

To customize dark mode colors:

```css
[data-theme="dark"] {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --text-primary: #F8FAFC;
  /* Add more overrides */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- **Fonts**: Plus Jakarta Sans, Inter (Google Fonts)
- **Icons**: Custom SVG icons

## License

MIT License - Feel free to use for personal and commercial projects.

---

**Business Elite Theme** - Professional themes for RustPress
