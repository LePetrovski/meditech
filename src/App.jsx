import { useState } from 'react'
import './sass/App.scss'
import Frontpage from './frontpage/Frontpage'
import './sass/composent/frame.scss'

function App() {

	return (
		<>	
			<div className="frame"></div>
			<Frontpage />
		</>
	)
}

export default App
