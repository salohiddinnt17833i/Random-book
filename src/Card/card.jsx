
function Card(props) {
    const { author, country, imageLink, language, link, pages, title, year } = props.data;
    return (
        <div>
            <div className="card w-50 m-auto mt-5" style={{ width: "18rem" }}>
                <div className="card-body">
                    <img src={imageLink} className="card-img-top" alt="Book image..."></img>
                    <h6 className="card-title">Author: <span className="text-success">{author}</span></h6>
                    <h6 className="card-subtitle mb-2">Title: <span className="text-success">{title}</span></h6>
                    <h6 className="card-subtitle mb-2">Counrtry: <span className="text-success">{country}</span></h6>
                    <h6 className="card-subtitle mb-2">language: <span className="text-success">{language}</span></h6>
                    <h6 className="card-subtitle mb-2">Year: <span className="text-success">{year}</span></h6>
                    <h6 className="card-subtitle mb-2">pages: <span className="text-success">{pages}</span></h6>
                    <p className="card-text"></p>
                    <a href={link} className="card-link">BOOK</a>
                </div>
            </div>
        </div >
    )
}

export default Card