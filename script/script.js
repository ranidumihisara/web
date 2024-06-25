    // Simple JavaScript for hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });

    //blog
    const blogPostsContainer = document.getElementById('blog-posts');

    const blogPosts = [
        {
            imageUrl: 'image1.jpg', // Replace with actual image URLs
            title: 'First Blog Post',
            excerpt: 'This is the excerpt of my first amazing blog post.',
            link: 'blog-post-1.html' // Replace with actual post links
        },
        // Add more blog post data as needed
    ];
    
    blogPosts.forEach(post => {
        const postElement = `
            <article class="blog-post">
                <img class="post-image" src="${post.imageUrl}" alt="${post.title}">
                <div class="post-content">
                    <h3 class="post-title"><a href="${post.link}">${post.title}</a></h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="${post.link}" class="read-more">Read More</a>
                </div>
            </article>
        `;
        blogPostsContainer.innerHTML += postElement;
    });

    document.addEventListener('DOMContentLoaded', () => {
      const profilePic = document.querySelector('#about .profile-picture');
    
      profilePic.addEventListener('mouseover', () => {
        profilePic.classList.add('hovering');
      });
    
      profilePic.addEventListener('mouseout', () => {
        profilePic.classList.remove('hovering');
      });
    });