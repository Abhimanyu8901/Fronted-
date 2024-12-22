const blogs = [
    { id: 1, title: "Why Web Development is the Future", image: "images/blog1.jpg", content: "Web development is evolving at an incredible pace..." },
    { id: 2, title: "The Rise of AI in 2024", image: "images/blog2.jpg", content: "Artificial Intelligence is transforming industries across the globe..." },
    { id: 3, title: "How to Start Your Coding Journey", image: "images/blog3.jpg", content: "Coding is a valuable skill in today's tech-driven world..." },
    { id: 4, title: "Top 5 Programming Languages in 2024", image: "images/blog4.jpg", content: "Explore the most popular programming languages of 2024..." },
    // Add all 20 blogs here...
];

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function filterBlogs() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear previous results

    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(query));

    filteredBlogs.forEach(blog => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.content.substring(0, 100)}...</p>
            <a href="blog.html?id=${blog.id}" class="read-more">Read More</a>
        `;
        searchResults.appendChild(blogCard);
    });

    if (filteredBlogs.length === 0) {
        searchResults.innerHTML = "<p>No blogs found.</p>";
    }
}
