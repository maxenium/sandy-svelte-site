````markdown
# Sandra - Contemporary Art Portfolio

A responsive, modern Svelte website showcasing contemporary art pieces with a Bauhaus-inspired minimal design. Features smooth background transitions on scroll, a hero start screen, and a horizontally scrollable gallery.

## Features

✨ **Start Screen** - Hero section with artist name and blurred background image with parallax effect

🎨 **Scroll Backgrounds** - Three background images that fade one after another with smooth left-to-right and right-to-left animations

🖼️ **Gallery** - Horizontally scrollable art pieces gallery with interactive hover effects

📱 **Responsive Design** - Optimized for mobile and desktop devices

⚡ **Performance Optimized** - Lightweight, fast-loading with minimal JavaScript

🎭 **Bauhaus Aesthetics** - Clean, minimal UI with focus on typography and motion

## Project Structure

```
src/
├── App.svelte                 # Main app component with scroll tracking
├── main.js                    # Application entry point
└── components/
    ├── StartScreen.svelte     # Hero section with parallax
    ├── ScrollBackgrounds.svelte # Animated background transitions
    └── Gallery.svelte         # Horizontal gallery with smooth scrolling
public/
├── index.html                 # HTML template
└── global.css                 # Global styles and typography
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server will typically run on port 5000. Check your terminal for the exact URL.

## Customization

### Update Artist Information

Edit the artist name in `src/components/StartScreen.svelte`:

```javascript
const artistName = 'SANDRA'; // Change to your name
```

### Replace Placeholder Images

The project uses Unsplash URLs for demonstration. Replace with your own images in:

1. **StartScreen Background** in `src/components/StartScreen.svelte`
2. **Scroll Background Images** in `src/components/ScrollBackgrounds.svelte`
3. **Gallery Items** in `src/components/Gallery.svelte`

### Customize Colors

Global color variables in `src/App.svelte`:

```css
:root {
	--primary-color: #000;
	--secondary-color: #fff;
	--accent-color: #888;
}
```

## Browser Support

- Chrome/Edge ✓
- Firefox ✓
- Safari ✓
- Mobile browsers ✓

## Performance

- Lightweight and fast
- Optimized for scroll performance
- Lazy loading ready
- Mobile optimized

## Building for Production

```bash
npm run build
```

Deploy the `public/` folder to any static hosting.

## License

MIT License
````


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
