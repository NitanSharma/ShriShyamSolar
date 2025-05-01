
        document.addEventListener("DOMContentLoaded", function () {
            let myCarousel = new bootstrap.Carousel(document.querySelector("#heroCarousel"), {
                interval: 2500, // Auto-slide every 2 seconds
                ride: "carousel"
            });
        });
        // Bootstrap validation
         // Bootstrap validation
         (function() {
                'use strict';
                var forms = document.querySelectorAll('.needs-validation');
                Array.prototype.slice.call(forms).forEach(function(form) {
                    form.addEventListener('submit', function(event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            })();

            
            let select = document.querySelector("#requirement");
            select.addEventListener('change', () => {
               select.style.color = "rgb(73,80,87)"  
            })
