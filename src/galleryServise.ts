import axios from "axios";

// Розширений тип Photo, який тепер сумісний із Image
export interface Photo {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  user: {
    location: string | null;
  };
  urls: {
    small: string;
    regular: string;
  };
}

interface UnsplashResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const fetchGallery = async (
  searchPhoto: string,
  currentPage: number
): Promise<Photo[]> => {
  const response = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: "OoR97xHI3u4L8Gj9aDtqB8KfXHoLMu0tAjoCazzEVik",
        query: searchPhoto,
        page: currentPage,
        per_page: 12,
      },
    }
  );

  return response.data.results;
};