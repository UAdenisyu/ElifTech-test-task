import './banks-list.scss';
import BanksListItem from '../banks-list-item/banks-list-item';

const BanksList = () => {
    return (
        <div className="container banks-list">
            <div className="table-title row mx-auto">
                <p className="fs-4 col-2 my-0 table-title-item">Bank name</p>
                <p className="fs-4 col-2 my-0 table-title-item">Interest rate</p>
                <p className="fs-4 col-2 my-0 table-title-item">Max roan</p>
                <p className="fs-4 col-2 my-0 table-title-item">Min down pay</p>
                <p className="fs-4 col-2 my-0 table-title-item">Loan term</p>
                <p className="fs-4 col-2 my-0 table-title-item">***</p>
            </div>

            <BanksListItem/>
            <BanksListItem/>
            <BanksListItem/>
            <BanksListItem/>
            <BanksListItem/>
        </div>
    )
}

export default BanksList;