import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import skills from "./skills";
import servicesoffered from "./servicesoffered";
import social from "./social";
import Team from "./Team";


export default createSchema({
    name:"default",
    types:schemaTypes.contact([
        pageInfo,
        skills,
        servicesoffered,
        Team,
        social,

        
    ])
})