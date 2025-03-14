
        document.addEventListener("DOMContentLoaded", function () {
            let myCarousel = new bootstrap.Carousel(document.querySelector("#heroCarousel"), {
                interval: 2500, // Auto-slide every 2 seconds
                ride: "carousel"
            });
        });
    
    
        document.addEventListener("DOMContentLoaded", function() {
            var navbarToggler = document.querySelector(".navbar-toggler");
            var navbarCollapse = document.querySelector("#navbarSupportedContent");
    
            navbarToggler.addEventListener("click", function() {
                navbarCollapse.classList.toggle("show");
            });
        });
    
    
        document.getElementById('requirement').addEventListener('change', function() {
                const billSelect = document.getElementById('bill');
                billSelect.innerHTML = '<option value="">Select Monthly Bill</option>'; // Reset options
                
                if (this.value === 'residential') {
                    billSelect.innerHTML += `
                        <option value="2000-3000">2000-3000</option>
                        <option value="3000-5000">3000-5000</option>
                        <option value="5000+">5000 and Above</option>
                    `;
                } else if (this.value === 'commercial') {
                    billSelect.innerHTML += `
                        <option value="10000-20000">10,000-20,000</option>
                        <option value="20000-50000">20,000-50,000</option>
                        <option value="50000+">50,000 and Above</option>
                    `;
                } else if (this.value === 'industrial') {
                    billSelect.innerHTML += `
                        <option value="50000-100000">50,000-100,000</option>
                        <option value="100000-500000">100,000-500,000</option>
                        <option value="500000+">500,000 and Above</option>
                    `;
                }
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