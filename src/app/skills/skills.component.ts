import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills-section">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript/TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .skills-section {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .skill-category {
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      h2 {
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
      }

      h3 {
        color: #444;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        padding: 0.5rem 0;
        color: #666;
      }
    `,
  ],
})
export class SkillsComponent {}
