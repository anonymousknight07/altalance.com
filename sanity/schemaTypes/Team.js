export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name:"membername",
      title:"MemberName",
      type:"string",
      
    },
    {
      name:"image",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      },
    },
    {
      name:"description",
      title:"Description",
      type:"string",

    },
    {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of:[{type:"reference",to:{type:"skill"}}],
    },
    {
      name:"linktosocial",
      title:"LinkToSocial",
      type:"url",
    },
    
  ],

  
};
