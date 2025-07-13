
    const itineraryList = document.getElementById('itineraryList');

    function addItinerary() {
      const day = document.getElementById('day').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const time = document.getElementById('time').value.trim();
      const activity = document.getElementById('activity').value.trim();

      if (!day || !destination || !time || !activity) {
        alert("Please fill in all fields.");
        return;
      }

      const item = document.createElement('div');
      item.classList.add('itinerary-item');
      item.innerHTML = `
        <h4>${day} - ${destination}</h4>
        <p>🕒 <strong>${time}</strong></p>
        <p>📌 ${activity}</p>
      `;

      itineraryList.appendChild(item);

      // Clear form fields
      document.getElementById('day').value = '';
      document.getElementById('destination').value = '';
      document.getElementById('time').value = '';
      document.getElementById('activity').value = '';

      // Remove default message
      const defaultMessage = document.querySelector('.no-plan');
      if (defaultMessage) {
        defaultMessage.remove();
      }
    }
