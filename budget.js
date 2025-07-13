function calculateBudget() {
    const accommodation = parseFloat(document.getElementById('accommodation').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const misc = parseFloat(document.getElementById('misc').value) || 0;

    const total = accommodation + food + transport + misc;

    document.getElementById('totalBudget').textContent = `Total: PKR ${total.toLocaleString()}`;
  }