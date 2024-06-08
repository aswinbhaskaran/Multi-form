import Aside from './Aside'
import Section from './Section'
import { useState } from 'react'
// import '../styles/nesting-style.css'

CSS.supports('selector(&)') ? import('../styles/nesting-style.css') : import('../styles/non-nesting-style.css')

const els = [{id: 1, h1: 'Personal info', p: 'Please provide your name, email address, and phone number.', eID: 'personal-form', s1: 'Step 1', s2: 'Your info'},
	{id: 2, h1: 'Select your plan', p: 'You have the option of monthly or yearly billing', eID: 'plan-form', s1: 'Step 2', s2: 'Select plan'}]

function App()
{
	const [elementID, setElementID] = useState(1)

	function prevPage(e)
	{
		console.info(e.target.parentElement.children[1].id)
		setElementID(elementID - 1)
	}
	
	function nextPage(e)
	{
		console.info(e.target.parentElement.children[1].id)
		setElementID(elementID + 1)
	}

	return (<>
			<Aside cur={elementID} els={els}/>
			
			<Section els={els} id={elementID} prev={prevPage} next={nextPage}/>
		</>)
}

export default App
