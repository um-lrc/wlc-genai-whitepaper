---
name: fact-check-applier
description: Apply changes from a Consensus fact-check report to its corresponding source document. Walks through each recommendation one at a time, verifies cited papers using full-text sources when available (and Consensus MCP abstracts as fallback), and asks for individual authorization before making any edits. Always use this skill when the user wants to "apply fact-check changes," "implement the recommendations," "act on the accuracy review," or "go through the corrections" for a Markdown file that has been fact-checked. Also trigger when the user references a fact-check report and wants to revise the original document accordingly.
---

# Fact-Check Applier

Translates the recommendations in a Consensus fact-check report into vetted, authorized edits in the source document.

This skill is the natural sequel to `consensus-fact-check`. After a chapter has been fact-checked, the resulting accuracy report contains a "Recommendations" section that suggests citations to add, wordings to soften, claims to qualify, and so on. This skill walks the user through those recommendations one at a time, verifies each cited paper still says what the report claims it says, and applies only the changes the user explicitly approves.

The goal is to make revision tractable and transparent: every change is surfaced, every citation is double-checked, and nothing slips through silently.

**Two-tier verification.** When verifying citations, the skill prefers full-text sources from a local `/sources/` folder if available (these let you see the actual passage that supports the chapter's claim) and falls back to Consensus MCP abstract verification when full text isn't there. Both modes are valid; full-text verification is just stronger evidence.

---

## When to Use

Trigger this skill whenever the user wants to:

- Apply changes from a fact-check / accuracy review report to the original Markdown document
- Walk through the recommendations from a fact-check and decide which to accept
- Implement the citation additions and wording adjustments suggested by Consensus fact-check
- Revise a chapter, document, or `.md` file based on a paired accuracy review

Common phrasings: "apply the fact-check changes to chapter X," "implement the recommendations from the file 03 review," "let's go through the corrections for the climate chapter," "act on the accuracy review."

If no fact-check report exists yet, route the user to `consensus-fact-check` first.

---

## Workflow

### Step 1: Locate the Pair

Identify two files:

1. **The source document** — typically a Markdown file the user wants to revise (a chapter, article, or report).
2. **The fact-check report** — the corresponding accuracy review produced by `consensus-fact-check`.

If only one is named, search for the other. Reports usually live in a `Fact-Check Reports/` directory (or similar) and follow a naming convention like `<chapter-name> - Accuracy Review.md`. Source files live in their own chapter/section folder.

If you cannot find a matching report, ask the user for its path. Don't proceed without both files.

### Step 2: Parse the Recommendations and Preview

Read the fact-check report in full. Extract:

- The `## Recommendations` section, with each numbered item
- The per-claim evidence sections (these contain the Consensus URLs you'll use for verification — they're already embedded as Markdown links)

Decompose each numbered recommendation into **atomic changes** — one yes/no decision per change. A single numbered recommendation often contains multiple atomic changes. For example:

> "Recommendation 2: Add Wong & VanPatten (2003) for Claim 1, and consider also adding a brief acknowledgment that mechanical drills retain some value for beginner pronunciation work."

Becomes two atomic changes:

1. Add the Wong & VanPatten (2003) citation
2. Add the acknowledgment sentence about beginner pronunciation

Categorize each atomic change:

- **Citation addition** — add an inline citation or bibliography entry
- **Wording adjustment** — replace a specific phrase
- **Claim softening** — replace a strong assertion with a more hedged one
- **Bibliography note** — fix a typo, complete a partial citation, etc.
- **Acknowledgment** — add a sentence acknowledging a tradition, counterargument, or limitation
- **Decomposition needed** — recommendation is fuzzy ("link specific claims to specific sources") and needs Claude to draft concrete atomic proposals

For "Decomposition needed" cases, draft 1-3 concrete atomic changes that operationalize the fuzzy recommendation. Be transparent that you're proposing the language; the report didn't specify it exactly.

**Then preview the full set to the user before starting:**

> "I found N recommendations in the report, which decompose into M atomic changes:
> - X citation additions
> - Y wording adjustments
> - Z other (acknowledgments, claim softenings, bibliography fixes)
> 
> Each will need its own decision. I'll verify each citation against Consensus before showing it. Ready to start?"

This preview gives the user a chance to ask for adjustments to the approach (skip a category, batch differently, etc.) before sinking time into individual decisions.

### Step 3: Verify Citations (Full Text First, Then Consensus)

For each citation-adding atomic change, verify two things:

1. **The paper exists** with the title, authors, and year stated in the fact-check report.
2. **The paper's findings actually support the claim being cited.** What the chapter is about to attribute to the paper should align with what the paper actually concludes.

**Two-tier verification approach.** Always try full-text verification first; fall back to Consensus only when full text isn't available locally.

#### Tier 1: Full-text verification from `/sources/`

Check whether a `sources/` folder exists relative to the source document (typical locations: same folder as the chapter, project root, or sibling to the `Fact-Check Reports/` folder). If it exists, look for a file matching the citation.

**Naming convention.** Match by `firstauthor_year` prefix:
- `liang_2023_gpt-detectors-biased.pdf` matches "Liang et al. (2023)"
- `mytton_2021_data-centre-water.md` matches "Mytton (2021)"
- If multiple files share the same `firstauthor_year`, disambiguate by title

**Reading the source.** Use Read for `.md` and `.txt` files. For `.pdf`, invoke the `pdf` skill to extract text. Don't try to read PDFs directly with Read.

**Searching for support.** Once you have the full text, search for content that aligns with the chapter's specific claim. Grep for relevant keywords from the claim, or read the relevant section if it's clearly identified (e.g., "Findings," "Results," abstract, conclusion). Quote the passage that directly supports — or contradicts — the chapter's use.

When presenting to the user, include the quoted passage with its location: "Verified via full text: from Liang et al. (2023), p. 4: 'GPT detectors frequently misclassify non-native English writing as AI generated...'"

#### Tier 2: Consensus MCP abstract verification

When the source isn't in `/sources/`, fall back to the Consensus MCP search tool. Read the abstract returned by Consensus and check whether what the chapter would attribute to the paper aligns with what the abstract says.

**Use the Consensus URL already in the report when available.** Most reports embed the citation as a Markdown link (e.g., `[GPT detectors are biased against non-native English writers](https://consensus.app/papers/details/...)`). The URL identifies the exact paper. You can run a focused Consensus search keyed on the title/authors to retrieve the abstract for alignment-checking; you don't need to "find" the paper from scratch.

For a focused search, use a 3-7 keyword query distilled from the paper title rather than the full title verbatim — Consensus matches semantically and shorter queries surface the right paper more reliably.

#### Reporting verification mode and outcome

Always tell the user which verification mode was used and what the outcome was. Possible outcomes:

- **Verified (full text)** — passage in `/sources/` directly supports the chapter's use. Quote the relevant passage with location.
- **Verified (Consensus abstract)** — abstract supports the use; full text not available locally.
- **Verified with caveat** — paper exists but its findings are nuanced or partial relative to how the chapter uses it. Note the caveat regardless of mode.
- **Cannot verify** — neither full text nor abstract supports the use, or the source contradicts it. Surface this as a concern; do not silently apply.

For citations verified only via Consensus abstract that seem important (especially: the only support for a contested claim, the strongest claim in the chapter, or anything in a politically charged area like file 16), suggest the user add the paper to `/sources/` for stronger verification. Phrase this as a quiet recommendation, not a blocker: "Verified via abstract; recommend adding to `sources/` for fuller verification before final publication."

When in doubt about whether a paper's text supports a claim, prefer flagging over auto-approving. The whole point of this skill is to catch the kind of small errors a human reviewer might miss when applying changes in bulk.

### Step 4: Walk Through Atomic Changes One at a Time

For each atomic change, present a single decision to the user using the AskUserQuestion tool. The presentation should give enough context that the user doesn't need to switch back to the report.

A good presentation includes:

- **Atomic change number and category** (e.g., "Change 2 of 7 — Citation addition")
- **What the report suggests** — a brief paraphrase, not the whole report passage
- **Citation verification result** — the Consensus check outcome from Step 3 (or "no new citation; nothing to verify")
- **What the change would look like** — show the exact text that will be added or replaced

**Choose your AskUserQuestion options based on the recommendation type:**

**Standard case** (single proposed change):

- **Apply** — make the change as proposed
- **Skip** — leave the chapter unchanged for this change
- **Modify** — user wants to apply a different version (open up a follow-up via the "Other" option)
- **Defer** — record but don't act now

**Multi-alternative case** (the report itself proposes 2-3 alternatives, e.g., "soften 'more effective' to 'more sustainable,' 'more equitable,' or 'better aligned with sound assessment practice'"):

- Present each report-proposed alternative as a labeled option (e.g., "Apply: 'more sustainable'", "Apply: 'more equitable'", "Apply: 'better aligned with sound assessment practice'")
- Plus a final option: "Skip / Modify / Defer"
- This way the user picks directly from the alternatives the report proposed without needing to type them out

**Decomposed-from-fuzzy case** (you drafted concrete changes from a fuzzy recommendation):

- Be explicit upfront: "The report's recommendation here is general ('link specific claims to specific sources'). I've drafted three concrete atomic changes that operationalize it. I'll present each individually."
- Then run each as a Standard case

If the user selects Modify on any change, ask a follow-up free-text question (use the AskUserQuestion's "Other" option) to capture their preferred wording, then apply that.

### Step 5: Apply Approved Changes

For each Apply or Modify decision, edit the source document immediately using the Edit tool. Don't batch — applying as you go keeps state consistent and lets the user verify partial progress if anything goes wrong.

When applying:

- **Wording changes** — use Edit with the exact `old_string` from the chapter (verify it matches by reading the file fresh, not by trusting the report's quotation).
- **Citation additions to the bibliography** — append the new entry in the format the chapter already uses. Don't impose a different citation style. Match the existing entries' formatting (italicized journal names, hanging indents, ordering, etc.).
- **Inline citation additions** — slot them into the relevant sentence using the format the chapter uses for inline references (parenthetical author-year, footnote, embedded link, etc.).
- **New sentences/clauses** — slot them in at the location the report specifies. Match the surrounding tone and paragraph structure.
- **Bibliography typo fixes or completions** — Edit the bibliography entry directly.

If a wording change's `old_string` doesn't match the chapter exactly (e.g., the report paraphrased), pause and tell the user. They may have edited the chapter since the fact-check, or the report may have been imprecise. Don't try to fuzzy-match — let the user disambiguate.

### Step 6: Bibliography Convention Alignment (Conditional)

After applying the report's recommendations, check whether the chapter now has a **mixed citation convention** — some bibliography entries with inline anchors, others without. This commonly happens when the report's recommendations introduce inline citations to a chapter that was previously bibliography-only or under-cited.

**Trigger condition for this step:** all of the following are true:

- The chapter has a Bibliography (or References, or similar) section.
- At least one entry in the bibliography has an inline anchor in the prose.
- At least one other entry has no inline anchor.
- The applied changes from Steps 4-5 introduced new inline citations (so the convention shift is the user's choice, not pre-existing).

If the trigger doesn't fire, skip this step entirely. Don't bring it up.

If it does fire, ask the user whether to align. Use AskUserQuestion:

> The chapter now has a mixed citation convention: N entries are inline-cited, M are bibliography-only. Want me to propose inline placements for the remaining M entries so the convention is consistent across the chapter?
> 
> Options:
> - **Yes — walk through each remaining entry as an atomic change** (verify against full text or Consensus, propose placement, get authorization)
> - **No — keep the mixed convention** (some entries are intended as general "further reading" rather than anchors)
> - **Show me the list first** — preview which entries would be candidates before deciding

If the user picks "yes" or "show me the list first":

1. For each bibliography entry without an inline anchor, look up the paper (full text from `/sources/` if available, Consensus abstract otherwise — same Tier 1/Tier 2 logic from Step 3).
2. Identify the most natural claim in the chapter to anchor it to, based on the paper's actual content.
3. If multiple placements are plausible, surface 2-3 options in the AskUserQuestion (like the multi-alternative case in Step 4).
4. If no clear placement is evident from the chapter content, be honest: "no obvious placement in the chapter — this entry may be best left as a general reference. Skip / Force a placement (specify) / Remove from bibliography?"
5. Apply approved placements using the same Edit pattern as Step 5.

**Important:** Some bibliography entries are intentionally "further reading" — general references the author wants to point to without anchoring to a specific claim. The skill should make it easy to skip individual entries or the whole alignment step. The default convention before the report's recommendations was the author's choice; aligning is the user's choice now, not a correction the author missed.

### Step 7: Summarize at the End

When all atomic changes have been processed (including any alignment from Step 6), produce a concise summary:

- Number of atomic changes: applied / modified / skipped / deferred
- Which citations were added (with verification status)
- Whether bibliography convention alignment was performed, and how many entries were aligned
- Any deferred items the user should revisit
- Any places where the source document had drifted from what the report assumed (so the user knows to check those)

Don't pad. The user just spent time reviewing each change individually; they want a brief receipt, not a re-narration.

---

## Decision Heuristics

### What counts as "one atomic change"

Anything that the user can decide yes/no on without further breakdown. If a recommendation contains "and" or "also," it probably needs decomposing. If a recommendation says "consider X, Y, or Z," that's one decision (multi-alternative case), not three.

### What to do when the report is ambiguous

For fuzzy recommendations ("the chapter could benefit from..."), draft concrete atomic proposals yourself, mark them as "skill-drafted," and present each one to the user. Be transparent that you're proposing language, not lifting it from the report. Three proposals max — beyond that, ask the user to narrow scope.

### What to do when Consensus contradicts the report

This is rare but important. If Consensus returns evidence that a paper does NOT support the use the chapter would make of it, do not apply the citation. Instead:

1. Flag the contradiction clearly to the user
2. Show the paper's actual abstract excerpt (not the whole abstract — the relevant clause)
3. Offer options: skip the citation entirely, find a different supporting source, or modify the chapter's claim to match what the paper does say

The fact-check report represents one researcher's reading at one point in time. Consensus verification at application time is a second pass. Both layers exist for a reason.

### When to skip Consensus verification

Some atomic changes don't add citations (e.g., a typo fix in the bibliography heading, a wording softening with no new source). Skip the verification step for those. Flag this clearly when presenting: "No new citation; nothing to verify."

### Bibliography placement

When adding a citation to the bibliography, match the existing order (alphabetical by author, by year, by appearance — read the existing entries to determine). If the chapter has no bibliography section yet but you're adding a citation, ask the user where they'd like it placed before creating one.

---

## Examples

### Example 1a: Citation addition verified via full text

**Recommendation from report:** "Add Mytton (2021), *Data centre water consumption*, *npj Clean Water*, as the foundational citation for the water-use transparency claim."

**Skill action:**

1. Check `/sources/` for `mytton_2021_*.pdf` — found `mytton_2021_data-centre-water.pdf`
2. Use the `pdf` skill to extract text from the PDF
3. Search the extracted text for content about transparency/measurement of water use; find passage in the discussion section: "Currently less than a third of data centre operators report on their water consumption..."
4. Present to user via AskUserQuestion:

> Change 3 of 7 — Citation addition
> 
> The fact-check suggests adding **Mytton (2021), *Data centre water consumption*** to anchor the water-transparency claim.
> 
> **Verified via full text** (sources/mytton_2021_data-centre-water.pdf): "Currently less than a third of data centre operators report on their water consumption" — directly supports this use.
> 
> Options:
> - **Apply** — add to bibliography in existing format
> - **Skip** — leave the bibliography unchanged
> - **Modify** — apply different wording or placement
> - **Defer** — record for later

5. On Apply: Edit the bibliography to insert the Mytton entry in the existing format

### Example 1b: Citation addition verified via Consensus abstract (no full text available)

**Same recommendation as above, but no Mytton PDF in `/sources/`.**

**Skill action:**

1. Check `/sources/` — no match found
2. Fall back to Consensus: search `data center water consumption transparency`
3. Verify paper exists, abstract states "less than a third of data centre operators measuring water consumption"
4. Present to user:

> Change 3 of 7 — Citation addition
> 
> The fact-check suggests adding **Mytton (2021), *Data centre water consumption*** to anchor the water-transparency claim.
> 
> **Verified via Consensus abstract** (full text not in /sources/): abstract states "less than a third of data centre operators measuring water consumption" — supports this use. Recommend adding to `sources/` for fuller verification before final publication.
> 
> Options: Apply / Skip / Modify / Defer

### Example 2: Multi-alternative wording softening

**Recommendation from report:** "Soften the comparative claim 'more effective than those centered on monitoring and enforcement.' Reframing to 'more sustainable,' 'more equitable,' or 'better aligned with sound assessment practice' would be fully supported."

**Skill action:**

1. No new citation, skip Consensus verification
2. Read the source chapter and confirm the exact phrase exists
3. Present to user via AskUserQuestion with the report's three alternatives as the options:

> Change 1 of 7 — Wording adjustment (multi-alternative)
> 
> The fact-check suggests softening "more effective than those centered on monitoring and enforcement" because the comparative claim slightly outpaces the empirical literature. The report proposes three alternatives.
> 
> Options:
> - **Apply: "more sustainable than..."**
> - **Apply: "more equitable than..."**
> - **Apply: "better aligned with sound assessment practice than..."**
> - **Skip / Modify / Defer**

4. On selection: Edit `old_string` → `new_string` directly with the chosen alternative

### Example 3: Recommendation flagged by Consensus

**Recommendation from report:** "Add Smith (2024) to support the claim that AI detection has improved substantially in 2024."

**Skill action:**

1. Search Consensus: `AI detection accuracy 2024 improvements`
2. Find Smith (2024) — but the abstract actually argues detection has *not* improved meaningfully and concludes the opposite
3. Present to user:

> Change 4 of 8 — Citation addition (flagged)
> 
> The fact-check suggests adding **Smith (2024)** to support detection-improvement claims. **Consensus check raises a concern:** Smith's actual abstract concludes detection has *not* meaningfully improved. Adding this citation would misrepresent the source.
> 
> Options:
> - **Skip this citation** — keep the chapter as-is
> - **Modify the chapter's claim** to match what Smith actually says
> - **Find an alternative citation** — pause and search for a paper that genuinely supports the claim
> - **Defer**

### Example 4: Bibliography convention alignment

**Scenario:** After applying recommendations to a chapter with 4 bibliography entries (Ardito, Cong-Lem, Liang, Parker), 2 are now inline-cited (Cong-Lem, Liang) and 2 are not (Ardito, Parker). The convention is mixed.

**Skill action:**

1. Trigger detected: mixed convention after applied changes.
2. Ask user via AskUserQuestion: "Want me to propose inline placements for the 2 remaining bibliography-only entries?"
3. On "Yes": for each of Ardito and Parker, run the Tier 1/Tier 2 verification from Step 3, identify the most natural placement based on what the paper actually argues, and present each as its own atomic change.
4. For Ardito (verified via full text): paper argues "reliance on detection mechanisms is misaligned with the educational landscape." Best placement: end of headline sentence in paragraph 2.
5. For Parker (verified via full text): paper argues institutional AI policies "mirror long-standing traditions of educational surveillance." Best placement: paired with Ardito at the headline sentence.
6. After both atomic changes processed and applied, the chapter has full convention consistency.

### Example 5: Decomposing a fuzzy recommendation

**Recommendation from report:** "Link specific claims to specific sources, especially Liang et al. (2023) for the bias claim, since it is the most-cited single result on this topic."

**Skill action:**

1. Recognize this as fuzzy — needs decomposition
2. Read the chapter and identify likely candidate sentences for inline citation
3. Tell the user upfront: "The report's recommendation here is general. I've drafted two concrete atomic changes that operationalize it. I'll present each individually."
4. Present each as its own Standard-case AskUserQuestion (e.g., "Add inline citation to Liang et al. (2023) at the end of the bias claim in paragraph 2: 'AI detection tools are unreliable, uneven across disciplines and languages, and prone to false positives [Liang et al. 2023]'")

---

## Notes on the Cowork Environment

If running in Cowork (Anthropic's desktop app), the AskUserQuestion tool is the right surface for per-change authorization. It renders multiple-choice cleanly and supports an "Other" free-text option for Modify cases.

When fetching Consensus results, the MCP tool name varies by deployment but is typically `mcp__d3abbc94-30fa-41c6-be81-1a421a0561ca__search` or similar. If you need to verify it's available, search the available tools first; if Consensus is not connected, fall back to verifying paper existence by checking that the URL in the report resolves (use WebFetch).

---

## Reminders

- The user has chosen "one atomic change at a time" authorization. Don't batch even if it seems faster.
- The user wants verification of both existence and claim alignment for every citation. Don't skip the alignment check.
- Try full-text verification from `/sources/` first; fall back to Consensus abstracts. Both modes are valid; full text is just stronger.
- When using Consensus abstract verification on an important citation, suggest adding the paper to `/sources/` for fuller verification.
- The user wants all recommendations surfaced equally, regardless of whether the report phrases them as required, recommended, or optional. Don't filter.
- Always read the source file fresh before applying any Edit. The report's quotation may not match the file exactly if the file has been revised since the fact-check.
- Decompose fuzzy recommendations into 1-3 concrete atomic changes. Don't try to handle abstract recommendations as single decisions — they're impossible to apply.
- After applying the report's recommendations, check for mixed citation conventions. If the chapter now has some inline-cited entries and some bibliography-only entries, propose alignment as a separate step (Step 6). Always ask before aligning — some entries may be intentionally "further reading" rather than anchored citations.
