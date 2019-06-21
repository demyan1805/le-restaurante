export default class DishDetails extends React.Component {

    render() {
        const {name, alt, icon, cost, src, allergens, id} = this.props.dish;

        return (
            <div className="dish-details">
                <img src={"./img/dish-placeholder.png"} alt="dish" className="details-bg"/>
                <div className="details-content">
                    <img src={src} alt={alt} className="dish-pic"/>
                    <div className="dish-description">
                        <p className="title">online menu</p>
                        <p className="name">{name}</p>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quidem earum velit atque repellendus neque ducimus corporis, facere excepturi veritatis quis sint harum laborum quae vero sunt numquam. Laudantium, laboriosam?</p>
                        <button className="order-btn">{cost}$ - order</button>
                    </div>
                </div>
            </div>
        );
    }
}