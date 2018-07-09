import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';

class TimePickerPage extends React.Component  {
  componentDidMount() {
    let timePickerHr = document.querySelector('.timepicker-wrapper').getElementsByTagName('hr')[0];
    timePickerHr.style.border = "none";
  }

  render() {
    return(
      <div className="container mt-5">
        <div className="md-form">
            <MuiThemeProvider>
              <div className="timepicker-wrapper">
                <TimePicker style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} textFieldStyle={{width: '100%'}} hintText="Selected time" autoOk={true}></TimePicker>
              </div>
            </MuiThemeProvider>
        </div>
      </div>
    );
  }
};

export default TimePickerPage;
