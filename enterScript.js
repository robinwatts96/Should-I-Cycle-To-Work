const postCode = document.getElementById('post-code');
const submitPostCode = document.getElementById('submit-post-code');
let postCodeValue;


submitPostCode.addEventListener('click', function savePostCode () {
    postCodeValue = postCode.value;
    // Code below saves post code to local storage so it can be used in app.js for conditions based on your location
    localStorage.setItem("postCodeValue", postCodeValue);
    console.log(postCodeValue);
})


