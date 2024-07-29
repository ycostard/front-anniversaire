import { useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  return (
    <footer style={{ background: props.currentColor }}>
      <div className="container mx-auto text-center text-white">
      <button 
          className="btn btn-primary rounded-md p-2 mr-2 text-black hover:text-white" 
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button 
          className="btn btn-primary rounded-md p-2 mr-2 text-black hover:text-white" 
          onClick={() => navigate("/importBirthdays")}
        >
          Import Birthdays
        </button>
        <button 
          className="btn btn-primary rounded-md p-2 ml-2 text-black hover:text-white" 
          onClick={() => navigate("/importQuotes")}
        >
          Import Quotes
        </button>
      </div>
    </footer>
  );
}

export default Footer;