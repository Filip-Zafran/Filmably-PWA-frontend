import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'


export default function Profile() {

  // state = {
  //   name: "Lucky Luke"
  //   age: ""

  // }


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
const defaultOption = options[0];


    return (
        <>
                        
			<br />
			<br /> <br /> <br />
            <h1> Lucky Luke</h1> 
            <br />
             <img 
                src="https://i.otto.de/i/otto/26744698?h=520&w=551&sm=clamp"
                alt="new"
                style={{height: "250px"}}
      />
      <br />
			<br />
        <label> Age Range: DROPDOWN  </label>
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select your age range" />

					<br />
          <br />
            	<label> Fav movie: Dune  </label>
	
			<br />
      <br />
            	<label> Fav movie quote: "I just can't do it captain"  </label>
		
			<br />
      <br />
               <label> Current filters: adventure, action, sfx, 1990 - 2000  </label>
				<br />
        <br />
         	
			<button> EDIT </button>
			<br />
			<br />
    
      <h1> MOVIE LIST</h1>
  	<table>
    <tr>
    <th>LIKES</th>
    <th>DISLIKES</th>
          </tr>
{/*           
          // maps through the movie list and creates the list
        // should be for lieks and dislikes */}
          {/* {movies.map((movie) => (
						<tr key={movie.id}></tr> */}
  <tr>
    <td>LOTR</td>
    <td>Dune</td>
  </tr>
  <tr>
    <td>Twilight</td>
            <td>Parasite</td>
            
            // creates a little X, when you click on it - it removes the movie from the list
             {/* <td>
								<button className="remove-movie-button-x">
									<span className="span-x" value={movie} onClick={() => deleteClicked(movie)}>
										&nbsp;x&nbsp;
									</span>
								</button>
							</td> */}
          </tr>
        
         
        </table>
        
{/* // modal to create check before deletion
        <Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Delete Movie?</ModalHeader>
				<ModalBody>Sure you want to remove it from the list?</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={ () =>	removeMovie(id)}>
						Delete
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal> */}

            </>
    )
}
