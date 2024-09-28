import { Link } from "react-router-dom";
// import metricsGaearon from "../../metrics_gaearon.svg";
// import metricsAntfuPrivateRepository from "../../metrics_antfu_private_repository.svg";
// import metricsAntfu from "../../metrics_antfu.svg";
// import metricsKarpathy from "../../metrics_karpathy.svg";
import metrics from "../../metrics.svg";
import metricsPrivateRepository from "../../metrics_private_repository.svg";
// import metricsOctocat from "../../metrics_octocat.svg";

const Home: React.FC = () => {
  return (
    <div className="flex items-start w-280">
      {/* <Link to="/id/gaeron" className="grow">
        <img src={metricsGaearon} />
      </Link>
      <Link to="id/antfu-private-repository" className="grow">
        <img src={metricsAntfuPrivateRepository} className="w-full" />
      </Link>
      <Link to="id/antfu" className="grow">
        <img src={metricsAntfu} className="w-full" />
      </Link>
      <Link to="id/karpathy" className="grow">
        <img src={metricsKarpathy} className="w-full" />
      </Link> */}
      <Link to="id/my">
        <img src={metrics} width="400rem" />
      </Link>
      <Link to="id/private-repository">
        <img src={metricsPrivateRepository} width="400rem" />
      </Link>
      {/* <Link to="id/octocat" className="grow">
        <img src={metricsOctocat} className="w-full" />
      </Link> */}
    </div>
  );
};

export default Home;
