# Neuzy 📰

A modern, interview-ready React news application built with React 19, Vite, Tailwind CSS v4, and the NewsData.io API.

---

## ⚡ Features

- **Breaking & Top Headlines:** Live headlines fetched from NewsData API.
- **Category Navigation:** Filter news by Business, Technology, Sports, Entertainment, Health, and Science.
- **Search & Debouncing:** Instant search with built-in `useDebounce` hook to reduce API requests.
- **Detailed Article View:** Full story page with publisher details, publishing date, and related articles sidebar.
- **Bookmarks & Offline Persistence:** Save articles locally using React Context API & LocalStorage.
- **Dark / Light Theme Toggle:** Instant theme switching with custom CSS properties & Tailwind CSS.
- **Responsive Newspaper UI:** Mobile-first editorial design built with Tailwind CSS v4.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router DOM (v7)
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS v4
- **State & Persistence:** Context API + LocalStorage
- **Data Provider:** NewsData.io API

---

## 📁 Project Structure

```text
src/
├── components/      # Reusable UI components (Navbar, NewsCard, Sidebar, etc.)
├── context/         # Context Providers (BookmarkContext, ThemeContext)
├── hooks/           # Custom React Hooks (useDebounce, useFetch, useLocalStorage, etc.)
├── layouts/         # MainLayout wrapper
├── pages/           # Route views (Home, Category, Article, Search, Bookmark, etc.)
├── services/        # Axios API client (newsApi.js)
├── index.css        # Tailwind CSS v4 setup & theme variables
├── App.jsx          # Route configuration
└── main.jsx         # App root & providers
```

---


