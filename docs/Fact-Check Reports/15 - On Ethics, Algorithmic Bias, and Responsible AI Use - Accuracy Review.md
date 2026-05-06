# Accuracy Review: 15 - On Ethics, Algorithmic Bias, and Responsible AI Use

**Reviewed:** 2026-05-05
**Claims examined:** 9
**Overall verdict:** Well-supported, with one numerical claim that needs careful citation

---

## Summary

This is the most claim-dense Layer 2 chapter, with multiple specific empirical assertions about training data composition, image generation bias, content moderation labor, and copyright/privacy. Each major claim holds up under scrutiny. The most distinctive numerical claim — that "60% or more of web traffic used to train major LLMs is in English" — is approximately correct as a description of Common Crawl composition, though the framing is slightly imprecise. Image generation bias claims are unusually well-documented: there is a substantial recent empirical literature (Bianchi et al. 2022, Cheong et al. 2024, Naik et al. 2023, Aldahoul et al. 2024) that supports the chapter's specific examples almost exactly. The labor and content moderation claims are supported by recent ethnographic work on Sama, the company that performed content moderation for OpenAI. The chapter does not have a bibliography; given the density of empirical claims, this is a more significant gap than in most other Layer 2 chapters.

---

## Claim-by-Claim Review

### Claim 1: LLMs are trained on internet datasets that encode existing biases
> "Large language models are trained on massive datasets drawn primarily from the internet. This training process encodes existing patterns, including biases related to race, gender, geography, and language."

**Support level:** Well-supported

