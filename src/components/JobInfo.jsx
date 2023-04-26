import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, duties, id, order, title } = jobs[currentItem];

  return (
    <article>
      <h1>{title}</h1>
      <div>
        <span className="name">{company}</span>
      </div>
      <p>{dates}</p>

      <div className="duties">
        <Duties duties={duties}></Duties>
      </div>
    </article>
  );
};

export default JobInfo;
