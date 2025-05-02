// start code

// SNACK 1 --------------------------------------

// const getPostTitle = (id) => {
//   const fetchTitle = new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((data) => resolve(data.title))
//       .catch((error) => reject(error));
//   });

//   return fetchTitle;
// };

// getPostTitle(19)
//   .then((title) => console.log('post title: ', title))
//   .catch((err) => console.log(err));

// // bonus

// const getPost = (id) => {
//   const fetchPost = new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });

//   return fetchPost;
// };

// const getAuthor = (userId) => {
//   const fetchAuthor = new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });

//   return fetchAuthor;
// };

// getPost(19)
//   .then((post) => {
//     console.table(post);
//     getAuthor(post.userId)
//       .then((author) => console.log('autore del post: ', author))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// SNACK 2 --------------------------------------

// let counterLanci = 0;

// const lanciaDado = (counterLanci) => {
//   const generateNum = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const risultato = Math.floor(Math.random() * 6) + 1;
//       if (counterLanci % 5 == 0) {
//         reject('ops! il dado è caduto dal tavolo, rilancio');
//       } else {
//         resolve(risultato);
//       }
//     }, 5000);
//   });

//   return generateNum;
// };

// const giocoDadi = setInterval(() => {
//   console.log('lancio del dado...');
//   counterLanci++;
//   const lancio = lanciaDado(counterLanci);
//   lancio
//     .then((risDado) => {
//       console.log("E' uscito ", risDado);
//       counterLanci == 10 && clearInterval(giocoDadi);
//     })
//     .catch((err) => console.error(err));
// }, 3000);

let counterLanci = 0;
let ultimoLancio = 0;

const lanciaDado = (counterLanci) => {
  const generateNum = new Promise((resolve, reject) => {
    setTimeout(() => {
      const risultato = Math.floor(Math.random() * 6) + 1;
      risultato == ultimoLancio && console.log('Incredibile!');
      ultimoLancio = risultato;
      if (risultato) {
        resolve(risultato);
      } else {
        reject('Errore nel lancio del dado');
      }
    }, 5000);
  });

  return generateNum;
};

const giocoDadi = setInterval(() => {
  console.log('lancio del dado...');
  counterLanci++;
  const lancio = lanciaDado(counterLanci);
  lancio
    .then((risDado) => {
      console.log("E' uscito ", risDado);
      counterLanci == 10 && clearInterval(giocoDadi);
    })
    .catch((err) => console.error(err));
}, 3000);
