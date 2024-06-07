import Aside from './Aside'
import Section from './Section'
import { useState } from 'react'

CSS.supports('selector(&)') ? import('../styles/nesting-style.css') : import('../styles/non-nesting-style.css')

const els = [{id: 1, h1: 'Personal info', p: 'Please provide your name, email address, and phone number.', eID: 'personal-form'},
	{id: 2, h1: 'Select your plan', p: 'You have the option of monthly or yearly billing', eID: 'plan-form'}]

function App()
{
	const [elementID, setElementID] = useState(1)

	return (<>
			<Aside />
			<Section els={els} id={elementID} prev={() => setElementID(elementID - 1)} next={() => setElementID(elementID + 1)}/>
		</>)
}

export default App
