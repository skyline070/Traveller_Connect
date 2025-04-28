# 🚀 Traveller Connect

Welcome to **Traveller Connect** — a modern travel social app where users can:
- Share their travel experiences
- Earn rewards (coins)
- Escalate issues during trips
- Manage itineraries and driver info
- Explore blogs and travel stories

Built with ❤️ using **React + Vite + TailwindCSS + Framer Motion + React Hot Toast + React Icons**.

---

## ✨ Features

### 🔥 Authentication
- User **Signup** and **Login** system (localStorage-based)
- Toast messages for success/error
- Secure session handling

### 🛫 Travel Feed
- Create Posts (Image + Caption)
- Like Posts (with heart beat animation 💓)
- Comment on Posts
- Edit and Delete Posts (only by post owner)
- Temporary **Edited** badge (auto removes after 5 sec)
- Toast Notification after actions
- Fully Responsive (Mobile & Desktop)

### 🪙 Coins Management
- Earn coins when posting
- View Coin Balance
- Transaction History
- Animated Cards for Balance and History

### 🚨 Escalations
- Raise Queries with Title, Description, and Image
- View Past Escalations
- Status: Pending (static for now)
- Toasts and Form validations
- Smooth UI and Mobile Responsive

### 🗺️ Itinerary & Driver Info
- View Day-wise Itinerary Plan
- Hotel Details, Inclusions, Exclusions
- Driver Details (Name, Phone, Car Number, Photo)
- Simulate Downloading Tickets/Vouchers
- Cards layout for Travel Plan and Driver Info

### 📚 Blogs & Stories
- View Blogs (Title + Description)
- Live Search Blogs
- Expand/Read Full Blog Content
- Animated Blog cards
- Responsive and Clean Design

---

## 🛠️ Technologies Used

| Tech            | Purpose                               |
|-----------------|---------------------------------------|
| **React.js**    | Main Frontend Framework |
| **Vite**        | Fast build tool and dev server |
| **TailwindCSS** | Modern, utility-first CSS styling |
| **Framer Motion** | Smooth animations (fade, slide, hover) |
| **React Router DOM** | Client-side routing |
| **React Hot Toast** | Beautiful Toast Notifications |
| **React Icons** | Easy to use Professional Icons |
| **localStorage** | Store users, posts, coins data |

---

## 📸 Screenshots

| Page | Description |
|------|-------------|
| ![Login Page] ![Signin](https://github.com/user-attachments/assets/0ed168dd-bd2d-4fb3-921d-03dac7abe0ac)  | Responsive Login Page |
| ![Feed Page] ![f](https://github.com/user-attachments/assets/5b71cb93-55ae-4bc1-a079-e507ed1d015d)        | Create, Like, Edit, Comment on posts |
| ![Coins Page] ![c](https://github.com/user-attachments/assets/d189bd5b-d687-49e0-ba0b-15f09e5ec095)       | View balance and rewards history |
| ![Escalations Page] ![e](https://github.com/user-attachments/assets/7295f744-b8f2-455a-873a-76650eda51b0) | Raise query form and history |
| ![Itinerary Page] ![i](https://github.com/user-attachments/assets/4abc6377-4931-4699-9be6-ff8f22fafa81)   | Day-wise plan and Driver info |
| ![Blogs Page]  ![b](https://github.com/user-attachments/assets/78ea1079-fe35-48da-a551-ce57ae9b18a4)      | Search and explore blogs |

---

## 🌐 Live Demo

> https://traveller-connect.vercel.app/ 🌎

---

## 📂 Project Structure

```bash
traveller-connect/
│
├── public/
│
├── src/
│   ├── components/
│   │    ├── Feed.jsx
│   │    ├── Coins.jsx
│   │    ├── Escalations.jsx
│   │    ├── Itinerary.jsx
│   │    ├── Blogs.jsx
│   │    ├── Login.jsx
│   │    ├── Signup.jsx
│   │    └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
