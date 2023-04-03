const form = document.getElementById('create-website-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const websiteName = document.getElementById('website-name').value;
  const websiteDescription = document.getElementById('website-description').value;
  const websiteCategory = document.getElementById('website-category').value;
  const websiteTemplate = document.getElementById('website-template').value;
  
  // Validasi input
  if (!websiteName || !websiteDescription || !websiteCategory || !websiteTemplate) {
    alert('Please fill in all fields');
    return;
  }
  
  // Simulasi proses pembuatan website
  setTimeout(() => {
    successMessage.textContent = `Website ${websiteName} has been created`;
    successMessage.style.display = 'block';
    form.reset();
  }, 2000);
});
