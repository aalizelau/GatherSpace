# GatherSpace 

A social media platform built with Next.js, inspired by platforms like Twitter and Meta's Threads. It allows users to create and interact with posts, join communities, and engage with other users.

## Features

- User authentication and profile management
- Create, view, and comment on threads
- Community creation and management
- Real-time updates and interactions
- Responsive design for various device sizes
- Dark theme support
- File uploads for user avatars and thread attachments
- Search functionality for users and communities
- Activity tracking for user interactions

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- MongoDB with Mongoose
- Clerk for authentication
- Tailwind CSS for styling
- Uploadthing for file uploads
- Zod for schema validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (see `.env.example` for required variables)
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/`: Next.js app directory containing pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions, database models, and server actions
- `public/`: Static assets

## Key Components

- ThreadCard: Displays individual thread posts
- UserCard: Shows user information in a card format
- CommunityCard: Displays community information
- PostThread: Form for creating new threads
- ThreadsTab: Tab component for displaying user or community threads

## Server Actions

Server actions are located in the `lib/actions/` directory:
- `user.actions.ts`: User-related actions (fetch user, update profile, etc.)
- `thread.actions.ts`: Thread-related actions (create, fetch, comment, etc.)
- `community.actions.ts`: Community-related actions (create, fetch, manage members, etc.)

## Database Models

MongoDB models are defined in `lib/models/`:
- `user.model.ts`: User schema
- `thread.model.ts`: Thread schema
- `community.model.ts`: Community schema

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
