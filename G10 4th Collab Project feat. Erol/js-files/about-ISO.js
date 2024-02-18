const info = document.querySelectorAll(".content");

const options = {
    root: null,
    threshold: 0.75,
    rootMargin: "-50px"
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

info.forEach(content => {
    observer.observe(content);
});