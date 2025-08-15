# CLAUDE.md

## AI Decision Framework

When working with this Next.js portfolio codebase, follow these strict implementation patterns:

### Code Generation Rules
- ALWAYS use TypeScript with explicit types - never `any`
- NEVER add comments unless handling non-obvious edge cases
- ALWAYS use named exports: `export const Component = () => {}`
- ALWAYS use `interface` for props, `type` for unions
- ALWAYS use descriptive boolean names: `isPending`, `hasError`, `isVisible`

### Component Creation Pattern
```typescript
interface ComponentProps {
  // explicit types here
}

export const ComponentName = ({ prop1, prop2 }: ComponentProps) => {
  // implementation
  return (
    <div className={cn("base-classes", conditionalClasses)}>
      {/* content */}
    </div>
  )
}
```

### File Creation Decision Tree
- **New component**: `src/components/[kebab-case-name].tsx`
- **New page**: `src/app/[route]/page.tsx`
- **New utility**: `src/lib/[kebab-case-name].ts`
- **New config**: `src/lib/config/[kebab-case-name].ts`
- **Blog post**: `content/blogs/[slug].mdx`

### Import Patterns - Use These Exactly
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "lucide-react"
import { motion } from "framer-motion"
```

### Styling Decision Matrix
- **UI Components**: Use shadcn/ui first, extend if needed
- **Animations**: Use framer-motion for meaningful interactions only
- **Icons**: Always lucide-react
- **Colors**: Dark theme `bg-[#141416]`, follow existing palette
- **Interactions**: Always add `hover:`, `focus:`, `transition` states

### Content Management Rules
- **Project data**: Add to `src/lib/config/projects.ts` with proper TypeScript interface
- **Blog posts**: MDX in `content/blogs/` with frontmatter
- **Images**: Store in `/public/`, reference without path prefix in config

## Tech Stack Implementation

### Required Dependencies (already installed)
- Next.js 14 + App Router + React 19
- TypeScript (strict mode)
- TailwindCSS + tailwindcss-animate
- shadcn/ui components
- Framer Motion
- Lucide React
- MDX processing: gray-matter, next-mdx-remote, rehype-highlight, rehype-pretty-code

### Development Commands
```bash
npm run dev    # localhost:3000
npm run build  # production build
npm run lint   # ESLint check
```


- Do not run or build unless explicitly asked by the user

## Critical File Locations

### Core Architecture Files
- `src/app/layout.tsx` - Root layout with SEO configuration
- `src/lib/utils.ts` - Contains `cn()` utility for className merging
- `src/lib/config/projects.ts` - Project data configuration
- `tailwind.config.ts` - Custom theme and animations

### Component Categories
- `src/components/ui/` - shadcn/ui components (button, carousel, tooltip)
- `src/components/` - Custom components (background effects, project cards)
- `src/app/(home)/` - Landing page sections
- `src/app/blog/` - Blog functionality

## Code Patterns to Follow

### State Management
```typescript
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
```

### Conditional Rendering
```typescript
{isLoading ? <Skeleton /> : <ActualContent />}
{error && <ErrorMessage error={error} />}
```

### TailwindCSS Class Composition
```typescript
className={cn(
  "base-classes here",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)}
```

### Framer Motion Usage
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
```

## Implementation Decision Rules

### When Creating New Features
1. **Check existing components first** - extend shadcn/ui before custom
2. **Define TypeScript interfaces** before implementation
3. **Use existing config patterns** from `src/lib/config/`
4. **Follow kebab-case naming** for files and folders
5. **Add proper SEO metadata** if creating new pages

### Performance Requirements
- Use `React.Suspense` for data loading
- Implement `Skeleton` components for loading states
- Lazy load heavy components with `dynamic()`
- Debounce search inputs and heavy interactions

### SEO Requirements (for new pages)
- Add metadata export with title, description, OpenGraph
- Include structured data if relevant
- Use semantic HTML elements
- Implement proper heading hierarchy

## Error Handling Patterns
```typescript
try {
  // async operation
} catch (error) {
  setError(error instanceof Error ? error.message : 'Unknown error')
}
```

## Project-Specific Context

This is CarboxyDev's portfolio website showcasing:
- Full-stack development projects
- Blog posts about development
- Skills and experience
- Contact information for freelance work

Key visual elements:
- Dark theme with particle background effects
- Smooth animations and transitions
- Modern card-based layout for projects
- Responsive design with mobile-first approach

## Path Aliases (configured)
- `@/*` maps to `src/*`

## Development Notes for AI
- Console logs automatically removed in production builds
- Particle effects are performance-optimized
- All project images stored in `/public/` without path prefixes
- MDX blog posts automatically processed with syntax highlighting
- Debug screens available in development mode only