# Accuracy Review: 16 - On Climate, Environment, and GenAI's Potential Impact

**Reviewed:** 2026-05-05
**Claims examined:** 10
**Overall verdict:** Well-supported, with important nuances flagged for expert review

---

## Summary

The chapter's most distinctive feature is its epistemic humility. Throughout, it acknowledges that "the data simply does not support confident claims in either direction," that comparisons "are rarely apples to apples," and that figures are "contested." This stance is empirically defensible. The peer-reviewed literature on AI environmental impact is genuinely mixed, fast-moving, and difficult to compare across studies. Where the chapter makes specific empirical claims, they are generally well-supported. The bibliography is the strongest of any Layer 2 chapter and includes several of the most relevant primary sources (Strubell et al. 2019, Li et al. 2025 on water, Elsworth et al. 2025).

That said, this is a fast-moving and politically charged topic, and a few areas warrant special attention before publication. The most important nuance the chapter does not currently surface is the recent finding (Chien et al. 2023, 2024; Kaur et al. 2026) that **inference now dominates training in cumulative emissions for ChatGPT-like services**, often by an order of magnitude, which somewhat reframes the "training is not a one-time event" argument the chapter makes. There are also a few places where the chapter's framing ("not straightforward," "data is uneven") is technically correct but might not satisfy a reader who has seen specific recent empirical numbers. The recommendations below flag these.

---

## Claim-by-Claim Review

### Claim 1: Training large language models requires significant computational resources and substantial energy
> "Training large language models requires significant computational resources, which translates to substantial energy consumption."

**Support level:** Well-supported

