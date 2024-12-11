export interface Hotel {
    id: string;
    name: string;
    location: string;
    rating: string;
    price: string;
  }
  
  export interface Facility {
    id: string;
    name: string;
    hotel: Hotel;  
  }
  