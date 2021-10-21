import React from 'react'
import Item from './Item';


class InfoCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            
             todoItems: [
                 { id:[], name: "wash clothes" },
                 { id: [], name: "fart" },
            ]
        };
        // this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // control items / click handler
    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
//    this.setState({value:"",id:[],name:''})
this.setState(previousState => ({
    todoItems: [...previousState.todoItems.concat('new value')]

}));

       
// var newArray = this.state.todoItems.slice();    
//     newArray.push("new value");   
//     this.setState({todoItems:newArray})
  console.log('someone farted')
    //add new obj to list
    event.preventDefault();
  }

        
        
        // function stateSetter(previousState) {
            
        //         let newTodo = { id: 2, name: "" }
            
        //         let newTodoItems = [newTodo, ...previousState.todoItems]
            
        //         let obj = {
        //         todoItems: newTodoItems
        //     }

        //     return obj
        // }
       

        






    render() {
        let list = this.state.todoItems.map((item, i) => {
            return <Item key={i} data={item} name ={''} />
        });
        return (
            <div className="card text-center fixed-bottom bg-dark text-secondary">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" id="active">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="completed">Completed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="all">All</a>
                        </li>
                    </ul>
                </div>

                <div className="card-body">
                    <div className="input-group mb-3">
                        <input onChange={this.handleChange} onSubmit={this.handleSubmit}
                            type="text"
                            className="form-control"
                            placeholder="Add Item to list here."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={this.state.value}
                        />
                     
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={this.handleSubmit}
                        >
                            Add Item
                        </button>
                    </div>
                    {list}
                    <button href="#" className="btn btn-primary" type='reset' id='clear'>Clear</button>
                </div>
            </div>
        )
    }
}


export default InfoCard;