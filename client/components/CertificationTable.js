import React from "react";
import DashbMainCertModal from '../components/DashbMainCertModal';
import DashbAddCertificationModal from "../components/DashbAddCertificationModal";
import CertTableRow from "../components/CertTableRow"

const CertificationTable = props => (

    <tbody>

           {props.cert.map(cert=>(
               <CertTableRow 
                cert={cert}

               />
           ))}

    </tbody>
);

export default CertificationTable;
