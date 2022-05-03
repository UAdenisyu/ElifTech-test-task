import './search-panel.scss';

const SearchPanel = () => {
    return (
        <div className="container search-panel-wrapper">
            <div className="row search-panel">
                <div className="col-10">
                    <input class="form-control mr-sm-2" type="search" placeholder="Find bank by name" aria-label="Find bank by name"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-success search-button">Search</button>
                </div>
            </div>
            <div className="filter-buttons-group">
                <div className="first-group row">
                    <button className="btn btn-light col">
                        By rate
                    </button>
                    <button className="btn btn-dark col">
                        By max loan
                    </button>
                    <button className="btn btn-dark col">
                        By min down
                    </button>
                </div>
                <div className="last-group">
                    <button className="btn btn-dark">
                        By loan term
                    </button>
                </div>
            </div>

        </div>
    );
}

export default SearchPanel;