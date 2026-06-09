# TRX Roofing AI Assistant

An AI-powered customer support assistant developed and deployed for a commercial and residential roofing company. The application replaces a traditional FAQ section with an interactive conversational experience capable of answering roofing, insurance, maintenance, and service-related questions.

The assistant utilizes a hybrid retrieval-first architecture that combines Fuse.js fuzzy-search matching with OpenAI-powered responses, allowing common questions to be answered instantly while using AI only when additional context is needed.

## Features

* AI-powered customer support assistant
* Fuzzy-search FAQ retrieval using Fuse.js
* OpenAI GPT-4.1 Mini fallback responses
* Company-specific knowledge base
* Mobile-responsive chat interface
* Cost-optimized retrieval-first architecture
* Secure backend API integration
* Environment variable management
* Production deployment support

## How It Works

### FAQ Retrieval Layer

The chatbot first searches a curated database of company-specific FAQs covering:

* Commercial roofing
* Residential roofing
* Roof replacements
* Emergency leak response
* Insurance claims
* Storm restoration
* Property maintenance
* Roofing materials and systems

Fuse.js is used to perform fuzzy matching so users can ask questions in different ways while still receiving accurate answers.

### AI Fallback Layer

If a user's question cannot be confidently matched against the FAQ database, the request is forwarded to OpenAI GPT-4.1 Mini.

The AI receives company-specific business information and response guidelines to ensure answers remain relevant to TRX Roofing's services and expertise.

### Response Guardrails

The assistant is configured to:

* Avoid inventing pricing
* Avoid guaranteeing insurance approvals
* Avoid creating non-existent services
* Avoid making unsupported claims
* Direct users to contact the company when information is unavailable

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI & Search

* OpenAI GPT-4.1 Mini
* Fuse.js

### Development Tools

* Git
* GitHub

## Project Structure

```txt
project/
├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── server/
│   ├── server.js
│   └── .env
│
├── package.json
├── vite.config.js
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/trx-roofing-ai-assistant.git
cd trx-roofing-ai-assistant
```

### Install Dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server directory:

```env
OPENAI_API_KEY=your_api_key_here
```

### Start Backend

```bash
cd server
node server.js
```

### Start Frontend

```bash
npm run dev
```

## Key Technical Highlights

* Designed and implemented a hybrid retrieval + AI architecture
* Integrated OpenAI GPT-4.1 Mini through a custom Express API
* Built fuzzy-search FAQ retrieval using Fuse.js
* Implemented prompt engineering and response guardrails
* Reduced AI costs by prioritizing local knowledge-base retrieval
* Developed secure API key management using environment variables
* Deployed a production-ready customer support assistant for a real business

## Future Enhancements

* Lead qualification workflows
* Inspection request automation
* CRM integrations
* Email and SMS notifications
* Appointment scheduling
* Analytics dashboard
* Multi-business support

## Author

Built by Makenna Lehnert
