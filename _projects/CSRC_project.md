---
layout: page
title: Persuasive Nudges in Automated Driving
date: 2023-09-01
permalink: /projects/persuasive-nudges/
description: Exploring how social norm messages can persuade drivers to continue using driving automation instead of overriding
img: https://github.com/user-attachments/assets/c14b34a6-5eaf-454a-b159-3da0fb1edc1d
---

<!-- Project Meta -->
**Venue:** Human Factors and Ergonomics Society (HFES 2023)  
**Status:** Published  
**Authors:** Joonbum Lee, Boyoung Kim, Hansol Rheem, Amudha V. Kamaraj, **Soo Yeon Kim**, Joshua E. Domeyer, John D. Lee, Heishiro Toyoda

---

## Overview
This study explored how **directive driving automation** can nudge drivers to maintain the use of automated driving rather than overriding it. Using **social norm–based persuasive messages**, we tested how variations in message type, explanation, framing, and safety context influence driver preferences and trust.  

**Key Contribution**  
- Introduced the concept of **directive automation**: automation influencing driver intentions toward shared goals.  
- Showed that **descriptive norm messages** (“what most people do”) are generally more persuasive than injunctive norms (“what most people think one should do”).  
- Demonstrated that **safety-critical contexts** strengthen the effectiveness of explanations and self-relevant framing in persuasive messages.

<p align="center">
  <img src="https://github.com/user-attachments/assets/09619dda-c2bd-4464-93f8-46079da71d93" alt="Directive message design" width="650"><br>
  <em>Illustration of directive social norm messages used in the survey (varied by norm type, explanation, spatial scale, and safety criticality).</em>
</p>

---

## My Role
- Designed and implemented the **Qualtrics survey protocol**.  
- Analyzed message framing effects using **choice-based conjoint (CBC) analysis** with multinomial logistic regression.  
- Contributed to interpreting results and co-authoring implications for persuasive HMI design.  

---

## Methods
- **Participants:** 24 licensed U.S. drivers (ages 25–55; >2 yrs experience; >2,000 miles/year).  
- **Design:** 2×2×2×2 within-subject factorial design:  
  - Norm type (*descriptive vs. injunctive*)  
  - Explanation (*absent vs. present*)  
  - Spatial scale (*local/self vs. global/others*)  
  - Outcome criticality (*safety-critical vs. non-safety-critical*)  
- **Procedure:** Participants compared paired directive messages (preference, effectiveness, trustworthiness, sense of control).  
- **Analysis:** CBC modeling via multinomial logistic regression to estimate part-worth utilities of each factor.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/82418462-9e66-4bca-8d4e-78a733eb9a68" alt="Survey conjoint example" width="600"><br>
  <em>Example survey screen: participants compared directive messages and selected which they preferred/trusted.</em>
</p>

---

## Outcomes
- **Descriptive norms** consistently rated more persuasive than injunctive norms.  
- **Explanations** boosted trust and persuasiveness, especially in safety-critical conditions.  
- **Self-relevant framing** (local crash risk) was more effective than global/other-oriented framing.  
- Participants preferred messages that were **concise, useful, and simple**, but in safety-critical situations they also valued longer, more detailed explanations.  
- Proposed design challenge: balance **clarity vs. informativeness**, possibly via multimodal cues (visual + haptic).  

<p align="center">
  <img src="https://github.com/user-attachments/assets/c14b34a6-5eaf-454a-b159-3da0fb1edc1d" alt="CBC results safety" width="450" />
  <img src="https://github.com/user-attachments/assets/f0aa24c8-7ec2-4b3c-8a6e-ab5e470ddfb0" alt="CBC results non-safety" width="450" /><br>
  <em>Choice-based conjoint analysis results: beta weights for message attributes in (left) safety-critical vs. (right) non-safety-critical contexts.</em>
</p>



---

## Design Implications
- **Persuasive HMI:** Use **descriptive norm–based messages with self-relevant safety framing** to nudge drivers.  
- **Context-aware:** Provide explanations primarily in **safety-critical contexts**.  
- **Message design:** Keep content **concise but adaptive** (short prompts, expandable details, or multimodal augmentation).  
- **Future work:** Simulator and naturalistic validation, combining norms with other nudging strategies (e.g., procedural friction).  

---

## References
- Lee, J., Kim, B., Rheem, H., Kamaraj, A.V., Kim, S., Domeyer, J.E., Lee, J.D., & Toyoda, H. (2023). *Towards Directive Driving Automation: Nudging Drivers Away from Overriding Using Social Norms.*
