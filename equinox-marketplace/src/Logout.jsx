import MainStyle from './Styles/MainStyle.module.scss';
export default function Logout() {
  return (
    <div className={MainStyle.mainContent}>
      <h1>Logout</h1>
      <p>You have been logged out.</p>
    </div>
  );
}
