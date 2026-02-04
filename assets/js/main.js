// assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Simulate Cart Functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    
    // Update cart count on page load
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                cartCount++;
                localStorage.setItem('cartCount', cartCount);
                
                if (cartCountElement) {
                    cartCountElement.textContent = cartCount;
                }
                
                // Visual feedback
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Added!';
                button.classList.remove('btn-outline');
                button.classList.add('btn-accent');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.add('btn-outline');
                    button.classList.remove('btn-accent');
                }, 1500);
            });
        });
    }
    
    // Quantity Inputs in Cart
    const quantityInputs = document.querySelectorAll('.quantity-input');
    if (quantityInputs.length > 0) {
        quantityInputs.forEach(input => {
            input.addEventListener('change', function() {
                // In a real app, this would update cart total
                console.log('Quantity changed to:', this.value);
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});