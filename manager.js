const tableBody = document.querySelector('#approvalTable tbody');

    function getLeaveApplications() {
      return JSON.parse(localStorage.getItem('leaveApplications')) || [];
    }

    function saveLeaveApplications(apps) {
      localStorage.setItem('leaveApplications', JSON.stringify(apps));
    }

    function renderApplications() {
      const applications = getLeaveApplications();
      tableBody.innerHTML = '';

      applications.forEach((app, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${app.name || app.email}</td>
          <td>${app.type}</td>
          <td>${app.start}</td>
          <td>${app.end}</td>
          <td>${app.reason}</td>
          <td>${app.status}</td>
          <td>
            <button onclick="updateStatus(${index}, 'Approved')">Approve</button>
            <button onclick="updateStatus(${index}, 'Rejected')">Reject</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    function updateStatus(index, newStatus) {
      const applications = getLeaveApplications();
      applications[index].status = newStatus;
      saveLeaveApplications(applications);
      renderApplications();
    }

    renderApplications();