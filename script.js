// Sample call data (fake data for now)
const calls = [
  { id: 1, latency: 120, jitter: 30, packetLoss: 2, qos: 85 },
  { id: 2, latency: 300, jitter: 60, packetLoss: 5, qos: 60 },
  { id: 3, latency: 80, jitter: 20, packetLoss: 1, qos: 92 }
];

function login() {
  const role = document.getElementById("role").value; // get typed role
  if (role) {
    // Hide login
    document.getElementById("login").style.display = "none";
    // Show dashboard
    document.getElementById("dashboard").style.display = "block";
    // Show welcome message
    document.getElementById("welcome").innerText = `Welcome, ${role}!`;

    // Show call data in the table
    const tbody = document.getElementById("callData");
    calls.forEach(call => {
      let row = `<tr>
        <td>${call.id}</td>
        <td>${call.latency}</td>
        <td>${call.jitter}</td>
        <td>${call.packetLoss}</td>
        <td>${call.qos}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
}
