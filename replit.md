# Cehpoint Business Website

## Overview

This is a modern business website for Cehpoint, a software development company specializing in e-commerce, edutech, and fintech solutions. The application features a React frontend with Express backend, designed to showcase portfolio work, generate AI-powered project quotations, and provide information about services and internship opportunities. The site emphasizes 24-hour demo delivery and a 100% advance payment engagement model.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for home, services, quotations, and demo delivery
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: React Hook Form for form handling, TanStack Query for server state management
- **Design System**: Custom gradient effects, glass morphism styling, and responsive design patterns

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for quotation generation and retrieval
- **Storage**: In-memory storage implementation with interface for future database integration
- **AI Integration**: Google Gemini AI for intelligent project quotation generation
- **Session Management**: Built-in session handling with connect-pg-simple for PostgreSQL sessions

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM with Neon serverless database
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Implementation**: Memory storage with interface allowing easy migration to persistent storage
- **Schema Design**: Users, quotation requests, and quotation responses with relational structure

### Authentication and Authorization
- **Session-based**: Express sessions with PostgreSQL session store
- **User Management**: Basic user schema with username/password authentication
- **Security**: Password hashing and session security measures

### External Dependencies
- **AI Services**: Google Gemini API for project analysis and quotation generation
- **Database**: Neon PostgreSQL serverless database
- **UI Libraries**: Radix UI for accessible component primitives
- **Development Tools**: Vite for fast development and building, ESBuild for production bundling
- **External Links**: Integration with portfolio (portfolios.cehpoint.co.in) and internship system (internlink.cehpoint.co.in)
- **Styling**: Tailwind CSS with PostCSS for styling pipeline
- **Forms**: React Hook Form with Zod validation for type-safe form handling