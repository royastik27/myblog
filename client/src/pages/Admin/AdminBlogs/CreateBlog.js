function CreateBlog() {

    async function handleSave() {
        const title = document.getElementById('blog-title').value;
        const author = document.getElementById('blog-author').value;
        const tags = document.getElementById('blog-tags').value;
        const content = document.getElementById('blog-content').value;

        try {
            const fetchRes = await fetch('http://localhost:5000/create-blog', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    author,
                    tags,
                    content
                })
            });

            const response = await fetchRes.json();

            console.log(response);
        }
        catch(err) {
            console.log(err);
        }

    }

    return (
        <div id="create-blog">
            <form>
                <label htmlFor="blog-title">Title:</label>
                <input type="text" id="blog-title" className="form-control"></input>

                <label htmlFor="blog-author">Author:</label>
                <input type="text" id="blog-author" className="form-control"></input>

                <label htmlFor="blog-tags">Tags:</label>
                <input type="text" id="blog-tags" className="form-control"></input>

                <label htmlFor="blog-content">Content:</label>
                <textarea id="blog-content" className="form-control"></textarea>

                <div className="form-check">
                    <label htmlFor="blog-publish">Publish</label>
                    <input type="checkbox" id="blog-publish" className="form-check-input"></input>
                </div>

                <button onClick={handleSave} type="button" className="btn btn-secondary mt-2 w-25 d-block mx-auto">Save</button>
                
            </form>
        </div>
    );
}

export default CreateBlog;