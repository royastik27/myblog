import { Link } from 'react-router-dom';

function AllBlogsSingle({ title, author, tags, refID, fvrt }) {
    return(
        <div className="card mb-3 single">

            <Link to={refID} style={{textDecoration: 'none', color: 'initial'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">- {author}</h6>

                    <p className="card-text">
                        Tags:{tags} <br />
                        last modified: 04-12-23 at 10:00 pm
                    </p>
                </div>
            </Link>

            <div className="card-footer">
                <i className={`fa-${fvrt ? 'solid' : 'regular'} fa-heart col-4`}></i>
                <i className="fa-solid fa-list col-4"></i>
                <i className="fa-solid fa-share-nodes col-4"></i>
            </div>

        </div>
    );
}

export default AllBlogsSingle;