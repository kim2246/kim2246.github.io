---
layout: page
title: Driver Attention & Autonomous Vehicles
date: 2022-10-01
permalink: /projects/driver-attention-av/
description: Exploring driver emotional states, attention prediction, and driver–vehicle interaction frameworks for autonomous vehicles using deep learning, clustering, and think-aloud data
img: https://github.com/user-attachments/assets/65ee986c-c676-4b1f-8484-5b6a65261c0f   # placeholder thumbnail
---

<!-- Project Meta -->
**Venue:** IEEE International Conference on Systems, Man, and Cybernetics (SMC 2022)  
**Status:** Published  
**Authors:** Yein Song, **Soo Yeon Kim**, Myung Hwan Yun, Chang S. Nam, Joong Hee Lee  

---

## Overview
This research investigated how **drivers’ emotions and personal characteristics** affect their **attention status** in autonomous vehicle contexts.  
Two empirical studies were conducted:  
1. **Study 1:** Real-road driving with deep learning–based classification of driver attention and emotional state from facial expressions.  
2. **Study 2:** Clustering of driver types based on personality traits and auditory sensitivity, validated via think-aloud protocols.  

Findings informed a **driver–vehicle interaction framework** that integrates attention prediction, emotion, and driver types to support safe and user-centered autonomous driving.

---

## My Role
- Led **Study 1 experiment design** (real-road driving, facial expression dataset).  
- Contributed to **driver type classification (Study 2)** via questionnaire,think-aloud analysis, and image classification.
- Synthesized results into a **proposed driver–vehicle interaction framework**.  

---

## Methods

### Study 1: Emotion ↔ Attention (Deep Learning)
- **Participants:** 30 drivers (15M / 15F), >2 years driving experience.  
- **Driving task:** 6.6 km route with low-, medium-, and high-speed sections.  
- **Data:** 29,514 facial expression frames (GoPro HERO8).  
- **Analysis:**  
  - **Attention:** forward gaze detection (ResNet18).  
  - **Emotion:** classification with AffectNet/RAF-DB trained DMUE model.  
  - **Fusion:** attention + emotion features concatenated for joint prediction.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/69addd05-d67d-4576-91e5-64fb67182901" alt="Driving setup" width="420" />
  <img src="https://github.com/user-attachments/assets/a1ec190c-2ae7-48aa-83b2-8de30ad19e4d" alt="Facial expression dataset" width="400" /><br>
  <em>Driving setup and route.</em>
</p>

<br><br><br>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d0f5a454-d99f-4c28-b6bd-400a4ac89492" alt="Data analysis" width="400" />
  <img src="https://github.com/user-attachments/assets/3bf7b1d4-1654-425d-a328-708695f3d610" alt="Framework" width="580" /><br>
  <em>Facial expression dataset labeling (forward gaze & emotional states) and data analysis framework.</em>
</p>

---

### Study 2: Driver Characteristics & Types
- **Participants:** 40 drivers (avg. age 39 ± 9.5 yrs).  
- **Procedure:** Questionnaire (14 items, 7-pt Likert) + real-road think-aloud.  
- **Analysis:**  
  - **Factor analysis** → 3 personality factors (driving style, sensitivity, acceptability).  
  - **K-means clustering** → 2 driver types.  
  - **Network & CONCOR analysis** on think-aloud transcripts.  

<p align="center">
  <img src="https://github.com/user-attachments/assets/a1b1710e-fd36-4b92-a7f0-5e4889430668" alt="Driver type classification" width="450"><br>
  <em>Two driver types derived: Type 1 (enthusiastic/sensitive), Type 2 (safe/generous).</em>

---

## Outcomes
- **Study 1:**  
  - Attention classification (ResNet18) ≈ 80% accuracy.  
  - Emotional states alone less reliable; fusion **reduced accuracy** due to imbalance.  
- **Study 2:**  
  - Identified **3 personality traits** → clustered into **Type 1 vs Type 2 drivers**.  
  - Significant ANOVA differences in driving style & sensitivity (p < .001).  
  - Think-aloud revealed distinct **perceptions & priorities** between types.  
- **Framework:** Proposed **Driver–Vehicle Interaction System** leveraging attention, emotion, and driver types for BCI-based AV interfaces

<p align="center">
  <img src="https://github.com/user-attachments/assets/924381cd-0290-4fb7-a343-eb16fe302207" alt="Driver–Vehicle Interaction Framework" width="400"><br>
  <em>Proposed framework: integrating driver attention, emotion, type, and vehicle context for future AVs.</em>
</p>

---

## Examples
- **Driver state monitoring** (EEG, facial expressions) to detect attention lapses.  
- **Personalized AV interaction** adapting warnings based on driver type.  
- **BCI integration** for constrained, safe driver input in AVs.  

---

## References
- Song, Y., Kim, S., Yun, M.H., Nam, C.S., & Lee, J.H. (2022). *A Study on the Driver-Vehicle Interaction System in Autonomous Vehicles Considering Driver’s Attention Status.* IEEE International Conference on Systems, Man, and Cybernetics (SMC).  
