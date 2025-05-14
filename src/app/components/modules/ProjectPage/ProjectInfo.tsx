const ProjectInfo = () => {
  return (
    <section className="project-info">
      <div className="container">
        <div className="project-info__table">
          <div className="project-info__table--row">
            <div className="project-info__table--row-left">
              <h3 className="project-info__table--title">The client</h3>
            </div>
            <div className="project-info__table--row-right">
              <p className="project-info__table--text">
                Take a look at some of our proudest moments, where creativity,
                strategy, and innovation came together to make brands shine in
                the digital realm. Our success stories are a testament to our
                dedication and expertise.
              </p>
            </div>
          </div>
          <div className="project-info__table--row">
            <div className="project-info__table--row-left">
              <h3 className="project-info__table--title">Discipline used</h3>
            </div>
            <div className="project-info__table--row-right">
              <ul className="project-info__table--list">
                <li className="project-info__table--item">UX/UI Design</li>
                <li className="project-info__table--item">Micro-animations</li>
                <li className="project-info__table--item">
                  WordPress Development
                </li>
                <li className="project-info__table--item">
                  Guttenberg Block Development
                </li>
              </ul>
            </div>
          </div>
          <div className="project-info__table--row">
            <div className="project-info__table--row-left">
              <h3 className="project-info__table--title">Project type</h3>
            </div>
            <div className="project-info__table--row-right">
              <p className="project-info__table--text">
                UX/UI & App Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
