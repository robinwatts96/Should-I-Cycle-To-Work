const postCode = document.getElementById('post-code');
const submitPostCode = document.getElementById('submit-post-code');
let postCodeValue;


submitPostCode.addEventListener('click', function savePostCode () {
    postCodeValue = postCode.value;
    localStorage.setItem("postCodeValue", postCodeValue);
    console.log(postCodeValue);
})


