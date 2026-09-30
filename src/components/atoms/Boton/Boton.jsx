import Button from "react-bootstrap/Button";

function Boton({ children, tipo = "button", className = "" }) {
  return (
    <Button type={tipo} className={`btn-login ${className}`}>
      {children}
    </Button>
  );
}

export default Boton;