import React from "react";
import DashbMainCertModal from '../components/DashbMainCertModal';
import DashbAddCertificationModal from "../components/DashbAddCertificationModal";
import CertificationTable from "../components/CertificationTable";

const CertTableRow = props => (
    <tr>
        {props.cert}
    </tr>
);

export default CertTableRow;