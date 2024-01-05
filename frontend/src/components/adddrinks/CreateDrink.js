import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CreateDrink() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const drinks = {
      title: title,
      author: author,
      content: content,
      year: year,
      description: description,
      image: image,
    };

    console.log(drinks);
    await axios
      .post("/drinks", drinks)
      .then(() => {
        navigate("/drinkslist");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="modal-dialog" style={{ width: 600 }}>
      <div className="modal-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h4 className="modal-title">Add Drink</h4>
            <Link to="/drinkslist">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </Link>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Content:</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                rows="7"
              />
            </div>
            <div className="form-group">
              <label>Year:</label>
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <Link to="/drinkslist">
              <input type="button" className="btn btn-danger" value="Dismiss" />
            </Link>
            <input
              type="submit"
              value="Create"
              disabled={loading}
              className="btn btn-primary float-right"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateDrink;
