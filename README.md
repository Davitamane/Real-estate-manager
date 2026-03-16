The Movie Quotes Backend powers the Movie Quotes application by providing a REST API for managing movies, quotes, interactions, and user activity.

The system allows users to create movies and attach quotes to them, interact with quotes through likes and comments, and receive real-time notifications when other users engage with their content.

The backend is built with Laravel and exposes an API consumed by a Next.js frontend SPA authenticated via Laravel Sanctum.
Real-time updates are handled using Laravel Broadcasting with Pusher and Laravel Echo.

Table of Contents

Prerequisites

Tech Stack

Getting Started

Running Tests

Development

Deployment

Resources

Developer Notes

Prerequisites

Tech Stack
Backend

Laravel 12.x

PHP ≥ 8.4

MySQL 8.x

Authentication

Laravel Sanctum – SPA authentication

Real-Time Features

Laravel Broadcasting

Pusher

Laravel Echo

Used for:

real-time notifications

live updates for comments and likes

Query Handling

Spatie Query Builder – filtering and searching

Spatie Media Library – profile image management

Frontend (separate project)

Next.js SPA

Application Features
Movie Management

Users can perform CRUD operations on movies:

create movies

update movie details

delete movies

view their movie collection

Quote Management

Quotes are always attached to a movie.

Users can:

create quotes for movies

edit or delete their quotes

browse quotes from all users

Interactions

Users can interact with quotes by:

liking quotes

commenting on quotes

Real-Time Notifications

When someone:

likes your quote

comments on your quote

a notification is instantly delivered through Laravel Broadcasting.

These updates are pushed to the frontend using Pusher and Laravel Echo.

Getting Started

1. Clone the repository
   git clone https://github.com/RedberryInternship/dato-khizanishvili-movie-quotes-back
2. Install PHP dependencies
   composer install
3. Install JavaScript dependencies
   npm install
4. Create environment file
   cp .env.example .env

Then configure your database credentials inside .env.

MySQL configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=**_
DB_USERNAME=_**
DB_PASSWORD=\*\*\* 5. Run database migrations
php artisan migrate 6. Create storage link
php artisan storage:link

This is required for user profile images managed through Laravel storage.

Running Unit Tests

You can run all tests using:

composer test
Development

To start Laravel's development server run:

php artisan serve

The API will then be available at:

http://localhost:8000
Deployment

1. Connect to your server
   ssh user@server
2. Pull latest changes
   git pull origin main
3. Install dependencies
   composer install
4. Run migrations
   php artisan migrate
5. Build production assets
   npm install
   npm run build
6. Optimize application
   php artisan optimize
7. Restart services
   sudo systemctl reload nginx
   sudo systemctl restart php8.x-fpm
   Resources
   Database Diagram

DrawSQL diagram:

https://drawsql.app/teams/davitamane/diagrams/moviequotes
Production API
https://movie-quotes-api.example.com
Developer Notes
CORS Configuration

Make sure to update the frontend origin inside config/cors.php:

'allowed_origins' => ['http://your-frontend-url.com'],
