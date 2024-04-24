import PrimeVue from "../assets/primevue.svg";

const NotFoundPage: React.FC = () => {
  return (
    <div className="layout-content-inner">
      <div className="flex card flex-col items-center gap-5 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-error">
          <span className="font-bold bold">4</span>
          <div className="flex items-center justify-center bg-not-found rounded-full w-32 h-32">
            <img src={PrimeVue} className="logo" alt="" />
          </div>
          <span className="font-bold bold">4</span>
        </div>
        <div className="font-semibold text-900 text-center text-4xl border-t-2 surface-border pt-5">
          Page Not Found
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
