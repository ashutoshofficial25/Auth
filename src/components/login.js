import React, { Fragment, useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {};
  return (
    <Fragment>
      <header className="jumborton text-center p-5 bg-primary">
        <h2 className="h2">Login</h2>
      </header>
      <section className="w-25 m-auto p-5">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control p-2 mb-4"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button className="btn w-100 btn-success">Submit</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
