import Style from './Thumbnail.module.css'
function Thumbnail({thumbnail,title,description}) 
{
    return(
        <div className={Style.thumb}>
            <img className={Style.ar} src={thumbnail} alt="" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>


    );
}
export default Thumbnail