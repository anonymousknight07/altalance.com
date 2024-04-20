import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name:"membername",
      title:"MemberName",
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
    defineField({
      name:"description",
      title:"Description",
      type:"string",

    }),
    
    defineField( {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of:[{type:"reference",to:{type:"skills"}}],
    }),
    defineField({
      name:"linktosocial",
      title:"LinkToSocial",
      type:"url",
    }),
    
   
    
  ],

 
})
