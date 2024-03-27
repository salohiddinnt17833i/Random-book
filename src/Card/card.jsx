
function Card(props) {
    const { author, country,  language, link, pages, title, year } = props.data;
    return (
        <div>
            <div className="card bg-warning w-50 m-auto mt-5" style={{ width: "18rem"}}>
                <div className="card-body">
                    <h3>Book</h3>
                    <h6 className="card-title">Author: <span style={{marginLeft: "5px"}} className="text-black">{author}</span></h6>
                    <h6 className="card-subtitle mb-2">Title: <span style={{marginLeft: "5px"}} className="text-black">{title}</span></h6>
                    <h6 className="card-subtitle mb-2">Counrtry: <span style={{marginLeft: "5px"}} className="text-black">{country}</span></h6>
                    <h6 className="card-subtitle mb-2">language: <span style={{marginLeft: "5px"}} className="text-black">{language}</span></h6>
                    <h6 className="card-subtitle mb-2">Year: <span style={{marginLeft: "5px"}} className="text-black">{year}</span></h6>
                    <h6 className="card-subtitle mb-2">pages: <span style={{marginLeft: "5px"}} className="text-black">{pages}</span></h6>
                    <p className="card-text"></p>
                    <a href={link} className="text-danger">Koproq malumot</a>
                </div>
            </div>
        </div >
    )
}

export default Card