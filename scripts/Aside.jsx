import Li from './Li'

export default function Aside({cur, els})
{
	return (<aside>
			<ul>
				<Li els={els} cur={cur}/>
			</ul>
		</aside>)
}