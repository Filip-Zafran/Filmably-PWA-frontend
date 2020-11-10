import React from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css'
import OnClickTextEdit from './OnClickTextEdit'



export function ProfilePage() {


	// const [ modal, setModal ] = useState(false);
	// const toggle = () => setModal(!modal);

const options = [
        'newb ( < 18)', 
        'barely legal (18 - 21)', 
        'generation z (22 - 30)',
        'midlife crisis (30 - 40)', 
        'golden age (40 - 50)',
        'old yeller (50+)'
  ];
const defaultOption = options[0]

  return (
  <>
                       
			<br />
			<br /> <br /> <br />
            <h1> Hello</h1><OnClickTextEdit /> 
      <br />
      <h1>UPLOADER COMES HERE</h1>
             <img 
                src="https://i.otto.de/i/otto/26744698?h=520&w=551&sm=clamp"
                alt="new"
                style={{height: "250px"}}
      />
	<br />
      <label> First Name:</label><OnClickTextEdit /> 
      <br />
      <label> Last Name:</label><OnClickTextEdit />
      <br />
      <label> Short Bio</label><OnClickTextEdit /> 
      <br />
      <label> e-mail:</label><OnClickTextEdit /> 
      <br />
      <label> Age Range: DROPDOWN   </label>
      {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select your age range" /> */}

          {/* <br />
      <label> Fav movie:</label><OnClickTextEdit /> 
      <br /> */}

  


            </>
    )
}
