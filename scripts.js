document.getElementById('link1').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="hero">
         <div class="hero-content">
           <h1>I'm David</h1>
           <p>About me content goes here.</p>
           <p>About me content goes here.</p>
           <p>About me content goes here.</p>
           <ul class="social">
             <li><a href="#">Twitter</a></li>
             <li><a href="#">Facebook</a></li>
             <li><a href="#">Pinterest</a></li>
             <li><a href="#">Google+</a></li>
           </ul>
         </div>

  </div>`;
  });
  
  document.getElementById('link2').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="goals-container">
  <h2>My Goals</h2>
  <div class="goals-grid">
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-laptop-code"></i></div>
      <h3>Become a Full-Stack Web Developer</h3>
      <p>Learn and master front-end and back-end web development technologies to build comprehensive web applications.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-code-branch"></i></div>
      <h3>Contribute to Open-Source Projects</h3>
      <p>Join the open-source community by contributing to projects and helping improve existing software.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-graduation-cap"></i></div>
      <h3>Obtain a Master's Degree in Computer Science</h3>
      <p>Further my education in computer science and specialize in a specific field to advance my career.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-mobile-alt"></i></div>
      <h3>Learn Mobile App Development</h3>
      <p>Expand my skillset by learning mobile app development for iOS and Android platforms.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-users"></i></div>
      <h3>Build a Professional Network</h3>
      <p>Connect with other professionals in the tech industry and attend conferences and meetups to expand my network.</p>
    </div>
    <div class="goal-card">
       <div class="goal-icon"><i class="fas fa-pen-fancy"></i></div>
       <h3>Start a Tech Blog</h3>
       <p>Share my knowledge and experiences in web development by writing articles and tutorials on a personal blog.</p>
    </div>
    <!-- Add more goal cards here -->
  </div>
  </div>`;
  });
  
  document.getElementById('link3').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="skills-container">
    <h2>My Skills</h2>
    <div class="skills">
      <div class="skill">
        <p>HTML</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="90"></div>
        </div>
      </div>
      <div class="skill">
        <p>CSS</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="80"></div>
        </div>
      </div>
      <div class="skill">
        <p>JavaScript</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="70"></div>
        </div>
      </div>
      <div class="skill">
        <p>Java</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="70"></div>
        </div>
      </div>
      <!-- Add more skill items here -->
    </div>
    </div>`;
    animateSkillBars();
  });

  function animateSkillBars() {
    const skillLevels = document.getElementsByClassName("skill-level");
  
    for (let i = 0; i < skillLevels.length; i++) {
      const skillLevel = skillLevels[i];
      const level = skillLevel.getAttribute("data-level");
      skillLevel.style.width = level + "%";
    }
  }
  
  // Call the animateSkillBars function when the page loads
//   window.onload = animateSkillBars;
  
  document.getElementById('link4').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="container">
    <div class="content">
      <div class="work-experience">
        <h2>Work Experience</h2>
        <div class="job">
          <h3>Web Developer - Acme Corporation (2021-present)</h3>
          <ul>
            <li>Develop and maintain company website</li>
            <li>Create and implement new features</li>
            <li>Collaborate with team members on design and functionality</li>
          </ul>
        </div>
        <div class="job">
          <h3>Junior Web Developer - XYZ Corporation (2019-2021)</h3>
          <ul>
            <li>Assisted in developing and maintaining company website</li>
            <li>Debugged and fixed website issues</li>
            <li>Learned new technologies and programming languages</li>
          </ul>
        </div>
      </div>
      <div class="education">
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science - XYZ University (2015-2019)</p>
        <p>Master of Science in Computer Science - ABC University (2019-2021)</p>
      </div>
      <div class="languages">
        <h2>Languages</h2>
        <ul>
          <li>English - Fluent</li>
          <li>Spanish - Intermediate</li>
          <li>French - Basic</li>
        </ul>
      </div>
    </div>
    </div>
  </div>`;
    
      
  });
  
  document.getElementById('link5').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="contact-container">
    <h2>Contact Me</h2>
        <form id="contact-form" name="contact" method="post" data-netlify="true" data-netlify-recaptcha="true">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" required>
        
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" required>
        
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Send</button>

    </form>
    </div>`;
  });
  