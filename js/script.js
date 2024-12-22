const blogs = [
    { id: 1, title: "Why Web Development is the Future", image: "images/blog1.png", content: "Web development is evolving at an incredible pace...",
     },
    { id: 2, title: "The Rise of AI in 2024", image: "images/blog2.jpg", content: "Artificial Intelligence is transforming industries across the globe..." },
    { id: 3, title: "How to Start Your Coding Journey", image: "images/blog3.JFIF", content: "Coding is a valuable skill in today's tech-driven world..." },
    { id: 4, title: "Top 5 Programming Languages in 2024", image: "images/blog4.JFIF", content: "Explore the most popular programming languages of 2024..." },
    { id: 5, title: "The Importance of Cybersecurity", image: "images/blog5.JFIF", content: "Cybersecurity is crucial in safeguarding data and systems..." },
    { id: 6, title: "Cloud Computing Explained", image: "images/blog6.JFIF", content: "Understand the basics of cloud computing and its benefits..." },
    { id: 7, title: "The Role of IoT in Modern Technology", image: "images/blog7.JFIF", content: "The Internet of Things is connecting devices and shaping the future..." },
    { id: 8, title: "Tips for Learning JavaScript", image: "images/blog8.JFIF", content: "JavaScript is a versatile language, and here are some tips to master it..." },
    { id: 9, title: "Responsive Web Design Basics", image: "images/blog9.PNG", content: "Learn how to make websites responsive and user-friendly..." },
    { id: 10, title: "The Power of Open Source Software", image: "images/blog10.PNG", content: "Discover why open-source software is transforming industries..." },
    { id: 11, title: "Machine Learning for Beginners", image: "images/blog11.jpg", content: "An introduction to the exciting world of machine learning..." },
    { id: 12, title: "The Evolution of Mobile Applications", image: "images/blog12.jpg", content: "Mobile apps are changing the way we live and work..." },
    { id: 13, title: "How Blockchain is Revolutionizing Tech", image: "images/blog13.jpg", content: "Blockchain technology is disrupting traditional systems..." },
    { id: 14, title: "UI/UX Design Principles", image: "images/blog14.jpg", content: "Learn the fundamentals of creating great user experiences..." },
    { id: 15, title: "The Future of Remote Work", image: "images/blog15.jpg", content: "Remote work trends and how technology is supporting it..." },
    { id: 16, title: "Augmented Reality in Everyday Life", image: "images/blog16.jpg", content: "How AR is enhancing daily experiences..." },
    { id: 17, title: "DevOps Practices for Beginners", image: "images/blog17.jpg", content: "An introduction to DevOps and its role in software development..." },
    { id: 18, title: "The Ethics of Artificial Intelligence", image: "images/blog18.jpg", content: "AI raises important ethical questions. Here’s what you need to know..." },
    { id: 19, title: "How to Build Your First Website", image: "images/blog19.jpg", content: "A step-by-step guide for creating your first website..." },
    { id: 20, title: "The Impact of 5G Technology", image: "images/blog20.jpg", content: "5G is here, and it’s transforming industries worldwide..." }
];

const blogContainer = document.getElementById("blogs");

// Dynamically create 20 blog cards
blogs.forEach(blog => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <h3>${blog.title}</h3>
        <p>${blog.content.substring(0, 100)}...</p>
        <a href="blog.html?id=${blog.id}" class="read-more">Read More</a>
    `;
    blogContainer.appendChild(blogCard);
});