import { Services } from "../typings";

export const fetchServices =async()=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getServices`);

    const data= await res.json()
    const service:Services[]=data.service;
    
    return service;
}