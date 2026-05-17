import { useNavigate } from "react-router-dom";

/**
 * Floating brand island that links back home.
 * Visible on mobile by default. Pass `alwaysVisible` to keep it on
 * desktop too — used on project detail pages where the floating brand
 * mark replaces the navbar's small logo.
 */
export default function MobileLogo({ alwaysVisible = false }) {
  const navigate = useNavigate();

  return (
    <div
      className={`mobile-logo-island${alwaysVisible ? " mobile-logo-island--always" : ""}`}
      onClick={() => navigate("/")}
    >
      <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
    </div>
  );
}
