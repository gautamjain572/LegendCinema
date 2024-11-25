"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";
import './celeb.css'

interface Movie {
  _id: string;
  title: string;
  description: string;
  portraitImgUrl: string;
  portraitImg: File | null;
  landscapeImgUrl: string;
  landscapeImg: File | null;
  rating: number;
  genre: string[];
  duration: number;
}

interface Celeb {
  movieId: string,
  celebType: string;
  celebName: string;
  celebRole: string;
  celebImage: string,
  celebImageUrl: File | null;
}

const page = () => {

  const [celeb, setCeleb] = useState<Celeb>({
    movieId: "",
    celebType: "",
    celebName: "",
    celebRole: "",
    celebImage: "",
    celebImageUrl: null,
  });

  const [movies, setMovies] = React.useState<Movie[]>([])
  const getMovies = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`)
    const data = await res.json()
    setMovies(data.data)
    //console.log(data.data)
  }
  React.useEffect(() => {
    getMovies()
  }, [])

  const handleScreenTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCeleb({ ...celeb, celebType: value });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCeleb({ ...celeb, [name]: value });
  };

  const uploadImage = async (image: File) => {
    try {
      const formData = new FormData();
      formData.append("myimage", image);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        return data.imageUrl;
      } else {
        console.error("Failed to upload the image.");
        return null;
      }
    }
    catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  const handleCreateCeleb = async () => {
    try {
      if (celeb.celebType === "" || celeb.celebName === "" || celeb.celebRole === "" || !celeb.movieId) {
        toast.error("Please fill all the fields");
        return;
      }
      let celebImage = celeb.celebImage;

      if (celeb.celebImageUrl) {
        celebImage = await uploadImage(celeb.celebImageUrl);
        if (!celebImage) {
          toast.error("Portrait Image upload failed");
          return;
        }
      }

      const newCeleb = { ...celeb, celebImage };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/addcelebtomovie`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCeleb),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Celeb added successful", data);
        toast.success("Celeb Created Successfully");
      } else {
        console.error("Celeb creation failed", response.statusText);
        toast.error("Celeb Creation Failed");
      }
    }
    catch (error) {
      console.error("An error occurred during movie creation", error);
    }
  }

  return (
    <div className='formpage'>
      <div className='items'>
        <h1>Movies</h1>
        {
          movies?.map((movie, index) => (
            <div className={
              celeb.movieId === movie._id ? 'item selected' : 'item'
            } key={index}
              onClick={() => {
                setCeleb({ ...celeb, movieId: movie._id })
              }}
            >
              <p>{movie.title}</p>
              <p>{movie.description}</p>
              <p>{movie.rating}</p>
              <p>{movie.genre}</p>
              <p>{movie.duration}</p>
            </div>
          ))}
      </div>

      <div>
        Celeb Type:
        <label>
          <input
            type="radio"
            name="celebType"
            value="cast"
            checked={celeb.celebType === 'cast'}
            onChange={handleScreenTypeChange}
          />
          Cast
        </label>
        <label>
          <input
            type="radio"
            name="celebType"
            value="crew"
            checked={celeb.celebType === 'crew'}
            onChange={handleScreenTypeChange}
          />
          Crew
        </label>
      </div>
      <br />
      <input
        type="text"
        name="celebName"
        placeholder="Name"
        value={celeb.celebName}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="celebRole"
        placeholder="Role"
        value={celeb.celebRole}
        onChange={handleInputChange}
      />
      <br />
      <label>Celeb Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          if (event.target.files && event.target.files.length > 0) {
            setCeleb({ ...celeb, celebImageUrl: event.target.files[0] })
          }
        }}
      />
      <br />
      <button onClick={handleCreateCeleb}>Add Celeb</button>
    </div>
  )
}

export default page