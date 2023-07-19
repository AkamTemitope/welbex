const Header = () => {
  return (
    <>
      {/* DESKTOP */}
      <header className="w-header">
        <div className="w-header-left">
          <div className="w-header-logo">
            <img alt="Weblex" src="/logo-welbex.svg" />
            <p>
              крупный интегратор CRM <br />в Росcии и ещё 8 странах
            </p>
          </div>
        </div>

        <div className="w-header-nav-links">
          <a href="/">Услуги</a>
          <a href="/">Виджеты</a>
          <a href="/">Интеграции</a>
          <a href="/">Кейсы</a>
          <a href="/">Сертификаты</a>
        </div>

        <div className="w-header-right">
          <span>+7 555 555-55-55</span>
          <a href="/">
            <img alt="telegram" src="/telegram1.svg" />
          </a>
          <a href="/">
            <img alt="viber" src="/viber1.svg" />
          </a>
          <a href="/">
            <img alt="whatsapp" src="/whatsapp1.svg" />
          </a>
        </div>
      </header>

      {/* MOBILE */}
      <div className="w-header-mobile">
        <a href="/">Услуги</a>
        <a href="/">Виджеты</a>
        <a href="/">Интеграции</a>
        <a href="/">Кейсы</a>
      </div>

      <div className="red-small-ball" />
      <div className="red-ball" />
      <div className="purple-ball" />
    </>
  );
};

export default Header;
