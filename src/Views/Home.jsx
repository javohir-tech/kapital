import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <>
      {/* Banner section */}
      <section className="banner-section position-relative">
        <div className="blur position-absolute top-0 start-0  w-100 h-100"></div>
        <Container className="h-100">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 position-relative ">
            <h1>Капитальный ремонт офисов</h1>
            <p className="text-center">Реконструкция, отделка, капитальный ремонт офисных помещений в Москве <br /> и области. Гарантия до 5-ти лет</p>
            <div className="d-flex gap-2 flex-column  flex-md-row">
              <button className="btn btn-warning text-light">Оставить заявку</button>
              <button className="btn btn-light text-warning">Узнать подробности</button>
            </div>
            <p style={{ fontSize: "13px" }} className="mt-3">Авторский надзор в подарок</p>
          </div>
        </Container>
      </section>
      {/* /Banner section */}

      <Container>
        <section className="cards-section mt-5">
          <div className="d-flex flex-column align-items-center">
            <p>Преимущества</p>
            <h2>Работайте с нами</h2>
            <p>Капитальный ремонт офисов – путь к успеху и престижу по-новому</p>
          </div>
          <div className="row ">
            <div className="col-4">
              <div className="text-center">
                <h3>Точная стоимость работ</h3>
                <p>Выезд инженера-сметчика для расчета точной стоимости в течении 3-х часов</p>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <h3>Точная стоимость работ</h3>
                <p>Выезд инженера-сметчика для расчета точной стоимости в течении 3-х часов</p>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <h3>Точная стоимость работ</h3>
                <p>Выезд инженера-сметчика для расчета точной стоимости в течении 3-х часов</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
