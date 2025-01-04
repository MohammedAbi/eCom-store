# eCommerce Store Frontend

This project is a React-based eCommerce store frontend, built using Vite for fast development and optimized builds.

## Features

- **Fast Refresh**: Utilizes Vite's Hot Module Replacement (HMR) for instant updates during development.
- **ESLint Integration**: Includes ESLint for code quality and consistency.
- **React Router**: Implements client-side routing for seamless navigation.
- **State Management**: Employs Redux Toolkit for efficient state management.
- **Styling**: Styled with Tailwind CSS for rapid UI development.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/ecommerce-frontend.git
   cd ecommerce-frontend
   ```

2. **Install project dependencies**:

   ```bash
   npm install
   ```

3. **Install Tailwind CSS and its peer dependencies:**:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   ```

4. **Configure Tailwind CSS:**

- In tailwind.config.js, set the content paths:

  ```bash
  /** @type {import('tailwindcss').Config} */
  module.exports = {
     content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
  };
  ```

- In src/index.css, add the Tailwind directives:

  ```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

5. **Install ESLint and related plugins:**

```bash
npm install -D eslint @eslint/js eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

5. **Install React Router and Redux Toolkit:**

```bash
npm install react-router-dom @reduxjs/toolkit react-redux
```

### Running the Application

```bash
npm run dev
```

Access the application at http://localhost:5173.

## Acknowledgments

This project is inspired by the tutorial "Complete Front-End eCommerce Website Tutorial | React, Redux Toolkit, Tailwind CSS" by [Code With Yousaf](https://www.youtube.com/watch?v=5r6lnqP4V2s). ([youtube.com](https://www.youtube.com/watch?v=5r6lnqP4V2s))
