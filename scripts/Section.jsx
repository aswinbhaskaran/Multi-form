import Personal from './Personal';
import Plan from './Plan';
import Add from './Add';
import { useState } from 'react';


function Section({els, id, prev, next})
{
	const [planDur, setPlanDur] = useState('month')
	
	return (<section>
			{els.map((el) => {
				if (el.id == id)
				{
					if (id == 1)
						return <Personal key={id} h1={el.h1} p={el.p} id={el.eID} next={next}/>
					else if (id == 2)
						return <Plan key={id} h1={el.h1} p={el.p} id={el.eID} prev={prev} next={next} dur={planDur} stateChange={e => {
							if(e.target.checked)
								setPlanDur('year')
							else
								setPlanDur('month')
							}}/>
					else if(id == 3)
						return <Add key={id} h1={el.h1} p={el.p} id={el.eID} prev={prev} next={next} dur={planDur}/>
				}
			})}
		</section>)
}

export default Section
