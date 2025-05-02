// start code

// SNACK 1 --------------------------------------

const getPostTitle = (id) => {
  const fetchTitle = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => resolve(data.title))
      .catch((error) => reject(error));
  });

  return fetchTitle;
};

getPostTitle(19)
  .then((title) => console.log('post title: ', title))
  .catch((err) => console.log(err));

// bonus

const getPost = (id) => {
  const fetchPost = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  return fetchPost;
};

const getAuthor = (userId) => {
  const fetchAuthor = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  return fetchAuthor;
};

getPost(19)
  .then((post) => {
    console.table(post);
    getAuthor(post.userId)
      .then((author) => console.log('autore del post: ', author))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
