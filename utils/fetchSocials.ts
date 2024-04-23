import axios from 'axios';
import { Social } from "../typings";

export const fetchSocials = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getSocials`);
        const socials: Social[] = res.data.socials;
        return socials;
    } catch (error) {
        // Handle error, perhaps by logging or returning a default value
        console.error('Error fetching socials:', error);
        return [];
    }
}
