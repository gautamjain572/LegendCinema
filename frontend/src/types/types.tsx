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
    celebName: string;
    celebImage: string;
    celebType: string;
    celebRole: string;
}