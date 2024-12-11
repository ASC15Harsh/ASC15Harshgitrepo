export interface Hotel {
    id: string;
    name: string;
    location: string;
    rating: string;
    price: string;
  }
  
  export interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
    nationality: string;
  }
  
  export interface Reviews {
    id: string;
    comments: string;
    hotel: Hotel;  
    guest: Guest; 
  }
  