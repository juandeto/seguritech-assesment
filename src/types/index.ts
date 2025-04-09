export interface PosterArt {
  url: string;
  width: number;
  height: number;
}

export interface Images {
  "Poster Art": PosterArt;
}

export interface ContentItem {
  title: string;
  description: string;
  programType: string;
  images: Images;
  releaseYear: number;
}

export interface ApiResponse {
  total: number;
  entries: ContentItem[];
}

export interface ContentState {
  items: ContentItem[];
  filteredItems: ContentItem[];
  loading: boolean;
  error: string | null;
  yearFilter: number | null;
  itemsPerPage: number;
  currentPage: number;
}
