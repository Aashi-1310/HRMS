  const leaveForm = document.getElementById('leaveForm');
  const leaveHistorySection = document.getElementById('leaveHistorySection');
  const leaveTableBody = document.querySelector('#leaveTable tbody');

  const getLeaveApplications = () => JSON.parse(localStorage.getItem('leaveApplications')) || [];
  const saveLeaveApplications = (apps) => localStorage.setItem('leaveApplications', JSON.stringify(apps));
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!currentUser) {
    alert("Please log in to apply for leave.");
    window.location.href = "login.html";
  } else {
    showLeaveHistory(currentUser.email);
  }

  leaveForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const newApplication = {
      name: currentUser.name,
      email:currentUser.email,
      type: document.getElementById('leaveType').value,
      start: document.getElementById('startDate').value,
      end: document.getElementById('endDate').value,
      reason: document.getElementById('reason').value,
      status: 'Pending'
    };

    const existingApps = getLeaveApplications();
    existingApps.push(newApplication);
    saveLeaveApplications(existingApps);

    alert('Application submitted!');
    leaveForm.reset();
    showLeaveHistory(currentUser.email);
  });

  function showLeaveHistory(userEmail) {
    leaveHistorySection.style.display = 'block';
    const applications = getLeaveApplications().filter(app => app.email === userEmail);
    leaveTableBody.innerHTML = '';
    applications.forEach(app => {
      const row = `<tr>
        <td>${app.type}</td>
        <td>${app.start}</td>
        <td>${app.end}</td>
        <td>${app.reason}</td>
        <td>${app.status}</td>
      </tr>`;
      leaveTableBody.innerHTML += row;
    });
  }
