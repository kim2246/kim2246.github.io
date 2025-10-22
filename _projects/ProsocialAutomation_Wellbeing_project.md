---
layout: page
title: Prosociality Matters: How Prosocial Behavior Shapes Well-being in Interdependent Road Situations
date: 2024-09-25
permalink: /projects/prosociality-matters/
description: Integrating Attention Restoration Theory and Game Theory to examine how prosocial interactions in interdependent mobility environments influence riders’ cognition, affect, and well-being.
img: https://github.com/user-attachments/assets/d86988a7-72ba-460c-9b73-510271311aab
---

<!-- Project Meta -->
**Venue:** AutomotiveUI 2024 (Stanford, CA)  
**Status:** Published  
**Authors:** **Soo Yeon Kim**, Shashank Mehrotra, Kumar Akash, Teruhisa Misu, John D. Lee  

---

## Background
Mobility is fundamentally **interdependent**—each driver’s or rider’s decision affects others’ safety, timing, and emotional state. However, transportation research has traditionally optimized for *efficiency* and *risk minimization*, neglecting the **social and affective dimensions** that shape well-being.

Drawing on two complementary theoretical frameworks:

### Attention Restoration Theory (ART)
Originally developed in environmental psychology, ART explains how exposure to **natural environments** restores depleted cognitive resources by engaging “soft fascination.”  
We extended this idea to **social environments**, proposing that **receiving prosocial behaviors**—such as a pedestrian yielding or another rider slowing to make space—functions as a *socially restorative cue*.  
Such moments reduce vigilance and cognitive load, restoring attention and emotional balance much like nature exposure does. The effect is hypothesized to engage the **default mode network (DMN)**, linked to empathy, reflection, and self-regulation.

### Game Theory (Chicken Game)
Interdependence was modeled through the **Chicken Game**, where two agents (rider and pedestrian) must decide whether to yield or proceed, each choice influencing the other's payoff.  
This framework captures the **reciprocity and mutual risk** of shared road space.  
Prosocial actions (yielding, coordination) create **Pareto-efficient outcomes** that maximize collective benefit, whereas asocial acts (blocking, rushing) result in **competitive equilibria**—inefficient, stressful, and emotionally depleting.  

Together, **ART + Game Theory** establish a novel **social-cognitive framework for mobility well-being**: prosocial interactions are not merely moral—they are *restorative mechanisms* that replenish attention, lower stress, and foster collective harmony.


<p align="center">
  <img src="https://github.com/user-attachments/assets/b0a5983e-de68-4638-8094-1d22f8ce0dc6" width="700"><br>
  <em>Measuring Cognition as an Indicator of Well-being</em>
</p>

---

## My Role
- Designed and implemented the **simulation paradigm** linking social behaviors (prosocial vs. asocial) with cognitive and affective outcomes.  
- Utilized **PANAS**, **STS**, and **Stroop** tasks for emotional and cognitive measurement.  
- Conducted **Linear Mixed Models (LMM)** and **ANOVA**, including visualization of behavioral metrics (TTC, speed, distance) and subjective ratings.  
- Led writing, theoretical integration, and collaboration with **Honda Research Institute USA**.

---

## Methods
- **Participants:** 201 licensed U.S. drivers (20–55 yrs, balanced gender).  
- **Design:** 2 × 3 × 3 mixed design  
  - *Between-subject:* Sociality (Prosocial vs. Asocial)  
  - *Within-subject:* Time constraint (Relaxed, Neutral, Pressed) × Event (Approach, Merge, Cross)  
- **Apparatus:** Web-based Unity e-scooter simulator (first-person control, realistic physics).  
- **Measures:**  
  - **Behavioral:** Minimum Time-to-Collision (TTC), Speed at Decision, Distance to Pedestrian.  
  - **Cognitive:** Stroop task (error rate, median RT for congruent/incongruent stimuli).  
  - **Affective:** PANAS (Positive/Negative Affect) and STS (Confidence, Enthusiasm, Ride Quality, Risk).  
- **Analysis:** Linear Mixed Models with Tukey HSD corrections; visualization with ggplot2.

