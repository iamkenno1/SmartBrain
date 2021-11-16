import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = () => {
	return(
		<div>
			<p className='f3'>
				{'This Magic Brain will detecty faces in your pictures. Give it a try.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex'/>	
					<button className='grow f4 link ph3 pv2 dib white w-30 bg-light-blue'>Detect</button>
				</div>
			</div>
		</div>

	);
}

export default ImageLinkForm;