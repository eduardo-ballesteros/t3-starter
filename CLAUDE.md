# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

This is a Next.js 15 application built with the T3 Stack architecture, combining modern web development tools focused on AI interactions.

### Core Framework
- **Next.js 15.5.4** - React framework with App Router architecture
- **React 19.1.0** - Latest React with improved compiler runtime
- **TypeScript 5.9.3** - Strict mode enabled, ES2017 target
- **Turbopack** - Next-generation bundler for dev and production builds

### API & Data Layer
- **tRPC 11.6.0** - End-to-end type-safe APIs
  - `@trpc/server` - Server-side tRPC setup
  - `@trpc/client` - Client-side tRPC
  - `@trpc/react-query` - React Query integration
- **TanStack React Query 5.90.2** - Data fetching, caching, and state management
- **Drizzle ORM 0.44.6** - Type-safe SQL ORM
  - `better-sqlite3` - SQLite database driver
  - `drizzle-kit 0.31.5` - Migration and introspection tool
- **Zod 4.1.11** - Runtime type validation and schema definition

### AI Integration
- **Vercel AI SDK 5.0.60** - Core AI SDK with streaming support
- **AI SDK Providers**:
  - `@ai-sdk/anthropic 2.0.23` - Claude integration
  - `@ai-sdk/openai 2.0.42` - OpenAI/ChatGPT integration
  - `@ai-sdk/google 2.0.17` - Google AI integration
  - `@ai-sdk/react 2.0.60` - React hooks for AI interactions
