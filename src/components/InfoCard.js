import React from 'react'
import Item from './Item';


class InfoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",

            currentPage: "all",
            todoItems: []
        };
        // this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        // this.onKeyPressed = this.onKeyPressed.bind(this);
        this.completeItem = this.completeItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    // control items / click handler
    handleChange(event) {
        console.log({ value: event.target.value })
        this.setState({ value: event.target.value });
    }

    handleStateChange(newView) {
        this.setState({ currentPage: newView });
    }

    completeItem(id) {
        // TODO: copy this code for your delete item

        let tmpList = this.state.todoItems.map(todoItem => {

            // TODO: for delete function, when you find the match, just skip it (filter, insted of map)
            if (id === todoItem.id) {
                todoItem.completed = !todoItem.completed
            }

            return todoItem

        });



        this.setState({ todoItem: tmpList })
    }

    deleteItem(id) {


        let tmpList = this.state.todoItems.filter(todoItem => {
            if (id !== todoItem.id) {
                // todoItem.completed = !todoItem.completed
                console.log(todoItem)
                return todoItem
            }
        });

        this.setState({ todoItems: tmpList })

    }

    handleSubmit() {
        console.log(this.state.todoItems)
        // create item
        let item = { id: Date.now(), name: this.state.value, completed: false };

        // copy the list of current items
        let list = this.state.todoItems;

        // add the item
        list.push(item);

        // set state with the todoItms = list, so that nuke/pave
        this.setState({ todoItems: list, value: '' });

        // localStorage.setState({todoItems:list})
    }

    handleClear(event) {


    }
    componentWillMount() {
        let list = localStorage.getItem('list')
        if (list) {
            this.setState({ todoItems: JSON.parse(list) })
        }
    }


    componentDidUpdate() {
        this.saveToLocalStorage()
    }

    saveToLocalStorage() {
        localStorage.setItem('list', JSON.stringify(this.state.todoItems))
    }

    updateList(name) {
        localStorage.setItem(name)


    }

    render() {

        let tmpList = this.state.todoItems;
        // if we are in the "completed"
        if (this.state.currentPage === "completed") {
            // filter tmpList to return only completed
            tmpList = this.state.todoItems.filter(todoItem => todoItem.completed)
        }
        if (this.state.currentPage === "active") {
            // filter tmpList to return only completed
            tmpList = this.state.todoItems.filter(todoItem => !todoItem.completed)
        }
        let list = tmpList.map((item, i) => (
            <Item
                key={i}
                data={item}
                completeItem={this.completeItem}
                deleteItem={this.deleteItem}
            />
        )
        );
        return (
            <div className="card text-center fixed-bottom bg-dark text-secondary">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className={`nav-link ${(this.state.currentPage === 'active') && 'active'}`} href="#" onClick={() => this.handleStateChange("active")}>Active</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(this.state.currentPage === 'completed') && 'active'}`} href="#" onClick={() => this.handleStateChange("completed")}>Completed</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(this.state.currentPage === 'all') && 'active'}`} href="#" onClick={() => this.handleStateChange('all')}>All</a>
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
                            onKeyDown={this.onKeyPressed}
                        >
                            Add Item
                        </button>
                    </div>
                    {list}
                    <button href="#"
                        className="btn btn-primary"
                        type='reset'
                        id='clear'
                        onClick={this.handleClear}
                    >Clear
                        </button>
                </div>
            </div>
        )
    }
}


export default InfoCard;