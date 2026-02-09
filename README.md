# ☕ Fund My Chai

A creator support platform where fans can buy their favorite creators a chai. Built with Next.js 15, MongoDB, and Razorpay.

## Features

- **Creator Profiles** — Public pages with about section, support tiers, and recent supporters
- **Chai Tiers** — Cutting Chai (₹20), Masala Chai (₹60), Special Tandoor (₹150), Royal Feast (₹500)
- **Razorpay Payments** — Secure UPI payments integration
- **Authentication** — Sign up / login with NextAuth.js
- **Dashboard** — Manage profile, view earnings, supporters, payouts, and settings
- **Responsive** — Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework** — Next.js 15 (App Router, Turbopack)
- **Styling** — Tailwind CSS 4
- **Database** — MongoDB (Mongoose)
- **Auth** — NextAuth.js
- **Payments** — Razorpay
- **Icons** — React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

```
MONGODB_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

## Project Structure

```
app/
├── [username]/       # Public creator profile page
├── auth/             # Login & signup pages
├── dashboard/        # Creator dashboard (profile, earnings, settings, etc.)
├── api/              # API routes (auth, razorpay, test)
├── models/           # Mongoose schemas (User, Payment)
components/           # Reusable UI components
actions/              # Server actions
lib/                  # Utilities
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
