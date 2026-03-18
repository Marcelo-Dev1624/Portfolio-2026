import { useNavigate } from "react-router-dom";

export default function MobileLogo() {
  const navigate = useNavigate();

  return (
    <div className="mobile-logo-island" onClick={() => navigate("/")}>
      <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
    </div>
  );
}
