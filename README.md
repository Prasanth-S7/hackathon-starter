# Hackathon Starter Template

A complete full-stack development template to kickstart your hackathon projects.

## Tech Stack

### Frontend
- **React** - A JavaScript library for building user interfaces
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautifully designed components built with Radix UI and Tailwind CSS

### Backend
- **Express** - Fast, unopinionated, minimalist web framework for Node.js
- **Better Auth** - Advanced authentication solution for your applications
- **Prisma** - Next-generation ORM for Node.js and TypeScript
- **PostgreSQL** - Powerful, open source object-relational database system

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- Yarn package manager
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Prasanth-S7/hackathon-starter.git
cd hackathon-starter
```

2. Set up the frontend:
```bash
cd client
yarn
```

3. Set up the backend:
```bash
cd ../server
yarn
```

4. Configure environment variables:
   
   Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=3000
   BETTER_AUTH_SECRET=
   BETTER_AUTH_URL=http://localhost:3000
   DATABASE_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```

   Create a `.env` file in the `client` directory:
   ```
   VITE_GOOGLE_CLIENT_ID=
   VITE_GOOGLE_CLIENT_SECRET=
   BETTER_AUTH_SECRET=
   VITE_BASE_URL=http://localhost:5173
   ```

5. Set up the database:
```bash
cd server
npx prisma generate client
npx prisma migrate dev
```

## Development

### Start the backend server:
```bash
cd backend
yarn dev
```

### Start the frontend development server:
```bash
cd client
yarn dev
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:3000`.

## Features

- User authentication (signup, login, password reset)
- User authorization with role-based access control
- RESTful API structure
- Database migrations with Prisma
- Modern UI components with shadcn/ui and Tailwind CSS
- Responsive design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)