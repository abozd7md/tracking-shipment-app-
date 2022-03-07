import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";

function Footer() {
  const { i18n, t } = useTranslation(["footer"]);

  useEffect(() => {
    if (localStorage.getItem("18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  return (
    <div>
      <footer
        className={
          localStorage.i18nextLng == "ar"
            ? "footer-content-ar"
            : "footer-content"
        }
      >
        <div className="footer-left">
          <img src={t("logo")} alt="logo" style={{ cursor: "pointer" }} />
          <p>{t("contactbosta")}</p>
          <div className="social-icons">
            <FacebookIcon style={{ cursor: "pointer" }} />
            <TwitterIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="footer-right">
          <h3 style={{ color: "red", cursor: "pointer" }}>
            {t("footershipment")}
          </h3>
          <h3 style={{ cursor: "pointer" }}>{t("ourpricing")}</h3>
          <h3 style={{ cursor: "pointer" }}>{t("trackingshipmentfooter")}</h3>
        </div>
      </footer>
      <div className="footer-bottom">
        <h3>Copyright ©2019 bosta.co</h3>
      </div>
    </div>
  );
}

export default Footer;
