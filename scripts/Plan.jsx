function Plan({h1, p, id, prev, next})
{
	const [ps, fs] = [document.querySelectorAll('.plan-amt'), document.querySelectorAll('.free-info')]

	for(const p of ps)
		p.innerText = p.dataset.month

	for(const f of fs)
		if(!f.classList.contains('d-none'))
			f.classList.add('d-none')

	function activeEnable(e)
	{
		let el = e.target;

		if((el.tagName.toLowerCase() == 'img') || ((el.tagName.toLowerCase() == 'div') && (el.parentElement.id != 'plan-details')))
			el = el.parentElement
		else if(el.tagName.toLowerCase() == 'span')
			el = el.parentElement.parentElement

		for(const c of el.parentElement.children)
			if(c.classList.contains('plan-active') && (c.classList.length == 1))
				c.removeAttribute('class')

		if(!el.classList.contains('plan-active'))
			el.classList.add('plan-active')
	}

	function planChange()
	{
		const check = document.querySelector('#plan-period-option > input')

		if(check.checked)
		{
			for(const p of ps)
				p.innerText = p.dataset.year

			for(const f of fs)
				if(f.classList.contains('d-none'))
					f.classList.remove('d-none')
		}
		else
		{
			for(const p of ps)
				p.innerText = p.dataset.month

			for(const f of fs)
				if(!f.classList.contains('d-none'))
					f.classList.add('d-none')
		}
	}

	return (<>
			<header>
				<h1>{h1}</h1>

				<p>{p}</p>
			</header>

			<div id={id}>
				<div id="plan-details">
					<div onClick={activeEnable}>
						<img src="../images/icon-arcade.svg" alt="Arcade plan"/>

						<div>
							<span>Arcade</span>

							<span className='plan-amt' data-month='$9/mo' data-year='$90/yr'></span>

							<span className='free-info d-none'>2 months free</span>
						</div>
					</div>

					<div onClick={activeEnable}>
						<img src="../images/icon-advanced.svg" alt="Advanced plan"/>

						<div>
							<span>Advanced</span>

							<span className='plan-amt' data-month='$12/mo' data-year='$120/yr'></span>

							<span className='free-info d-none'>2 months free</span>
						</div>
					</div>

					<div onClick={activeEnable}>
						<img src="../images/icon-pro.svg" alt="Pro plan" />

						<div>
							<span>Pro</span>

							<span className='plan-amt' data-month='$15/mo' data-year='$150/yr'></span>

							<span className='free-info d-none'>2 months free</span>
						</div>
					</div>
				</div>

				<div id="plan-period-option">
					<span>Monthly</span>

					<input type="checkbox" onClick={planChange}/>
					
					<span>Yearly</span>
				</div>
			</div>

			<span onClick={prev}>Go Back</span>

			{/* <button type="button" onClick={next}>
				Next Step
			</button> */}
		</>)
}

export default Plan
