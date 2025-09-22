---
layout: page
title: EV Sound & Driver Sentiment
date: 2020-12-01
permalink: /projects/ev-sound-sentiment/
description: Exploring EV UX issues via Think-aloud and Aspect-Based Sentiment Analysis (ABSA) on sound, performance, and quality
img: https://github.com/user-attachments/assets/cc2b185f-a107-45f2-b1cc-22543e3f0af1

---

<!-- Project Meta -->
**Venues:** Ergonomics Society of Korea (2020); IEEE IEEM (2022)  
**Status:** Published  
**Authors:**  
- *ABSA (ESK 2020):* SooYeon Kim, Soobin Chung, Adriance Wilfred, Joong Hee Lee, Myung Hwan Yun  
- *Think-aloud text mining (IEEM 2022):* Cai Wang, SooYeon Kim, Yein Song, Sungho Kim, Minchul Choi, Doyeon Seu, Myung Hwan Yun  

---

## Overview
This project explored **user experience (UX) factors of electric vehicles (EVs)** with a special focus on **sound design and quality perceptions**.  
We combined **qualitative think-aloud protocols** with **quantitative aspect-based sentiment analysis (ABSA)** of large-scale online reviews to identify **critical UX issues** and propose **data-driven design implications**.

**Key Contribution**
- Introduced a **mixed-methods framework** that integrates *think-aloud UX coding + text mining* with *ABSA sentiment modeling*.  
- Identified **five core UX aspects** of EV sound (speed, mode, vehicle component, environment, sound type) and linked them with user sentiment.  
- Provided **design guidelines** for adaptive EV sound systems and prioritization of UX-critical aspects at scale.  

---

## My Role
- **First author (ESK 2020):** Designed ABSA pipeline, collected & cleaned >200k online reviews, ran aspect extraction (TextRank + rule-based), lexicon-based sentiment scoring, and authored design insights.  
- **Co-author (IEEM 2022):** Contributed to experiment protocol, participant management, and UX coding schema for EV sound issues; synthesized design takeaways from text mining outputs.  

---

## Methods

### Track A — Think-aloud Text Mining (Qualitative, IEEM 2022)
- **Participants:** 40 drivers (20 EV-experienced, 20 novices; age 37–41 avg.).  
- **Vehicle & Setup:** Hyundai Kona EV, 6.6 km driving route (low-/mid-/high-speed); AVAS alert sounds tested.  
- **Procedure:** Drivers verbalized impressions (“think-aloud”) while driving; GoPro HERO 8 video/audio captured ≈1 hr per participant.  
- **Analysis:**  
  - Text preprocessing (translation, NLTK cleaning, lemmatization).  
  - Word frequency → UX labels → grouped into **5 UX aspects** (speed, mode, vehicle component, environment, sound type).  
  - Sentiment scoring (TextBlob polarity); co-occurrence analysis for associated terms.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/1eb5a272-8fac-4a75-8d9f-aa0481fce09b" alt="Think-aloud setup 1" width="400" />
  <img src="https://github.com/user-attachments/assets/679c3e65-a02b-4552-8c49-f7c14212690b" alt="Think-aloud setup 2" width="400" /><br>
  <em>Think-aloud driving experiment with Hyundai Kona EV (6.6 km, varied speed contexts) and study process.</em>
</p>


---

### Track B — ABSA of Online Reviews (Quantitative, ESK 2020)
- **Data Sources:**  
  - ~5,065 structured forum reviews (with star ratings).  
  - ~210,000 YouTube comments (≈6,488 sampled for analysis).  
- **Pipeline:** Data collection → preprocessing → aspect extraction (TextRank + naïve term rules) → lexicon-based sentiment analysis → validation with star ratings.  
- **Measures:** Aspect polarity distributions; correlations with satisfaction.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/8adbc2c8-1245-4feb-9a71-3bbdf18116a5" alt="ABSA pipeline" width="450"><br>
  <em>ABSA pipeline: aspect extraction, sentiment polarity scoring, and validation.</em>
</p>

---

## Outcomes

### From Think-aloud (IEEM 2022)
- **5 UX aspects** identified:  
  - *Speed:* mismatched loudness across speed ranges → need dynamic scaling.  
  - *Mode:* strong positivity for “sports mode” (92% positive), need customizable eco/comfort modes.  
  - *Vehicle components:* desire for **futuristic EV motor sounds** vs. artificial mechanical tones.  
  - *Environment:* road/tunnel noise noted as “annoying”; recommend selective noise reduction.  
  - *Sound type:* dissatisfaction with “noise” and “music” categories → suggestion to allow **genre-like sound customization**.  
- Sentiment ratios showed dissatisfaction clustered in *music (40% negative)*, *inside (30% negative)*, *noise (27% negative)*

<p align="center">
  <img src="https://github.com/user-attachments/assets/9725dcbe-521b-4129-9be0-449ed3233dc3" alt="UX aspects and labels" width="400"><br>
  <em>Five UX aspects with representative labels and sentiment ratios.</em>
</p>
---

### From ABSA (ESK 2020)
- Extracted **core aspects**: sound, range, charging, performance, interior quality, price, safety.  
- **Sound-related sentiment** was highly predictive of overall star ratings.  
- Proposed **prioritization framework**: address high-impact aspects (sound, charging, range) to improve EV adoption.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/8962988d-0120-450f-beae-2f75a49275c9" alt="Aspect sentiment heatmap" width="650"><br>
  <em>Aspect-sentiment heatmap showing polarity across key EV attributes.</em>
</p>

---

## Design Implications
- **Adaptive sound scaling**: link volume dynamically to speed & context.  
- **Customizable modes**: sports/eco/comfort profiles with optional general mode.  
- **Sound as identity**: EV sound should feel futuristic and non-mechanical.  
- **Noise management**: suppress “annoying” environmental noise, enhance safety-critical cues.  
- **Data-driven prioritization**: allocate resources to aspects with highest negative sentiment impact.  

---

## References
- Kim, S., Chung, S., Wilfred, A., Lee, J.H., & Yun, M.H. (2020). *User Sentiment Analysis by Electric Vehicle Based on Aspect-Based Sentiment Analysis.* Ergonomics Society of Korea.  
- Wang, C., Kim, S., Song, Y., Kim, S., Choi, M., Seu, D., & Yun, M.H. (2022). *Text Mining for Exploring UX Issues of Qualitative Think-Aloud Data on EV Sound.* IEEE IEEM.  

