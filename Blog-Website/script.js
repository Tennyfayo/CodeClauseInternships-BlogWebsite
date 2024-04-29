document.addEventListener("DOMContentLoaded", function () {
    // Ensure key elements are present in the DOM
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const articlesContainer = document.querySelector(".articles-content");
    const contactMeBtn = document.getElementById("contactMeBtn");
    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeModal = document.getElementById("subscribeModal");
    const closeModal = document.getElementById("closeModal");

    if (
        !loadMoreBtn ||
        !articlesContainer ||
        !contactMeBtn ||
        !subscribeBtn ||
        !subscribeModal ||
        !closeModal
    ) {
        console.error("One or more key elements are missing from the DOM.");
        return;
    }

    // List of additional articles to be loaded
    const additionalArticles = [
        {
            title: "The Rise of Drones: From Hobbyist Toys to Commercial Applications",
            link: "asset/article3.html",
            image: "asset/images (1).jpg",
            content:
                "Investigate the growing use of drones in various industries, from photography and filmmaking to agriculture and delivery services. Explore how drone technology is evolving and the impact it has on society.",
        },
        {
            title: "Video Game Technology: The Latest Innovations in Gaming",
            link: "asset/article4.html",
            image: "asset/images (2).jpg",
            content:
                "Explore the latest trends in video game technology, including virtual reality, haptic feedback, and ray tracing. Discuss how these advancements are enhancing the gaming experience and what the future of gaming might hold.",
        },
    ];

    let currentArticleIndex = 0;

    // Function to create a new article element
    function createArticleElement(article) {
        const container = document.createElement("div");
        container.className = "article";

        const image = document.createElement("img");
        image.className = "article-img";
        image.src = article.image;
        image.alt = `Image for ${article.title}`;

        const containerBody = document.createElement("div");
        containerBody.className = "article-body";

        const titleLink = document.createElement("a");
        titleLink.href = article.link;
        titleLink.target = "_blank";
        titleLink.rel = "noopener noreferrer";

        const title = document.createElement("h5");
        title.className = "article-title";
        title.textContent = article.title;

        titleLink.appendChild(title);

        const content = document.createElement("p");
        content.textContent = article.content;

        containerBody.appendChild(titleLink);
        containerBody.appendChild(content);

        container.appendChild(image);
        container.appendChild(containerBody);

        return container;
    }

    // Event listener for the "Load More" button
    loadMoreBtn.addEventListener("click", function () {
        if (currentArticleIndex < additionalArticles.length) {
            const newArticle = createArticleElement(
                additionalArticles[currentArticleIndex]
            );
            articlesContainer.appendChild(newArticle);
            currentArticleIndex++;
        } else {
            loadMoreBtn.textContent = "No More Articles";
            loadMoreBtn.disabled = true;
        }
    });

    // Event listener for the "Contact Me" button
    contactMeBtn.addEventListener("click", function () {
        const linkedinURL = "https://www.linkedin.com/in/osomo-oluwatenifayo-75153917a";
        window.open(linkedinURL, "_blank", "noopener noreferrer");
    });

    // Event listeners for the newsletter modal
    subscribeBtn.addEventListener("click", function () {
        subscribeModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        subscribeModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === subscribeModal) {
            subscribeModal.style.display = "none";
        }
    });
});