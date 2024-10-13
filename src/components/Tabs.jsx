export function Tabs() {

    const tabs = ['All', 'Open', 'Completd']
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                 return (
                     <button key={tabIndex} onClick={() => console.log(tab)} className="tab-button">
                        <h4>{tab} <span>(0)</span> </h4>

                     </button>
                    
                 )
            })}
            
        </nav>
    )
}