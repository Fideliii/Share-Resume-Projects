const products = document.querySelectorAll(".product-grid");

const options = {
    root: null,
    threshold: 0.8,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle("observed");
        observer.unobserve(entry.target);
    });
}, options);

products.forEach(productGrid => {
    observer.observe(productGrid);
});