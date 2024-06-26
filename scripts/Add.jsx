import { useEffect } from "react"

function Add({h1, p, id, prev, next, dur})
{
    function activeEnable(e)
    {
        let el = e.target

        if(el.nodeName.toLowerCase() == 'input')
            el = el.parentElement
        else if(el.nodeName.toLowerCase() == 'span')
        {
            if(el.parentElement.children[0].nodeName.toLowerCase() == 'input')
                el = el.parentElement
            else
                el = el.parentElement.parentElement

            el.children[0].checked = !el.children[0].checked
        }
        else if(el.nodeName.toLowerCase() == 'div')
        {
            if(el.children[0].nodeName.toLowerCase() == 'span')
                el = el.parentElement

            el.children[0].checked = !el.children[0].checked
        }

        if(!el.children[0].checked && (el.classList.length == 1))
            el.removeAttribute('class')
        else
            el.classList.add('plan-active')
    }

    useEffect(() => {
        const acs = document.getElementsByClassName('add-cost')

        if(dur == 'month')
        {
            for(const ac of acs)
                ac.innerText = ac.dataset.month
        }
        else
        {
            for(const ac of acs)
                ac.innerText = ac.dataset.year
        }
    }, [dur])
    
    return <>
        <header>
            <h1>{h1}</h1>

            <p>{p}</p>
        </header>

        <div id={id}>
            <div onClick={activeEnable}>
                <input type="checkbox"/>

                <div className="add-desc">
                    <span className="head">Online services</span>

                    <span className="desc">Access to multiplayer games</span>
                </div>

                <span className='add-cost' data-month='+$1/mo' data-year='+$10/yr'></span>
            </div>

            <div onClick={activeEnable}>
                <input type="checkbox"/>

                <div className="add-desc">
                    <span className="head">Larger storage</span>

                    <span className="desc">Extra 1TB of cloud save</span>
                </div>

                <span className='add-cost' data-month='+$2/mo' data-year='+$20/yr'></span>
            </div>
            
            <div onClick={activeEnable}>
                <input type="checkbox"/>

                <div className="add-desc">
                    <span className="head">Customizable profile</span>

                    <span className="desc">Custom theme on your profile</span>
                </div>

                <span className='add-cost' data-month='+$2/mo' data-year='+$20/yr'></span>
            </div>
        </div>

        <span onClick={prev}>Go Back</span>

        <button type="button" onClick={next}>Next Step</button>
    </>
}

export default Add