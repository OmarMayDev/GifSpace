# GifSpace

## Description

GifSpace is the go-to platform for users to upload, share, and discover GIFs. Whether you're looking for funny memes, educational animations, or creative visuals, GifSpace provides a diverse collection to explore. With a simple sign-up and sign-in process, users can easily upload their own GIFs and engage with the community.

## Features

- **User Authentication**: Secure sign-in and sign-up system.
- **Upload GIFs**: Users can upload and share their own GIFs.
- **Like System**: Users can like GIFs from other users.
- **Community Page**: View all GIFs uploaded by the community.
- **Account Management**: Users can delete their account and log out.

## Tech Stack

GifSpace is built with a modern full-stack approach using the following technologies:

### Frontend

- **Next.js (15.2.4)**: React framework for server-side rendering and static site generation.
- **React (19.0.0)** & **React DOM (19.0.0)**: Core React library for building the UI.
- **React Icons (5.5.0)**: Collection of icons for UI enhancement.
- **Zustand (5.0.3)**: Lightweight state management solution.
- **Tailwind CSS (4)**: Utility-first CSS framework for styling.

### Backend

- **Prisma (6.5.0)**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL** (via **Neon**) for database storage.
- **Supabase (2.49.4)**: Used for storing GIF files.
- **Bcrypt/Bcryptjs**: Password hashing for authentication security.

### Development & Tooling

- **TypeScript (5)**: Type safety and improved developer experience.
- **ESLint (9)**: Linting for code quality.
- **Tailwind CSS PostCSS Plugin**: Enhancing Tailwind functionality.

## Installation

To run GifSpace locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/gifspace.git
   cd gifspace
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up your environment variables:

   - Configure Supabase and PostgreSQL credentials.
   - Prisma database connection string.

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Build for production:
   ```sh
   npm run build
   npm start
   ```

## Usage

- Sign up or log in to start uploading GIFs.
- GIF preview before upload
- Browse the community page to discover GIFs from other users.
- Like your favorite GIFs.
- See how many likes you and others have
- Manage your account from the account page.

## License

This project is licensed under the MIT License.

## Contribution

Feel free to open issues and submit pull requests to improve GifSpace!
