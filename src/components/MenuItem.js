export default class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu-item">
                    <img src={this.props.icon} alt={this.props.alt} className="menu-item-preview"/>
                    <div className="menu-item-properties">
                        <div className="menu-item-label">
                            <h2 className="name">{this.props.name}</h2>
                            <span className="bottom-dots"></span>
                            <div className="cost">{this.props.cost}$</div>
                        </div>
                        <div className="menu-item-allergens">
                            <h3>alergens</h3>
                            <span className="bottom-dots"></span>
                            <div className="allergens-list">{this.props.allergens}</div>
                        </div>
                    </div>
            </div>
        )
    }
}