# HRM App - Reward System

A frontend-only web application for employee reward system built with React, TypeScript, and Vite.

## Features

- Employee Login
- Attendance Tracking
- Performance Monitoring
- Reward Points and Badges
- Bonuses
- Feedback Submission
- AI-Powered Analysis (Mock)

## Purpose

To improve motivation and productivity through a fair and efficient reward system.

## AI Integration

Integrates AI tools for data-driven decisions:
- Microsoft Copilot for insights
- Power BI for visualization (placeholder)
- Canva AI for design (placeholder)
- Python/ML Models (placeholder)

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173

## Usage

- Login with any username and password
- Navigate through dashboard to access features
- Mark attendance, view performance, check rewards, submit feedback
- View AI analysis for insights

## Future Improvements

- Real backend integration
- Actual AI model integration
- Enhanced UI/UX
- Data persistence improvements
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
