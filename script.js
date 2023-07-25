document.getElementById("user").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    postData(name, mobile);

    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
}

function postData(name, mobile) {
    const url = 'https://script.google.com/macros/s/AKfycbxVhriDE0KWwU65POSyKLK5L7uiGdYzSU4H5I96MX8GkN2HOLATDe1Mx37MH0Ft-7XbzQ/exec';
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Data submitted successfully!");
        } else {
            alert("Failed to submit data!");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while submitting data!");
    });
}