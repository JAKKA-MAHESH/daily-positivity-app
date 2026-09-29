# Daily Dose of Positivity 🌱

> One gentle thought. One tiny action. A calmer moment, every day.

<!-- Screenshot placeholder: insert a project screenshot here. -->

## What it does

Daily Dose of Positivity is a lightweight, privacy-friendly single-page app that gives visitors one random affirmation and one tiny positive action. It focuses on small, realistic moments of care rather than pressure to overhaul an entire day.

Everything runs in the browser. There is no framework, backend, build tool, account, or runtime dependency.

## Badges

**Open Source** · **Beginner Friendly** · **Mental Wellness**

## Features

- 100 unique affirmations
- 100 unique positive micro-actions
- Random pair on page load
- New Day refresh
- Separate copy-to-clipboard controls with toast feedback
- Local daily visit counter
- Persistent light/dark mode
- X/Twitter share link
- Animated gradient-like ambient background
- Loading pulse, hover, ripple, glow, copy bounce, toast, and text-reveal animations
- Reduced-motion support
- Semantic HTML5 and ARIA support
- Keyboard-friendly controls and visible focus states
- Print styles
- Graceful JavaScript-disabled fallback
- No external runtime dependencies
- GitHub Pages and Netlify ready
- PWA-ready comment for a future manifest/service worker

## Project structure

```text
daily-positivity-app/
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE
```

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a modern browser.
3. No installation or build command is required.

## Deploy

### GitHub Pages

1. Create a GitHub repository.
2. Upload all project files.
3. Go to **Settings → Pages**.
4. Choose the desired branch and the repository root.
5. Save and open the published Pages URL.

Update the GitHub link in `index.html` and the Open Graph URL before publishing.

### Netlify

**Drag and drop:** create a site in Netlify and drop the project folder into the deploy area.

**Git deployment:** connect the repository, leave the build command empty, use the repository root as the publish directory, and deploy.

## Contributing

Contributions are welcome, especially thoughtful affirmations, tiny positive actions, translations, accessibility improvements, documentation, and bug fixes.

When adding content, avoid duplicates, guilt-based language, medical promises, harmful claims, or pressure to feel positive.

## Accessibility

The UI uses semantic landmarks, a logical heading hierarchy, keyboard-accessible controls, visible focus states, ARIA labels/live regions, reduced-motion support, readable typography, and print-friendly styles.

Customized colors and content should still be checked with a current WCAG accessibility tool before production use.

## Privacy

No personal information is sent to a server. The browser stores only the daily visit count, last visit date, and theme preference. The share link opens X/Twitter only when the visitor chooses it.

## Mental wellness note

This app provides gentle everyday wellbeing prompts. It is not medical advice, diagnosis, treatment, or a substitute for professional care. If someone is in immediate danger or experiencing a mental health crisis, contact local emergency services or an appropriate crisis support service.

## License

MIT. See [`LICENSE`](./LICENSE).
