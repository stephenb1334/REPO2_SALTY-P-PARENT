# Comprehensive Brand Color Guidelines

## Brand Color Scheme Guidelines

### Primary Colors

### Cyan Cobalt Blue (#2656A0)
Our flagship color represents trust, professionalism, and stability. As our main brand color, it serves as the foundation for our visual identity, perfect for:
- Primary CTAs
- Headers
- Key brand elements
- Navigation components

## Secondary Colors

### Aero (#7DC0DE)
A refreshing light blue that adds brightness and accessibility to our palette. Ideal for:
- Secondary buttons
- Highlights
- Background accents
- Progress indicators

### Fountain Blue (#53B6B1)
This balanced teal tone bridges our blue and neutral palettes, offering versatility for:
- Success states
- Interactive elements
- Supporting graphics
- Section dividers

## Supporting Colors

### Barley Corn (#A2865B)
A warm, earthy tone that adds sophistication and grounds our color palette. Perfect for:
- Accent elements
- Decorative details
- Premium features
- Subtle highlights

### Grey Nurse (#D0D7CD)
A soft, neutral grey with a slight warm undertone, essential for:
- Background elements
- Text containers
- Disabled states
- Subtle borders

---

# UI Component Examples

## Button System

```css
/* Primary Button */
.btn-primary {
  background-color: #2656A0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
}

.btn-primary:hover {
  background-color: #1e4580;
}

/* Secondary Button */
.btn-secondary {
  background-color: #7DC0DE;
  color: #2656A0;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
}

/* Accent Button */
.btn-accent {
  background-color: white;
  color: #A2865B;
  border: 2px solid #A2865B;
  padding: 10px 24px;
  border-radius: 4px;
}
```

## Navigation Bar

```css
.navbar {
  background-color: #2656A0;
  color: white;
  padding: 16px;
}

.navbar-item {
  color: #D0D7CD;
}

.navbar-item.active {
  color: white;
  border-bottom: 2px solid #53B6B1;
}
```

## Card Components

```css
.card {
  background: white;
  border: 1px solid #D0D7CD;
  border-radius: 8px;
  padding: 20px;
}

.card-premium {
  border-top: 4px solid #A2865B;
}

.card-highlight {
  background: linear-gradient(to bottom right, #7DC0DE10, white);
}
```

## Progress Indicators

```css
.progress-bar {
  background-color: #D0D7CD;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  background-color: #53B6B1;
  height: 100%;
}

.progress-fill.success {
  background-color: #53B6B1;
}
```

## Form Elements

```css
.input-field {
  border: 2px solid #D0D7CD;
  border-radius: 4px;
  padding: 8px 12px;
}

.input-field:focus {
  border-color: #7DC0DE;
  outline: none;
}

.form-label {
  color: #2656A0;
  font-weight: 500;
}
```

## Alert/Notification System

```css
.alert {
  padding: 12px 16px;
  border-radius: 4px;
  margin: 8px 0;
}

.alert-info {
  background-color: #7DC0DE20;
  border-left: 4px solid #7DC0DE;
  color: #2656A0;
}

.alert-success {
  background-color: #53B6B120;
  border-left: 4px solid #53B6B1;
}
```

## Usage Guidelines

### Hierarchy
1. Use Cyan Cobalt Blue (#2656A0) as the dominant color for main brand touchpoints
2. Implement Aero and Fountain Blue for interactive and supporting elements
3. Apply Barley Corn sparingly for premium accents
4. Utilize Grey Nurse for neutral backgrounds and supporting elements

### Accessibility
- Ensure sufficient contrast when using text over colored backgrounds
- Maintain a minimum contrast ratio of 4.5:1 for body text
- Use darker variants of primary colors for text when needed

### Digital Applications
- Maintain color consistency across all platforms
- Use hex codes provided for digital media
- Consider light and dark mode variations
- Implement hover states using lighter/darker variations of these colors

### Print Guidelines
- Request CMYK and Pantone values for print applications
- Use color-matched swatches for physical materials
- Consider paper stock impact on color appearance

## Color Psychology

Our palette combines:
- Professional blues for trust and reliability
- Teal tones for balance and growth
- Warm accents for approachability
- Neutral greys for sophistication

This thoughtful combination creates a versatile, professional, yet approachable brand identity that works across multiple applications while maintaining visual coherence.