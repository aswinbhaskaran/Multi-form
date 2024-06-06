function Plan({h1, p, id, prev, next})
{
	return (<>
			<header>
				<h1>{h1}</h1>

				<p>{p}</p>
			</header>

			<div id={id}>
				<div id="plan-details">
					<div>
						<img src="../images/icon-arcade.svg" alt="Arcade plan"/>

						<div>
							<span>Arcade</span>

							<span>$9/mo</span>
						</div>
					</div>

					<div>
						<img src="../images/icon-advanced.svg" alt="Advanced plan"/>

						<div>
							<span>Advanced</span>

							<span>$12/mo</span>
						</div>
					</div>

					<div>
						<img src="../images/icon-pro.svg" alt="Pro plan" />

						<div>
							<span>Pro</span>

							<span>$15/mo</span>
						</div>
					</div>
				</div>

				<div id="plan-period-option">
					<span>Monthly</span>

					<input type="checkbox"/>
					
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
