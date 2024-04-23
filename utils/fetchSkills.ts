import axios from 'axios';
import { Skill } from "../typings";

export const fetchSkills = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getSkills`);
        const skills: Skill[] = res.data.skills;
        return skills;
    } catch (error) {
        // Handle error, perhaps by logging or returning a default value
        console.error('Error fetching skills:', error);
        return [];
    }
}
