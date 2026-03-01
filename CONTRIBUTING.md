# Contributing Guidelines

Thank you for contributing to Mini Home Hotel website project! To ensure consistency and quality across the codebase, please follow these rules:

## Coding Standards

- **Consistency:** Follow existing naming conventions and directory structures.
- **Language:** Code comments and documentation should be in English where possible, but UI content is multilingual (UK, EN, PL, DE).
- **TypeScript:** Use strict types. Avoid using `any` unless absolutely necessary.
- **Angular:** Use Standalone Components (as currently implemented).
- **CSS:**
  - Use CSS variables for colors, spacing, and typography.
  - Follow the established BEM-like or scoped CSS pattern.
  - Prioritize responsive design (mobile-first approach).

## Component Rules

- Each page should have its own folder in `src/app/pages/`.
- Shared components belong to `src/app/components/`.
- Services should be in `src/app/services/`.
- Every component should be standalone and use `CommonModule` if needed.

## Git Workflow

- Keep commits small and focused.
- Write clear, descriptive commit messages.

## AI Helper Instructions

- If you are an AI assistant helping with this project:
  - Always respect the `LanguageService` for multilingual support.
  - Ensure all new text is added in all four supported languages (UK, EN, PL, DE) in the component's `labels` or `content` object.
  - Follow the theme variables in `src/styles.css`.
  - When modifying UI, ensure it works well on mobile.

Thank you for your help!
