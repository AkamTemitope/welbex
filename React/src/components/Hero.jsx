const Hero = () => {
  return (
    <section className="w-hero">
      <div className="red-light" />
      <div className="purple-light" />
      <div className="w-hero-left">
        <h1>
          Зарабатывайте <br />
          больше <br />
          <span>с WELBEX</span>
        </h1>
        <p>
          Развиваем и контролируем <br />
          продажи за вас
        </p>
      </div>
      <div className="w-hero-right">
        <h3 className="w-hero-right-text">
          Вместе с&nbsp;
          <span>
            бесплатной <br />
            консультацией мы дарим:
          </span>
        </h3>

        {/* DESKTOP */}
        <div className="w-hero-right-bottom">
          <div className="w-hero-text">
            <div className="w-hero-text-option">
              <h3>Виджеты</h3>
              <p>
                30 готовых <br />
                решений
              </p>
            </div>
            <div className="w-hero-text-option">
              <h3>Skype Аудит</h3>
              <p>
                отдела продаж <br />и CRM системы
              </p>
            </div>
          </div>
          <div className="w-hero-text">
            <div className="w-hero-text-option">
              <h3>Dashboard</h3>
              <p>
                с показателями <br />
                вашего бизнеса
              </p>
            </div>

            <div className="w-hero-text-option">
              <h3>35 дней</h3>
              <p>
                использования <br />
                CRM
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="w-hero-right-bottom-mobile">
          <p>Skype Аудит</p>
          <p>30 виджетов</p>
          <p>Dashboard</p>
          <p>Месяц аmoCRM</p>
        </div>
        <button>Получить консультацию</button>
      </div>
    </section>
  );
};

export default Hero;
