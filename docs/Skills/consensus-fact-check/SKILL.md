---
name: consensus-fact-check
description: >
  Reviews a Markdown (.md) file for factual accuracy by searching peer-reviewed academic
  literature via the Consensus MCP. Use this skill whenever the user asks to "fact-check",
  "review for accuracy", "verify claims in", "check the research behind", or "validate" a
  Markdown file or document. Also trigger when the user says things like "is this well-supported?",
  "check this against the literature", "find research to back this up", or uploads/references
  a .md file and wants to know if its content is sound. The skill produces an annotated
  accuracy report with confidence ratings per claim, supporting and conflicting citations,
  and a summary verdict.
compatibility:
  required_mcps:
    - name: Consensus
      url: https://mcp.consensus.app/mcp
---

# Consensus Fact-Check Skill

Reviews a Markdown document against peer-reviewed academic research and produces an annotated accuracy report.

---

## When to Use

Trigger whenever a user wants to:
- Check whether claims in a `.md` file are well-supported by research
- Find citations that support or contradict document content
- Audit a document for factual accuracy before publishing or distributing
- Understand how "evidence-based" a piece of writing is

---

## Workflow

### Step 1: Read the File

Read the target `.md` file in full. If the user hasn't specified a path, ask for it. If the file is in `/mnt/user-data/uploads/`, read it from there.

### Step 2: Extract Checkable Claims

Scan the document and identify **factual claims** — statements that are:
- Empirically testable (not opinions, values, or stylistic choices)
- Specific enough to search for (not vague generalities)
- Potentially meaningful to verify (skip obvious truisms)

Aim for **5–15 claims** depending on document length. For long documents, prioritize the most consequential or surprising claims. Format as a numbered list internally before proceeding.

Examples of checkable claims:
- "Immersion programs produce higher speaking proficiency than grammar-based instruction"
- "Large language models hallucinate at rates between 15–20% on factual queries"
- "Water cooling in data centers accounts for significant carbon emissions"

Examples of non-checkable claims (skip):
- "This is an important issue"
- "Faculty should consider their values"
- "Language learning is challenging"

### Step 3: Search Consensus for Each Claim

For **each claim**, call the Consensus MCP tool to search for peer-reviewed research. Use a concise, keyword-rich search query (3–7 words). Do not use the claim verbatim as the query — distill it to its core searchable concept.

Example: claim = "Immersion outperforms grammar-based instruction for speaking fluency"
→ query = "language immersion speaking proficiency outcomes"

Run searches sequentially. For each claim, retrieve 3–5 results if available.

### Step 4: Assess Each Claim

For each claim, produce an assessment with the following components:

**Support Level** (choose one):
- ✅ **Well-supported** — Multiple peer-reviewed sources agree
- ⚠️ **Partially supported** — Some evidence, but mixed or limited
- ❌ **Contradicted** — Research contradicts the claim
- 🔍 **Insufficient evidence** — Little to no relevant research found
- ➖ **Not directly researchable** — Claim is too domain-specific or niche for academic search

**For each claim, note:**
- Key supporting citations (title, authors, year, brief finding)
- Key contradicting citations if any
- Nuances or caveats the document may have missed

### Step 5: Write the Accuracy Report

Produce a structured report in Markdown with the following sections:

---

```markdown
# Accuracy Review: [Document Title or Filename]

**Reviewed:** [Date]  
**Claims examined:** [N]  
**Overall verdict:** [Well-supported / Mixed / Needs revision / Not researchable]

---

## Summary

[2–4 sentence overview of the document's general accuracy. Note any patterns — e.g., "Most claims are well-supported, but two statistics lack peer-reviewed backing."]

---

## Claim-by-Claim Review

### Claim 1: [Short label]
> "[Quoted or paraphrased claim from document]"

**Support level:** ✅ Well-supported

**Evidence:**
- [Author(s), Year] — [Brief finding relevant to claim]
- [Author(s), Year] — [Brief finding]

**Notes:** [Any nuances, important caveats, or recommendations for the author]

---

[Repeat for each claim]

---

## Recommendations

- [Specific suggestions: add a citation here, qualify a claim there, flag a discrepancy]
- [...]

---

## Research Gaps

[Claims where Consensus returned no relevant results — note these are not necessarily wrong, just unverifiable via this tool]
```

---

## Output

- Default: Print the report directly in the chat as formatted Markdown
- If the user asks for a file: save as `[original-filename]-accuracy-review.md` and present it

---

## Important Notes

- **Consensus searches peer-reviewed academic literature.** It is strong for empirical and scientific claims. It is weaker for very recent events, practitioner knowledge, institutional policies, and humanistic interpretations.
- **Absence of evidence is not evidence of absence.** If Consensus returns no results, say so — don't mark the claim as wrong.
- **Do not fabricate citations.** Only report what Consensus actually returns. If a search returns nothing relevant, say "No relevant peer-reviewed literature found."
- **Preserve the author's voice.** This is an accuracy audit, not a rewrite. Recommendations should be specific and actionable, not sweeping.
- For documents about AI and education specifically (a likely use case), note that the research base is rapidly evolving and many claims may be ahead of the peer-reviewed literature.
