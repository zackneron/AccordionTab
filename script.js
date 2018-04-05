// Making sure the DOM is fully loaded by running any script
document.addEventListener('DOMContentLoaded', function () {

    // Calling Event on window
    window.addEventListener('load', getPageRequest);

    // Making the request
    function getPageRequest() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'requested_file.html', true);

        xhr.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                let tabContent = document.querySelectorAll('.tab');

                for (let i = 0; i < tabContent.length; i++) {
                    tabContent[i].innerHTML = this.responseText;
                }
            }
        }

        xhr.send();
    }

});
