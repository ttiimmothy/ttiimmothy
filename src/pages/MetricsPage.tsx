import { useParams } from "react-router-dom";
// import metricsGaearon from "../../metrics_gaearon.svg";
// import metricsAntfuPrivateRepository from "../../metrics_antfu_private_repository.svg";
// import metricsAntfu from "../../metrics_antfu.svg";
// import metricsKarpathy from "../../metrics_karpathy.svg";
import metrics from "../../metrics.svg";
import metricsPrivateRepository from "../../metrics_private_repository.svg";
// import metricsOctocat from "../../metrics_octocat.svg";

const MetricsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      {/* <Link to="/">
        <button className="bg-gray-700 h-full w-24 flex justify-center items-center rounded-md text-md px-11 py-2 mx-2 my-4 text-white hover:bg-gray-400 whitespace-nowrap">
          Back Home
        </button>
      </Link> */}
      {
        // id === "gaeron" ? (
        //   <img src={metricsGaearon} width="400rem" />
        // ) : id === "antfu-private-repository" ? (
        //   <img src={metricsAntfuPrivateRepository} width="400rem" />
        // ) : id === "antfu" ? (
        //   <img src={metricsAntfu} width="400rem" />
        // ) : id === "karpathy" ? (
        //   <img src={metricsKarpathy} width="400rem" />
        // ) : id === "my" ? (
        //   <img src={metrics} width="400rem" />
        // ) : id === "private-repository" ? (
        //   <img src={metricsPrivateRepository} width="400rem" />
        // ) : id === "octocat" ? (
        //   <img src={metricsOctocat} width="400rem" />
        // ) :
        id === "my" ? (
          <img src={metrics} width="400rem" />
        ) : id === "private-repository" ? (
          <img src={metricsPrivateRepository} width="400rem" />
        ) : (
          <></>
        )
      }
    </div>
  );
};

export default MetricsPage;
