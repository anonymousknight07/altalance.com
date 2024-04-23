import axios from 'axios';
import { Team } from "../typings";

export const fetchTeam = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getTeam`);
        const team: Team[] = res.data.team;
        return team;
    } catch (error) {
        // Handle error, perhaps by logging or returning a default value
        console.error('Error fetching team:', error);
        return [];
    }
}
