import { Component } from 'react';
import './add-form-panel.scss';

class AddFormPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bankName: "",
            interestRate: "",
            maxLoan: "",
            minDownPay: "",
            loanTerm: ""
        }
        this.onAdd = this.props.onAdd;
    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addToList = () => {
        let isCorrect = true;
        Object.keys(this.state).forEach(key => {
            if(this.state[key] === "" || (key !== 'bankName' && this.state[key] <= 0)){
                isCorrect = false;
                return;
            }
        });
        if(isCorrect) {
            this.onAdd(this.state);
        }
    }    

    formatStr = (str) => {
        return str
            .toLowerCase()
            .split(' ') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
            .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
            )
            .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
    }

    render () {
        
        const tagNames = ["Bank name", "Interest rate", "Max loan", "Min down pay", "Loan term"];
        const itms = tagNames.map(item => {
            return (
                <div className="col" key={this.formatStr(item)}>
                    <input className="form-control mr-sm-2"
                        type={item === 'Bank name' ? "text" : "number" } 
                        required="required"
                        placeholder={item} 
                        aria-label={item}
                        name={this.formatStr(item)}
                        onChange={e => this.setValue(e)}
                        />
                </div>)
        })

        return (

        <div className="container my-5 add-form-wrapper row">
            <div className="input-area row col-10">
                {itms}
            </div>
            <div className="col-2 btn-add-bank">
                <button 
                    className="btn btn-secondary"
                    onClick={this.addToList}>Add bank to list</button>
            </div>
        </div>
    )}
    
}

export default AddFormPanel;