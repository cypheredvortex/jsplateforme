function Card({ src, title }) {
    return (
        <div className="card">
            <img src={src} alt={`Image of ${title}`} />
            <div className="card-content">
                <h3>{title}</h3>
                <button className="learn-more-btn">Learn more</button>
            </div>
        </div>
    );
}

export default Card;
