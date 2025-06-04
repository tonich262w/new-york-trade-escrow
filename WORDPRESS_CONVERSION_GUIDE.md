
# WordPress Theme Conversion Guide

## Project Structure Overview

Your React project is now organized with a clear separation between static UI components and dynamic content areas, making WordPress conversion much easier.

### File Structure for WordPress Conversion

```
src/
├── components/
│   ├── layout/           # Static layout components → WordPress templates
│   │   ├── Layout.tsx    # Main layout wrapper → theme functions
│   │   ├── Header.tsx    # Site header → header.php
│   │   └── Footer.tsx    # Site footer → footer.php
│   ├── sections/         # Page sections → WordPress template parts
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── forms/           # Interactive forms → WordPress forms/plugins
│   │   └── ContactForm.tsx
│   └── ui/              # Reusable UI components → WordPress components
├── pages/               # Page templates → WordPress page templates
│   ├── HomePage.tsx     # Front page → front-page.php
│   ├── About.tsx        # About page → page-about.php
│   ├── Services.tsx     # Services page → page-services.php
│   └── Contact.tsx      # Contact page → page-contact.php
└── data/                # Static data → WordPress customizer/fields
    └── siteData.ts      # Site content → WordPress options/custom fields
```

### Mapping to WordPress Files

#### 1. Static Components (Direct conversion)
- `Layout.tsx` → WordPress theme structure (`functions.php`, `header.php`, `footer.php`)
- `Header.tsx` → `header.php`
- `Footer.tsx` → `footer.php`

#### 2. Dynamic Content Areas (WordPress content)
- `siteData.ts` → WordPress Customizer API / Advanced Custom Fields
- Hero content → WordPress blocks or custom fields
- Services → WordPress custom post type
- Testimonials → WordPress custom post type
- Company info → WordPress theme options

#### 3. Page Templates
- `HomePage.tsx` → `front-page.php`
- `About.tsx` → `page-about.php` or `page.php`
- `Services.tsx` → `page-services.php` or `archive-services.php`
- `Contact.tsx` → `page-contact.php`

### WordPress Theme Development Steps

#### Phase 1: Basic Theme Setup
1. Create `style.css` with theme header
2. Create `index.php` as fallback
3. Create `functions.php` for theme setup
4. Enqueue CSS and JS files

#### Phase 2: Layout Components
1. Convert `Header.tsx` to `header.php`
   - Replace React navigation with WordPress menus
   - Add `wp_nav_menu()` function
   - Convert company data to theme options

2. Convert `Footer.tsx` to `footer.php`
   - Replace hardcoded links with WordPress menus
   - Add widget areas if needed

3. Convert `Layout.tsx` structure to main theme files

#### Phase 3: Content Areas
1. Convert `siteData.ts` to WordPress options:
   ```php
   // In functions.php
   function theme_customizer($wp_customize) {
       // Add company info section
       // Add navigation options
       // Add contact information
   }
   ```

2. Create custom post types for dynamic content:
   ```php
   // Services post type
   // Testimonials post type
   // Team members post type
   ```

#### Phase 4: Page Templates
1. `front-page.php` from `HomePage.tsx`
2. `page.php` from generic page structure
3. Custom page templates for specific pages

#### Phase 5: Dynamic Content Integration
1. Replace static data with WordPress functions:
   - `get_theme_mod()` for customizer options
   - `WP_Query` for posts/services
   - `get_field()` for ACF fields (if using ACF)

### Key WordPress Functions to Use

```php
// Theme setup
wp_enqueue_style()
wp_enqueue_script()
add_theme_support()

// Navigation
wp_nav_menu()
register_nav_menus()

// Content
the_content()
get_posts()
WP_Query()

// Customizer
get_theme_mod()
add_customizer_section()

// Custom fields (if using ACF)
get_field()
the_field()
```

### CSS Framework Integration
- Keep Tailwind CSS classes
- Enqueue Tailwind via CDN or build process
- Maintain responsive design structure

### Recommended WordPress Plugins
1. **Advanced Custom Fields (ACF)** - For custom content fields
2. **Contact Form 7** - For contact forms
3. **Yoast SEO** - For SEO optimization
4. **Elementor/Gutenberg** - For page building flexibility

### Next Steps
1. Set up local WordPress development environment
2. Create new theme folder in `/wp-content/themes/`
3. Start with basic theme files (`style.css`, `index.php`, `functions.php`)
4. Convert components one by one
5. Test responsive design and functionality
6. Add WordPress-specific features (admin, customizer, etc.)

This structure provides a clean foundation for WordPress theme development while maintaining the design and functionality of your React application.
