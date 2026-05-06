---
name: knowledge-archaeology
description: >
  Scans past Claude conversations (and optionally uploaded chat exports from other tools)
  to surface a structured conceptual inventory for a given project or topic. Use this skill
  whenever the user wants to mine their conversation history before starting a writing project,
  outline, or research task — even if they phrase it loosely: "what have we talked about on X",
  "dig up my thinking on Y", "pull together what I know about Z before I start drafting",
  "run a knowledge archaeology on [topic]", or "scan my past chats for [project]".
  Also trigger when a user is beginning a document, whitepaper, report, or structured artifact
  and mentions that relevant prior thinking exists in past conversations.
---

# Knowledge Archaeology

Mines past conversation history — and any supplied chat exports — to produce a structured
**conceptual inventory**: a map of the user's own thinking on a topic, ready to feed into
an outline, lit review, or drafting session.

This is distinct from a literature review. A lit review captures what the field has established.
A conceptual inventory captures what *the user* has been working through — framings that recurred,
questions that stayed open, positions that evolved, and the voice that makes their contribution original.

---

## Step 0 — Parse the request

Extract from the user's message:

| Parameter | What to look for | Default if absent |
|---|---|---|
| **Topic** | The subject to search for | Ask the user |
| **Project name** | A named document, paper, or initiative | None — search broadly |
| **Date range** | "last year", "since January", "all time" | All available history |
| **Source scope** | Claude history only, or also uploaded exports | Claude history only |
| **Output depth** | Quick scan vs. full inventory | Full inventory |

If the topic is missing, ask before proceeding. All other parameters have workable defaults.

---

## Step 1 — Search past conversations

Use `conversation_search` and/or `recent_chats` depending on what the user specified.

### Search strategy

Run **3–5 distinct searches** using different query angles. The same idea surfaces under
different vocabulary across conversations — search broadly, then narrow:

```
Round 1 — core topic noun phrases
  e.g. "GenAI education", "AI writing workflow", "whitepaper"

Round 2 — related concepts and adjacent themes
  e.g. "literature review", "drafting process", "verification"

Round 3 — process / action language the user might have used
  e.g. "how do we", "should we include", "what about"

Round 4 — specific named things (tools, frameworks, people, orgs)
  e.g. "Consensus", "Elicit", "Claude API"

Round 5 (if date-bounded) — use recent_chats with after/before filters
```

Collect all results. Deduplicate by conversation URI. Note the date range covered.

### If the user has uploaded chat exports

Treat them as additional source documents. Process them alongside the conversation
search results in Step 2. Common export formats:
- ChatGPT: JSON export from settings → extract `message.content` fields
- Claude: conversation exports or manually copied text
- Other tools: accept as plain text or markdown

---

## Step 2 — Extract raw material

For each retrieved conversation chunk, extract:

1. **Claims** — assertive statements the user made or strongly affirmed
2. **Questions** — things raised but not resolved ("what about X?", "I wonder if...")
3. **Framings** — metaphors, analogies, or ways of explaining the topic that appeared more than once
4. **Evolutions** — moments where a position shifted ("actually, I think...", "wait, that changes things")
5. **Tensions** — places where two ideas pulled against each other without resolution
6. **Voice markers** — characteristic phrases, emphases, or concerns that signal the user's perspective

Do **not** organize this chronologically. Collect everything first, then cluster thematically in Step 3.

---

## Step 3 — Synthesize into a conceptual inventory

Produce a structured inventory with these sections. Adjust section depth to match
the `output_depth` parameter (quick scan = 1–2 bullets per section; full = full paragraphs).

---

### Conceptual inventory: [Topic]

**Sources scanned:** [N conversations] · [date range] · [any uploaded exports]
**Searches run:** [list the queries used]

---

#### 1. Core claims
Things the user stated repeatedly or with high confidence across multiple conversations.
These are the load-bearing assertions the document will need to make.

> Format: claim → evidence of recurrence (how many times / in what contexts)

#### 2. Contested territory
Ideas the user explored from multiple angles, went back and forth on, or explicitly
flagged as uncertain. These are either the document's nuanced positions or its honest caveats.

> Format: the tension → what pulled in each direction → current status (resolved / open)

#### 3. Open questions
Things that were raised and never answered. These are either research gaps the document
should address, or genuine unknowns that need flagging.

> Format: the question as originally framed → why it matters to the project

#### 4. Framings and metaphors
Ways of explaining the topic that appeared more than once. These are the user's natural
voice and explanatory style — they belong in the document, not just the analysis.

> Format: the framing → example quote or paraphrase → which sections it might serve

#### 5. Suggested outline seeds
Based on the above, 4–8 candidate section titles or themes that the inventory suggests
the document should cover, ranked loosely by centrality to the user's thinking.

> These are starting points for the outline phase, not a finished structure.

#### 6. Gaps and blind spots
Topics the document will likely need to cover that did *not* appear in the conversation
history — places where the lit review or external sources will need to do the work.

---

## Step 4 — Deliver and offer next steps

Present the inventory in the conversation. Then offer:

- **Feed into outline**: "Want me to use this inventory as the starting context for generating an outline?"
- **Feed into lit review**: "I can use these themes as search queries for a Consensus literature scan."
- **Both**: "We can run the lit review against these themes, then merge both into the outline prompt."
- **Export**: "I can save this as a markdown file to Dropbox if you want a persistent record."

---

## Notes on what chat history can and can't tell you

**Can surface:**
- The user's genuine intellectual priorities (what they kept returning to)
- Natural voice and framing (how they explain things, not how textbooks do)
- Unresolved tensions worth addressing explicitly
- Original contributions — ideas that don't appear in the literature

**Cannot surface:**
- Conversations from other tools unless exported and uploaded
- Conversations outside the current project scope (if in a Claude Project)
- What the user *didn't* think about — that's what the lit review fills in

**Common failure modes to watch for:**
- Treating the most recent conversation as most important (recency ≠ centrality)
- Mistaking exploratory tangents for core claims
- Missing through-lines that span many short mentions across many conversations
- Losing the user's voice by over-abstracting into generic themes

---

## Quick-invoke syntax

Users can invoke this skill with a compact prompt:

> "Knowledge archaeology: [topic]. [Optional: project name, date range, depth]"

Example:
> "Knowledge archaeology: GenAI in higher education. Project: whitepaper. Last 2 years. Full inventory."

Claude reads these parameters, runs Steps 0–4, and delivers the inventory without further prompting.
