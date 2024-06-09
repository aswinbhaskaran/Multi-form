import Aside from './Aside'
import Section from './Section'
import { useState } from 'react'
// import '../styles/nesting-style.css'

CSS.supports('nesting') ? import('../styles/nesting-style.css') : import('../styles/non-nesting-style.css')

const els = [{id: 1, h1: 'Personal info', p: 'Please provide your name, email address, and phone number.', eID: 'personal-form', s1: 'Step 1', s2: 'Your info'},
	{id: 2, h1: 'Select your plan', p: 'You have the option of monthly or yearly billing', eID: 'plan-form', s1: 'Step 2', s2: 'Select plan'}]

function App()
{
	const [elementID, setElementID] = useState(2)
	
	function nextPage(e)
	{
		const elem = e.target.parentElement.children[1]

		if(elem.id == 'personal-form')
		{
			const em = elem.querySelector('input[type=email]')

			for(const el of elem.querySelectorAll('input[type=text]'))
				if(el.value == '')
				{
					el.classList.add('invalid')

					el.parentElement.children[0].dataset.invalid = 'This field is required'
				}

			if(em.validity.valid && (em.value != ''))
				setElementID(elementID + 1)
			else
			{
				em.parentElement.children[0].dataset.invalid = 'This field is required'
				em.classList.add('invalid')
			}
		}
	}

	return (<>
			<Aside cur={elementID} els={els}/>
			
			<Section els={els} id={elementID} prev={() => setElementID(elementID - 1)} next={nextPage}/>
		</>)
}

export default App
