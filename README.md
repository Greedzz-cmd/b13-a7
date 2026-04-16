# 💚 KeenKeeper

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

KeenKeeper is a friendship relationship manager that helps you stay connected with the people who matter. Track when you last reached out, log interactions, and never let an important friendship go cold.

---

## 🛠️ Technologies Used

| Technology          | Purpose                            |
| ------------------- | ---------------------------------- |
| **Next.js 15**      | React framework with App Router    |
| **React 19**        | UI components and state management |
| **Tailwind CSS v4** | Utility-first styling              |
| **DaisyUI v5**      | Component library                  |
| **Recharts**        | Pie chart for friendship analytics |
| **React Toastify**  | Toast notifications                |
| **React Icons**     | Icon library                       |

---

## ✨ Key Features

### 👫 Friend Management

View all your friends in a clean 4-column grid. Each card shows their profile picture, name, days since last contact, tags, and a color-coded status badge — green for on-track, yellow for almost due, and red for overdue.

### ⚡ Quick Check-In

On each friend's detail page, log a **Call**, **Text**, or **Video Call** with a single button click. Every interaction is instantly saved to your timeline with the current date and time.

### 📜 Timeline

A full history of every interaction you've logged. Filter by interaction type (Call, Text, Video Call) or sort by newest and oldest. You can also search by friend name or interaction type.

### 📊 Friendship Analytics

A visual pie chart (powered by Recharts) showing the breakdown of your interactions — how many calls, texts, and video calls you've made across all friendships.

### 📱 Fully Responsive

Works seamlessly on mobile, tablet, and desktop. Includes a hamburger menu for mobile navigation.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── friend/[friendId]/   # Friend detail page
│   ├── timeline/            # Timeline page
│   ├── status/              # Analytics page
│   ├── not-found.jsx        # 404 page
│   ├── layout.jsx           # Root layout
│   └── page.jsx             # Home page
├── component/
│   ├── friendslist/         # Friend card and grid
│   ├── stats/               # Stat cards
│   ├── statistics/          # Pie chart
│   ├── timeLine/            # Timeline entries
│   ├── Header.jsx
│   └── Footer.jsx
├── context/
│   └── FriendsContext.jsx   # Global state
└── utils/
    └── localDB.js           # localStorage helpers
```

---

## 🌐 Live Demo

[Live Link](#https://keenkeeper-rust.vercel.app/)
