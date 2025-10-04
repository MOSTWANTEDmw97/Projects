import MainStyle from './Styles/MainStyle.module.scss';

export default function Profile() {
  return (
    <div className={MainStyle.mainContent}>
      <h2>User Profile</h2>
      <p>Welcome to your profile page!</p>
    </div>
  );
}
