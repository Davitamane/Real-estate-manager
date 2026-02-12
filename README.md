<div style="display:flex; align-items: center">

<h1 style="position:relative; top: -6px" >Quiz wiz</h1>

</div>

---

**Quiz Wiz** is a quiz platform that allows users to browse and complete quizzes across different categories in a fast and intuitive interface.

The application provides a smooth quiz-taking experience with category filtering, dynamic question rendering, and real-time interaction. Users can select quizzes based on their interests, answer multiple-choice questions, and receive immediate feedback on their performance.

#

### Table of Contents

- [Prerequisites](#prerequisites)

- [Tech Stack](#tech-stack)

- [Getting Started](#getting-started)

- [Deployment](#deployment)

- [Resources](#resources)

- [Developer Notes / Special Logic](#developer-notes--special-logic)

#

### Prerequisites

![React](https://img.shields.io/badge/React-19+-blue)

![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6)

![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-7+-CA4245)

![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7+-EC5990)

![React Toastify](https://img.shields.io/badge/React%20Toastify-11+-FF7F50)

![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5+-FF4154)

### Tech Stack

#### Frontend

- **React** 19.x

- **TypeScript**

- **Vite** (Build tool)

- **Node.js** >= 24

#### Other

- **React Router DOM** - Application routing

- **React Hook Form** - Input validation

- **TanStack Query** - Data fetching/handling

- **React Toastify** - application notifications

- **Framer Motion** - Animations & transitions

#

### Getting Started

1\. First of all make sure you have the following installed:

```sh

node -v

npm -v

```

2\. After that you need to clone Quiz wiz repository from github:

```sh

git clone https://github.com/RedberryInternship/dato-khizanishvili-quiz-wiz-front

```

3\. after you have gone into the application folder, it's time to install all the JS dependencies:

```sh

npm install

```

4\. After setting up the .env file execute this in the root of your project :

```sh

npm run dev

```

#

### Build for Production

To generate optimized production files:

```sh

npm run build

```

#

### Deployment

1\. SSH into your server:

```sh

ssh user@server

```

2\. Pull the latest changes:

```sh

git pull origin main

```

3\. Build production assets:

```sh
npm install

npm run build
```

7\. Reload services (nginx / php-fpm):

```sh
sudo systemctl reload nginx

sudo systemctl restart php8.x-fpm
```

#

### Resources

- **Database Diagram (DrawSQL):**

https://drawsql.app/teams/davitamane/diagrams/quizwiz

- **Production URL:**

https://quiz-wiz.dato-khizanishvili.redberryinternship.ge/

### Developer Notes / Special Logic

> No additional comments
