# BuildRight Construction Website

A modern, responsive construction company website built with Next.js 15, React 19, and Tailwind CSS 4.

## 🏗️ Features

- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Contact Form**: Functional contact form with validation
- **Project Portfolio**: Showcase completed projects with filtering
- **Team Section**: Display team members with social links
- **Testimonials**: Customer reviews and feedback
- **Services Overview**: Detailed service descriptions

## 📁 Project Structure

```
construction-website/
├── app/                    # Next.js App Router
│   ├── layout.js           # Root layout with Navbar & Footer
│   ├── page.js             # Home page
│   ├── about/page.js       # About page
│   ├── services/page.js    # Services page
│   ├── projects/page.js    # Projects portfolio
│   ├── team/page.js        # Team members
│   ├── testimonials/page.js # Customer testimonials
│   └── contact/page.js     # Contact page with form
│
├── components/             # Reusable React components
│   ├── Navbar.js           # Navigation component
│   ├── Footer.js           # Footer component
│   ├── HeroSection.js      # Hero section for home page
│   ├── ServicesSection.js  # Services overview
│   ├── ProjectCard.js      # Project display card
│   ├── TeamMemberCard.js   # Team member card
│   ├── TestimonialCard.js  # Customer testimonial card
│   └── ContactForm.js      # Contact form component
│
├── public/                 # Static assets
│   └── images/             # Image files
│
├── styles/                 # Global styles
│   └── globals.css         # Global CSS with Tailwind
│
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd construction-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The website uses a custom orange color scheme. You can modify colors in `tailwind.config.js`:

```javascript
colors: {
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    // ... more shades
    600: '#ea580c', // Primary brand color
  },
}
```

### Content

- Update company information in components and pages
- Replace placeholder images with your own
- Modify contact information in Footer and Contact page
- Update testimonials and team member data

### Styling

- Global styles are in `styles/globals.css`
- Component-specific styles use Tailwind classes
- Custom CSS classes are available in the global stylesheet

## 📱 Pages Overview

### Home Page (`/`)

- Hero section with call-to-action
- Services overview
- Company statistics

### About Page (`/about`)

- Company story and history
- Mission and values
- Team statistics

### Services Page (`/services`)

- Detailed service descriptions
- Service features and benefits
- Call-to-action section

### Projects Page (`/projects`)

- Project portfolio with filtering
- Project cards with images and details
- Category-based filtering

### Team Page (`/team`)

- Team member profiles
- Company culture section
- Professional backgrounds

### Testimonials Page (`/testimonials`)

- Customer reviews and ratings
- Client satisfaction statistics
- Why choose us section

### Contact Page (`/contact`)

- Contact form with validation
- Company contact information
- FAQ section
- Map placeholder

## 🔧 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Mongoose** - MongoDB ODM (for future backend integration)

## 📈 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by pages
- **SEO Optimization**: Meta tags and semantic HTML
- **Responsive Images**: Optimized for different screen sizes
- **Fast Loading**: Minimal bundle size and efficient loading

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📞 Support

For questions or support, please contact:

- Email: info@buildright.com
- Phone: (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ by BuildRight Construction
