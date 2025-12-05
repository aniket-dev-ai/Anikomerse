<!-- ------------------------------------------------------ -->
<!--                  HEADER / TITLE SECTION                -->
<!-- ------------------------------------------------------ -->

<h1 align="center" style="font-size:3rem; color:#FFD700;">
  ✨ AI-Powered Multi-Role E-Commerce SaaS Platform
</h1>

<h3 align="center" style="color:#ffffff;">
  A Next-Gen Marketplace built with <b>Next.js</b>, <b>Clerk</b>, <b>Redis</b>, <b>Gemini AI</b>, and <b>AI API</b>
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk_Auth-3B82F6?logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-CF2121?logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_AI-4285F4?logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/SaaS_Marketplace-FFD700?style=flat-square" />
  <img src="https://img.shields.io/badge/Full_Stack-8A2BE2?style=flat-square" />
</p>

---

# 📌 Project Description

A luxury-grade, AI-powered multi-role e-commerce SaaS platform featuring:

- **Buyers, Sellers, & Admins**
- **AI-powered product management**
- **Multi-tenant store system**
- **Real-time payments + PDF receipts**
- **Clerk authentication**
- **Redis performance layer**
- **Gemini AI for recommendations, descriptions, moderation**

A flagship project to showcase **full-stack + AI + SaaS** engineering expertise.

---

# 🎯 Table of Contents

