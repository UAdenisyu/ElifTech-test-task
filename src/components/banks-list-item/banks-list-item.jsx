import './banks-list-item.scss';

const BanksListItem  = ({name, interestRate, maxLoan, minDownPay, loanTerm, onDelete, marked, onMarked, editMode, toggleEditMode, onEdit}) => {
    const modifiedDiv = (classlist, value, inputType, fieldName) => {
        if (editMode) {
            return(
                <div className={classlist}>
                <input 
                    type={inputType} 
                    defaultValue={value}
                    onChange={(e) => onEdit(fieldName, e.target.value)}/>
                </div>
            )

        }
        else{
            return(
                <div className={classlist}>{value}</div>
            )
        }
    }
    
    return (
        <div className={"banks-list-item row" + (marked ? " marked" : "")}>
            {modifiedDiv("fs-3 bank-name col-2", name, "text", "name")}
            {modifiedDiv("fs-3 interest-rate col-2", interestRate, "number", "interestRate")}
            {modifiedDiv("fs-3 max-roan col-2", maxLoan, "number", "maxLoan")}
            {modifiedDiv("fs-3 min-down-pay col-2", minDownPay, "number", "minDownPay")}
            {modifiedDiv("fs-3 loan-term col-2", loanTerm, "number", "loanTerm")}
            <div className='d-flex justify-content-center align-items-center actions-btn-group col-2'>
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onMarked}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className={"btn-sm btn-edit" + (editMode ? " btn-edit-active" : "")}
                        onClick={() => {
                                    toggleEditMode()
                                }}>
                    <i className={"fas" + (editMode ? " fa-sd-card" : " fa-pen")}></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default BanksListItem;