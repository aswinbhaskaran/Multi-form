import Aside from './Aside'
import Section from './Section'
import { useState } from 'react'
import '../styles/nesting-style.css'

const els = [{
		id: 1,
		h1: 'Personal info',
		p: 'Please provide your name, email address, and phone number.',
		eID: 'personal-form',
		s1: 'Step 1',
		s2: 'Your info'
	},
	{
		id: 2,
		h1: 'Select your plan',
		p: 'You have the option of monthly or yearly billing.',
		eID: 'plan-form',
		s1: 'Step 2',
		s2: 'Select plan'
	},
	{
		id: 3,
		h1: 'Pick add-ons',
		p: 'Add-ons help enhance your gaming experience.',
		eID: 'add-on-form',
		s1: 'Step 3',
		s2: 'Add-ons'
	}]

function App()
{
	const [elementID, setElementID] = useState(3)
	
	function nextPage(e)
	{
		const elem = e.target.parentElement.children[1]

		if(elem.id == 'personal-form')
		{
			let [nameValid, emValid, phValid] = [false, false, false]

			for(const em of elem.querySelectorAll('input'))
			{
				if(em.value != '')
				{
					if(em.id == 'email')
					{
						if(!em.value.match(/^[a-zA-Z\d_\.\+\-]+@[a-zA-Z\d-]+\.[a-zA-Z\d-\.]+$/g))
						{
							em.classList.add('invalid')

							em.parentElement.children[0].dataset.invalid = 'Email address invalid'
						}
						else
							if(!emValid)
								emValid = !emValid
					}
					else if(em.id == 'ph')
					{
						if(!em.value.match(/[\d\s\+]{10,15}/g))
						{
							em.classList.add('invalid')

							em.parentElement.children[0].dataset.invalid = 'Phone number invalid'
						}
						else
							if(!phValid)
								phValid = !phValid
					}
					else
						if(!nameValid)
							nameValid = !nameValid
				}
				else
				{
					em.classList.add('invalid')

					em.parentElement.children[0].dataset.invalid = 'This field is required'
				}
			}

			if(nameValid && emValid && phValid)
				setElementID(elementID + 1)
		}
		else
			setElementID(elementID + 1)
	}

	return (<>
			<Aside cur={elementID} els={els}/>
			
			<Section els={els} id={elementID} prev={() => setElementID(elementID - 1)} next={nextPage}/>
		</>)
}

export default App
