import './banks-list-item.scss';

const BanksListItem  = () => {
    return (
        <div className="banks-list-item row">
            <div className="fs-3 bank-name col-2">Bank 1</div>
            <div className="fs-3 interest-rate col-2">15%</div>
            <div className="fs-3 max-roan col-2">1 000 000</div>
            <div className="fs-3 min-down-pay col-2">20 000</div>
            <div className="fs-3 loan-term col-2">2 years</div>
            <div className='d-flex justify-content-center align-items-center actions-btn-group col-2'>
                <button type="button"
                        className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default BanksListItem;