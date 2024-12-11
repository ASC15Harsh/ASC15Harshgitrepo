export interface Guest {
    id: string;
    name: string;
    email: string;
    phone: string;
    nationality: string;
}

export interface Hotel {
    id: string;
    name: string;
    location: string;
    rating: string;
    price: string;
}

export interface Booking {
    id: string;             
    guest: Guest;            
    hotel: Hotel;            
    room: number;          
    checkinDate: string;    
    checkoutDate: string;   
}
