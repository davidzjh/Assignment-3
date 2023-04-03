function animateSkillBars() {
    const skillLevels = document.getElementsByClassName("skill-level");
  
    for (let i = 0; i < skillLevels.length; i++) {
      const skillLevel = skillLevels[i];
      const level = skillLevel.getAttribute("data-level");
      skillLevel.style.width = level + "%";
    }
  }
  
  // Call the animateSkillBars function when the page loads
  window.onload = animateSkillBars;