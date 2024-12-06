let blogs = []; // length nya adalah 0

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let imageInput = document.getElementById('input-blog-image');

  if (title == '' || content == '' || imageInput.files.length === 0) {
    return alert('All input fields cannot be empty');
  }

  let image = URL.createObjectURL(imageInput.files[0]);

  let blog = {
    author: 'Karunia Leo G',
    title: title,
    content: content,
    image: image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById('blogList');

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i]);

    blogListElement.innerHTML += `
        <div id="${i}" class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                  ${blogs[i].title}
                </a>
              </h1>
              <div class="detail-blog-content">
                12 Jul 2024 22:30 WIB | ${blogs[i].author}
              </div>
              <p class="blog-text">
                ${blogs[i].content}
              </p>
            </div>
          </div>
    `;
  }
}

function firstBlogContent() {
  return `
        <divclass="blog-list">
          <div class="blog-list-item">
            <div class="blog-image">
              <img
                src="assets/blog-img.png"
                alt="blog-image"
              />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Blog</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a
                  href="blog-detail.html"
                  class="blog-item-title"
                  >Pasar Coding di indonesia masih menjanjikan</a
                >
              </h1>
              <div class="detail-blog-content">12 Jul 2024 22:30 Wib | Karunia G</div>
              <p class="blog-text">Data dummy merupakan data palsu yang diciptakan dengan tujuan sebagai data sampel atau contoh yang sangat membantu ketika mengembangkan aplikasi saat membutuhkan data percobaan.</p>
            </div>
          </div>
        </div>
    `;
}
