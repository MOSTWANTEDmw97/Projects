import MainStyle from './Styles/MainStyle.module.scss';

export default function Login() {
    return (
    <div className={MainStyle.mainContent}>
    <div className={`card d-flex flex-column justify-content-between `} style={{ padding: '20px', maxWidth: '400px', margin: '20px auto' } }>
      <form >
        <div className={`form-group `}>
            <h3>Login to Your Account</h3>
            <br />
            <label for="exampleInputEmail1">User Name</label>
            <input type="name" className={`form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className={`form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className={`form-text text-muted`}>We'll never share your email with anyone else.</small>
            
            
        </div>
        <div className={`form-group`}>
          <br />
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className={`form-control`} id="exampleInputPassword1" placeholder="Password" />
          <br />
        </div>
        <div className={`form-check`}>
          <input type="checkbox" className={`form-check-input`} id="exampleCheck1" />
          <label className={`form-check-label`} for="exampleCheck1">Remember me</label>
        </div>
        <br />
        <button type="submit" className={`btn btn-primary`}>Submit</button>
      </form>
    </div>
    </div>
  );

}       