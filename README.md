# Learn with Jiji – Backend

## Overview
Backend service for Learn with Jiji, an AI learning companion.
Handles user queries and returns structured learning resources.

## Tech Stack
- Node.js
- Express.js
- Supabase (DB + RLS)

## How to Run
```bash
npm install
node index.js
API Endpoint
POST /ask-jiji

Request:

{
  "query": "Explain RAG"
}
Response:

{
  "answer": "RAG stands for Retrieval Augmented Generation...",
  "resources": {
    "ppt": [],
    "video": []
  }
}
Supabase Setup
Tables used:

profiles

queries

resources

RLS enabled:

Public read access for resources