**Evidence:**
- Strubell et al. (2019), already in the chapter's bibliography, was the foundational study on training carbon costs and remains widely cited.
- Luccioni et al. (2022) provided a careful life-cycle estimate for BLOOM (176B parameters): "approximately 24.7 tonnes of CO2eq if we consider only the dynamic power consumption, and 50.5 tonnes if we account for all processes ranging from equipment manufacturing to energy-based operational consumption." [Estimating the Carbon Footprint of BLOOM, a 176B Parameter Language Model](https://consensus.app/papers/details/a8e24f7ae5ef51e7b10f5d43eba531f8/?utm_source=claude_desktop)
- Liu et al. (2024) summarize that "increased greenhouse gas emissions" are a documented consequence of LLM training. [Green AI: exploring carbon footprints, mitigation strategies, and trade offs in large language model training](https://consensus.app/papers/details/9a2c472b2f145e5d9e1a89d0e9664978/?utm_source=claude_desktop)
- Jiang et al. (2024) provide a life-cycle analysis covering "eight main phases throughout the life cycle of the development of such intelligent chatbots." [Preventing the Immense Increase in the Life-Cycle Energy and Carbon Footprints of LLM-Powered Intelligent Chatbots](https://consensus.app/papers/details/a2c27090e2905aadb9a6a497926d9cc0/?utm_source=claude_desktop)

**Notes:** Solid. The basic claim is empirically uncontested.

---

### Claim 2: Training is not a one-time event; models are continuously updated, retrained, and iteratively improved
> "It is also important to recognize that model training is not a one-time event. While it is sometimes framed as a large upfront cost followed by lower-cost inference, the reality is more complex. Models are continuously updated, retrained on new data, and iteratively improved."

**Support level:** Partially supported, but with an important nuance the chapter should consider

**Evidence:** The continuous-retraining claim is correct and supported.
- Jiang et al. (2024) describes the LLM lifecycle as including ongoing fine-tuning, deployment, and updates. [Preventing the Immense Increase in the Life-Cycle Energy and Carbon Footprints of LLM-Powered Intelligent Chatbots](https://consensus.app/papers/details/a2c27090e2905aadb9a6a497926d9cc0/?utm_source=claude_desktop)
- Xu et al. (2024) discusses the carbon footprint across "data processing, model training, model optimization, model deployment, and model inference." [Research on carbon footprint in the whole process of LLM based on refined modeling](https://consensus.app/papers/details/90dd9657b1ef516c872b012a54ebbfc9/?utm_source=claude_desktop)

**Important nuance:** The chapter's framing ("the energy costs of training are not a historical sunk cost but an ongoing environmental burden") may understate a finding now well-documented in the literature: **inference has come to dominate training in cumulative emissions for ChatGPT-like services**, often by an order of magnitude.
- Chien et al. (2023, 2024): "for ChatGPT-like services, inference dominates emissions, in one year producing 25x the carbon-emissions of training GPT-3." [Reducing the Carbon Impact of Generative AI Inference (today and in 2035)](https://consensus.app/papers/details/7bb9cf02cc345f6dacd7d57183dd6920/?utm_source=claude_desktop)
- Kaur et al. (2026): "inference operations constituting 80–90% of total energy usage" for LLMs. [The Carbon Cost of Intelligence: A Domain-Specific Framework for Measuring AI Energy and Emissions](https://consensus.app/papers/details/945a616613975786874df09b2b4ec06b/?utm_source=claude_desktop)
- Moore et al. (2025): "the costs of operating LLMs in their inference phase can exceed training costs by 25× per year." [Sustainable Carbon-Aware and Water-Efficient LLM Scheduling in Geo-Distributed Cloud Datacenters](https://consensus.app/papers/details/6cffd6696e9f50408177efde4e96d805/?utm_source=claude_desktop)

**Notes:** A reader from the AI sustainability research community may find the chapter's framing slightly off. The chapter is correct that training is not a single one-time cost. But a more current framing would be: "Training is not a one-time event, *and* inference at scale now dominates training in cumulative emissions." This actually strengthens, rather than weakens, the chapter's argument that AI's environmental impact accumulates with use.

---

### Claim 3: It is difficult to compare AI energy costs to baselines like video streaming or air travel
> "What makes these numbers difficult to assess is the lack of clear baselines for comparison... These comparisons are rarely apples to apples, and they depend heavily on assumptions about how energy is measured, what gets included in the calculation, and what energy sources are powering the data centers in question."

**Support level:** Well-supported

**Evidence:**
- Luccioni et al. (2022) explicitly identifies "the difficulty of precisely estimating the carbon footprint of ML models" as a central methodological challenge. [Estimating the Carbon Footprint of BLOOM](https://consensus.app/papers/details/a8e24f7ae5ef51e7b10f5d43eba531f8/?utm_source=claude_desktop)
- Ren et al. (2024) presents this exact problem: "The recent proliferation of large language models (LLMs) has led to divergent narratives about their environmental impacts. Some studies highlight the substantial carbon footprint of training and using LLMs, while others argue that LLMs can lead to more sustainable alternatives to current practices." This study reconciles the narratives by directly comparing LLM and human-labor environmental impacts. [Reconciling the contrasting narratives on the environmental impact of large language models](https://consensus.app/papers/details/7d59ec19816b54b08aaf6ec3e39a39b6/?utm_source=claude_desktop)

**Notes:** Well-grounded epistemic stance. A small addition worth considering: Ren et al. (2024) is a notable counterweight in the literature because it argues that, per output, LLMs may be *more* environmentally efficient than human labor (with human-to-LLM ratios of "40 to 150 for a typical LLM" and "1200 to 4400 for a lightweight LLM"). The chapter does not need to engage this finding but a knowledgeable reader will know it exists, and the chapter's "not straightforward" framing already accommodates it.

---

### Claim 4: A single AI-generated response uses energy comparable to a few web searches or a short video stream
> "Some research suggests that a single AI-generated response uses energy comparable to a few web searches or a short video stream, but these figures are contested and vary by model and infrastructure."

**Support level:** Approximately correct, with important caveats

**Evidence:**
- Sidorkin (2025) provides the most concrete recent figures: "An individual AI query emits roughly 4.3 grams of CO₂ and uses around 10 milliliters of freshwater. In comparison to common everyday tasks, AI's carbon footprint is small, significantly lower than driving or showering but higher than simple digital activities like web browsing." [Environmental Impact of Generative AI: Carbon and Water Footprint](https://consensus.app/papers/details/221db0b0a6cf5b22a041ecd71eb7a132/?utm_source=claude_desktop)
- Kaur et al. (2026) finds GPT-4 query emissions ranging from "0.0046–0.0197 gCO2 per query" using US Northeast grid intensity (320 gCO2e/kWh), with substantial domain-level variation. [The Carbon Cost of Intelligence](https://consensus.app/papers/details/945a616613975786874df09b2b4ec06b/?utm_source=claude_desktop)
- Sundaram and Bauer (2025) directly compares small and large language models on per-query water and energy use, finding "SLMs consumed 60-70% less energy and water than their LLM counterparts." [AI's Environmental Cost: Comparing Resource Consumption Between SLMs and LLMs Across Queries](https://consensus.app/papers/details/38b246376adb5c9cafdc3aa4fed3aa4b/?utm_source=claude_desktop)

**Notes:** The chapter's "comparable to a few web searches or a short video stream" framing is approximately correct but worth flagging two issues for the expert reviewer:

1. The figures are highly variable. Kaur et al. (2026) shows that "legal queries consume 4.3× more energy than general knowledge queries" for the same GPT-4 model. A single number badly oversimplifies the landscape.
2. The "few web searches" comparison is most often associated with industry-affiliated estimates (Google's 2023 IEA disclosures put a Google search at ~0.3 Wh; ChatGPT queries are commonly estimated at 2-3 Wh, so a query is roughly 6-10x a web search rather than "a few"). This comparison is one of the most contested numbers in the discourse.

The chapter's hedging ("these figures are contested and vary by model and infrastructure") is well-calibrated. But a reader who has seen the more specific numbers may want the chapter to acknowledge that the contestation has real empirical content and is not just typical scientific uncertainty.

---

### Claim 5: Efficiency improvements can reduce per-query environmental costs over time, but growth in usage can outpace those gains
> "Efficiency improvements in hardware, optimization of algorithms, and shifts toward renewable energy sources in data centers can reduce the per-query environmental cost over time. But growth in usage can outpace those gains, meaning that even as individual queries become less resource-intensive, the overall environmental footprint may still increase."

**Support level:** Well-supported

**Evidence:**
- Chien et al. (2023, 2024) directly addresses this dynamic: "Combined with hardware technology advances, CarbonMin can keep emissions increase to only 20% compared to 2022 levels for 55x greater workload." This shows both that efficiency gains are real and that workload growth can outpace them. [Reducing the Carbon Impact of Generative AI Inference](https://consensus.app/papers/details/7bb9cf02cc345f6dacd7d57183dd6920/?utm_source=claude_desktop)
- DynamoLLM (Stojkovic et al. 2024) demonstrates that optimization can reduce energy by 52% and operational carbon by 38% within a single inference framework, but this is per-query. Total energy consumption in their framework still scales with workload. [DynamoLLM: Designing LLM Inference Clusters for Performance and Energy Efficiency](https://consensus.app/papers/details/2e55de56e9a0579da2929cb67b4e2f0f/?utm_source=claude_desktop)
- Khan et al. (2025) shows quantization can reduce energy use by up to 45% but this is per-query, not aggregate. [Optimizing Large Language Models: Metrics, Energy Efficiency, and Case Study Insights](https://consensus.app/papers/details/96e8ebcfbf52535ab55c4fdf2292f858/?utm_source=claude_desktop)

**Notes:** Solid. This is a well-established pattern (sometimes called the Jevons paradox in adjacent literatures) and is consistent with the recent inference-energy literature.

---

### Claim 6: Some data centers use water-intensive cooling methods (evaporative cooling); others use closed-loop or air cooling that uses far less water
> "Some facilities use water-intensive cooling methods, including evaporative cooling towers that consume large volumes of freshwater. Others rely on air cooling or closed-loop systems that use far less water."

**Support level:** Well-supported

**Evidence:**
- Mytton (2021), the foundational peer-reviewed study on data center water consumption, confirms the typology: data centers use direct evaporative cooling (DEC), air-cooled chillers, or hybrid approaches. The article documents "in some cases 57% [of cooling water] sourced from potable water." [Data centre water consumption](https://consensus.app/papers/details/332b54de805c574989e216f41121416b/?utm_source=claude_desktop)
- Karimi et al. (2022) directly studied two Phoenix-area data centers using different cooling systems and found that "hybrid evaporative cooling has the least power consumption, while air-cooled chillers have the most water use." [Water-energy tradeoffs in data centers](https://consensus.app/papers/details/76ca8df6e37356c791cb7d0ada73c3b5/?utm_source=claude_desktop)
- Cui et al. (2024) and others document the climatic and geographical variation in cooling technology choice. [Climatic applicability of indirect evaporative cooling strategies](https://consensus.app/papers/details/e9b92f72dc6752a89518fe7abb659e35/?utm_source=claude_desktop)

**Notes:** Well-grounded. The claim is technically accurate, including the trade-offs (evaporative is more energy-efficient but uses more water).

---

### Claim 7: Companies do not always report water use transparently
> "Companies do not always report water use transparently, and when they do, the figures are difficult to compare across facilities or against other industrial water users."

**Support level:** Well-supported

**Evidence:**
- Mytton (2021) documents directly: "there are issues of transparency with less than a third of data centre operators measuring water consumption." This is a strong direct anchor for the chapter's claim. [Data centre water consumption](https://consensus.app/papers/details/332b54de805c574989e216f41121416b/?utm_source=claude_desktop)
- Natarajan (2025) describes how "the environmental consequences of this water consumption remain largely invisible to end users." [The Hydro-Digital Paradox](https://consensus.app/papers/details/2fb2a62cc2c35b5b821a3ebd18bfc3a0/?utm_source=claude_desktop)

**Notes:** Strong empirical support. Mytton (2021) is the canonical citation here and would be worth adding to the chapter's bibliography (the chapter cites Li et al. 2025 on water but not Mytton).

---

### Claim 8: Agricultural, manufacturing, and power-generation operations consume water at far greater scales than data centers
> "Agricultural operations, manufacturing plants, and power generation facilities often consume water at far greater scales, but data centers are newer, more visible, and associated with rapidly growing tech industries, which may explain why they attract disproportionate public attention."

**Support level:** Well-supported

**Evidence:**
- Mytton (2021) provides the direct comparison: "in the USA, data centre water consumption (1.7 billion litres/day) is small compared to total water consumption (1218 billion litres/day)" — that is, data centers represent roughly 0.14% of total US water consumption. [Data centre water consumption](https://consensus.app/papers/details/332b54de805c574989e216f41121416b/?utm_source=claude_desktop)
- Natarajan (2025) makes a similar framing: "data centers remain a small fraction of total water consumption" but "increasing AI capabilities have led to massive increases in water consumption, in many cases, amounting to water consumption similar to that of thousands of households." [The Hydro-Digital Paradox](https://consensus.app/papers/details/2fb2a62cc2c35b5b821a3ebd18bfc3a0/?utm_source=claude_desktop)

**Notes:** This is one of the most empirically defensible claims in the chapter, and one that may surprise readers who have only encountered alarmist framings in the press. Mytton (2021) is the right citation.

A note on context worth surfacing: this claim does not contradict environmental justice concerns (Claim 9 below) because the question is not just *aggregate* water use but *local* water use in regions where data centers compete with municipal supply. The chapter's water section gets this nuance right by handling aggregate and local separately.

---

### Claim 9: Data centers can be sited in low-income communities or areas with weaker regulatory oversight, raising environmental justice concerns
> "Data centers are physical infrastructure, and their presence affects the communities around them... In some cases, they have been sited in low-income communities or areas with weaker regulatory oversight, raising environmental justice concerns."

**Support level:** Well-supported

**Evidence:**
- Cartwright (2026) directly examines "The Environmental Justice and Community Impacts of Data Centers" and documents that the "impact on communities, particularly from an environmental justice perspective" is "rarely discussed." [The Environmental Justice and Community Impacts of Data Centers](https://consensus.app/papers/details/bf0cf591faaf5ee89e6ce62aed529f64/?utm_source=claude_desktop)
- Ngata and Sridharan (2025) study Northern Virginia's "Data Center Alley" and document "health impacts, water usage, noise pollution, infrastructural strain, and economic burden" on local communities. [The Cloud Next Door: Investigating the Environmental and Socioeconomic Strain of Datacenters on Local Communities](https://consensus.app/papers/details/812b50d167d451688ec196b616b85a2a/?utm_source=claude_desktop)
- Sovacool et al. (2022) provides extensive mixed-methods evidence on data center community impacts in Greenland, Iceland, and Norway, including "boom and bust cycles" and displacement. [The "whole systems" energy sustainability of digitalization](https://consensus.app/papers/details/adffdce1f3c950db86cc732dab46921e/?utm_source=claude_desktop)
- Brodie (2023) provides theoretical framing: "data centers organize an assemblage of environmental relations whose operations reproduce uneven systems of capitalism." [Data infrastructure studies on an unequal planet](https://consensus.app/papers/details/e8ab0b7d5aa952a592f0d06c931a0ec7/?utm_source=claude_desktop)

**Notes:** Well-grounded. The Cartwright (2026) and Ngata and Sridharan (2025) studies are recent and directly on-point.

---

### Claim 10: The data does not support confident claims in either direction about whether AI use in courses meaningfully contributes to environmental harm
> "It is difficult to know whether encouraging or requiring AI use in a course meaningfully contributes to environmental harm, especially when compared to other institutionally supported activities that also carry environmental costs. The data simply does not support confident claims in either direction."

**Support level:** Well-supported

**Evidence:**
- Ren et al. (2024) directly addresses this question by comparing LLMs to human labor: "human-to-LLM ratios ranging from 40 to 150 for a typical LLM (Llama-3-70B) and from 1200 to 4400 for a lightweight LLM (Gemma-2B-it)." This is a counterintuitive but peer-reviewed finding suggesting LLM use may be lower-impact per output than human labor. [Reconciling the contrasting narratives on the environmental impact of large language models](https://consensus.app/papers/details/7d59ec19816b54b08aaf6ec3e39a39b6/?utm_source=claude_desktop)
- Sidorkin (2025) provides per-query estimates but acknowledges: "Though concerns regarding AI's environmental impacts are supported by data, significant mitigation is achievable through energy-efficient designs, renewable energy sourcing, and enhanced operational transparency." [Environmental Impact of Generative AI](https://consensus.app/papers/details/221db0b0a6cf5b22a041ecd71eb7a132/?utm_source=claude_desktop)
- Van Uffelen et al. (2024) — already in the chapter's bibliography — provides ethical framing for the uncertainty.

**Notes:** The epistemic stance of "data simply does not support confident claims in either direction" is empirically defensible. The Ren et al. (2024) paper is particularly notable because it suggests the per-output environmental cost of AI may be *lower* than human equivalents in some scenarios — a finding that complicates the "AI is environmentally bad" narrative without overturning it. This is exactly the kind of nuance the chapter's hedging accommodates.

---

## Recommendations for Expert Review

Given the chapter's high-stakes context and the user's note about holding it for expert review, here are the specific items most worth flagging.

### High-priority items

1. **Update the framing on training vs inference.** The chapter's Claim 2 ("training is not a one-time event") is correct but does not surface a finding now well-documented in the recent literature: **inference dominates training in cumulative emissions**, often by 25x or more for ChatGPT-like services (Chien et al. 2023, Kaur et al. 2026, Moore et al. 2025). This actually strengthens the chapter's overall argument (use accumulates impact), but the current framing may strike a knowledgeable reviewer as a couple of years out of date. Suggested addition: "Recent research suggests that for the most widely used services, the cumulative inference cost has come to exceed training costs by an order of magnitude or more (Chien et al. 2023)."

2. **Add Mytton (2021) to the water-section bibliography.** This is the foundational peer-reviewed study on data center water consumption and provides the direct citation for several of the chapter's claims, including the transparency claim (less than 1/3 of operators measure water consumption) and the agricultural/manufacturing comparison (US data centers are ~0.14% of total US water use). The chapter currently cites Li et al. 2025 ("Making AI Less Thirsty") but Mytton is the more comprehensive empirical anchor.

3. **Consider acknowledging the Ren et al. (2024) counterweight.** The chapter's "no confident claims in either direction" framing is appropriate, but a knowledgeable reader will know that some recent peer-reviewed work (notably Ren et al. 2024 in *Scientific Reports*) actually argues that, per output, LLMs may be more environmentally efficient than human labor. Surfacing this finding briefly would demonstrate awareness of the most current literature without committing the chapter to that view. The framing could be: "Some research has argued that, per output unit, LLMs may compare favorably to alternatives including human labor (Ren et al. 2024); other research emphasizes the absolute scale of cumulative impact. Both lines of evidence are part of a still-developing literature."

### Medium-priority items

4. **The "few web searches" comparison in Claim 4 is contested in the discourse.** The chapter handles this with appropriate hedging, but a more knowledgeable reader may want a more specific characterization. Common figures in the discourse: a Google search uses ~0.3 Wh (per Google's IEA disclosures), while ChatGPT queries are commonly estimated at 2-3 Wh, making a query roughly 6-10x a web search rather than "a few." Sidorkin (2025) gives per-query figures of ~4.3g CO2 and ~10ml water. The chapter could either tighten the comparison or make explicit that the "few" framing is contested.

5. **The chapter's bibliography is the strongest in Layer 2 but is missing a few canonical citations.** Recommended additions:
   - **Mytton (2021)** for the water-section claims (Claims 6, 7, 8).
   - **Chien et al. (2023, 2024)** for the inference-dominance finding (Claim 2).
   - **Cartwright (2026)** or **Ngata and Sridharan (2025)** for the environmental justice framing (Claim 9).
   - **Ren et al. (2024)** if the chapter chooses to engage the per-output efficiency counterweight.

### Lower-priority items

6. **The chapter's overall epistemic stance is well-calibrated.** The framing that "people will arrive at different conclusions about whether generative AI use is justified given its environmental costs" is appropriately humble and accommodates the genuinely mixed empirical literature. This is rhetorically and ethically apt for a discipline that values careful reasoning.

7. **The chapter does not explicitly engage with the rapidly changing nature of AI hardware efficiency.** Newer hardware generations (Nvidia H100, H200, B100/B200) have substantially higher performance-per-watt than the GPUs studied in 2022-2023 papers. A small temporal hedge ("as of the document's review") may be useful for future-proofing.

8. **The Ann Arbor / U-M paragraph (Section: Local Impacts).** This is an institutional rather than empirical claim and is a reasonable observation. A small clarification worth considering: the university *does* operate research computing infrastructure (Great Lakes, Armis2, HPC clusters, Lighthouse) that has its own water and energy footprint. The framing "the university does not operate the data centers that power commercial AI platforms" is true for OpenAI, Anthropic, etc., but understates the extent to which academic institutions operate computing infrastructure. This is mostly a tonal note — the chapter's broader argument is sound.

---

## Research Gaps

- Per-query environmental costs are reported with widely varying methodology and assumptions across studies. There is no field-standard measurement protocol that allows clean comparison. Sidorkin (2025), Kaur et al. (2026), and Sundaram and Bauer (2025) all provide figures but they are not directly comparable.
- Most studies focus on training or inference in isolation. Whole-lifecycle assessments that include hardware manufacturing, data center construction, and decommissioning are rare (Jiang et al. 2024 is one of the few attempts).
- Data center water and energy disclosures from major commercial AI providers (OpenAI, Anthropic, Google DeepMind) remain limited, making third-party verification difficult.
- The relationship between local data center impact and AI-specific use (as opposed to general cloud computing) is still poorly studied. Most environmental justice work on data centers does not separate out AI workloads from general computing workloads.

---

## Bottom Line for the Expert Reviewer

This chapter is empirically defensible and rhetorically careful. Its main risk is not that it makes incorrect claims — it does not — but that a knowledgeable reader will notice it has not engaged with two specific 2023-2026 findings that have shifted the technical conversation:

1. **Inference dominates training in cumulative emissions** for major commercial services (Chien et al., Kaur et al., Moore et al.).
2. **Per-output comparisons of LLMs to human labor** suggest LLMs may be more efficient than alternatives in some scenarios (Ren et al. 2024).

Engaging both findings briefly — neither requires more than a sentence — would significantly improve the chapter's standing with technically informed readers without weakening its core argument or epistemic humility. Both findings are, if anything, reasons for the chapter's "no confident claims in either direction" framing rather than against it.
