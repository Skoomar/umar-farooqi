# To Do
- Open Graph metadata updates for more SEO
- Payload CMS Blog
- full page scrolling
- rock climbing, guitar, racing etc abstract collage art for background
- funky gradient background on dark mode?
- rotation of photos on homepage
- Track page views: https://vercel.com/products/observability, https://web.dev/vitals/
- make background image fixed so the content below scrolls up to "cover" it instead of being scrolled up itself
- sort tailwind classes automatically with prettier: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier
  - or this which is less aggressive than prettier: https://plugins.jetbrains.com/plugin/13376-tailwind-formatter
- Tailwind v4
- use a cookie to store light/dark mode rather than using the supressHydrationWarning workaround

## Done
- how to change background, accents, etc globally
    - use input.css & that npx tailwind blah blah command to generate the output
- dark mode rendering differently on client vs server
- where do you put ThemeProviders in a NextJS project? - just bodge it in the layout.tsx apparently
- use styled-components or tailwind instead of this css shite
- add a component library - ~~probs MUI~~ -went with Chakra instead- ACTUALLY WE GOING with shadcn now
- need to set default styles for headings instead of defining them again and again

# Notes
- had to remove --turbopack because it seems to be preventing proper hot reload of tailwind styles
  - TODO: try/search up this issue again periodically to see if it's been fixed
