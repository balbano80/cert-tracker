import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

class DatePickerPage extends React.Component  {
  componentDidMount() {
    let datePickerHr = document.querySelector('.datepicker-wrapper').getElementsByTagName('hr')[0];
    datePickerHr.style.border = "none";
  }

  render() {
    return(
      <div className="container mt-5">
        <div className="md-form">
            <MuiThemeProvider>
              <div className="datepicker-wrapper">
                <DatePicker style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} id="datepicker" textFieldStyle={{width: '100%'}} hintText="Selected date" ></DatePicker>
              </div>
            </MuiThemeProvider>
        </div>
      </div>
    );
  }
};

export default DatePickerPage;
