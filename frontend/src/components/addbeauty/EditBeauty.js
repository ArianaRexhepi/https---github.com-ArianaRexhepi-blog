import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditBeauty() {
  const [loading, setLoading] = useState(false);
  const [beauty, setBeauty] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`beauty/${id}`).then((response) => {
      setBeauty(response.data);
      console.log(response.data);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.put(`beauty/${id}`, beauty).then(() => {
        setLoading(false);
        navigate("beautylist");
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!beauty) return <div>Loading...</div>;

  return (
    <div className="modal-dialog" style={{ width: 600, marginTop: "50px" }}>
      <div className="modal-content">
        <form className="form">
          <div className="modal-header">
            <h4 className="modal-title">Edit Article</h4>
            <Link to="beautylist">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </Link>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                value={beauty.title}
                onChange={(e) => setDrink({ ...beauty, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input
                type="text"
                className="form-control"
                value={beauty.author}
                onChange={(e) => setDrink({ ...beauty, author: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Year:</label>
              <input
                type="text"
                className="form-control"
                value={beauty.year}
                onChange={(e) => setDrink({ ...beauty, year: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Content:</label>
              <input
                type="text"
                className="form-control"
                value={beauty.content}
                onChange={(e) => setDrink({ ...beauty, content: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                value={beauty.description}
                onChange={(e) => setDrink({ ...beauty, description: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                type="text"
                className="form-control"
                value={beauty.image}
                onChange={(e) => setDrink({ ...beauty, image: e.target.value })}
              />
            </div>
          </div>

          <div className="modal-footer">
            <Link to="beautylist">
              <input type="button" className="btn btn-dark" value="Dismiss" />
            </Link>
            <input
              onClick={handleSubmit}
              type="submit"
              disabled={loading}
              value="Edit"
              className="btn btn-primary float-right"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBeauty;