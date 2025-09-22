// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-i-joined-cognitive-systems-lab-csl-under-the-supervision-of-prof-john-d-lee-as-a-phd-student",
          title: '🎓 I joined Cognitive Systems Lab (CSL) under the supervision of Prof. John...',
          description: "",
          section: "News",},{id: "news-i-joined-the-toyota-csrc-project-toward-responsive-driving-automation-as-a-research-assistant-contributing-to-driver-management-strategies-a-theoretical-framework-of-responsive-automation-and-tools-to-capture-driver-automation-interdependencies",
          title: '✨ I joined the Toyota CSRC project “Toward Responsive Driving Automation” as a...',
          description: "",
          section: "News",},{id: "news-i-began-leading-the-honda-research-institute-project-modeling-well-being-in-hybrid-mobility-society-as-a-research-assistant-the-project-defines-well-being-in-mobility-contexts-through-a-two-phase-approach-1-conceptualizing-well-being-in-hybrid-mobility-and-2-conducting-simulator-studies-to-capture-and-quantify-key-influencing-factors",
          title: '✨ I began leading the Honda Research Institute project “Modeling Well-Being in Hybrid...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-towards-directive-driving-automation-nudging-drivers-away-from-overriding-using-social-norms-was-accepted-at-hfes-2023",
          title: '📝 Our paper entitled “Towards Directive Driving Automation: Nudging Drivers Away from Overriding...',
          description: "",
          section: "News",},{id: "news-i-successfully-passed-my-qualifying-exam-my-proposal-towards-understanding-and-modeling-well-being-in-transportation-sets-the-foundation-for-my-dissertation-work",
          title: '🎉 I successfully passed my qualifying exam! My proposal, “Towards Understanding and Modeling...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-prosociality-matters-how-does-prosocial-behavior-in-interdependent-situations-influence-the-well-being-and-cognition-of-road-users-was-accepted-at-automotiveui-2024-with-an-oral-presentation",
          title: '📝 Our paper entitled “Prosociality Matters: How Does Prosocial Behavior in Interdependent Situations...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-does-prosocial-automation-increase-driver-s-well-being-was-accepted-at-hfes-2024",
          title: '📝 Our paper entitled “Does Prosocial Automation Increase Driver’s Well‑being?” was accepted at...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-speak-at-the-automotiveui-24-workshop-what-s-beyond-safety-workshop-on-promoting-well-being-for-mobility-users-in-future-hybrid-societies-where-i-presented-prosocial-behaviors-and-rider-well-being-in-hybrid-mobility-systems",
          title: '📢 I was invited to speak at the AutomotiveUI’24 Workshop: What’s Beyond Safety?...',
          description: "",
          section: "News",},{id: "news-i-served-as-a-reviewer-for-hfes-2025",
          title: '📝 I served as a reviewer for HFES 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-defining-prosocial-behavior-in-traffic-linking-behavior-to-perception-was-accepted-at-hfes-2025-with-an-oral-presentation",
          title: '📝 Our paper entitled “Defining Prosocial Behavior in Traffic: Linking Behavior to Perception”...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-companion-robot-interfaces-for-older-adults",
          title: 'Companion Robot Interfaces for Older Adults',
          description: "Experimental study on type, weight, and material preferences for elderly-friendly companion robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/companion-robot/";
            },},{id: "projects-physiological-ux-of-conversational-interfaces",
          title: 'Physiological UX of Conversational Interfaces',
          description: "Evaluating interactive TV interfaces using EEG and HRV physiological measures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/conversational-ux/";
            },},{id: "projects-ev-sound-amp-driver-sentiment",
          title: 'EV Sound &amp;amp; Driver Sentiment',
          description: "Exploring EV UX issues via Think-aloud and Aspect-Based Sentiment Analysis (ABSA) on sound, performance, and quality",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ev-sound-sentiment/";
            },},{id: "projects-ux-of-voice-interfaces-for-elderly",
          title: 'UX of Voice Interfaces for Elderly',
          description: "Investigating acceptance &amp; affective UX factors of AI voice interfaces for older adults via Wizard-of-Oz and EFA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/elderly-vui/";
            },},{id: "projects-driver-state-monitoring-and-interaction-design-in-avs",
          title: 'Driver State Monitoring and Interaction Design in AVs',
          description: "Exploring driver emotional states, attention prediction, and driver–vehicle interaction frameworks for autonomous vehicles using deep learning, clustering, and think-aloud data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/driver-attention-av/";
            },},{id: "projects-persuasive-nudges-in-automated-driving",
          title: 'Persuasive Nudges in Automated Driving',
          description: "Exploring how social norm messages can persuade drivers to continue using driving automation instead of overriding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/persuasive-nudges/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%69%6D%32%32%34%36@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kim2246", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=wRR6mioAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
