# CAN Channels - Malayalam News Website

A modern, responsive news channel website built with React and Tailwind CSS, featuring Malayalam content and a clean, professional design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Malayalam Support**: Full support for Malayalam text with Noto Sans Malayalam font
- **Interactive Components**: 
  - Navigation with hamburger menu for mobile
  - Cookie consent banner
  - Notification system with bell icon
  - Advertisement banners
  - News ticker with marquee animation
- **News Sections**: 
  - Featured news with images
  - Breaking news ticker
  - Trending news sidebar
  - Exclusive interviews
  - Movie showcase section

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Beautiful icons for the interface
- **Google Fonts**: Noto Sans Malayalam for proper Malayalam text rendering

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system (version 14 or higher).

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Top header with logo and ads
│   ├── Navigation.js      # Navigation bar with menu
│   ├── MainContent.js     # Main news content area
│   ├── Showcase.js        # Movie showcase section
│   ├── Sidebar.js         # Sidebar with trending news
│   ├── CookieBanner.js    # Cookie consent banner
│   └── NotificationBell.js # Notification system
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Design Features

### Color Scheme
- **Primary Red**: `#DC2626` (CAN brand color)
- **Primary Blue**: `#2563EB` (Accent color)
- **Yellow**: `#F59E0B` (Advertise button)
- **Green**: `#059669` (Success/positive elements)
- **Purple**: `#7C3AED` (Showcase section)

### Typography
- **Primary Font**: Noto Sans Malayalam for Malayalam text
- **Fallback**: System sans-serif fonts

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Customization

### Adding New News Items
Edit the `featuredNews` array in `MainContent.js` to add new news articles.

### Changing Colors
Modify the custom colors in `tailwind.config.js` under the `extend.colors` section.

### Adding New Sections
Create new components in the `components/` directory and import them in `App.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with placeholder URLs
- Lazy loading for better performance
- Minimal bundle size with Tailwind CSS
- Efficient React components with proper state management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For support or questions, please open an issue in the repository. 