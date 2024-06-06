import Personal from './Personal';
import Plan from './Plan';

function Section({els, id, prev, next})
{
	return (<section>
			{els.map((el) => {
				if (el.id == id)
				{
					if (id == 1)
						return <Personal key={id} h1={el.h1} p={el.p} id={el.eID} next={next}/>
					else if (id == 2)
						return <Plan key={id} h1={el.h1} p={el.p} id={el.eID} prev={prev} next={next}/>
				}
			})}
		</section>)
}

export default Section
