const MOVIE_DATA = [
    {
      id: '1',
      name: 'The Shawshank Redemption',
      releaseYear: 1994,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus purus a purus porttitor, non tristique leo ullamcorper. Quisque lacinia mi diam, ac accumsan dolor faucibus eget. Suspendisse cursus metus risus, in sollicitudin ex condimentum nec. Suspendisse tempor enim vel porttitor facilisis. Cras vel facilisis urna. Vivamus pharetra nibh laoreet ligula tempus iaculis. Phasellus a sem aliquet, suscipit odio vitae, finibus ligula. Fusce porta velit nisi, vel convallis ante consequat vel. Etiam quis lectus sapien. Duis ut mauris tempus, ultrices ante ut, egestas leo. Praesent at orci volutpat, sollicitudin ex rhoncus, faucibus quam. Phasellus feugiat iaculis orci ac rhoncus. Integer non feugiat nisl, ut hendrerit odio. Cras et faucibus lectus, non tristique neque. Nulla condimentum est nec consectetur molestie.",
      rating: 4.8,
      genre: 'drama',
      image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
    },
    {
      id: '2',
      name: 'The Dark Knight',
      releaseYear: 2008,
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus purus a purus porttitor, non tristique leo ullamcorper. Quisque lacinia mi diam, ac accumsan dolor faucibus eget. Suspendisse cursus metus risus, in sollicitudin ex condimentum nec. Suspendisse tempor enim vel porttitor facilisis. Cras vel facilisis urna. Vivamus pharetra nibh laoreet ligula tempus iaculis. Phasellus a sem aliquet, suscipit odio vitae, finibus ligula. Fusce porta velit nisi, vel convallis ante consequat vel. Etiam quis lectus sapien. Duis ut mauris tempus, ultrices ante ut, egestas leo. Praesent at orci volutpat, sollicitudin ex rhoncus, faucibus quam. Phasellus feugiat iaculis orci ac rhoncus. Integer non feugiat nisl, ut hendrerit odio. Cras et faucibus lectus, non tristique neque. Nulla condimentum est nec consectetur molestie.",
      rating: 4.7,
      genre: 'action, crime, drama',
      image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600'
    },
    {
      id: '3',
      name: 'Lord of the Rings',
      releaseYear: 2004,
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus purus a purus porttitor, non tristique leo ullamcorper. Quisque lacinia mi diam, ac accumsan dolor faucibus eget. Suspendisse cursus metus risus, in sollicitudin ex condimentum nec. Suspendisse tempor enim vel porttitor facilisis. Cras vel facilisis urna. Vivamus pharetra nibh laoreet ligula tempus iaculis. Phasellus a sem aliquet, suscipit odio vitae, finibus ligula. Fusce porta velit nisi, vel convallis ante consequat vel. Etiam quis lectus sapien. Duis ut mauris tempus, ultrices ante ut, egestas leo. Praesent at orci volutpat, sollicitudin ex rhoncus, faucibus quam. Phasellus feugiat iaculis orci ac rhoncus. Integer non feugiat nisl, ut hendrerit odio. Cras et faucibus lectus, non tristique neque. Nulla condimentum est nec consectetur molestie.",
      rating: 4.9,
      genre: 'adventure, drama, fantasy',
      image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600'
    }
  ]

  export const getMovies = () =>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(MOVIE_DATA)
          reject('Cannot fetch DATA!')
        }, 50)
      })
  }

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(m => m.id === id)
    const movie = MOVIE_DATA[movieIndex]

    console.log(movie)
    setTimeout(() => resolve(movie), 50)
  })
}