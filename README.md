# Company Website Project

A full-stack project for designing company websites with Strapi CMS backend and Next.js frontend.

## Project Structure

```
S-WEB/
├── backend/          # Strapi CMS backend
├── frontend/         # Next.js frontend
├── package.json      # Root package.json with scripts
└── README.md         # This file
```

## Features

- **Backend**: Strapi CMS with MySQL database
- **Frontend**: Next.js with TypeScript, Tailwind CSS, and SSR support
- **Database**: MySQL with proper configuration
- **API Integration**: Ready for connecting frontend to Strapi API

## Prerequisites

- Node.js (v18.0.0 or higher)
- MySQL database
- npm or yarn

## Setup Instructions

### 1. Database Setup

First, make sure you have MySQL running and create a database:

```sql
CREATE DATABASE company_website;
```

### 2. Backend Setup (Strapi CMS)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `env.example` to `.env`
   - Update the database credentials in `.env`:
     ```
     DATABASE_HOST=your_mysql_host
     DATABASE_PORT=3306
     DATABASE_NAME=company_website
     DATABASE_USERNAME=your_username
     DATABASE_PASSWORD=your_password
     ```

4. Start the Strapi development server:
   ```bash
   npm run dev
   ```

   The Strapi admin panel will be available at: http://localhost:1337/admin

### 3. Frontend Setup (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at: http://localhost:3000

### 4. Running Both Services

From the root directory, you can run both services simultaneously:

```bash
# Install root dependencies first
npm install

# Run both backend and frontend
npm run dev
```

## Available Scripts

### Root Level Scripts
- `npm run dev` - Run both backend and frontend in development mode
- `npm run dev:backend` - Run only the backend
- `npm run dev:frontend` - Run only the frontend
- `npm run build` - Build both backend and frontend
- `npm run start` - Start both services in production mode

### Backend Scripts (in backend/ directory)
- `npm run dev` - Start Strapi in development mode
- `npm run develop` - Alternative command for development
- `npm run build` - Build Strapi for production
- `npm run start` - Start Strapi in production mode

### Frontend Scripts (in frontend/ directory)
- `npm run dev` - Start Next.js in development mode
- `npm run build` - Build Next.js for production
- `npm run start` - Start Next.js in production mode
- `npm run lint` - Run ESLint

## API Integration

The frontend is configured to work with the Strapi backend. The Strapi API will be available at:
- Base URL: `http://localhost:1337/api`
- Admin Panel: `http://localhost:1337/admin`

## Database Configuration

The project is configured to use MySQL with the following default settings:
- Host: 127.0.0.1
- Port: 3306
- Database: company_website
- Client: mysql2

## Troubleshooting

### Common Issues

1. **Port already in use**: Make sure ports 3000 and 1337 are available
2. **Database connection issues**: Verify MySQL is running and credentials are correct
3. **Dependency conflicts**: Try deleting `node_modules` and running `npm install` again

### Getting Help

- Check the Strapi documentation: https://docs.strapi.io/
- Check the Next.js documentation: https://nextjs.org/docs
- Review the console output for specific error messages

## Next Steps

1. Set up your first content types in Strapi admin panel
2. Create API endpoints and configure permissions
3. Build your frontend components to consume the Strapi API
4. Customize the design with Tailwind CSS
5. Deploy to your preferred hosting platform

## Development Notes

- The backend uses Strapi v4.25.0
- The frontend uses Next.js v15.5.3 with App Router
- TypeScript is configured for both projects
- Tailwind CSS is set up for styling
- ESLint is configured for code quality
