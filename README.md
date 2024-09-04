<div align="center">
  
  <img src="./public/logo.png"
  alt="The Wild Oasis" width="96" style="vertical-align: middle;" />
  <h1>The Wild Oasis</h1>
  
</div>

Welcome to [**The Wild Oasis**](https://the-wild-oasis-website-clone.vercel.app/), a comprehensive hotel management system featuring a customer-facing website and an admin management system. This project is designed to streamline the booking process for customers and provide an intuitive management interface for hotel administrators.

## Overview
           
In addition, the project includes an [admin management system](https://the-wild-oasis-backstage.vercel.app/dashboard) that the hotel's staff with the tools they need to efficiently manage cabins, bookings, and hotel settings. You can find the source code [here](https://github.com/Peng-Yujie/MyMiniProjects/tree/main/React/the-wild-oasis).

### Fore Stage (This Customer-Facing Website)

![homepage](https://github.com/user-attachments/assets/e6053e67-150d-4e10-9409-628bc2d9f0a0)

**Features**:

- **User Authentication**: Secure login using Google Auth.
- **Cabin Booking**: Users can browse cabins, view details, and book directly from the site.
- **Booking Management**: Users can review and manage their bookings through the user profile page.

**Pages**:

- **Home**: Welcome page with featured cabins and hotel information.
- **Cabins**: Detailed listing of available cabins with images, descriptions, and pricing.
- **About**: Information about The Wild Oasis, its location, and amenities.
- **User Profile**: User-specific dashboard where customers can view and manage their bookings.

|Cabins|About|User Profile|
|---|---|---|
|![cabins](https://github.com/user-attachments/assets/8a2ce1d6-3072-4bd5-8901-a8db46eae2b5)|![about](https://github.com/user-attachments/assets/84d68ec6-6ad9-4a18-8c0e-f37465f98173)|![bookings](https://github.com/user-attachments/assets/33de114d-0a30-415d-b60c-a402002749d8)|

### Back Stage (Admin Management System)

**Features**:

- **Dashboard**: Homepage showing recent updates and key statistics (e.g., bookings, revenue).
- **Cabin Management**: Easily add, modify, or remove cabins from the cabins.
- **Booking Management**: Full control over customer bookings, including the ability to check-in, check-out, and cancel.
- **Hotel Settings**: Update critical settings such as minimum and maximum nights per booking, and guest limits.

|Dashboard|Cabins|Bookings|Settings|
|---|---|---|---|
|![dashboard](https://github.com/user-attachments/assets/bb3b4110-d655-4eae-8ad3-8f1bac19a101)|![cabins](https://github.com/user-attachments/assets/3d0c4d7f-7545-4fdf-a88f-2944a450699a)|![bookings](https://github.com/user-attachments/assets/e1352ecc-1b2c-4afe-9568-2521e36c53e5)|![settings](https://github.com/user-attachments/assets/2d2a0d61-e608-4b84-ab27-b4514e3cc44b)|

## Tech Stack

### Fore Stage

- **Next.js**: React framework for building server-side rendered applications.
- **Google Auth**: OAuth2 authentication system for user login.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Back Stage

- **Vite**: Fast build tool and development server.
- **Supabase**: Backend-as-a-Service (BaaS) for database management and authentication.
- **React Query**: Data-fetching library for managing server-state in React applications.
- **Styled Components**: CSS-in-JS library for styling React components.

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **NPM** or **Yarn**
- **Supabase** account and project setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/the-wild-oasis.git
cd the-wild-oasis
```

## Getting Started

Set up environment variables for Supabase and Google Auth in a `.env.local` file:

```env
SUPABASE_URL=<YourSupabaseUrl>
SUPABASE_KEY=<YourSupabaseKey>

NEXTAUTH_URL=http://localhost:3000 # during development
NEXTAUTH_SECRET=YourNextAuthSecret # generate a random string

AUTH_GOOGLE_ID=YourGoogleOauthID
AUTH_GOOGLE_SECRET=YourGoogleOauthSecret
```

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
