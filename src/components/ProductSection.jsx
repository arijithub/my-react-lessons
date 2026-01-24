export default function ProductSection({ title, items }) {
  return (
    <div className="fashion_section">
      <h1 className="fashion_taital">{title}</h1>

      <div className="fashion_section_2">
        <div className="row">
          {items.map((item, i) => (
            <div className="col-lg-4 col-sm-4" key={i}>
              <div className="box_main">
                <h4 className="shirt_text">{item.name}</h4>
                <p className="price_text">{item.price}</p>
                <div className={item.class}>
                  <img src={item.img} />
                </div>
                <div className="btn_main">
                  <div className="buy_bt"><a href="#">Buy Now</a></div>
                  <div className="seemore_bt"><a href="#">See More</a></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
