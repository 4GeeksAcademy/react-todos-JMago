import React from "react";
import '../../styles/App.css'


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lista from "./Lista";

//create your first component
const Home = () => {
	return (
		<div className="App">

			<div>
          		<h1>todos</h1>
      		</div>
			<div className='tareas'>
				<Lista/>
				</div>
            

		</div>
	);
};

export default Home;