export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name:"service",
      title:"Service",
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
      name:"points",
      title:"Points",
      type:"array",
      of:[{type:"string"}],
    },
    
  ],

  
};
