export interface MovieCardType {
    title: string;
    portraitImgUrl: string;
    landscapeImgUrl: string;
    _id: string;
    rating: number;
    genre: string[];
    description: string;
    duration: number;
    cast: CelebrityCardType[];
    crew: CelebrityCardType[];
}

export interface CelebrityCardType {
    name: string;
    imageUrl: string;
    _id: string;
    role: string;
}

export interface UserType {
    bookings: string[];
    city: string;
    createdAt: string;
    email: string;
    name: string;
    password: string;
    updatedAt: string
    _id: string
}