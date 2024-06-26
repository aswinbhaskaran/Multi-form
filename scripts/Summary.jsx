export default function Summary({h1, p, id, prev})
{
    return <>
        <header>
            <h1>{h1}</h1>

            <p>{p}</p>
        </header>

        <span onClick={prev}>Go Back</span>
    </>
}