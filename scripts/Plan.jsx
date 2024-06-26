import { useEffect } from "react";

function Plan({h1, p, id, prev, next, dur, stateChange})
{
	function activeEnable(e)
	{
		let el = e.target;

		if((el.tagName.toLowerCase() == 'img') || ((el.tagName.toLowerCase() == 'div') && (el.parentElement.id != document.getElementById(id).children[0].id)))
			el = el.parentElement
		else if(el.tagName.toLowerCase() == 'span')
			el = el.parentElement.parentElement

		for(const c of el.parentElement.children)
			if(c.classList.contains('plan-active') && (c.classList.length == 1))
				c.removeAttribute('class')

		if(!el.classList.contains('plan-active'))
			el.classList.add('plan-active')
	}

	function planChange(e)
	{
		const el = e.target
		
		const plan = el.parentElement
		const span = plan.children[0]
		const ps = document.querySelectorAll('.plan-amt')
		const fs = document.querySelectorAll('.free-info')

		if(el.checked)
		{
			for(const p of ps)
				p.innerText = p.dataset.year

			for(const f of fs)
				if(f.classList.contains('d-none'))
					f.classList.remove('d-none')

			if(!span.hasAttribute('style'))
				span.style.color = 'var(--text-secondary)'
		}
		else
		{
			for(const p of ps)
				p.innerText = p.dataset.month

			for(const f of fs)
				if(!f.classList.contains('d-none'))
					f.classList.add('d-none')

			if(span.hasAttribute('style'))
				span.removeAttribute('style')
		}

		stateChange(e, fs[0])
	}

	useEffect(() => {
		const ps = document.getElementsByClassName('plan-amt')
		const fs = document.getElementsByClassName('free-info')
		
		if(dur == 'month')
		{
			for(const s of ps)
				s.innerText = s.dataset.month
		}
		else
		{
			for(const s of ps)
				s.innerText = s.dataset.year

			for(const s of fs)
				if(s.classList.contains('d-none'))
					s.classList.remove('d-none')
		}

		document.querySelector('input').checked = (dur == 'year')
	}, [dur])

	return (<>
			<header>
				<h1>{h1}</h1>

				<p>{p}</p>
			</header>

			<div id={id}>
				<div id="plan-details">
					<div className='plan-active' onClick={activeEnable}>
						<img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23FFAF7E%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M24.995%2018.005h-3.998v5.998h-2v-5.998H15a1%201%200%200%200-1%201V29a1%201%200%200%200%201%201h9.995a1%201%200%200%200%201-1v-9.995a1%201%200%200%200-1-1Zm-5.997%208.996h-2v-1.999h2v2Zm2-11.175a2.999%202.999%200%201%200-2%200v2.18h2v-2.18Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Arcade plan"/>

						<div>
							<span>Arcade</span>

							<span className='plan-amt' data-month='$9/mo' data-year='$90/yr'></span>

							<span className='free-info d-none'>2 months free</span>
						</div>
					</div>

					<div onClick={activeEnable}>
						<img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23F9818E%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M25.057%2015H14.944C12.212%2015%2010%2017.03%2010%2019.885c0%202.857%202.212%204.936%204.944%204.936h10.113c2.733%200%204.943-2.08%204.943-4.936S27.79%2015%2025.057%2015ZM17.5%2020.388c0%20.12-.108.237-.234.237h-1.552v1.569c0%20.126-.138.217-.259.217H14.5c-.118%200-.213-.086-.213-.203v-1.583h-1.569c-.126%200-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12%200%20.236.108.236.234v1.551h1.555c.125%200%20.231.083.231.204v.988Zm5.347.393a.862.862%200%200%201-.869-.855c0-.472.39-.856.869-.856.481%200%20.87.384.87.856%200%20.471-.389.855-.87.855Zm1.9%201.866a.86.86%200%200%201-.87-.852.86.86%200%200%201%20.87-.855c.48%200%20.87.38.87.855a.86.86%200%200%201-.87.852Zm0-3.736a.862.862%200%200%201-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862%200%200%201-.87.854Zm1.899%201.87a.862.862%200%200%201-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862%200%200%201-.868.855Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Advanced plan"/>

						<div>
							<span>Advanced</span>

							<span className='plan-amt' data-month='$12/mo' data-year='$120/yr'></span>

							<span className='free-info d-none'>2 months free</span>
						</div>
					</div>

					<div onClick={activeEnable}>
						<img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23483EFF%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M26.666%2013H13.334A3.333%203.333%200%200%200%2010%2016.333v7.193a3.447%203.447%200%200%200%202.14%203.24c1.238.5%202.656.182%203.56-.8L18.52%2023h2.96l2.82%202.966a3.2%203.2%200%200%200%203.56.8%203.447%203.447%200%200%200%202.14-3.24v-7.193A3.333%203.333%200%200%200%2026.666%2013Zm-9.333%206H16v1.333a.667.667%200%200%201-1.333%200V19h-1.333a.667.667%200%200%201%200-1.334h1.333v-1.333a.667.667%200%201%201%201.333%200v1.333h1.333a.667.667%200%201%201%200%201.334Zm7.333%202a2.667%202.667%200%201%201%200-5.333%202.667%202.667%200%200%201%200%205.333ZM26%2018.333a1.333%201.333%200%201%201-2.667%200%201.333%201.333%200%200%201%202.667%200Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Pro plan" />

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

			<button type="button" onClick={next}>Next Step</button>
		</>)
}

export default Plan
