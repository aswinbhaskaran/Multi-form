function Li({key, cur, s1, s2})
{
    if(key == cur)
        return <li className="active">
            <span>{s1}</span>

            <span>{s2}</span>
        </li>
    else
        return <li>
            <span>{s1}</span>

            <span>{s2}</span>
        </li>
}

export default Li