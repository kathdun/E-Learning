import Question from './question-model'


export const QUESTIONS:Question[]=[
{
    id:1,
     postId:1,
    auteur:"Djia Jovel",
    contenu:"Bonjour c'est quoi le Reverse Engineering?",
    date:new Date(),
    likes:[]
},{
    id:2,
     postId:1,
    auteur:"Njiki Nana",
    contenu:"C'est quoi le Red Teaming?",
    date:new Date(),
    likes:[]
},{
    id:3,
     postId:1,
    auteur:"Ebelle Ebelle",
    contenu:"HTML est il un langage de programmation?",
   date:new Date(),
   likes:[]
},{
    id:4,
     postId:5,
    auteur: "Yiyueme Jordan",
    contenu:"C'est quoi le DOM Virtuel?",
    date:new Date(),
    likes:[]
},
{
    id:5,
     postId:4,
    auteur: "Antoine Bell",
    contenu:"What is EcmaScript 6?",
    date:new Date(),
    likes:[]
}
]

export default QUESTIONS;