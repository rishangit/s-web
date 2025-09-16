# MySQL Setup for Strapi Backend

## Prerequisites

1. **Install MySQL Server**
   - Download and install MySQL from [mysql.com](https://dev.mysql.com/downloads/mysql/)
   - Or use a package manager like Homebrew (macOS) or apt (Ubuntu)

2. **Create Database**
   ```sql
   CREATE DATABASE strapi_db;
   CREATE USER 'strapi'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON strapi_db.* TO 'strapi'@'localhost';
   FLUSH PRIVILEGES;
   ```

## Configuration

1. **Copy Environment File**
   ```bash
   cp env.example .env
   ```

2. **Update .env File**
   ```env
   # Database Configuration
   DATABASE_CLIENT=mysql
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_NAME=strapi_db
   DATABASE_USERNAME=strapi
   DATABASE_PASSWORD=your_password
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Server**
   ```bash
   npm run develop
   ```

## Console Output

When the database connects successfully, you'll see:
```
🔗 Database Configuration:
   Client: mysql
   Host: localhost
   Port: 3306
   Database: strapi_db
   Username: strapi
   Password: [HIDDEN]
   SSL: Disabled

✅ Database connected successfully!
🚀 Strapi is ready to serve requests
```

## Troubleshooting

- **Connection Refused**: Check if MySQL server is running
- **Access Denied**: Verify username/password in .env file
- **Database Not Found**: Create the database using the SQL commands above
- **Port Issues**: Ensure MySQL is running on port 3306 (default)

## Default MySQL Credentials

If using default MySQL installation:
- Username: `root`
- Password: (set during installation)
- Host: `localhost`
- Port: `3306`
