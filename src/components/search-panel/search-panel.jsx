import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentInputValue: '',
            filterType: '',
            showOnlyMarked: false
        }
    }

    setValue = (value) => {
        this.setState({ currentInputValue: value});
        this.props.onSearch(value);
    }

    setFilter = (filter) => {
        const toggle = filter === this.state.filterType ? "" : filter;
        this.setState({filterType: toggle});
        this.props.onFilter(toggle)
    }

    toggleShowOnlyMarked = () => {
        this.setState(state => {
            return{
                showOnlyMarked: !state.showOnlyMarked
            }
        })
        this.props.toggleShowOnlyMarked()
    } 

    render() {
        
        const filterBtnNames = ["byRate", "byMaxLoan", "byMinDown", "byLoanTerm"];

        return (
            <div className="container search-panel-wrapper">
                <div className="row search-panel">
                    <div className="col-10">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Find bank by name" 
                            aria-label="Find bank by name"
                            value={this.state.currentInputValue}
                            onChange={e => this.setValue(e.target.value)}/>
                    </div>
                    <div className="col-2">
                        <button className="btn search-button">Search</button>
                    </div>
                </div>
                <div className="filter-buttons-group">
                    <div className="first-group row">
                        <button 
                            className={"btn btn-secondary col" + (this.state.filterType === filterBtnNames[0] ? " btn-active" : "")}
                            name={filterBtnNames[0]}
                            onClick={e => this.setFilter(e.target.name)}>
                            By rate
                        </button>
                        <button
                            name={filterBtnNames[1]}
                            className={"btn btn-secondary col" + (this.state.filterType === filterBtnNames[1] ? " btn-active" : "")}
                            onClick={e => this.setFilter(e.target.name)}>
                            By max loan
                        </button>
                        <button 
                            className={"btn btn-secondary col" + (this.state.filterType === filterBtnNames[2]? " btn-active" : "")}
                            name={filterBtnNames[2]}
                            onClick={e => this.setFilter(e.target.name)}>
                            By min down
                        </button>
                    </div>
                    <div className="last-group">
                        <button 
                            className={"btn btn-secondary" + (this.state.showOnlyMarked ? " btn-active" : "")}
                            name="showOnlyMarked"
                            onClick={this.toggleShowOnlyMarked}>
                            Show only marked
                        </button>
                        <button 
                            className={"btn btn-secondary" + (this.state.filterType === filterBtnNames[3] ? " btn-active" : "")}
                            name={filterBtnNames[3]}
                            onClick={e => this.setFilter(e.target.name)}>
                            By loan term
                        </button>
                    </div>
                </div>
    
            </div>
        );
    }
}

export default SearchPanel;