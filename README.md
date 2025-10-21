# 🎙️ InterviewPrep.AI

**InterviewPrep.AI** is an AI-powered mock interview platform that helps users practice and prepare for real-world job interviews through interactive voice sessions and instant feedback. Powered by LLMs and real-time voice AI, it delivers a dynamic and personalized interview experience from start to finish.

---

## 🚀 Features

- 🎤 **AI-Powered Mock Interviews** — Simulates voice-based interviews using realistic prompts
- 🧠 **LLM-Generated Questions** — Tailored to job role, tech stack, and experience level
- 📊 **Structured Feedback** — Automatic scoring and personalized feedback across 5 key categories
- 👤 **Authentication & Sessions** — Secure user login and session tracking
- 🗃️ **Interview History** — Browse past interviews and feedback reports
- ⚡ **Modern UX** — Responsive design and smooth interactions using App Router

---

## 🛠 Tech Stack

| Layer           | Technology                          |
|------------------|--------------------------------------|
| Frontend         | Next.js 13+ (App Router), Tailwind CSS |
| Voice Interface  | Vapi SDK                            |
| Language Model   | Google Gemini via AI SDK            |
| Authentication   | Firebase Auth                       |
| Database         | Firestore                           |
| Hosting          | Vercel (recommended)                |

---

## 🔧 Setup & Development

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AI_Interview_Platform.git
cd AI_Mock_Interview
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file and add:

```env
# Firebase Admin
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# AI / Vapi
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
```

### 4. Start the Dev Server

```bash
npm run dev
```

---

## ✨ How It Works

**Register/Login:** Create an account or log in using your credentials.

**Start Interview:** Initiate a new mock interview session.

**Answer Questions:** Respond to AI-generated questions in real-time.

**Receive Feedback:** Upon completion, get detailed feedback on your performance.

**Review History:** Access past interviews to monitor your progress.

---

## 🧠 Feedback Categories

- Communication Skills
- Technical Knowledge
- Problem-Solving
- Confidence & Clarity
- Cultural & Role Fit

---

## 📈 Use Cases

- Prepare for technical interviews
- Improve articulation and confidence
- Track growth through feedback history
- Practice soft skills in real-time settings

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 💡 Contributing

Feel free to fork this repo and submit pull requests. Feedback and suggestions are welcome!

---
