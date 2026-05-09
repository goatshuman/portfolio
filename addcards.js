const oM = [
    {
      id: 0,
      name: "NexaTasks",
      description: "A SaaS task management platform built for engineering teams — featuring Kanban boards, sprint planning, AI assistance, and deep analytics.",
      image: "https://placehold.co/334x300/1e1b4b/a78bfa?text=NexaTasks",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://goatshuman.github.io/nexa-tasks/",
      alt: "NexaTasks - Task Management Platform",
    },
    {
      id: 1,
      name: "Luminary Cafe",
      description: "A full-featured restaurant website for a specialty coffee brand — complete with menu, gallery, reservation flow, and contact section.",
      image: "https://placehold.co/334x300/1a1008/c4622d?text=Luminary+Cafe",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://goatshuman.github.io/luminary-cafe/",
      alt: "Luminary Cafe - Restaurant Website",
    },
    {
      id: 2,
      name: "SnapVault",
      description: "A cinematic photography portfolio site with a custom cursor, masonry gallery, services listing, and contact form. Dark, editorial aesthetic.",
      image: "https://placehold.co/334x300/080808/c9a84c?text=SnapVault",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://goatshuman.github.io/snapvault/",
      alt: "SnapVault - Photography Portfolio",
    },
    {
      id: 3,
      name: "FitPulse",
      description: "A landing page for a fitness tracking app — with animated stats, live dashboard mockup, testimonials section, and a bold green-on-dark design.",
      image: "https://placehold.co/334x300/060d0a/10b981?text=FitPulse",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://goatshuman.github.io/fitpulse/",
      alt: "FitPulse - Fitness Tracker Landing Page",
    },
    {
      id: 4,
      name: "BuildFlow",
      description: "A developer productivity SaaS landing page with a code snippet hero, feature grid, integrations showcase, and a three-tier pricing section.",
      image: "https://placehold.co/334x300/050a14/3b82f6?text=BuildFlow",
      tags: ["javascript", "html", "css", "ui"],
      liveview: "https://goatshuman.github.io/buildflow/",
      alt: "BuildFlow - Developer Platform",
    },
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  