- [📌 Project Description](#-project-description)
- [🎯 Table of Contents](#-table-of-contents)
- [🚀 Features Overview](#-features-overview)
- [👤 User Roles](#-user-roles)
  - [🟦 Buyer](#-buyer)
  - [🟧 Seller](#-seller)
  - [🟥 Admin](#-admin)
- [✨ AI Features](#-ai-features)
  - [🤖 AI for Buyers](#-ai-for-buyers)
  - [🤖 AI for Sellers](#-ai-for-sellers)
  - [🛡️ AI for Admins](#️-ai-for-admins)
- [🧱 System Architecture](#-system-architecture)
- [📂 Database Schema](#-database-schema)
  - [🧍 Users Table](#-users-table)
  - [🏪 Stores Table](#-stores-table)
  - [📦 Products Table](#-products-table)
  - [🧾 Orders Table](#-orders-table)
- [🛒 Buyer Module](#-buyer-module)
    - [Buyer Features](#buyer-features)
- [🏪 Seller Module](#-seller-module)
    - [Seller Dashboard Includes:](#seller-dashboard-includes)
    - [Tools:](#tools)
- [🛡️ Admin Module](#️-admin-module)
    - [Admin Controls](#admin-controls)
- [📄 PDF Receipt System](#-pdf-receipt-system)
- [💳 Payment System](#-payment-system)
- [🧠 AI Integrations](#-ai-integrations)
    - [Available AI Endpoints](#available-ai-endpoints)
- [⚙️ API Endpoints](#️-api-endpoints)
  - [Auth](#auth)
  - [Buyer APIs](#buyer-apis)
  - [Seller APIs](#seller-apis)
  - [Admin APIs](#admin-apis)
- [🖥️ Frontend Pages](#️-frontend-pages)
    - [Buyer Pages](#buyer-pages)
    - [Seller Pages](#seller-pages)
    - [Admin Pages](#admin-pages)
- [☁️ Deployment Architecture](#️-deployment-architecture)
- [📈 SaaS Subscription Model](#-saas-subscription-model)
  - [Buyer Plans](#buyer-plans)
  - [Seller Plans](#seller-plans)

---

# 🚀 Features Overview

```

✓ Multi-role platform (Buyer / Seller / Admin)
✓ Clerk auth + onboarding
✓ Multi-tenant stores
✓ Full product management
✓ Redis caching + job queue
✓ AI product descriptions
✓ AI search + recommendations
✓ AI moderation + fraud detection
✓ PDF invoices
✓ Real payments (UPI / Cards / Wallet)
✓ Seller analytics dashboard
✓ Buyer subscription tiers

````

---

# 👤 User Roles

## 🟦 Buyer
- Browse products  
- Add to cart / wishlist  
- Checkout + payment  
- Track orders  
- Subscription perks  
- AI shopping recommendations  

---

## 🟧 Seller
- Create stores  
- Add products  
- AI descriptions & pricing  
- Order management  
- Analytics dashboard  
- Inventory alerts  

---

## 🟥 Admin
- Suspend/ban users or stores  
- Edit any product or profile  
- AI moderation queues  
- View global analytics  
- Fraud detection tools  

---

# ✨ AI Features

## 🤖 AI for Buyers

- AI shopping assistant  
- Smart bundles  
- AI price prediction  
- AI review summaries  
- AI semantic search  

---

## 🤖 AI for Sellers

- AI product titles & descriptions  
- AI SEO keyword generator  
- AI dynamic pricing  
- AI sales forecasting  
- Image enhancement  
- Auto-categorization  

---

## 🛡️ AI for Admins

- AI moderation of listings  
- Fraud pattern detection  
- Sentiment analysis on complaints  
- Auto-category suggestions  

---

# 🧱 System Architecture

```mermaid
flowchart TD
  A[Clerk Auth] --> B[Onboarding]
  B --> C{Role}
  C -->|Buyer| D[Buyer Dashboard]
  C -->|Seller| E[Seller Dashboard]
  C -->|Admin| F[Admin Panel]

  E --> G[AI Product Engine]
  D --> H[AI Shopping Engine]
  F --> I[AI Moderation Engine]

  G --> R[(Redis Cache)]
  H --> R
  I --> R

  R --> DB[(PostgreSQL)]
  DB --> API[Next.js API Routes]
````

---

# 📂 Database Schema

---

## 🧍 Users Table

| Field        | Type   | Description            |
| ------------ | ------ | ---------------------- |
| id           | uuid   | Primary key            |
| clerkId      | string | Clerk user reference   |
| role         | enum   | buyer / seller / admin |
| name         | text   | Full name              |
| avatar       | text   | Profile image          |
| email        | text   | Unique email           |
| address      | json   | Multiple addresses     |
| subscription | enum   | free / silver / gold   |

---

## 🏪 Stores Table

| Field       | Type | Description           |
| ----------- | ---- | --------------------- |
| id          | uuid | Primary key           |
| ownerId     | uuid | Store owner (user id) |
| name        | text | Store name            |
| logo        | text | Logo URL              |
| description | text | Store description     |

---

## 📦 Products Table

| Field         | Type  | Description              |
| ------------- | ----- | ------------------------ |
| id            | uuid  | Primary key              |
| storeId       | uuid  | Linked store             |
| title         | text  | Product title            |
| description   | text  | Manual description       |
| aiDescription | text  | AI-generated description |
| price         | float | Product price            |
| stock         | int   | Available units          |
| category      | text  | Category label           |
| images        | json  | Image URLs               |

---

## 🧾 Orders Table

| Field         | Type  | Description             |
| ------------- | ----- | ----------------------- |
| id            | uuid  | Primary key             |
| buyerId       | uuid  | Buyer reference         |
| items         | json  | List of line items      |
| total         | float | Final cost              |
| paymentStatus | enum  | paid / pending / failed |
| pdfInvoice    | text  | Download URL            |

---

# 🛒 Buyer Module

### Buyer Features

* Browse, search, filter
* Wishlist + cart
* Offers & coupons
* AI-powered recommendations
* Order tracking
* Manage addresses
* Subscription dashboard

---

# 🏪 Seller Module

### Seller Dashboard Includes:

* Revenue summary
* Orders today
* Best-selling items
* Inventory alerts
* Traffic analytics
* AI improvement suggestions

### Tools:

* Add/edit products
* Bulk operations
* AI description generator
* AI pricing model
* Refund & return manager

---

# 🛡️ Admin Module

### Admin Controls

* Delete/ban users
* Delete/edit stores
* Manage categories
* Moderate flagged products
* Global analytics
* Manual refunds
* AI fraud detection reports

---

# 📄 PDF Receipt System

PDF invoice contains:

| Section       | Details                   |
| ------------- | ------------------------- |
| Buyer Info    | Name, email, address      |
| Seller Info   | Store name, contact       |
| Items         | Product list + quantities |
| Taxes         | GST breakdown             |
| QR Code       | Track order               |
| AI Suggestion | "You may also like…"      |

---

# 💳 Payment System

Supported:

* UPI
* Debit/Credit Cards
* Wallets
* Net Banking
* Razorpay
* Stripe

Features:

* Save payment methods
* Refund webhooks
* Order verification

---

# 🧠 AI Integrations

### Available AI Endpoints

| Endpoint                       | Purpose               |
| ------------------------------ | --------------------- |
| `/api/ai/generate-description` | AI product text       |
| `/api/ai/generate-seo`         | AI SEO keywords       |
| `/api/ai/moderate-product`     | AI moderation         |
| `/api/ai/review-summary`       | AI summarization      |
| `/api/ai/recommend`            | Buyer recommendations |
| `/api/ai/fraud`                | Fraud detection       |

---

# ⚙️ API Endpoints

## Auth

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/user`         | Get user profile |
| POST   | `/api/auth/webhook` | Clerk webhooks   |

---

## Buyer APIs

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/api/products`   | List products     |
| POST   | `/api/cart`       | Add to cart       |
| POST   | `/api/orders`     | Create order      |
| GET    | `/api/orders/:id` | Get order details |

---

## Seller APIs

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| POST   | `/api/stores`       | Create store   |
| POST   | `/api/products`     | Add product    |
| PATCH  | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Remove product |

---

## Admin APIs

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| POST   | `/api/admin/ban-user`     | Ban user             |
| POST   | `/api/admin/delete-store` | Remove store         |
| GET    | `/api/admin/logs`         | View moderation logs |

---

# 🖥️ Frontend Pages

### Buyer Pages

```
/
/products
/product/[id]
/cart
/checkout
/orders
```

### Seller Pages

```
/seller/dashboard
/seller/products
/seller/add-product
/seller/orders
```

### Admin Pages

```
/admin/dashboard
/admin/users
/admin/stores
/admin/moderation
```

---

# ☁️ Deployment Architecture

```
Next.js → Vercel  
PostgreSQL → Supabase / Neon  
Redis → Upstash  
Auth → Clerk  
AI → Gemini + AI API  
Payments → Razorpay / Stripe  
CDN → Cloudflare  
```

---

# 📈 SaaS Subscription Model

## Buyer Plans

| Tier   | Benefits                               |
| ------ | -------------------------------------- |
| Free   | Standard delivery                      |
| Silver | Free delivery over ₹500                |
| Gold   | Unlimited free delivery + AI assistant |

---

## Seller Plans

| Tier   | Benefits                                  |
| ------ | ----------------------------------------- |
| Free   | 20 product limit                          |
| Growth | Unlimited products + AI tools             |
| Pro    | Custom domain + full AI suite + analytics |

---

 