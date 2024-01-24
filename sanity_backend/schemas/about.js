export default{
    name:'about',
    title:'About',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'company',
            title:'Company',
            type:'string',
        },
        {
            name:'imageurl',
            title:'ImgURL   ',
            type:'image',
            options:{
                hotspot: true,
            }
        }

    ]
}