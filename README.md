<div style="display:flex; align-items:center">

<h1 style="position:relative; top:-6px">Movie Quotes Frontend</h1>

</div>

---

The **Movie Quotes Frontend** is a Single Page Application built with **Next.js** that allows users to interact with the Movie Quotes platform.

Users can create movies, add quotes to them, browse other users’ quotes, like and comment on quotes, and receive **real-time notifications** when someone interacts with their content.

The application communicates with the **Laravel backend API** and uses **Laravel Sanctum** for authentication.  
Real-time updates such as notifications, likes, and comments are handled through **Laravel Echo and Pusher**.

---

# Table of Contents

- Prerequisites
- Tech Stack
- Getting Started
- Development
- Deployment
- Resources
- Developer Notes

---

# Prerequisites

![Node](https://img.shields.io/badge/Node-%3E%3D%2018-green)  
![Next.js](https://img.shields.io/badge/Next.js-%3E%3D%2013-black)  
![React](https://img.shields.io/badge/React-%3E%3D%2018-blue)

---

# Tech Stack

## Framework

- **Next.js (Pages Router)**
- **React 18**

## Data Fetching

- **TanStack Query** – server state management and caching
- **Axios** – API requests

## Forms

- **React Hook Form** – form state and validation

## Internationalization

- **next-i18next / next-i18n**

Supported languages:

- English
- Georgian

## Real-Time Communication

- **Laravel Echo**
- **Pusher**

Used for:

- live notifications
- real-time comment updates
- real-time likes

## Styling

- **Tailwind CSS**

---

# Application Features

### Authentication

Users can:

- register
- login
- authenticate through Laravel Sanctum
- manage their profile

---

### Movies

Users can:

- create movies
- edit movie information
- delete movies
- view movies they created

---

### Quotes

Quotes belong to movies.

Users can:

- create quotes for a movie
- edit or delete their quotes
- browse quotes from other users

---

### Interactions

Users can interact with quotes by:

- liking quotes
- commenting on quotes

---

### Real-Time Notifications

When another user:

- likes your quote
- comments on your quote

a notification appears instantly using **Laravel Broadcasting with Pusher**.

---

# Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RedberryInternship/dato-khizanishvili-movie-quotes-front
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create environment file

Create a `.env.local` file in the root of the project.

Example:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_PUSHER_KEY=
NEXT_PUBLIC_PUSHER_CLUSTER=
```

---

### 4. Run development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:3000
```

---

# Development

The project uses the **Next.js Pages Router** structure.

Typical structure:

```
pages/
components/
hooks/
services/
context/
types/
utils/
```

Key architectural pieces:

- **TanStack Query** for API data management
- **Axios service layer** for HTTP requests
- **Custom React hooks** for application logic
- **React Hook Form** for form handling

---

# Deployment

### Production build

```bash
npm install
npm run build
```

### Start production server

```bash
npm run start
```

---

# Resources

### Production Application

```
https://movie-quotes.dato-khizanishvili.redberryinternship.ge
```

### Backend API

```
https://movie-quotes-api.example.com
```

---

# Developer Notes

### API Connection

The frontend communicates with the Laravel backend through **Axios**.

Ensure the correct backend API URL is defined in:

```
.env.local
```

Example:

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

### Real-Time Features

Real-time functionality uses **Laravel Echo with Pusher**.  
Ensure that the Pusher credentials match the backend configuration.
