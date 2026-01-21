# 🏛️ Voice2Gov  
### AI-powered Government Scheme Assistant

---

## 📌 Problem Statement
Government schemes are designed to help citizens, but most people struggle to access them because:
- Information is scattered across multiple websites and PDFs  
- Language is complex and legal-heavy  
- Eligibility rules are unclear  
- People don’t know *which* scheme applies to them  

As a result, many eligible citizens never benefit from these programs.

---

## 💡 Solution
**Voice2Gov** is an AI-powered web application that helps users:
- Understand government schemes in **simple language**
- Discover schemes they are **eligible for**
- Get **step-by-step guidance** on how to apply  

Users describe their situation (income, profession, age, location), and the AI matches them with relevant schemes and explains everything clearly.

---

## 🚀 Key Features
- 🔍 Eligibility-based scheme discovery  
- 📄 AI-powered explanation of government schemes  
- 🧠 Natural language query support  
- 🌍 Multi-language friendly responses  
- 🗂️ PDF-based knowledge system for schemes  
- 🧑‍💻 Simple, accessible UI for all users  

---

## 🧠 AI Usage
This project uses **Google Gemini API** as the single AI source to:
- Understand user queries  
- Match user details with scheme eligibility  
- Summarize complex scheme documents  
- Rewrite content in simple, easy-to-understand language  

---

## 🧰 Tech Stack

### Frontend
- Next.js  
- TypeScript  
- Tailwind CSS  

### Backend
- FastAPI (Python)  
- Google Gemini API  
- MongoDB  

### Google Tools
- Google Gemini API  
- Google Cloud (optional for deployment & storage)  

---

## 🏗️ System Architecture (High Level)

User (Web App)
↓
Next.js Frontend
↓
FastAPI Backend
↓
Gemini AI + Scheme Databasez

---

