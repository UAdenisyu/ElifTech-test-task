import { Component } from 'react';

import './calculator-page.scss';

class CalcPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bankName: "",
            initialLoan: 0,
            downPayment: 0,
            interestRate: 0,
            loanTermYears: 0
        }

    }

    onValueChange = (field, value) => {
        if (["e", "-", "+", " "].includes(value)){
            return 0;
        }
        const intValue = parseInt(value);
        this.setState({ 
            [field]: value
        })
    }

    setBankName = (inputValue) => {
        const bank = this.props.data.find(bank => bank.name === inputValue);
        let loanTerm = 0,
            interestRate = 0;
        if (bank !== undefined){
            if (parseInt(this.state.initialLoan) > bank.maxLoan) {
                console.log("Этот банк не выдаёт кредиты на такие большие суммы");
            }
            else if(parseInt(this.state.downPayment) < bank.minDownPay) {
                console.log("Сумма первоначального взноса слишком маленькая для выбранного банка");
            }
            else{
                loanTerm = bank.loanTerm;
                interestRate = bank.interestRate;
            }
        }
        else {
            console.log("Банк с таким названием не найден");
        }
        this.setState({ 
                bankName: inputValue,
                interestRate: interestRate,
                loanTermYears: loanTerm
        })
    }

    calcResult = () => {
        const amountBorrowed = parseInt(this.state.initialLoan),//сумма займа
              annualInterestRate = this.state.interestRate,//Годовая процентная ставка
              numOfMonthlypay = 12 * this.state.loanTermYears,//количество ежемесячных платежей
              res = amountBorrowed * annualInterestRate / 12 * (1 + annualInterestRate / 12)**numOfMonthlypay / ((1 + annualInterestRate / 12)**numOfMonthlypay - 1);
        return (isNaN(res) ? 0 : Math.round(res));
    }

    render() {
        const {bankName, initialLoan, downPayment} = this.state; 
        return (
            <section className="container calcWrap">
                <div className="row">
                    <div className="col paramField bankName">
                        <p>Bank name</p>
                        <input 
                            type="text"
                            value={bankName}
                            name="bankName"
                            onChange={e => this.setBankName(e.target.value)}/>
                    </div>
                    <div className="col paramField initialLoan">
                        <p>Initial Loan</p>
                        <input 
                            type="number"
                            value={initialLoan}
                            name="initialLoan"
                            onChange={e => this.onValueChange(e.target.name, e.target.value)}/>
                    </div>
                    <div className="col paramField downPayment">
                        <p>Down payment</p>
                        <input 
                            type="number"
                            value={downPayment}
                            name="downPayment"
                            onChange={e => this.onValueChange(e.target.name, e.target.value)}/>
                    </div>
                </div>
                <div className="resultField">
                    <p className="topic">
                        Monthly payment: 
                    </p>
                    <p className="value">
                        {this.calcResult() + " $"}
                    </p>
    
                </div>
            </section>
        )
    }
    
}

export default CalcPage;