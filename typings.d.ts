interface SanityBody {
    _createdAt:string;
    _id:string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type:"image";
    asset: {
        _ref: string;
        _type:"reference";
    };
}

export interface PageInfo extends SanityBody {
    _type:"pageInfo";
    address:string;
    backgroundInformation:string;
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
}

export interface Skill extends SanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

export interface Services extends SanityBody {
    _type:"servicesoffered";
    serviceImage:Image;
    description:string;
    points:string[];
}
export interface Team extends SanityBody {
    membername: string;
    linktosocial: JSX.Element;
    title:string;
    _type:"team";
    image:Image;
    description:string;
    linktoSocial:string;
    technologies:Skill[];

}
export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}