import "./preloader.scss";

export const Preloader = () => {
  return (
    <div className="box">
      <div className="box__loader">
        <div className="box__o" />
        <div className="box__o" />
        <div className="box__o" />
        <div className="box__o" />        
      </div>
    </div>
  );
};
