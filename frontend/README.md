# HU Employee Management System - Frontend

A React-based frontend application for the Haramaya University Employee Management System, built with Vite and CSS modules.

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)
- **Backend API**: The backend server must be running (see `../backend/README.md`)

## Tech Stack

- **React**: 19.2.0 - UI library
- **Vite**: 7.2.4 - Build tool and dev server
- **React Router DOM**: 6.21.3 - Client-side routing
- **Axios**: 1.6.5 - HTTP client for API communication
- **CSS Modules**: For component styling

## Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env file with your configuration
   # VITE_API_URL=http://localhost:5000
   ```

## Environment Configuration

Create a `.env` file in the frontend directory with the following variables:

```env
# Backend API URL - Update this to match your backend server
VITE_API_URL=http://localhost:5000
```

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` | Yes |

**Note**: All environment variables for Vite must be prefixed with `VITE_` to be accessible in the browser.

## Development

### Start Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

### Other Available Scripts

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable UI components
│   │   └── Layout/        # Layout components
│   ├── context/           # React context providers
│   ├── pages/             # Page components
│   │   ├── dashboards/    # Dashboard pages
│   │   ├── departments/   # Department management
│   │   ├── employees/     # Employee management
│   │   ├── leave/         # Leave management
│   │   └── reports/       # Reporting pages
│   └── services/          # API service modules
├── .env                   # Environment variables (not in git)
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## API Integration

The frontend communicates with the backend API through centralized service modules:

- **authService.js**: Authentication and user management
- **employeeService.js**: Employee CRUD operations
- **departmentService.js**: Department management
- **leaveService.js**: Leave request management
- **reportService.js**: Reporting and analytics

All services use the configured `VITE_API_URL` and include automatic:
- Authentication token handling
- Request/response interceptors
- Error handling and user feedback

## Features

- **Authentication**: Secure login with JWT tokens
- **Role-based Access**: Different interfaces for Admin, HR, Employee, and Management roles
- **Employee Management**: Create, view, update, and delete employee records
- **Department Management**: Manage organizational units
- **Leave Management**: Submit and approve leave requests
- **Attendance Tracking**: Record and view attendance data
- **Reporting**: Generate various HR reports
- **Responsive Design**: Works on desktop and mobile devices

## Building for Production

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **The build output will be in the `dist/` directory**

3. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

## Deployment

The frontend builds to static files that can be deployed to any web server or CDN:

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Web Servers**: Apache, Nginx
- **Cloud Storage**: AWS S3, Google Cloud Storage

### Environment Variables for Production

Make sure to set the correct `VITE_API_URL` for your production backend:

```env
VITE_API_URL=https://your-production-api.com
```

## Troubleshooting

### Common Issues

1. **"Missing required environment variable: VITE_API_URL"**
   - Create a `.env` file with `VITE_API_URL=http://localhost:5000`

2. **API requests failing**
   - Ensure the backend server is running on the configured URL
   - Check CORS configuration in the backend

3. **Build fails**
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

4. **Hot reload not working**
   - Restart the dev server: `npm run dev`

### Getting Help

- Check the backend README for API documentation
- Ensure both frontend and backend are running
- Verify environment variables are correctly set

## Contributing

1. Follow the existing code structure and naming conventions
2. Use CSS modules for component styling
3. Add proper error handling for API calls
4. Test your changes with different user roles
5. Update documentation for any new features

## License

This project is developed for Haramaya University IT Department.