<p align="center">
  <img src="https://github.com/user-attachments/assets/44a46a5c-0d3a-40ee-b7fc-d305c0eec9eb" width="160" height="475"><br>
  <em>Interdependent scenarios modeled as game-theoretic dilemmas (approach, merge, cross). Pedestrian prosociality (green) vs. asociality (blue).</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/935fe463-2c1a-497f-b863-40dd758e871d" width="700"><br>
  <em>Experimental Procedure.</em>
</p>

---

## Results & Visualizations

### Behavioral Outcomes
- **Minimum Time-to-Collision (TTC):** Prosocial interactions led to *significantly lower TTCs* (β = −1.62, p < .05), meaning riders **trusted yielding pedestrians** and approached closer before evasive action.  
  - The strongest effects emerged in *merging* and *approaching* events under *time pressure* (β = −3.06 to −3.48, p < .05).  
- **Speed at Decision Point:** Riders in prosocial conditions maintained *higher speeds* during merging (β = 0.47, p < .05), reflecting smoother coordination.  
- **Distance to Pedestrian:** Under time-pressed prosocial conditions, riders kept *shorter gaps* (−12.8 m, p < .001), demonstrating trust and predictability.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/44286f34-082f-48d2-b47c-299fc3fbf3ad" width="400"><br>
  <em>Behavioral responses: decreased TTC and smoother velocity profiles under prosocial exposure, especially under time pressure.</em>
</p>

### Cognitive Outcomes
- **Stroop Task:** Response times improved across sessions for both congruent and incongruent conditions (p < .001), suggesting **cognitive restoration and learning**.  
- Error rate decreased significantly across time constraints (−4.3, p < .001), indicating **enhanced attention regulation** after repeated social exposure.  
  - Although prosociality did not directly alter Stroop scores, its cumulative exposure likely contributed to **reduced cognitive fatigue** over trials.

### Affective and Well-being Outcomes
- **Positive Affect:** Decreased slightly after repeated exposure, likely due to sustained task engagement, but **remained stable under prosocial conditions**.  
- **Negative Affect:** Riders under prosocial exposure reported *lower negative affect* (Δ = −1.73, p < .05).  
- **Perceived Risk:** Lower under prosocial interactions, especially during time-pressed trials (β = −0.52, p < .001).  
- **Ride Quality:** Increased significantly under prosocial conditions with time pressure (β = 0.56, p < .05).  

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c56b906-01ca-4de7-9ed1-796cd85efa09" width="400"><br>
    <img src="https://github.com/user-attachments/assets/436f0db0-1927-4f73-8847-b711d19f6b72" width="400"><br>
  <em>Changes in subjective well-being: lower negative affect, reduced perceived risk, and improved ride quality with prosocial interactions.</em>
</p>

---

## Discussion
- **Interdependence & Trust:** Lower TTCs and shorter gaps show that cooperative environments foster *implicit trust* in shared space, enabling smoother motion coordination.  
- **Restorative Dynamics:** Repeated prosocial exposure acted as a **cognitive reset**, paralleling attention restoration in nature.  
- **Affective Stability:** Even under time stress, riders receiving cooperative cues maintained *lower emotional volatility* and *higher satisfaction*.  
- **Systemic View:** Well-being in transportation emerges not from isolation but **from mutual predictability and synchronized intention**—a hallmark of prosocial design.

---

## Conclusion
This study reframes **well-being in transportation** as a **socially emergent property**—a dynamic equilibrium of trust, cooperation, and cognitive restoration.  
By fusing **Attention Restoration Theory** and **Game Theory**, we demonstrate that *prosocial interactions serve as restorative experiences* in shared mobility contexts.  
Cooperative acts not only enhance individual emotion and attention but also stabilize **collective behavior dynamics**.

Design implications include embedding **prosocial signaling mechanisms** (e.g., yielding cues, explicit gestures, communicative deceleration) in automated and micromobility systems to cultivate *human-centered, emotionally intelligent* traffic ecologies.

---

## References
Kim, S., Mehrotra, S., Akash, K., Misu, T., & Lee, J. D. (2024). *Prosociality Matters: How Does Prosocial Behavior in Interdependent Situations Influence the Well-being and Cognition of Road Users?* In *Proceedings of the 16th International Conference on Automotive User Interfaces and Interactive Vehicular Applications (AutomotiveUI ’24)*. ACM. https://doi.org/10.1145/3640792.3675710
