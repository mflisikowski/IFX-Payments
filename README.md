# Next.js Blog & Posts Platform

A modern web application built with Next.js 15, React 19, and Tailwind CSS for managing and displaying blog posts.

## 📋 Features

- **Modern React & Next.js** - Uses the latest versions of React 19 and Next.js 15
- **App Router** - Built using Next.js App Router for enhanced routing capabilities
- **Post Management** - Create, view, and list blog posts
- **Dark Mode Support** - Seamless dark mode integration with next-themes
- **Responsive Design** - Mobile-first approach for all screen sizes
- **TypeScript** - Full TypeScript support for better development experience
- **UI Components** - Styled components using shadcn/ui and Tailwind CSS

## 🚀 Getting Started

First, clone the repository:

```bash
git clone https://github.com/mflisikowski/IFX-Payments
cd IFX-Payments
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🏗️ Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages
│   │   ├── posts/       # Posts related pages
│   │   │   ├── [id]/    # Single post page
│   │   │   └── new/     # New post creation page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   │   ├── fields/      # Form field components
│   │   ├── ui/          # UI components
│   │   └── ...
│   ├── constants/       # Global constants
│   ├── contexts/        # React contexts
│   ├── models/          # TypeScript interfaces
│   ├── providers/       # Context providers
│   ├── services/        # API services
│   └── utils/           # Utility functions
├── components.json      # shadcn/ui configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 💻 Key Components

### Posts

- **Post List** - Displays all posts with search functionality
- **Post Detail** - Shows individual post with author information
- **Post Form** - Form for creating new posts

### UI Components

The project uses shadcn UI components based on Radix UI primitives:

- Buttons
- Cards
- Dropdown menus
- Input fields
- Textarea fields

### Theming

The application supports both light and dark modes using:

- ThemeProvider from next-themes
- Theme toggle component
- CSS variables for theme colors

## 🧰 Technologies

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Theme Switching**: next-themes
- **Utility Libraries**: clsx, class-variance-authority, tailwind-merge

## 🔄 API Integration

The application communicates with an external API (likely JSONPlaceholder or similar) to:

- Fetch all posts
- Fetch individual posts
- Fetch user data
- Create new posts
