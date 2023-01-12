import React from 'react'
import "./LoginPage.css"
const LoginPage = () => {
  return (
    <div className="container-sm login ">
    <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="image-container .img-fluid">
        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1673547687~exp=1673548287~hmac=7e73d471a334a13baf055aa35c1fcc1384553001016751a189c447742ae7fe5d" alt=""/>
      </div>
      <div className="form-container shadow p-3 mb-5 bg-body-tertiary rounded">
        <form>
          <h1>Login</h1>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <div className="or-text">or</div>
          <a href="#" className="btn btn-danger mr-2">
            <i className="fab fa-google"></i> Login with Gmail
          </a>
          <a href="#" className="btn btn-primary">
            <i className="fab fa-facebook"></i> Login with Facebook
          </a>
        </form>
      </div>
    </div>
    </div>
  )
}

export default LoginPage
