import Style from './Navbar.module.css'
function Navbar({logo}){
    return(
    <div className={Style.container}>
        <h1>StreamNow</h1>
        <div>
            
            <input type="text" placeholder='Search'/>
        </div>
        <div className={Style.nav}>
            <h4>+ Create</h4>
            <img src={logo}></img>
            <img src={logo}></img>
        </div>
    </div>)
}
export default Navbar