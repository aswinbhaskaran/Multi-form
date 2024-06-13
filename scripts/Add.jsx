function Add({h1, p, id, prev, next})
{
    function activeEnable(e)
    {}
    
    return <>
        <header>
            <h1>{h1}</h1>

            <p>{p}</p>
        </header>

        <div id={id}>
            <div onClick={activeEnable}>
                <input type="checkbox"/>

                <div>
                    <span className="head">Online services</span>

                    <span className="desc">Access to multiplayer games</span>
                </div>

                <span>+$1/mo</span>
            </div>

            <div onClick={activeEnable}>
                <input type="checkbox"/>

                <div>
                    <span className="head">Larger storage</span>

                    <span className="desc">Extra 1TB of cloud save</span>
                </div>

                <span>+$2/mo</span>
            </div>
            
            <div onClick={activeEnable}>
                <input type="checkbox"/>

                <div>
                    <span className="head">Customizable profile</span>

                    <span className="desc">Custom theme on your profile</span>
                </div>

                <span>+$2/mo</span>
            </div>
        </div>

        <span onClick={prev}>Go Back</span>

        {/* <button type="button" onClick={next}>Next Step</button> */}
    </>
}

export default Add