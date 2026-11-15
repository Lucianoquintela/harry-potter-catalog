import "./MainContent.css";
const MainContent = ({children}) => {
    return ( 
        <div className="containerCards">{children}</div>
     );
}

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2026 - Alguma Coisa esteve aqui!</p>
            <p>Que a magia esteja sempre com você! ou não!</p>
        </footer>
    );
};
 
export { MainContent, Footer };