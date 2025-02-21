document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseenter", function (event) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100 + "%";
        const y = ((event.clientY - top) / height) * 100 + "%";

        this.style.setProperty("--x", x);
        this.style.setProperty("--y", y);
    });
});
