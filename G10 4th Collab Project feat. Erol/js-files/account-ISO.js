const inputs = document.querySelectorAll(".queries");

const options = {
    root: null,
    threshold: 1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle("observed");
        observer.unobserve(entry.target);
    });
}, options);

inputs.forEach(queries => {
    observer.observe(queries);
});