import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <section className='login'>
        <h2>I already have an account.</h2>
        <span>Login with your email and password.</span>

        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <input
              type='email'
              name='email'
              id='email'
              value={this.state.email}
              onChange={this.handleInput}
            />
            <label htmlFor='email'>Email</label>
          </div>

          <div>
            <input
              type='password'
              name='password'
              id='password'
              value={this.state.password}
              onChange={this.handleInput}
            />
            <label htmlFor='password'>Password</label>
          </div>

          <div>
            <input type='submit' value='Login' />
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
