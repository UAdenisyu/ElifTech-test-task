import './banks-list.scss';
import BanksListItem from '../banks-list-item/banks-list-item';

const BanksList = ({data, onDelete, onMarked, toggleEditMode, onEdit}) => {
    const banksList = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <BanksListItem 
            key={id}
            {...itemProps}
            onDelete={() => {onDelete(id)}}
            onMarked={() => {onMarked(id)}}
            toggleEditMode={() => {toggleEditMode(id)}}
            onEdit={(field, value) => {onEdit(id, field, value)}}/>
        );
    });
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
            {banksList}
        </div>
    )
}

export default BanksList;