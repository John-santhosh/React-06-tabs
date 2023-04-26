const BtnContainer = ({ data, toggleCurrentItem, currentItem }) => {
  return (
    <div className="btn-container">
      {data.map((title, i) => {
        return (
          <button
            onClick={() => toggleCurrentItem(i)}
            className={i === currentItem ? "active job-btn " : "job-btn"}
            key={i}
          >
            {title.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