**Evidence:**
- Xu et al. (2024) survey of multilingual LLMs identifies "language imbalance, multilingual alignment, and inherent bias" as central limitations of training-data-driven models. [A survey on multilingual large language models: corpora, alignment, and bias](https://consensus.app/papers/details/884c4aaac0285a48af42cf4d972b08c2/?utm_source=claude_desktop)
- Luccioni and Viviano (2021) audit of Common Crawl found the corpus "contains a significant amount of undesirable content, including hate speech and sexually explicit content, even after filtering procedures," directly supporting the chapter's claim about embedded biases. [What's in the Box? An Analysis of Undesirable Content in the Common Crawl Corpus](https://consensus.app/papers/details/676ae69f9b9957d1a5ecae598e6cb471/?utm_source=claude_desktop)
- Dodge et al. (2021) document the C4 corpus and find that "blocklist filtering disproportionately removes text from and about minority individuals," directly supporting the chapter's argument about geographic and demographic bias in training data. [Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus](https://consensus.app/papers/details/c2ad5b3cef58500f8aa07e7388bdcc41/?utm_source=claude_desktop)

**Notes:** Solid. The claim is conservatively stated and directly supported by audits of the actual training corpora.

---

### Claim 2: 60% or more of web traffic used to train major LLMs is in English
> "Estimates suggest that **60% or more of web traffic used to train major LLMs is in English**, making English vastly overrepresented relative to its proportion of global speakers."

**Support level:** Approximately correct, but the framing is slightly imprecise

**Evidence:**
- Mehmood et al. (2017) directly examined the December 2016 Common Crawl Corpus (2.87 billion web documents) and found that "57.2% of web documents contain content in the English language" and "60.6% of web documents have content exclusively in the English language." This is the closest direct empirical anchor for the chapter's number. [Understanding regional context of World Wide Web using common crawl corpus](https://consensus.app/papers/details/c7e4b085502c506cbe154904921e29d1/?utm_source=claude_desktop)
- Schuster et al. (2018) describe LLM training data as having "disproportionate distribution of languages" with English dominance. [Cross-lingual Transfer Learning for Multilingual Task Oriented Dialog](https://consensus.app/papers/details/c1fcc84366a45984ad3ad8d295392172/?utm_source=claude_desktop)
- Ranaldi et al. (2023) note that LLM language ability "is often unbalanced towards English because of the imbalance in the distribution of the pre-training data." [Empowering Cross-lingual Abilities of Instruction-tuned Large Language Models by Translation-following demonstrations](https://consensus.app/papers/details/aadefe3a3a7c52c88c6fbfdd1cc2da1d/?utm_source=claude_desktop)
- Zhou et al. (2024) describes LLMs as "often English-centric due to the disproportionate distribution of languages in their pre-training data." [MoE-LPR: Multilingual Extension of Large Language Models through Mixture-of-Experts with Language Priors Routing](https://consensus.app/papers/details/a44d7220af475f349fb772c6a333361c/?utm_source=claude_desktop)

**Notes:** The chapter's "60% or more" figure is approximately correct as a description of Common Crawl's English content, but a few precision issues are worth flagging:

1. The figure refers to *web documents in Common Crawl* (60.6% exclusively English), not "web traffic" precisely. "Web traffic" technically means data flow on the internet, which is a different measurement.
2. Major LLMs vary in their training data composition. GPT-3's training data was reported as 92.6% English by token count; LLaMA models have varied; multilingual models like BLOOM are by design more balanced. A single "60%" figure cannot accurately characterize all major LLMs.
3. The most common phrasing in the technical literature is that LLMs are "English-centric" or that their training data is "English-dominant" rather than naming a specific percentage.

Suggested revision: "Estimates suggest that the majority of web text used to train major LLMs is in English (over 60% of documents in the widely-used Common Crawl corpus), making English vastly overrepresented relative to its proportion of global speakers." This preserves the chapter's substantive claim while being more precise about what the number measures.

---

### Claim 3: Models perform better in English; less-represented languages produce less reliable outputs
> "Models trained predominantly on English tend to perform better in English, both in terms of fluency and cultural appropriateness. For less-represented languages, outputs may be less reliable, more prone to error, or limited to formal registers."

**Support level:** Well-supported

**Evidence:**
- Zhang et al. (2023), pointedly titled "Don't Trust ChatGPT when your Question is not in English," provides direct empirical evidence that "GPT exhibits highly translating-like behaviour in multilingual settings" and shows performance disparities across languages. [Don't Trust ChatGPT when your Question is not in English: A Study of Multilingual Abilities and Types of LLMs](https://consensus.app/papers/details/56287691dbfe57a3b1824cb50ced539b/?utm_source=claude_desktop)
- Guerreiro et al. (2023) studied translation hallucinations across 100+ language pairs and found that "models struggle with hallucinations primarily in low-resource directions and when translating out of English, where, critically, they may reveal toxic patterns that can be traced back to the training data." [Hallucinations in Large Multilingual Translation Models](https://consensus.app/papers/details/84ee2012cf3a569292de52d8f690669e/?utm_source=claude_desktop)
- Dang et al. (2024) note that preference optimization techniques "have focused on a small set of high-resource languages like English and Chinese," with most LLM research effectively excluding most of the world's languages. [RLHF Can Speak Many Languages: Unlocking Multilingual Preference Optimization for LLMs](https://consensus.app/papers/details/20ba00228cb75109986b0e2dc3a4042c/?utm_source=claude_desktop)
- Caswell et al. (2021) audited 205 language-specific corpora and found that "lower-resource corpora have systematic issues: At least 15 corpora have no usable text, and a significant fraction contains less than 50% sentences of acceptable quality." [Quality at a Glance: An Audit of Web-Crawled Multilingual Datasets](https://consensus.app/papers/details/9c8e7298d26751e2a1f1bc8c6a6e4afa/?utm_source=claude_desktop)

**Notes:** Strongly supported. The empirical literature is unanimous that LLMs perform measurably worse in less-represented languages.

---

### Claim 4: AI detection tools are especially prone to false positives for non-native and heritage language use
> "Heritage speakers and multilingual students face additional risks. AI detection tools, already unreliable, are especially prone to false positives when evaluating non-native or heritage language use."

**Support level:** Well-supported (with the same heritage-speaker caveat noted in earlier reports)

**Evidence:** This claim was examined in detail in the file 01 and 05 reviews, with primary evidence from:
- Liang et al. (2023): "GPT detectors frequently misclassify non-native English writing as AI generated." [GPT detectors are biased against non-native English writers](https://consensus.app/papers/details/7edfc3ad6d2a5ea9b80915c35b327f68/?utm_source=claude_desktop)
- Giray (2024) on disproportionate harm to non-native English speakers. [The Problem with False Positives](https://consensus.app/papers/details/44107cb60ca353a1ad60c85400917c9e/?utm_source=claude_desktop)

**Notes:** As noted in earlier reports, the detection-bias literature has tested non-native writers but has not, as far as I can tell, separately tested heritage speakers. The chapter's grouping is reasonable but slightly ahead of where the literature has explicitly drawn lines.

---

### Claim 5: Image generators default to stereotypes when generating "doctor," "CEO," "family," and similar prompts
> "When asked to generate images of 'a doctor,' 'a CEO,' or 'a family,' these tools often default to narrow stereotypes that reflect dominant cultural assumptions: white or light-skinned figures in positions of authority, heteronormative family structures, Western settings and dress."

**Support level:** Well-supported

**Evidence:** This is among the most directly documented claims in the chapter.
- Bianchi et al. (2022), an extensively cited study (397 citations), found that "ordinary prompts produce stereotypes, including prompts simply mentioning traits, descriptors, occupations, or objects... prompting for occupations resulting in amplification of racial and gender disparities, and prompting for objects resulting in reification of American norms." [Easily Accessible Text-to-Image Generation Amplifies Demographic Stereotypes at Large Scale](https://consensus.app/papers/details/481ff71a742956adb15927d5673f792b/?utm_source=claude_desktop)
- Cheong et al. (2024) found that DALL-E Mini "represent dozens of different occupations as populated either solely by men (e.g., pilot, builder, plumber) or solely by women (e.g., hairdresser, receptionist, dietitian)" and "represent most occupations as populated primarily or solely by White people." [Investigating Gender and Racial Biases in DALL-E Mini Images](https://consensus.app/papers/details/a1e526d8cae75d0b93f5d05d5621e490/?utm_source=claude_desktop)
- Sun et al. (2023) audited 15,300 DALL·E 2 images across 153 occupations and found "DALL·E 2 underrepresents women in male-dominated fields while overrepresenting them in female-dominated occupations." [Smiling Women Pitching Down: Auditing Representational and Presentational Gender Biases in Image Generative AI](https://consensus.app/papers/details/ba1d4342f0895bb1b466a0fcf9325100/?utm_source=claude_desktop)
- Górska and Jemielniak (2023) found in 99 AI-generated professional images that "men represented in 76% of the images and women in only 8%" across law, medicine, engineering, and scientific research. [The invisible women: uncovering gender bias in AI-generated images of professionals](https://consensus.app/papers/details/ce8b60bb4bdd59c1ada50a6d5e7f95b5/?utm_source=claude_desktop)
- Ali et al. (2023) tested three leading text-to-image generators on surgical specialties and found "Midjourney and Stable Diffusion had significantly lower representation of images of female (0% and 1.8%) and non-White (0.5% and 0.6%) surgeons" relative to actual demographics. [Demographic Representation in 3 Leading Artificial Intelligence Text-to-Image Generators](https://consensus.app/papers/details/a10afe02c9cb5ea289adeb42269a2e57/?utm_source=claude_desktop)

**Notes:** Unusually well-documented claim. The chapter's specific examples (doctor, CEO, family) match almost exactly the prompts these studies have used, and the findings consistently show the patterns the chapter describes.

---

### Claim 6: AI image generators produce visual clichés and homogenized depictions for cultural prompts
> "Requests for images representing specific cultures or regions may produce visual clichés, exoticized depictions, or historically inaccurate representations that flatten complex identities into stereotypes... A request for images of 'African people' might produce a homogenized vision that erases regional, ethnic, and cultural diversity."

**Support level:** Well-supported

**Evidence:**
- Aldahoul et al. (2024) found "significant racial homogenization, e.g., depicting nearly all Middle Eastern men as bearded, brown-skinned, and wearing traditional attire" in Stable Diffusion outputs. This directly supports the chapter's "homogenized vision" framing. [AI-generated faces influence gender stereotypes and racial homogenization](https://consensus.app/papers/details/2545a38cd56c5faeb0778ea572f317da/?utm_source=claude_desktop)
- Naik and Nushi (2023) found "an analysis of geographical location representations on everyday situations (e.g., park, food, weddings) shows that for most situations, images generated through default location-neutral prompts are closer and more similar to images generated for locations of United States and Germany." This directly supports the chapter's "Western settings and dress" framing. [Social Biases through the Text-to-Image Generation Lens](https://consensus.app/papers/details/bf263257a87b5b0fb4b34816a610e221/?utm_source=claude_desktop)

**Notes:** Solid. The "Mexican culture filled with sombreros and piñatas" framing in the chapter is exactly the kind of cultural homogenization documented by Aldahoul et al. and Naik and Nushi.

---

### Claim 7: Content moderation labor for AI training has been outsourced to low-wage markets, with documented psychological tolls in Kenya, the Philippines, and other regions
> "Training these models to avoid generating harmful content (child sexual abuse material, extreme violence, hate speech) requires human workers to review and label vast quantities of disturbing material. Much of this work has been outsourced to low-wage markets... Reports from Kenya, the Philippines, and other regions have documented the psychological toll of this work."

**Support level:** Well-supported

**Evidence:**
- Muldoon et al. (2023) directly studied Sama, "a training-data company that focuses on annotating data for artificial intelligence (AI) systems," based on fieldwork at three of Sama's East African delivery centres in Kenya and Uganda. The study reveals "alarming accounts of low wages, insecure work, a tightly disciplined labour management process, gender-based exploitation and harassment and a system designed to extract value from low-paid workers." Sama is the same company that did content moderation work for OpenAI. [The poverty of ethical AI: impact sourcing and AI supply chains](https://consensus.app/papers/details/51b6b57bfb3f58a1869ba1877bd4f876/?utm_source=claude_desktop)
- Mbioh (2025) discusses the legal proceedings around Meta's outsourced content moderation in Kenya as a landmark case for the Global South. [Resisting Meta: content moderation, diffraction and the constitutive power of Kenyan law within the Global South](https://consensus.app/papers/details/03c366b33b1f5f368dcd6553b04972bd/?utm_source=claude_desktop)
- Tubaro et al. (2019) describe how "the production of AI is a labor-intensive process, which particularly needs the little-qualified, inconspicuous and low-paid contribution of 'micro-workers' who annotate, tag, label, correct and sort the data." [Micro-work, artificial intelligence and the automotive industry](https://consensus.app/papers/details/75a3121a6e6a593284f511173aa4b237/?utm_source=claude_desktop)
- Miceli and Posada (2021) develop the broader power-aware critique of "the corporate forces and market imperatives involved in the labor of data workers that subsequently shape ML datasets." [Studying Up Machine Learning Data](https://consensus.app/papers/details/bd6b2cd2f89359a7acc069047af01bfd/?utm_source=claude_desktop)

**Notes:** Solid empirical support. The Muldoon et al. (2023) study is particularly relevant because it directly examines Sama, the company widely reported to have provided content moderation services for OpenAI. The chapter's specific claims about psychological toll, short-term contracts, and limited mental health support are all consistent with the documented record. Note that the most journalistic accounts of OpenAI/Sama specifically were in *Time* magazine (Perrigo, 2023) — peer-reviewed academic literature on this specific case is more limited than the broader literature on AI labor practices.

---

### Claim 8: Training data was collected without explicit permission; copyright lawsuits are ongoing
> "The datasets used to train large language models include scraped web content... In many cases, this material was collected without explicit permission from creators... Copyright lawsuits are ongoing in multiple jurisdictions, and the legal landscape remains unsettled."

**Support level:** Well-supported

**Evidence:**
- Baack (2024) directly examines Common Crawl as a training data source and discusses the "fairness, accountability, and transparency" implications, including the practice of collecting data without explicit permission. [A Critical Analysis of the Largest Source for Generative AI Training Data: Common Crawl](https://consensus.app/papers/details/97d1c35d6e7859ba92bdeb5ef6b5a29d/?utm_source=claude_desktop)
- The "ongoing copyright lawsuits" claim is empirically uncontested as of the document's review date. The New York Times v OpenAI suit (filed December 2023), the Authors Guild class action, and various artist lawsuits against Stability AI are all current and well-documented in legal and journalistic sources, though peer-reviewed academic literature on specific cases lags.

**Notes:** The chapter's framing is appropriately hedged ("legal landscape remains unsettled"). The peer-reviewed literature on AI copyright is still emerging, but the factual claim that lawsuits are ongoing is correct.

---

### Claim 9: Personal information has been included in training data without meaningful anonymization; users may find their content reflected in AI outputs
> "Personal information, forum discussions, social media posts, and other user-generated content have been included in training data, sometimes without meaningful anonymization. Individuals may find their words, experiences, or identities reflected in AI outputs without their knowledge or consent."

**Support level:** Well-supported

**Evidence:**
- Carlini et al. (2020) demonstrated empirically that "an adversary can perform a training data extraction attack to recover individual training examples by querying the language model... extracted examples include (public) personally identifiable information (names, phone numbers, and email addresses), IRC conversations, code, and 128-bit UUIDs." This is the strongest direct evidence for the chapter's privacy claim. [Extracting Training Data from Large Language Models](https://consensus.app/papers/details/7daa12938bb651139bdcf670922090c7/?utm_source=claude_desktop)
- Dodge et al. (2021) document that the C4 corpus contains "text from unexpected sources like patents and US military websites" and includes "machine-generated text" and "evaluation examples from other benchmark NLP datasets," supporting the claim that training data composition is often opaque. [Documenting Large Webtext Corpora](https://consensus.app/papers/details/c2ad5b3cef58500f8aa07e7388bdcc41/?utm_source=claude_desktop)

**Notes:** The Carlini et al. (2020) paper is the canonical citation for the privacy claim — it has over 2,300 citations and provides direct empirical evidence that personally identifiable information can be extracted from trained LLMs.

---

## Recommendations

1. **Adjust the framing of the 60% claim.** The chapter says "60% or more of web traffic used to train major LLMs is in English." The closest empirical anchor (Mehmood et al. 2017) reports 60.6% of Common Crawl web documents are exclusively English. Suggested replacement: "Estimates suggest that the majority of web text used to train major LLMs is in English (over 60% of documents in the widely-used Common Crawl corpus)." This is more precise about what the number measures and avoids the technical inaccuracy of "web traffic."

2. **Add a bibliography.** This chapter is more empirically claim-dense than any other Layer 2 chapter and currently has no citations. The strongest specific additions:
   - **Mehmood et al. (2017)** for Claim 2 (the only source with the specific number).
   - **Bianchi et al. (2022)** for Claim 5 (the most-cited study on text-to-image stereotyping).
   - **Aldahoul et al. (2024)** for Claim 6 (the racial homogenization finding).
   - **Muldoon et al. (2023)** for Claim 7 (the Sama study).
   - **Carlini et al. (2020)** for Claim 9 (the training data extraction study).
   - **Liang et al. (2023)** for Claim 4 (already noted in earlier reports as a priority addition).

3. **Consider clarifying the heritage speakers framing in Claim 4.** As noted in the file 05 review, the detection-bias literature has tested non-native English writers but has not, as far as I can tell, separately tested heritage speakers. A small phrasing adjustment ("multilingual writers and others whose L2 prose differs from corpus-typical native English") would track the empirical literature more precisely.

4. **The chapter's epistemic balance is well-calibrated throughout.** Phrases like "the legal landscape remains unsettled" and "Awareness does not require abandoning the technology" appropriately frame ethical concerns without overclaiming or moralizing. The "Awareness without paralysis" framing in the implications section is rhetorically and ethically apt.

5. **Consider noting that the labor and copyright claims rely partly on journalism rather than peer-reviewed sources.** The chapter is broadly correct, but the most specific factual claims about Sama and OpenAI come from journalism (especially Perrigo 2023 in *Time*) rather than academic sources. The Muldoon et al. (2023) academic study examines the same company but does not focus specifically on the OpenAI contract. A small note in revision would acknowledge this lineage.

---

## Research Gaps

- The peer-reviewed literature on the specific OpenAI/Sama content moderation arrangement is more limited than journalistic reporting. The Muldoon et al. (2023) study examines Sama broadly but not the OpenAI contract in detail. A more comprehensive academic study of LLM content moderation labor practices would strengthen claims in this area.
- Quantitative breakdown of major LLM training data composition by language is opaque for the most prominent commercial models (GPT-4, Claude, Gemini). Most public figures come from open-source models like BLOOM or LLaMA. The chapter's "60% or more" is a reasonable proxy but a single specific number cannot accurately characterize all major LLMs.
- Image generator bias is well-documented but the field is moving fast. Newer models with debiasing interventions (DALL-E 3, Imagen 3) may produce different patterns than the studies cited, which often used Stable Diffusion or earlier DALL-E versions.
