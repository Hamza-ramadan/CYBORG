import'./App.css'
import {Header , Container , Footer } from './components/index';
import {Home , Profile , Browse ,Detailis ,Streams} from './pages/index'
import {BrowserRouter as Router ,Route ,Routes} from'react-router-dom'
const App = ()=>{
    return( 
        <>
        <Router>
<div className='aAaASsa'>
<Header/>
    
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Profile' element={<Profile/>} />
                    <Route path='/Browse' element={<Browse/>} />
                    <Route path='/Detailis' element={<Detailis/>} />
                    <Route path='/Streams' element={<Streams/>}/>
                </Routes>
            </Container>
            <Footer/>

            </div>

        </Router>
        
        </>
    )
}

export default App;