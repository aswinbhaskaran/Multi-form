export default function Personal({h1, p, id, next})
{
	function focusIn(e)
	{
		const el = e.target

		if(el.classList.contains('invalid') && (el.classList.length == 1))
		{
			el.removeAttribute('class')

			el.parentElement.children[0].dataset.invalid = ''
		}
	}

	return (<>
			<header>
				<h1>{h1}</h1>

				<p>{p}</p>
			</header>

			<div id={id}>
				<div>
					<label htmlFor="name" data-label="Name"></label>

					<input type="text" placeholder="e.g. Stephen King" id="name" onFocus={focusIn}/>
				</div>

				<div>
					<label htmlFor="email" data-label="Email Address"></label>

					<input type="text" placeholder="e.g. stephenking@lorem.com" id="email" onFocus={focusIn}/>
				</div>

				<div>
					<label htmlFor="ph" data-label="Phone Number"></label>

					<input type="text" placeholder="e.g. +1 234 567 890" id="ph" onFocus={focusIn}/>
				</div>
			</div>

			<button type="button" onClick={next}>Next Step</button>
		</>)
}