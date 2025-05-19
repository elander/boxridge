

export default function Trello() {
const initialData ={
	lanes:
    [{
    	  id:"lane-1",
	      name:'Flöde 1',
    	  bgcolor:'#069',
        },
        {
    	  id:"lane-2",
	      name:'Flöde 2',
    	  bgcolor:'#669',
    }],
	lists: [
	    {id:"list-1",title:"Att göra", laneID:"lane-1"},
        {id:"list-2",title:"Pågående", laneID:"lane-1"},
        {id:"list-3",title:"Slutförda", laneID:"lane-1"}
    ],
    cards:[
    	{id:"cdrFt",title:"Projekt 1", listID:"list-1"},
		{id:"cdrFv",title:"Projekt 2", listID:"list-2"},
		{id:"cdrFb",title:"Projekt 3",	listID:"list-3"}
	]
}

    return (
        <div>
            <h1>Trello</h1>
            
        </div>
    );
}

function Card(props) {
    return (
        <div id={props.cardId}>
            <h4>{props.title}</h4>
        </div>
    );
}

function List( props, children ) {
    return (
        <div key={props.listId}>
            <h3>{props.title}</h3>
            <div>
                {children}
            </div>
        </div>
    );
}

function Lane( props, children ) {
    return (
        <div key={props.laneId}>
            <h2>{props.name}</h2>
            <div>
                {children}
            </div>
        </div>
    );
}