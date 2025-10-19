
  fetch(`${window.NASL?.API_BASE || 'https://next-generation-adaptive-system-lab-nasl.onrender.com'}/api/researchArea/getReasearchAreas`)
    .then(res => res.text()) 
    .then(data => {
      console.log("Fetched data:", data); // for debugging
      displayResearchAreas(data);
    })
    .catch(err => {
      console.error("Failed to fetch research areas:", err);
    });

