const showDescription = document.getElementById('showDescription');
const description = document.getElementById('description');
const postCode = document.getElementById('post-code');
const submitPostCode = document.getElementById('submit-post-code');
let postCodeValue;


// Event listener to show/hide description
showDescription.addEventListener('click', function showDesc () {
            
    if (description.style.display === "none") {
        description.style.display = 'block';
        showDescription.innerHTML = "Hide Description";
    } else  {
        description.style.display = 'none';
        showDescription.innerHTML = "Show Description";
    }
});

submitPostCode.addEventListener('click', function savePostCode () {
    postCodeValue = postCode.value;
    // Code below saves post code to local storage so it can be used in app.js for conditions based on your location
    localStorage.setItem("postCodeValue", postCodeValue);
    console.log(postCodeValue);
})


