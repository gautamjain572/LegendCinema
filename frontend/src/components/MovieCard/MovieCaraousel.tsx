import React from 'react'
import MovieCard from './MovieCard';
import { MovieCardType } from '@/types/types';


const MovieCaraousel = () => {

  // const Movies: MovieCardType[] = [
  //   {
  //     title: "Gladiator",
  //     imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDIuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413291-wlzypcnvhg-portrait.jpg",
  //     _id: "1",
  //     rating: 8.5,
  //     type: "Action/Thriller"
  //   },
  //   {
  //     title: "Gladiator",
  //     imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjQuOUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383800-amjrahpewh-portrait.jpg",
  //     _id: "2",
  //     rating: 8.5,
  //     type: "Action/Thriller"
  //   },
  //   {
  //     title: "Gladiator",
  //     imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4xLzEwICAxNjkuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-qvtntjzvxs-portrait.jpg",
  //     _id: "3",
  //     rating: 8.5,
  //     type: "Action/Thriller"
  //   },
  //   {
  //     title: "Gladiator",
  //     imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni43LzEwICAxNDcuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354858-njsmtljekp-portrait.jpg",
  //     _id: "4",
  //     rating: 8.5,
  //     type: "Action/Thriller"
  //   },
  //   {
  //     title: "Gladiator",
  //     imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICA1MC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-dzfxlraqgv-portrait.jpg",
  //     _id: "5",
  //     rating: 8.5,
  //     type: "Action/Thriller"
  //   },
  // ]

  const [user, setUser] = React.useState<any>(null)
  const getuser = async () => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => {
              return res.json();
          })
          .then((response) => {
              console.log(response)
              if(response.ok){
                  setUser(response.data)
              }
              else{
                  window.location.href = "/auth/signin"
              }
          })
          .catch((error) => {
              console.log(error)
          })

  }

  
  const [movies, setMovies] = React.useState<MovieCardType[]>([])

  const getMovies = async () => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => res.json())
          .then((data) => {
              if(data.ok){
                  console.log(data)
                  setMovies(data.data)
              }
          })
          .catch((err) => {
              console.log(err)
          })
  }

  React.useEffect(() => {
      getMovies()
      getuser()
  }, [])

  return (
    <div className='sliderout m-10 flex gap-10'>
        {
                    movies.map((Movie) => {
                        return (
                            <div key={Movie._id}>
                                <MovieCard 
                                    Movie={Movie}
                                    user={user}
                                />
                            </div>
                        )
                    })
                }
    </div>
  )
}

export default MovieCaraousel