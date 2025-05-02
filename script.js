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
