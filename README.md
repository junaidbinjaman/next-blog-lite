# Next.js Project with shadcn/ui Typography

A modern Next.js 14 project using TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com/) for a scalable UI component library, including pre-styled typography components.

---

## Table of Contents

- [Features](#features)  
- [Folder Structure](#folder-structure)  
- [Getting Started](#getting-started)  
- [Typography Components](#typography-components)  
- [Usage](#usage)  
- [Customization](#customization)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Next.js 14 + TypeScript setup  
- Tailwind CSS for utility-first styling  
- shadcn/ui for reusable UI components  
- Pre-styled Typography components: headings, paragraphs, blockquotes, lists  
- Flexible folder structure for scalability  

---

## Folder Structure

```

├── app/                     # Next.js App Router
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Typography.tsx    # shadcn/ui Typography components
│   │   │   └── ...                # other reusable UI components
│   │   └── ...                     # page-specific components
│   ├── page.tsx                   # main page entry
│   └── ...
├── public/                       # static assets
├── styles/                       # global CSS and Tailwind config
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # npm dependencies and scripts

````

---

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your project.

---

## Typography Components

Pre-built typography components using Tailwind CSS. Examples include:

* `TypographyH1` – Main headings
* `TypographyH2` – Subheadings
* `TypographyP` – Paragraph text
* `TypographyBlockquote` – Blockquotes

Located at: `app/components/ui/Typography.tsx`

### Example Usage

```tsx
import { TypographyH1, TypographyP, TypographyBlockquote } from "@/components/ui/Typography";

export default function Home() {
  return (
    <main className="prose mx-auto">
      <TypographyH1>Hello World</TypographyH1>
      <TypographyP>
        This is a paragraph using the pre-styled Typography component.
      </TypographyP>
      <TypographyBlockquote>
        "This is a sample blockquote."
      </TypographyBlockquote>
    </main>
  );
}
```

---

## Customization

* Modify Tailwind classes in `Typography.tsx` to change font size, color, spacing, etc.
* Add new typography variants or additional components as needed.

---

## Contributing

Contributions are welcome! Please submit a PR or open an issue for suggestions.

---

## License

This project is licensed under the MIT License.

```

---

I can also make a **more advanced version** that includes **shadcn/ui component installation commands, automated `cn()` class merging, and ready-to-use TypeScript props for Typography variants**, which makes it production-ready.  

Do you want me to make that advanced version?
```
