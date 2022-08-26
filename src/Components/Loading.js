import "./Loading.scss";

const Loading = ({loadingVisible, loadingText}) => {
  return (
    <main style={{display: loadingVisible ? 'flex' : 'none'}}>
      <div class="breathe-container">
        <div className="circle"></div>
        <span className="breathe">{loadingText}</span>
      </div>
    </main>
  );
};

export default Loading;
