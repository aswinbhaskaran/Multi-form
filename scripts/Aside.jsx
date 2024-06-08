import Li from './Li'

function Aside({cur, els})
{
	return (<aside>
			<ul>
				<Li els={els} cur={cur}/>
			</ul>
		</aside>)
}

export default Aside
