function Li({els, cur})
{
    return els.map(el => {
        if(el.id == cur)
            return <li key={`li-${el.id}`} className="active">
                <span key={`span-${el.id}`}>{el.s1}</span>

                <span key={`span-${el.id + 1}`}>{el.s2}</span>
            </li>
        
        return <li key={`li-${el.id}`}>
            <span key={`span-${el.id}`}>{el.s1}</span>

            <span key={`span-${el.id + 1}`}>{el.s2}</span>
        </li>})
}

export default Li