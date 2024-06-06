function Personal({ h1, p, id, next }) {
	return (
		<>
			<header>
				<h1>{h1}</h1>

				<p>{p}</p>
			</header>

			<div id={id}>
				<div>
					<label htmlFor="name" data-label="Name"></label>

					<input
						type="text"
						placeholder="e.g. Stephen King"
						id="name"
					/>
				</div>

				<div>
					<label htmlFor="email" data-label="Email Address"></label>

					<input
						type="email"
						placeholder="e.g. stephenking@lorem.com"
						id="email"
					/>
				</div>

				<div>
					<label htmlFor="ph" data-label="Phone Number"></label>

					<input
						type="text"
						placeholder="e.g. +1 234 567 890"
						id="ph"
					/>
				</div>
			</div>

			<button type="button" onClick={next}>
				Next Step
			</button>
		</>
	);
}

export default Personal;
