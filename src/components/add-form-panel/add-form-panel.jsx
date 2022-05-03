import './add-form-panel.scss';

const AddFormPanel  = () => {
    return (
        <div className="container my-5 add-form-wrapper row">
            <div className="input-area row col-10">
                <div className="col">
                    <input className="form-control mr-sm-2"
                        type="search" 
                        placeholder="Bank name" 
                        aria-label="Bank name"/>
                </div>
                <div className="col">
                    <input className="form-control mr-sm-2"
                        type="search" 
                        placeholder="Interest rate" 
                        aria-label="Interest rate"/>
                </div>

                <div className="col">
                    <input className="form-control mr-sm-2"
                        type="search" 
                        placeholder="Max loan" 
                        aria-label="Max loan"/>
                </div>

                <div className="col">
                    <input className="form-control mr-sm-2"
                        type="search" 
                        placeholder="Min down pay" 
                        aria-label="Min down pay"/>
                </div>

                <div className="col">
                    <input className="form-control mr-sm-2"
                        type="search" 
                        placeholder="Loan term" 
                        aria-label="Loan term"/>
                </div>


            </div>
            <div className="col-2 btn-add-bank">
                    <button className="btn btn-success">Add bank to list</button>
            </div>
        </div>
    )
}

export default AddFormPanel;