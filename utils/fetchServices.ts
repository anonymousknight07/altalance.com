import axios from 'axios';
import { Services } from "../typings";

export const fetchServices = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getServices`);
        const service: Services[] = res.data.service;
        return service;
    } catch (error) {
        // Handle error, perhaps by logging or returning a default value
        console.error('Error fetching services:', error);
        return [];
    }
}
