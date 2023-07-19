const Footer = () => {
  return (
    <footer>
      <div className="w-footer-top">
        <div className="w-footer-left">
          <h3>О компании</h3>
          <a href="/">Партнёрская программа</a>
          <a href="/">Вакансии</a>
        </div>
        <div className="w-footer-mid">
          <h3>Меню</h3>
          <div className="w-footer-mid-links">
            <a href="/">Расчёт стоимости</a>
            <a href="/">Кейсы</a>
            <a href="/">Услуги</a>
            <a href="/">Благодарственные письма</a>
            <a href="/">Виджеты</a>
            <a href="/">Сертификаты</a>
            <a href="/">Интеграции</a>
            <a href="/">Блог на Youtube</a>
            <a href="/">Наши клиенты</a>
            <a href="/">Вопрос / Ответ</a>
          </div>

          <div className="w-footer-mid-links-mobile">
            <a href="/">Расчёт стоимости</a>
            <a href="/">Благодарственные письма</a>
            <a href="/">Услуги</a>
            <a href="/">Кейсы</a>
            <a href="/">Виджеты</a>
            <a href="/">Сертификаты</a>
            <a href="/">Интеграции</a>
            <a href="/">Блог на Youtube</a>
            <a href="/">Наши клиенты</a>
            <a href="/">Вопрос / Ответ</a>
          </div>
        </div>
        <div className="w-footer-right">
          <h3>Контакты</h3>
          <span>+7 555 555-55-55</span>
          <div className="w-footer-socials">
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
          <span>Москва, Путевой проезд 3с1, к 902</span>
        </div>
      </div>
      <div className="w-footer-bottom">
        <small>©WELBEX 2022. Все права защищены.</small>
        <a href="/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;
