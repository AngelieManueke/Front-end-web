// Data untuk informasi pribadi dan fungsi dalam satu objek
const personalInfo = {
    name: 'Angelie Josephine Manueke',
    age: 19,
    status: 'Single',
    major: 'Information Systems',
    faculty: 'Computer Science',
    address: 'Jln. C. Heatubun',
    interests: 'Programmer, machine learning, AI'
};

// Fungsi untuk menghasilkan konten HTML dan memasukkannya ke dalam elemen dengan id "info-list"
function displayPersonalInfo(info) {
    const infoList = document.getElementById('info-list');
    infoList.innerHTML = `
        <li><b>Name:</b> ${info.name}</li>
        <li><b>Age:</b> ${info.age} years old</li>
        <li><b>Status:</b> ${info.status}</li>
        <li><b>Major:</b> ${info.major}</li>
        <li><b>Faculty:</b> ${info.faculty}</li>
        <li><b>Address:</b> ${info.address}</li>
        <li><b>Interests:</b> ${info.interests}</li>
    `;
}

// Ekspor sebagai satu objek dengan ekspor default
export default {
    personalInfo,
    displayPersonalInfo
};
