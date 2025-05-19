

export default function Trello() {
const initialData ={
  active:0,
  lanes:[
    {
      name:'Flöde 1',
      bgcolor:'#069',
      list:[
        {id:"1",title:"Att göra",cards:[{id:"cdrFt",title:"Projekt 1"}]},
        {id:"2",title:"Pågående",cards:[{id:"cdrFv",title:"Projekt 2"}]},
        {id:"3",title:"Slutförda",cards:[{id:"cdrFb",title:"Projekt 3"}]}
      ]
    }
  ]
}

    return (
        <div>
            <h1>Trello</h1>
            
        </div>
    );
}