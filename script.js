
document.addEventListener('DOMContentLoaded', function() {
  // Show first section by default
  document.querySelector('section').classList.add('active');

  // Handle section navigation
  document.querySelectorAll('.sections a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Hide all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Show clicked section
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active');
    });
  });
});

function showBankInfo() {
  const bankInfo = process.env.BANK_INFO || 'Información bancaria no disponible';
  alert(bankInfo);
}
