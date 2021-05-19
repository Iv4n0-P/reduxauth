import React from 'react'
import Header from './Header'

//App je zamotao Welcome komponentu i on je tako ima na props.children
const App = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default App