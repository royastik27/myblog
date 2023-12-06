function AdminBlogSingle(props) {
    return (
        <div className="single">

            <div className="card">
                <div className="card-body">

                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">- {props.author}</h6>

                <h6>Tags:{props.tags.map(el => ` #${el}`)}</h6>
                <h6 className="mb-4">Last updated: </h6>

                <p className="card-text">{props.content}</p>

                </div>
            </div>
            
        </div>
    );
}

export default AdminBlogSingle;