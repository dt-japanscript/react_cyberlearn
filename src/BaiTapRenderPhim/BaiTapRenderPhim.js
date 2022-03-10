import React, { Component } from "react";
import movieList from "../Data/DataFilms.json";

export default class BaiTapRenderPhim extends Component {
  renderMovieList = () => {
    return movieList.map((movie, index) => {
      return (
        <div
          className="col-2 bg-dark text-white m-2"
          key={index}
          style={{ width: "100%" }}
        >
          <div className="card text-white bg-dark" style={{ width: "200px" }}>
            <img className="card-img-top" src={movie.hinhAnh} alt="" style={{ width: "150px" }} />
            <div className="card-body">
              <h4 style={{ fontSize: '17px', height: '50px' }}>{movie.tenPhim}</h4>
              <p style={{ fontSize: '13px', height: '50px' }}>
                {movie.moTa.length > 80 ? <p>{movie.moTa.substring(0, 80)} ... </p> : movie.moTa}
              </p>
            </div>
          </div>

        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ backgroundImage: "url(./background/avanger.jpg)", minHeight: "2000px" }}>
        <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "2000px" }}>
          <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "rgba(87,83,149,.8)" }}>
            <a className="navbar-brand" href="#">
              CYBERLEARN MOVIES
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="row d-flex justify-content-around" style={{ backgroundColor: "gray" }}>
              {this.renderMovieList()}
            </div>
          </div>
        </div>



      </div>
    );
  }
}
