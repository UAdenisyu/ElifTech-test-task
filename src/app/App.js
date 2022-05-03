import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppInfo from '../components/app-info/app-info';
import SearchPanel from '../components/search-panel/search-panel';
import BanksList from '../components/banks-list/banks-list';
import AddFormPanel from '../components/add-form-panel/add-form-panel';


function App() {
    return (
        <>
            <AppInfo/>
            <SearchPanel/>
            <BanksList/>
            <AddFormPanel/>
        </>
    );
}

export default App;
