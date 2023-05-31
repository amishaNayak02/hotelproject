console.log("hello there from front-end");

function postData(data) {
  const url = 'https://blossoms-backend-kkk.vercel.app/users';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if(response.status == 200) {
        location.replace("/blossoms/success.html")
      }
      return response.text()
    })
    .then(result => {
      alert(result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const bookingBtn = document.getElementById("bookingBtn")
bookingBtn.addEventListener("click",(e)=>{
  e.preventDefault();

  const bookingForm = document.getElementById("bookingForm");
  const formData = new FormData(bookingForm);

  const formValues = {};
  for (let [key, value] of formData.entries()) {
    formValues[key] = value;
  }

  postData(formValues)

})






