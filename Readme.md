# 🐾 Peddy - Pet Adoption Platform

Welcome to **Peddy**, a dynamic pet adoption platform built with React and Tailwind CSS as part of **Assignment 6**. Users can browse pets, filter by category, view detailed information, like their favorites, and adopt pets through an interactive and responsive interface powered by external APIs.

🔗 **Live Demo**: [https://ambakhtiar.github.io/MS6-A-Adopt-Pet/](https://ambakhtiar.github.io/MS6-A-Adopt-Pet/)

---

## 📜 Description

Peddy is an engaging web application where users can:

- Explore a variety of pets available for adoption.
- Filter by categories like Dog, Cat, Bird, Rabbit, etc.
- Sort pets by price.
- View pet details in a modal.
- Like pets to a wishlist.
- Adopt pets with an interactive button animation.

The application consumes real-time data from an external API and follows a mobile-first, responsive design using Tailwind CSS and React best practices.

---

## ✨ 5 Key Features

1. **🔥 Dynamic Category & Pet Display**
   - Fetch and display pet categories and pet cards from API.
   - Responsive grid with filter support.

2. **🔍 Modal for Pet Details**
   - Clicking “Details” opens a full pet profile in a modal.

3. **💖 Wishlist (Like) Functionality**
   - Liked pets appear in a separate 2-column grid.

4. **🕒 Adoption Countdown**
   - Adoption button shows a countdown (3, 2, 1) before marking pet as “Adopted”.

5. **📊 Sort by Price**
   - Sort pets within a selected category (or globally) in descending price order.

---

## 🧪 ES6+ Features Used

- `fetch()` with async/await for API calls
- `Array.map()`, `filter()`, `sort()` for rendering and sorting
- Destructuring assignments
- Arrow functions
- Template literals
- Ternary operators
- Optional chaining (`?.`)
- `useEffect()` and `useState()` from React

---

## 🚀 Technologies Used

| Category         | Tools / Libraries             |
|------------------|-------------------------------|
| Language         | HTML5, CSS3, JavaScript (ES6+)|
| Framework        | React                         |
| Styling          | Tailwind CSS                  |
| State Management | React useState, useEffect     |
| UI Components    | Modal, Cards, Buttons         |
| Hosting          | GitHub Pages                  |
| Tools            | Git, GitHub, Figma            |

---

## 🧭 Project Flow

- Fetch pet categories and all pets on load.
- Show all pets by default; filter by category on click.
- Display pet info in card layout with fallback for missing fields.
- Handle likes by storing thumbnails.
- Adopt button simulates a countdown and final confirmation.
- Modal displays full details fetched by pet ID.
- Full responsiveness from desktop to mobile.

---

## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/peddy-pet-adoption.git
cd peddy-pet-adoption
npm inst
