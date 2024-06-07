import Li from './Li'

function Aside({cur})
{
	return (<aside>
			<ul>
				<Li key='1' cur={cur} s1='Step 1' s2='Your info'/>

				<Li key='2' cur={cur} s1='Step 2' s2='Select plan'/>
				
				<Li key='3' cur={cur} s1='Step 3' s2='Add-ons'/>
				
				<Li key='4' cur={cur} s1='Step 4' s2='Summary'/>
			</ul>
		</aside>)
}

export default Aside
