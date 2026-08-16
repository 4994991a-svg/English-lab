# English Lab — Vercel + OpenAI

## Deploy
1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. In Vercel Project Settings → Environment Variables, add `OPENAI_API_KEY` with your secret key.
4. Redeploy.

The key is used only by `/api/generate.js` and is never shipped to the browser.

## Features
- Vocabulary cards and local review data
- AI-generated vocabulary cards
- AI-generated unfamiliar-context questions
- Wrong-word tracking
- Mobile-friendly UI

## Security
Never put the OpenAI key in `index.html`, client-side JavaScript, or a public GitHub repository.
