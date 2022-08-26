import "./Loading.scss";

const Loading = ({loadingVisible}) => {
  return (
    <main style={{display: loadingVisible ? 'flex' : 'none'}}>
      <div class="breathe-container">
        <div className="circle"></div>
        <span className="breathe">breathe in</span>
      </div>
    </main>
  );
};

export default Loading;
