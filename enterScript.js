const postCode = document.getElementById('post-code');
const submitPostCode = document.getElementById('submit-post-code');
let postCodeValue;

submitPostCode.addEventListener('click', function savePostCode () {
    postCodeValue = postCode.value;
    console.log(postCodeValue);
})

export let postCodeValue;