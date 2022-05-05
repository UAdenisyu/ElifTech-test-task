import './App.css';
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppInfo from '../components/app-info/app-info';
import SearchPanel from '../components/search-panel/search-panel';
import BanksList from '../components/banks-list/banks-list';
import AddFormPanel from '../components/add-form-panel/add-form-panel';
import { v4 as uuid } from 'uuid';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banks: [
                {name: 'Bank 1', interestRate: 15, maxLoan: 1000000, minDownPay: 20000, loanTerm: 20, marked: true, id: uuid(), editMode: true},
                {name: 'Bank 2', interestRate: 10, maxLoan: 2500000, minDownPay: 50000, loanTerm: 30, marked: false, id: uuid(), editMode: false},
                {name: 'Bank 7', interestRate: 7, maxLoan: 700000, minDownPay: 15000, loanTerm: 25, marked: true, id: uuid(), editMode: false},
                {name: 'Bank 4', interestRate: 12, maxLoan: 100000, minDownPay: 20000, loanTerm: 10, marked: false, id: uuid(), editMode: false},
                {name: 'Bank 5', interestRate: 14, maxLoan: 500000, minDownPay: 10000, loanTerm: 15, marked: false, id: uuid(), editMode: false}
            ],
            filterType: "",
            currentSearchInput: '',
            showOnlyMarked: false,
        }
    }

    deleteBank = (key) => {
        this.setState(({banks}) => {
            return {
                banks: banks.filter(elem => elem.id !== key)
            }
        });
    }

    markBank = (key) => {

        this.setState(({banks}) => {
            const index = banks.findIndex(elem => elem.id === key);
            const oldBankItem = banks[index];
            const newBankItem = {...oldBankItem, marked: !oldBankItem.marked};
            const newBanksList = [...banks.slice(0, index), newBankItem, ...banks.slice(index + 1)];
            return {
                banks: newBanksList
            };
        })

    }

    addBank = ({bankName, interestRate, maxLoan, minDownPay, loanTerm, marked}) => {
        const newBank = {
            name: bankName,
            interestRate: interestRate,
            maxLoan: maxLoan,
            minDownPay: minDownPay,
            loanTerm: loanTerm,
            marked: marked,
            id: uuid()
        }
        this.setState(({banks}) => {
            return {
                banks: [...banks, newBank]
            }
        });
    }

    updateSearch = (searchValue) => {
        this.setState({currentSearchInput: searchValue})
    }

    searchBank = (items, input) => {
        if (input.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(input) > -1
        })
    }

    onFilter = (filterName) => {
        this.setState({ filterType: filterName})
    }

    sortBanks = (items, filter) => {
        const copy = JSON.parse(JSON.stringify(items));
        switch (filter) {
            case '':
                return items;
            case 'byRate':
                return copy.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            case 'byMaxLoan':
                return copy.sort((a, b) => {
                    if (a.maxLoan < b.maxLoan) {
                        return 1;
                    }
                    if (a.maxLoan > b.maxLoan) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            case 'byMinDown':
                return copy.sort((a, b) => {
                    if (a.minDownPay > b.minDownPay) {
                        return 1;
                    }
                    if (a.minDownPay < b.minDownPay) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            case 'byLoanTerm':
                return copy.sort((a, b) => {
                    if (a.loanTerm > b.loanTerm) {
                        return 1;
                    }
                    if (a.loanTerm < b.loanTerm) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            default:
                return copy
        }
    }

    filterBanks = (bankList) => {
        if (this.state.showOnlyMarked) {
            return bankList.filter(bank => bank.marked === true);
        }
        else{
            return bankList;
        }
    }

    toggleShowOnlyMarked = () => {
        this.setState(state => {
            return {
                showOnlyMarked: !state.showOnlyMarked
            }
        })
    }

    toggleEditMode = (key) => {
        this.setState(({banks}) => {
            const index = banks.findIndex(elem => elem.id === key);
            const oldBankItem = banks[index];
            const newBankItem = {...oldBankItem, editMode: !oldBankItem.editMode};
            const newBanksList = [...banks.slice(0, index), newBankItem, ...banks.slice(index + 1)];
            return {
                banks: newBanksList
            };
        })
    }

    onEditBankField = (key, field, newValue) => {
        if(newValue !== ""){
            this.setState(({banks}) => {
                const index = banks.findIndex(elem => elem.id === key);
                const oldBankItem = banks[index];
                const newBankItem = {...oldBankItem, [field]: newValue};
                const newBanksList = [...banks.slice(0, index), newBankItem, ...banks.slice(index + 1)];
                return {
                    banks: newBanksList
                };
            })
        }

    }

    render(){

        const visibleData = this.filterBanks(this.sortBanks(this.searchBank(this.state.banks, this.state.currentSearchInput), this.state.filterType));

        return (
            <>  
                <AppInfo
                    amount={this.state.banks.length}
                    marked={this.state.banks.filter(bank => bank.marked === true).length}/>
                <SearchPanel 
                    filterType={this.state.filterType}
                    onFilter={this.onFilter}
                    onSearch={this.updateSearch}
                    toggleShowOnlyMarked={this.toggleShowOnlyMarked}/>
                <BanksList 
                    data={visibleData}
                    onDelete={this.deleteBank}
                    onMarked={this.markBank}
                    toggleEditMode={this.toggleEditMode}
                    onEdit={this.onEditBankField}/>
                <AddFormPanel
                    onAdd={this.addBank}/>
            </>
        );
    }

}

export default App;
