import './app-info.scss';

const AppInfo  = ({amount, marked}) => {
    return (
      <div className="container my-5 p-5 app-info">
          <p className="text-center text-uppercase">Banks management page</p>
          <p className="text-left py-4 h1">Total banks: {amount}</p>
          <p className="text-left py-4 h1">Marked: {marked}</p>
      </div>  
    );
}

export default AppInfo;