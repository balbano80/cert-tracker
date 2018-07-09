import React from 'react';
import { Spinner } from 'mdbreact';


const ProgressPage = (props) => {
  return(
    <div className="container-fluid text-center">
        <div className="col-3">
          <Spinner green small />
        </div>
        <div className="col-4">
          <Spinner yellow />
        </div>
        <div className="col-5">
          <Spinner crazy big multicolor />
        </div>
    </div>
  );
};

export default ProgressPage;
