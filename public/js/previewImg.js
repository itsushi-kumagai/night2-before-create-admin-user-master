const input = document.querySelector('input[type="file"]')
const previewImage = document.querySelector(".image-preview__image");

input.addEventListener('change', function(e){
    const file = this.files[0];
    if(file) {
        const reader = new FileReader();
        
        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);
        });

        //previewImage.style.display = "block";

        reader.readAsDataURL(file);
    } else {
        //previewImage.setAttribute("src", "");
    }

});