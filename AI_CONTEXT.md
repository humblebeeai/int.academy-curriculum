# AI & Contributor Context

## Project: HumbleBeeAI Academy Curriculum

This project uses **Docusaurus** with **React** and **Tailwind-like CSS Modules**.

### UI & Styling Standards

#### 1. Components vs. "Stickers"

We strictly avoid raw "sticker" styles (inline CSS, emojis) in favor of semantic React components or CSS classes.
**Do Not Use:**

- `style={{ border: '1px solid red' }}`
- Raw emojis in lists: `- ✅ Benefit`

**Use:**

- CSS Modules: `styles.cardDanger`
- Automated Icon Replacement: just write the emoji, and the system auto-converts it (see below).

#### 2. Automated Emoji Replacement

To make contributing easy, we have a system in `src/theme/MDXComponents.tsx` that intercepts common Markdown elements.

**How it works:**
If a user writes a list item starting with specific emojis, it is rendered as a `lucide-react` icon.

| Markdown Input | Renders As |
| :--- | :--- |
| `- ✅ Working` | `<CheckCircle2 /> Working` (Green) |
| `- ❌ Failed` | `<XCircle /> Failed` (Red) |
| `- 📚 Books` | `<Library /> Books` (Blue) |
| `- 🚀 Fast` | `<Rocket /> Fast` (Orange) |
| `- 💡 Tip` | `<Lightbulb /> Tip` (Yellow) |

**Supported Emojis:**
`✅`, `❌`, `📍`, `🗺️`, `📚`, `📖`, `🚀`, `💡`, `🎯`, `🏫`, `⚙️`, `📝`, `⚡`, `🧠`

### 3. CSS Architecture

- **Global Variables**: Defined in `src/css/custom.css`. Use `var(--ifm-color-primary)`, `--duration-normal`, `--hover-lift-sm`.
- **MDX Utilities**: We have global utility classes for MDX content:
  - `.mdx-card`
  - `.mdx-hero`
  - `.mdx-grid`

### 4. Contribution Workflow

When adding new content:

1. Use `.mdx` files.
2. Use standard Markdown for structure.
3. Use the auto-emoji system for visual flair in lists.
4. Use `.mdx-card` divs for block layouts.
