export interface Usuarios{
  firstName : string;
  lastName : string;
  age : number;
  username: string;
  password: string;
  birthDate : Date;
  gender: 'masculino'|'femenino';
}

export interface Productos{
  id: number;
  title: string;
  description: string;
  price :number;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;
  category:string;
  thumbnail:string;
  images:string;
}

export interface Datos {
}

