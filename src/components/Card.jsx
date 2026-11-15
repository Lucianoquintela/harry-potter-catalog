import "./Card.css";

const Card = ({nome,imagem}) => {
    return ( 
        <>
          <div className="card">
            <h4 className="nomeCard">{nome}</h4>
            <img src={imagem} className="imgCard" alt="imagem card"/>
          </div>
          
        </>
     );
}
 
export default Card;