- **AI UI Components** - Custom AI Elements library (based on Vercel's AI Elements patterns)
  - Located in `src/components/ai-elements/`
  - Includes conversation, messages, code blocks, artifacts, reasoning displays, etc.

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework with PostCSS
- **shadcn/ui** - High-quality React components
  - Style: New York variant
  - Base color: Slate
  - CSS variables enabled for theming
  - Built on Radix UI primitives
- **Radix UI** - Unstyled, accessible component primitives
  - Avatar, Dropdown Menu, Select, Tooltip, Scroll Area, Collapsible, etc.
- **lucide-react 0.544.0** - Icon library
- **class-variance-authority 0.7.1** - CVA for component variants
- **tailwind-merge 3.3.1** - Utility for merging Tailwind classes
- **tw-animate-css 1.4.0** - Animation utilities

### Developer Experience
- **Biome 2.2.0** - Fast linter and formatter (replaces ESLint + Prettier)
  - Configured for Next.js and React
  - Auto-organize imports enabled
  - Strict rules with recommended presets
- **Geist Font** - Vercel's font family (Sans & Mono variants)

### Additional Libraries
- **embla-carousel-react 8.6.0** - Carousel/slider component
- **react-syntax-highlighter 15.6.6** - Code syntax highlighting
- **nanoid 5.1.6** - Unique ID generation
- **use-stick-to-bottom 1.1.1** - Auto-scroll management for chat interfaces
- **streamdown 1.3.0** - Markdown streaming utilities
- **tokenlens 1.3.1** - Token counting utilities
- **magic-string** - String manipulation for transformations

## Key Commands

**Development:**
```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build with Turbopack
npm start            # Start production server
```

**Code Quality:**
```bash
npm run lint         # Run Biome checks
npm run format       # Format code with Biome
```

## Architecture Overview

### AI-Focused Application
This app is centered around AI interactions using the Vercel AI SDK with a comprehensive set of AI UI components.

**AI Elements** (`src/components/ai-elements/`):
Based on Vercel's AI Elements patterns, this is a custom implementation providing:
- **Conversation components**: `<Conversation>`, `<Message>`, `<Response>` for chat interfaces
- **Code handling**: `<CodeBlock>` with syntax highlighting via react-syntax-highlighter
- **Artifacts & Tools**: Display for tool executions and generated artifacts
- **Reasoning**: `<ChainOfThought>`, `<Reasoning>` for displaying AI thinking process
- **Context & Sources**: `<Context>`, `<Sources>`, `<InlineCitation>` for attribution
- **Inputs**: `<PromptInput>`, `<Suggestion>` for user interactions
- **Media**: `<Image>`, `<WebPreview>` for rich content display
- **State**: `<Loader>`, `<Branch>` for conversation states
- **Actions**: `<Actions>`, `<OpenInChat>`, `<Task>` for user actions

**AI SDK Integration**:
- Supports multiple providers: Anthropic (Claude), OpenAI (GPT), Google (Gemini)
- Streaming responses with `useChat`, `useCompletion` hooks from `@ai-sdk/react`
- Server-side AI routes using Vercel AI SDK's streaming primitives

### Component Structure
- **UI Components**: `src/components/ui/` - shadcn/ui components (Radix UI primitives)
- **AI Elements**: `src/components/ai-elements/` - Specialized AI interaction components
- **Utils**: `src/lib/utils.ts` - Utility functions including `cn()` for class merging

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` maps to `src/*`
- Component imports: `@/components/...`
- Utils: `@/lib/utils`

### Styling
- Tailwind CSS v4 with CSS variables for theming
- Base color: slate
- shadcn/ui New York style with CSS variables
- Icons: lucide-react
- Animations: tw-animate-css

### Database Layer (Setup Required)
**Drizzle ORM with SQLite**:
- Using `better-sqlite3` for embedded SQLite database
- `drizzle-kit` available for migrations and schema management
- No `drizzle.config.*` or schema files exist yet
- When setting up:
  - Create schema files in `src/db/schema.ts` (or similar)
  - Define `drizzle.config.ts` at project root
  - Use `drizzle-kit generate` for migrations
  - Use `drizzle-kit push` for development schema sync

### API Layer (Setup Required)
**tRPC with React Query**:
- Full tRPC stack installed and ready to configure
- No server/tRPC routers exist yet (`src/server/` directory not created)
- When implementing:
  - Create tRPC context in `src/server/trpc.ts`
  - Define routers in `src/server/routers/`
  - Create app router in `src/server/root.ts`
  - Set up tRPC API route handler in `src/app/api/trpc/[trpc]/route.ts`
  - Configure tRPC client provider for React Query integration
- All type-safety flows from server to client automatically via tRPC

## Development Notes

### Code Quality with Biome
- **Linting & Formatting**: Biome replaces both ESLint and Prettier for faster performance
- **Configuration** (`biome.json`):
  - Recommended rules enabled for Next.js and React
  - Auto-organize imports on save
  - Git integration with VCS support
  - 2-space indentation
  - Ignores: `node_modules`, `.next`, `dist`, `build`
- **Commands**:
  - `npm run lint` - Check for issues
  - `npm run format` - Auto-format code

### TypeScript Configuration
- **Strict mode** enabled for maximum type safety
- **Target**: ES2017 for modern JavaScript features
- **Module resolution**: Bundler strategy (Next.js optimized)
- **JSX**: Preserve mode (handled by Next.js)
- **Path aliases**: `@/*` maps to `src/*`
- Includes Next.js TypeScript plugin for enhanced IDE support

### Build & Performance
- **Turbopack**: Used for both development and production builds
  - Faster than Webpack
  - Incremental builds enabled
  - Hot Module Replacement (HMR) optimized
- **React 19**: Includes improved compiler runtime and performance optimizations
- **Next.js 15**: App Router with React Server Components by default

### Font Optimization
- **Geist Sans & Mono**: Vercel's font family automatically optimized via `next/font`
- Fonts are self-hosted and loaded with zero layout shift
- CSS variables: `--font-geist-sans`, `--font-geist-mono`

## Important Patterns

### Component Development
1. **Client vs Server Components**:
   - AI elements and interactive UI use `"use client"` directive
   - Default to Server Components when possible (App Router default)
   - Move client-only code to separate client components

2. **Class Name Management**:
   - Use `cn()` utility from `@/lib/utils` for conditional class merging
   - Powered by `tailwind-merge` and `clsx`
   - Example: `cn("base-class", condition && "conditional-class", className)`

3. **Component Props Pattern**:
   - Extend native HTML element props: `ComponentProps<'div'>`, `ComponentProps<typeof Button>`
   - Spread remaining props with `{...props}` for flexibility
   - Extract specific props, forward the rest

4. **shadcn/ui Usage**:
   - Components are copied into `src/components/ui/` (not npm packages)
   - Customize directly in your codebase
   - Use `components.json` for configuration
   - Built on Radix UI with full accessibility

### AI Patterns
1. **Chat Interface**:
   - Use `<Conversation>` with `use-stick-to-bottom` for auto-scroll
   - `<StickToBottom>` wraps scrollable area
   - `<ConversationScrollButton>` appears when not at bottom

2. **Streaming Responses**:
   - Leverage Vercel AI SDK's streaming capabilities
   - Use `useChat()` or `useCompletion()` hooks from `@ai-sdk/react`
   - Handle partial responses in UI (streamdown for markdown)

3. **Type Safety**:
   - Zod schemas for validation (runtime + compile-time)
   - tRPC procedures ensure end-to-end type safety
   - No manual type definitions needed between client/server

### Code Organization
- **Components**: Group by feature in `src/components/`
- **Utils**: Shared utilities in `src/lib/`
- **Types**: Co-locate types with implementation or use `src/types/` for shared types
- **API**: tRPC routers in `src/server/routers/`, AI routes in `src/app/api/`
- **Database**: Schemas in `src/db/schema.ts`, queries co-located with tRPC procedures
