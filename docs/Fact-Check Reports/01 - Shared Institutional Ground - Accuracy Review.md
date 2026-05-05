# Accuracy Review: 01 - Shared Institutional Ground

**Reviewed:** 2026-05-05
**Claims examined:** 7
**Overall verdict:** Well-supported

---

## Summary

The claims in this chapter are strongly supported by the peer-reviewed literature on AI detection tools, academic integrity policy, and educational equity. The empirical literature converges on three key points the document makes: that current AI detectors are technically unreliable and produce false positives at meaningful rates, that they exhibit measurable bias against non-native English speakers, and that detection-focused enforcement strategies tend to be less effective than trust-based pedagogical approaches. The framing around equity for multilingual students and students with disabilities is also supported by recent empirical work. The chapter does not overreach; if anything, it is somewhat conservative relative to what the literature now permits.

---

## Claim-by-Claim Review

### Claim 1: AI detection tools are unreliable
> "AI detection tools are unreliable, uneven across disciplines and languages, and prone to false positives."

**Support level:** Well-supported

**Evidence:**
- Weber-Wulff et al. (2023) tested 12 publicly available tools and Turnitin and PlagiarismCheck, concluding the available detection tools "are neither accurate nor reliable" and exhibit a bias toward classifying output as human-written. [Testing of detection tools for AI-generated text](https://consensus.app/papers/details/0d2738c611e65e6398d0b08e0899487a/?utm_source=claude_desktop)
- Perkins et al. (2024) found that simple manipulation techniques reduced detector accuracy by 17.4%, leading the authors to conclude that detectors "cannot currently be recommended for determining academic integrity violations." [Simple techniques to bypass GenAI text detectors](https://consensus.app/papers/details/2fbd54cb901e5d31955fd1b6191bd91b/?utm_source=claude_desktop)
- Elkhatat et al. (2023) showed that detection tools were inconsistent on human control texts and produced both false positives and uncertain classifications. [Evaluating the efficacy of AI content detection tools](https://consensus.app/papers/details/94a2054447e65643aa8141407d36dcfb/?utm_source=claude_desktop)
- Halaweh et al. (2024) demonstrated that all five detectors tested (including Turnitin) failed to identify lightly paraphrased ChatGPT output. [Examining the Accuracy of AI Detection Software Tools in Education](https://consensus.app/papers/details/398c3b847bc95d5abf7535ee2e5d367e/?utm_source=claude_desktop)

**Notes:** A counterpoint worth flagging: Hyatt et al. (2025) found that aggregating results across multiple detectors in a STEM context dropped false-positive rates to near zero, and Pangram (Emi et al., 2024) reports markedly lower error rates than competitors. Both suggest the picture is evolving and that "unreliable" is true of currently deployed tools at typical institutional thresholds, not of the detection problem in principle. [Using aggregated AI detector outcomes to eliminate false-positives](https://consensus.app/papers/details/4e64067359115c54acd76e2044c043c5/?utm_source=claude_desktop), [Technical Report on the Pangram AI-Generated Text Classifier](https://consensus.app/papers/details/eec4cf280bc4564eba7de63515e8a179/?utm_source=claude_desktop)

---

### Claim 2: Detection tools are biased against non-native English speakers and multilingual writers
> "AI detection tools are unreliable, uneven across disciplines and languages..." (and later: "blanket prohibitions or opaque policies can unintentionally disadvantage multilingual students")

**Support level:** Well-supported

**Evidence:**
- Liang et al. (2023) found that GPT detectors "frequently misclassify non-native English writing as AI generated," raising explicit fairness concerns for evaluative settings. [GPT detectors are biased against non-native English writers](https://consensus.app/papers/details/7edfc3ad6d2a5ea9b80915c35b327f68/?utm_source=claude_desktop)
- Giray (2024) documents that false positives "disproportionately affect non-native English speakers and scholars with distinctive writing styles." [The Problem with False Positives](https://consensus.app/papers/details/44107cb60ca353a1ad60c85400917c9e/?utm_source=claude_desktop)
- Wee et al. (2023) found that AI-translated and paraphrased non-English human-written essays were flagged as AI-generated, and warned that blanket bans would disadvantage non-native speakers. [Non-English academics face inequality](https://consensus.app/papers/details/33eeb6a434c15a999a86f8068e3dc9ac/?utm_source=claude_desktop)
- A 2025 PeerJ Computer Science evaluation of GPTZero, ZeroGPT, and DetectGPT confirmed accuracy-bias trade-offs that disproportionately affect non-native speakers. [The accuracy-bias trade-offs in AI text detection tools](https://consensus.app/papers/details/4024a462da8c583cb1259d3f47bc723e/?utm_source=claude_desktop)

**Notes:** Jiang et al. (2024) showed that with carefully constructed detectors trained on representative data, the bias against non-native English writers can be substantially reduced. The bias is therefore a property of currently deployed mainstream tools, not an inherent property of detection. [Detecting ChatGPT-generated essays](https://consensus.app/papers/details/a5cfd5e5ed1f5cb2b7c23e73eaebfd7d/?utm_source=claude_desktop)

---

### Claim 3: Detection-based enforcement creates anxiety and distrust
> "In many cases, they create more confusion and anxiety than clarity."

**Support level:** Well-supported

**Evidence:**
- Giray et al. (2025) argue that "AI detection-focused approaches in writing foster an atmosphere of distrust and anxiety, while collaborative AI integration enhances learning outcomes and student engagement." [Beyond Policing: AI Writing Detection Tools](https://consensus.app/papers/details/5df70ca0fd62573bba298b6bef3b8222/?utm_source=claude_desktop)
- Giray (2024) describes how AI detection tools "create a climate of anxiety and distrust within academic communities," with documented harms to scholars facing false accusations. [The Problem with False Positives](https://consensus.app/papers/details/44107cb60ca353a1ad60c85400917c9e/?utm_source=claude_desktop)
- Gonsalves (2024) found that 74% of students at King's Business School failed to declare AI use, citing fear of repercussions, ambiguous guidelines, and inconsistent enforcement, undermining transparency rather than promoting integrity. [Addressing student non-compliance in AI use declarations](https://consensus.app/papers/details/e8d863a0082658019ebd525a0845aaeb/?utm_source=claude_desktop)

**Notes:** This framing is well-grounded but largely qualitative and survey-based. The literature has not produced a randomized comparison of detection-heavy vs trust-based regimes, so the strongest empirical claim is that detection regimes are associated with anxiety, distrust, and non-compliance, not that the alternative is causally more effective on integrity outcomes.

---

### Claim 4: Trust-based, design-focused approaches are more effective than monitoring and enforcement
> "There is growing recognition that teaching and assessment strategies grounded in trust, transparency, and instructional design are more effective than those centered on monitoring and enforcement."

**Support level:** Partially supported

**Evidence:**
- Deep et al. (2025) synthesize peer-reviewed literature from 2021-2024 and call for "a shift away from punitive approaches toward AI-integrated pedagogies that emphasize ethical use, student support, and inclusive assessment design." [Evaluating the Effectiveness and Ethical Implications of AI Detection Tools](https://consensus.app/papers/details/9268558e43675b86ad4f9e53f811f5ea/?utm_source=claude_desktop)
- Alsharefeen et al. (2025) found in a UAE faculty study that instructors "demonstrated a preference for educative over punitive approaches" and identified detection challenges as barriers to enforcement. [Examining academic integrity policy and practice in the era of AI](https://consensus.app/papers/details/7a914f36c8af58efaef856e929d3d93f/?utm_source=claude_desktop)
- Francis et al. (2025) recommend "transparent policies that ensure fairness and accountability in GenAI use" rather than detection-led approaches. [Generative AI in Higher Education: Balancing Innovation and Integrity](https://consensus.app/papers/details/db26adaecaca54b7a728de0529877d0c/?utm_source=claude_desktop)

**Notes:** "More effective" is the strongest word in this sentence and the one the literature can least support. There is widespread expert consensus and policy convergence around trust-based approaches, but the empirical comparison of integrity outcomes between regimes is thin. Consider softening to "growing recognition... that they are more sustainable / more equitable" or "more aligned with sound assessment practice." That framing is fully supported; "more effective" implies a comparative outcome study that does not yet exist at scale.

---

### Claim 5: Faculty retain professional discretion in shaping their courses
> "Faculty retain professional discretion in shaping their courses. There is no single required stance toward generative AI..."

**Support level:** Not directly researchable

**Notes:** This is a statement about institutional policy and academic governance at U-M specifically, not an empirical claim about the world. Consensus does not return relevant peer-reviewed literature on this. It should be verified against U-M's actual policy documents (Office of the Provost, faculty governance statements, school-level guidance) rather than the research literature.

---

### Claim 6: AI tools can function as supports for some students and barriers for others
> "AI tools can function as supports for some students and barriers for others."

**Support level:** Well-supported

**Evidence:**
- Pierrès et al. (2024) interviewed 33 students with disabilities and found ChatGPT brought "significant opportunities as an assistant in teaching, writing, reading and research, or self-organization." [Exploring the role of generative AI in higher education: Semi-structured interviews with students with disabilities](https://consensus.app/papers/details/8f4fbfeabab555c79ce7c24c15d28735/?utm_source=claude_desktop)
- Zhao et al. (2025) surveyed 124 students with disabilities and found GenAI tools were used productively across writing tasks, while also noting cost barriers and accuracy concerns. [The use of generative AI by students with disabilities in higher education](https://consensus.app/papers/details/d8990e5b7ee95134b370fd77765aefbd/?utm_source=claude_desktop)
- Cong-Lem et al. (2025) systematic review of 22 EFL studies found that GenAI "can bridge equity gaps by expanding access... yet it can also widen disparities through infrastructural inequities, digital literacy divides, algorithmic bias, and English-dominant linguistic norms." [Bridging or Breaking? A Systematic Review of How Generative AI Shapes Equity in Foreign Language Education](https://consensus.app/papers/details/ea83fe1192ee5872a0b6e276ec7dda4c/?utm_source=claude_desktop)
- Gabriel (2024) catalogues both equity-promoting affordances (accessibility features, multilingual support) and equity-eroding risks (digital divides, bias). [Generative AI and Educational (In)Equity](https://consensus.app/papers/details/da536aabeb11572bb33f37de532c6189/?utm_source=claude_desktop)

**Notes:** The "supports for some, barriers for others" framing is a fair summary of the systematic review evidence, which consistently finds dual effects. A particularly relevant cite for this whitepaper is Cong-Lem et al. (2025), which is specific to foreign language education.

---

### Claim 7: Blanket prohibitions can unintentionally disadvantage multilingual students, students with disabilities, or those with unequal access
> "Blanket prohibitions or opaque policies can unintentionally disadvantage multilingual students, students with disabilities, or those navigating unequal access to resources."

**Support level:** Well-supported

**Evidence:**
- Wee et al. (2023) explicitly conclude that "blanket policies completely banning all AI tools may put nonnative English speakers at a disadvantage." [Non-English academics face inequality](https://consensus.app/papers/details/33eeb6a434c15a999a86f8068e3dc9ac/?utm_source=claude_desktop)
- Jenks et al. (2024) argue from disability studies that institutions risk "disproportionately affect[ing] those with disabilities" if access questions are not built in from the start of GenAI policy. [Emergent questions of access](https://consensus.app/papers/details/f118c69c7f715b968841e372876be3ea/?utm_source=claude_desktop)
- Jafry et al. (2024) describe practical harms when GenAI policies are not designed through a disability-justice lens. [Evolving intersections: AI, disability, and academic integrity](https://consensus.app/papers/details/5fbaa228d2dc5024a4258490ecf4d165/?utm_source=claude_desktop)
- Zipf et al. (2025) document equity concerns around AI access and skills in a US R1 setting. [Using the information inequity framework to study GenAI equity](https://consensus.app/papers/details/f7e05d1606255c299e7a26fe49413cc7/?utm_source=claude_desktop)

**Notes:** This is one of the best-supported claims in the chapter and could carry an explicit citation if any single sentence in the document is to be footnoted.

---

## Recommendations

1. **Consider softening the comparative claim in paragraph 2.** The phrase "more effective than those centered on monitoring and enforcement" goes slightly beyond what the empirical literature has demonstrated. Reframing to "more sustainable," "more equitable," or "better aligned with sound assessment practice" would be fully supported. If "more effective" is preserved, anchor it explicitly to integrity-related outcomes (compliance, climate of trust, equity of impact) rather than implying a head-to-head outcome study.

2. **The strongest single citation candidate is Cong-Lem et al. (2025)** because it is specific to foreign language education and frames the dual-use equity question in terms this primer's audience will recognize. If the chapter is to add even one in-line citation beyond the existing bibliography, this is the most strategic addition.

3. **Consider adding a sentence acknowledging that detection technology is evolving.** The literature is unanimous that *currently deployed* mainstream detectors are unreliable and biased, but there are credible technical improvements (aggregated detection, watermarking, retrained classifiers) that may shift this in the next 1-3 years. A short hedging clause would future-proof the chapter without weakening its argument.

4. **The current bibliography (Ardito 2025; Parker 2025) is thin.** Both are reasonable choices but the chapter cites them generally rather than to specific claims. Consider linking specific claims to specific sources, especially Liang et al. (2023) for the bias claim, since it is the most-cited single result on this topic.

---

## Research Gaps

- Comparative effectiveness studies of detection-heavy vs trust-based assessment regimes (RCT or quasi-experimental) do not yet exist in the peer-reviewed literature. Claims of relative effectiveness rest on faculty surveys, qualitative work, and policy analysis.
- Faculty professional discretion in shaping AI policy is a governance question the academic search literature does not address; it should be verified against U-M policy documents directly.
