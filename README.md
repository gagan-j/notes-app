# note-app – React + Vite + Tailwind CSS

A modern Notes application built with **React**, **Vite**, and **Tailwind CSS**, featuring responsive UI, efficient state management, and smooth navigation.

🔗 **Live Demo:** [https://notes-app-sand-psi.vercel.app](https://notes-app-sand-psi.vercel.app)

---

## Key Features

- Create, edit, and delete notes seamlessly.
- State management using **Redux Toolkit**.
- Responsive design with **Tailwind CSS**.
- Navigation handled by **React Router DOM**.
- Notifications using **React Hot Toast**.

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:gagan-j/note-app.git
   cd note-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:5173](http://localhost:5173) to view the app.

---

## Project Structure

```
note-app/
│
├── node_modules/           # Installed packages
├── public/                 # Static assets
├── src/                    # React components and pages
│   ├── components/         # Reusable UI components
│   ├── pages/              # App pages
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── .eslintrc.js            # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies & scripts
```

---

## Scripts

| Command             | Description                              |
|---------------------|------------------------------------------|
| `npm run dev`       | Start development server with hot reload |
| `npm run build`     | Build the project for production         |
| `npm run preview`   | Preview the production build             |

---

## Technologies Used

| Technology       | Purpose                              |
|------------------|--------------------------------------|
| **React**        | Component-based UI library           |
| **Vite**         | Fast development and optimized builds |
| **Tailwind CSS** | Utility-first CSS framework          |
| **Redux Toolkit**| Predictable state management         |
| **React Router** | Client-side navigation               |
| **React Hot Toast** | User-friendly notifications       |