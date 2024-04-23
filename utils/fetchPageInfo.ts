import axios from 'axios';
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getPageInfo`);
        const pageInfo: PageInfo = res.data.pageInfo;
        return pageInfo;
    } catch (error) {
        // Handle error, perhaps by logging or returning a default value
        console.error('Error fetching page info:', error);
        return null;
    }
}
