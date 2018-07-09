import React from 'react';
import { Container, Autocomplete, Row, Col, Input, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Fa } from 'mdbreact';

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illnois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic (CAR)",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (UAE)",
  "United Kingdom (UK)",
  "United States of America (USA)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City (Holy See)",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

const subjects = [
  "Where's My Stuff?",
  "Cancel Items or Orders",
  "Returns & Refunds",
  "Shipping Rates & Information",
  "Change Your Payment Method",
  "Manage Your Account Information",
  "About Two-Step Verification",
  "Cancel Items or Orders",
  "Change Your Order Information",
  "Contact Third-Party Sellers",
  "More in Managing Your Orders"
];

class AutocompletePage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      modal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }
  handleModalClearClick() {
    this.setState({
      modal: false
    })
  }

  render() {
    const smallStyle = { fontSize: '0.8rem'}
    return (
      <Container>
        <h2 className="mt-5">Basic example</h2>
        <section style={{paddingLeft: 200, paddingRight: 200}}>

          <Autocomplete
            data = {states}
            label="Choose your favorite state"
            icon="heart"
            clear
            clearClass="grey-text" id="input"
            className="mx-auto"
          />

        </section>

        <h2 className="mt-5">Autocomplete within form</h2>

        <Row>
          <Col md="9" lg="7" xl="5" className="mx-auto mt-3">
            <Card>
              <CardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <Input label="Your email" group type="email" validate error="wrong" success="right"/>
                <Input label="Your password" group type="password" validate containerClass="mb-0"/>
                <Autocomplete label="Your country" clear data={countries} clearClass="grey-text"/>
                <div className="text-center pt-3 mb-3">
                  <Button type="button" gradient="blue" rounded className="btn-block z-depth-1a">Sign in</Button>
                </div>
                <p className="dark-grey-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> or Sign up with:</p>
                <div className="row my-3 d-flex justify-content-center">
                  <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                  <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                  <Button type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                </div>
              </CardBody>
              <ModalFooter className="mx-5 pt-3 mb-1">
                <p className="grey-text d-flex justify-content-end" style={smallStyle}>Already a member? <a href="#" className="blue-text ml-1"> Sign In</a></p>
              </ModalFooter>
            </Card>
          </Col>
        </Row>

        <h2 className="mt-5">Autocomplete within modal</h2>

        <div className="text-center mt-3">
          <Button onClick={this.toggleModal} rounded className="mx-auto">launch modal contact</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} size="md" cascading>
          <ModalHeader
          titleClass="d-inline title"
          className="text-center light-blue darken-3 white-text">
            <Fa icon="pencil"
             />Contact From
            <Fa icon="close"
             className="float-right"
              onClick={this.handleModalClearClick.bind(this)}
                  /></ModalHeader>
          <ModalBody>
            <Input label="Your name" icon="envelope" iconClass="dark-grey"/>
            <Input label="Your email" icon="lock" iconClass="dark-grey"/>
            <Autocomplete label="Subject" icon="tag" data={subjects} clear/>
            <Input label="Your message" type="textarea" rows="2" icon="pencil" iconClass="dark-grey"/>
            <div className="text-center mt-1-half">
              <Button color="info" className="mb-2"
              onClick={this.handleModalClearClick.bind(this)}>send<Fa icon="send" className="ml-1"/></Button>
            </div>
          </ModalBody>
        </Modal>
        </div>
      </Container>
    );
  }
}


export default AutocompletePage;
