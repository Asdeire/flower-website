# Flower Website

## Topic

Rapid Web Design Using Bootstrap or Tailwind CSS

## Objective

To learn how to design websites quickly using the Tailwind CSS framework or Bootstrap, focusing on responsive design, utility-first classes, and optimizing assets for faster performance.

## Task Requirements

### 1. Technology Stack
- **HTML5**
- **Sass/SCSS**
- **Flexbox** and/or **Grids**
- **Bootstrap 5** or **Tailwind CSS**
  - Or parts of these frameworks (e.g., `bootstrap-reboot`, `bootstrap-grid`, utility classes, etc.)
- **JavaScript (ES6+)**
- **Vite** (for faster development and bundling)
- **Minification of files** (JS, CSS)
- **Image Optimization**

### 2. Set Up the Starter Project
- Create a new **Vite** project for fast development and building.
- Set up the Vite environment with the following configurations:
  - Tailwind CSS or Bootstrap (Bootstrap can be used with Vite for CSS imports)
  - SCSS for custom styles
  - JavaScript (ES6+)
  
### 3. Design the Website Using Bootstrap 5 or Tailwind CSS
- Use **Bootstrap 5** or **Tailwind CSS** for creating the layout.
  - Minimum requirements:
    - **Bootstrap**: `bootstrap-reboot` and `bootstrap-grid`.
    - **Tailwind**: Basic utilities, such as Flexbox utilities, spacing, grid, and responsive design utilities.
- Build a **responsive layout** using Flexbox or Grid systems.
- Design the site to work well on **mobile**, **tablet**, and **desktop** using the utility classes provided by Tailwind or Bootstrap.

### 4. Features
- **Responsive Design**: Ensure that the layout adjusts properly on all screen sizes (using Tailwind's responsive classes or Bootstrap's grid system).
- **Customization**: Customize the design with SCSS if using Tailwind CSS (or custom Bootstrap overrides).
- **Optimization**:
  - Minify JS and CSS files.
  - Optimize images for faster loading.
  
### 5. Additional Requirements
- **JS Interactivity**: Use plain JavaScript (ES6+) for interactive components like modals, dropdowns, or carousels.
- **Project Setup**: Utilize **Vite** to set up and bundle your project for fast development and building.

## Installation

### 1. Set up the project with Vite:
```bash
npm create vite@latest fast-layout-project
cd fast-layout-project
npm install
```

### 2. Install required dependencies:
For **Tailwind CSS**:
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
```

For **Bootstrap**:
```bash
npm install bootstrap
```

### 3. Configure Vite for Tailwind or Bootstrap:
- **Tailwind**: Set up your `tailwind.config.js` file and import Tailwind's directives in your main CSS file.
- **Bootstrap**: Import the required Bootstrap CSS in your main entry point.

### 4. Set up SCSS:
If using SCSS, install the necessary SCSS dependencies:
```bash
npm install sass
```

### 5. Image Optimization:
Install image optimization packages such as `vite-plugin-imagemin` to optimize images during the build process.

### 6. Minification:
Ensure minification of your JavaScript and CSS files using Vite's built-in production build configuration.

## Usage

- **Development**: Run `npm run dev` to start the development server with live reloading.
- **Build**: Use `npm run build` to generate the production-ready assets with minification and optimizations.

## Contributing

Feel free to fork this project and make improvements. Pull requests are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
