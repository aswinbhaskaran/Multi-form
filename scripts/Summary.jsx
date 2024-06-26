export default function Summary({h1, p, id, prev})
{
    return <>
        <header>
            <h1>{h1}</h1>

            <p>{p}</p>
        </header>

        <div id={id}>
            <div id="sum-flex">
                <div id="sum-plan">
                    <div>
                        <span>Arcade (Monthly)</span>
                 
                        <span>Change</span>
                    </div>

                    <span>$9/mo</span>
                </div>
                
                <hr id="separator"/>
                
                <div>
                    <span>Online service</span>
                
                    <span>+$1/mo</span>
                </div>
                
                <div>
                    <span>Larger storage</span>
                 
                    <span>+$2/mo</span>
                </div>
                
                <div>
                    <span>Customizable profile</span>
                 
                    <span>+$2/mo</span>
                </div>
            </div>

            <div>
                <span>Total (per month)</span>

                <span>+$12/mo</span>
            </div>
        </div>

        <span onClick={prev}>Go Back</span>
    </>
}