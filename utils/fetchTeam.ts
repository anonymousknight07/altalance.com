import { Team } from "../typings";

export const fetchTeam =async()=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getTeam`);

    const data= await res.json()
    const team:Team[]=data.team;
    
    return team;
}