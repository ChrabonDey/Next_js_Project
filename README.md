# Blog Viewer Application

This project is a simple blog viewer application built using **Next.js**. It demonstrates routing, server and client components, dynamic routes, authentication, and data fetching. The app allows users to view a list of blog posts, navigate to detailed pages, and access a protected profile page with authentication using Kinde Auth.

---

## Features

### 1. Home Page

- Displays a list of blog post titles fetched from a mock API.
- Each title links to a detailed page for the corresponding post.

### 2. Blog Details Page

- Uses a dynamic route (`/blog/[id]`) to display details of a specific blog post.
- Fetches blog details based on the `id` in the URL.

### 3. Protected Profile Page

- Static route (`/profile`) that displays a message: "Welcome to your profile!"
- Protected by Kinde Auth.
- Redirects users to the login page if they are not authenticated.

### 4. Navigation

- Header with links to "Home" and "Profile."
- Shows a "Login" button if the user is not authenticated, and a "Logout" button if they are authenticated.

### 5. Styling

- Basic styling using **Tailwind CSS** for a clean and responsive UI.

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blog-viewer-application
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory for Kinde Auth configuration:

   ```env
   KIND_AUTH_CLIENT_ID=your_client_id
   KIND_AUTH_CLIENT_SECRET=your_client_secret
   KIND_AUTH_ISSUER_URL=your_issuer_url
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

##

## Authentication with Kinde

- Integrated Kinde Auth for secure authentication.
- Protected routes using `middleware.js`.
- Redirects unauthorized users to the login page.

### Middleware Example

```javascript
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return NextResponse.redirect("/api/auth/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
```

---

## API Usage

### Fetch All Posts

```javascript
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
```

### Fetch Post by ID

```javascript
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
const post = await response.json();
```

---

## Live Demo

The project has been deployed at:
[Live Demo Link](https://your-deployment-url.com)

---

##

---

##

---

## Author

Developed by [ChrabonDey].

