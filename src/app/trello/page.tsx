

export default function Trello() {
const laneData ={
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
            <div>
        {// DndContext here
        laneData.lanes.map((lane) => (
          <Lane key={lane.name} lane={lane} />
          ))}
    </div>
        </div>
    );
}


type LaneProps = {
    lane: {
        name: string;
        bgcolor: string;
        list: {
            id: string;
            title: string;
            cards: {
                id: string;
                title: string;
            }[];
        }[];
    };
};

 function Lane(props: LaneProps) {
    return (
        <div key={props.lane.name} className="p-4">
            <h2 className="text-2xl font-bold mb-2">{props.lane.name}</h2>
            <div className="grid grid-cols-5 gap-4">
              {props.lane.list.map((list) => (
                <div id={list.id} key={list.id} className="bg-white p-4 rounded shadow text-gray-800">
                  Lista
                </div>
                ))}
            </div>
        </div>
    );
 }
