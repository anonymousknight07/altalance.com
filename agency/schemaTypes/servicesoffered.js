import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name:"service",
      title:"Name",
      type:"string",
      
    }),
    defineField({
      name:"image",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      },
    }),
    defineField( {
      name:"description",
      title:"Description",
      type:"string",

    }),
    defineField({
      name:"points",
      title:"Points",
      type:"array",
      of:[{type:"string"}],
    }),
    
  ],

 
})
