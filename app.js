const bloodGroupCompatibility = {
    "A+": ["A+", "A-", "O+", "O-"],
    "A-": ["A-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], 
    "AB-": ["AB-", "A-", "B-", "O-"],
    "O+": ["O+", "O-"],
    "O-": ["O-"] 
};

const form = document.getElementById('bloodGroupForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    
    if (!name || !age || !bloodGroup) {
        alert('Please fill all fields');
        return;
    }
    
    updateCompatibleBloodGroups();
    document.getElementById('initialForm').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

function showInitialForm() {
    document.getElementById('initialForm').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
}

function updateCompatibleBloodGroups() {
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const compatibleGroups = bloodGroupCompatibility[bloodGroup];
    
    // Update user info
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultAge').textContent = age;
    document.getElementById('resultBloodGroup').textContent = bloodGroup;
    
    // Update compatible groups list
    const compatibleList = document.getElementById('compatibleList');
    compatibleList.innerHTML = '';
    
    if (compatibleGroups) {
        compatibleGroups.forEach(group => {
            const li = document.createElement('li');
            li.textContent = group;
            compatibleList.appendChild(li);
        });
    } else {
        compatibleList.innerHTML = '<p>Please select a valid blood group.</p>';
    }
}