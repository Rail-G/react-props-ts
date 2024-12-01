export function Listing({ items }: {items: MyData[]}) {
    return (
        <div className="item-list">
            {items.filter((elem) => elem.state === 'active').map((elem) => {
                let priceWithCode;
                let level;
                let title;
                if (elem.currency_code === 'USD') {
                    priceWithCode = `$${elem.price}`
                } else if (elem.currency_code === 'EUR') {
                    priceWithCode = `€${elem.price}`
                } else {
                    priceWithCode = `${elem.price} GBP`
                }

                if (elem.quantity <= 10) {
                    level = 'low'
                } else if (elem.quantity > 10 && elem.quantity <= 20) {
                    level = 'medium'
                } else if (elem.quantity > 20) {
                    level = 'high'
                }

                if (elem.title.length > 50) {
                    title = elem.title.substring(0, 50) + '...'
                } else {
                    title = elem.title
                }
                return (
                    <div key={elem.listing_id} className="item">
                        <div className="item-image">
                            <a href={elem.url}>
                                <img src={elem.MainImage.url_570xN} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{title}</p>
                            <p className="item-price">{priceWithCode}</p>
                            <p className={`item-quantity level-${level}`}>{elem.quantity} left</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}