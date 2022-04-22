import Post_Model from './post-model';

export const POSTS : Post_Model[]=[
{
    id:5,
    auteur:"Njiki Nana",
    description: "Introduction a la cybersecurite",
    classe: "3il 4",
    cours:"Cybersecurite",
    questions:1,
    date:new Date(),
    contentURL:"/assets/So Will I - Enni Francis and Kanaan Francis (Hillsong United Cover).mp4",
    classesConcernees: ["3IL 4","3IL 3"]
},
{
    id:1,
    auteur:"Djia Jovel",
    description: "Introduction a la Robotique",
    classe: "3il 4",
    cours:"Robotique",
    questions:1,
    date:new Date(),
    contentURL:"/assets/Minister GUC - In This Place (Official Video).mp4",
    classesConcernees: ["CS2I 4","CS2I 5"]
},
{
    id:2,
    auteur:"Ebelle Ebelle",
    description: "Quelques astuces en PL/SQL",
    classe: "3IL 3",
    cours:"Base de Donnees",
    questions:1,
    date:new Date(),
    contentURL:"/assets/Minister GUC - God Is Helping Us (Live).mp4",
    classesConcernees: ["CS2I 4","3IL 3"]
},
{
    id:3,
    auteur:"Ngaba Marc",
    description: "Comment faire une maquette avec illustrator",
    classe: "3IL 5",
    cours:"Graphic Design",
    questions:1,
    date:new Date(),
    contentURL:"/assets/Ada Ehi - Live Sessions (Pilot).mp4",
    classesConcernees: ["CS2I 5","3IL 5"]
},
{   
    id:4,
    auteur:"Yiyueme Jordan",
    description: "Les Constructeurs en Java",
    classe: "3il 4",
    cours:"Programation Java",
    questions:1,
    date:new Date(),
    contentURL:"https://www..com/watch?v=lHTLVe_v8Eg",
    classesConcernees: ["CS2I 4","3IL 3","CS2I 3","3IL 4"]
}
];

export default POSTS;