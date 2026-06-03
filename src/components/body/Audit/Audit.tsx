import PrimaryButton from "../../Shared/PrimaryButton";
import SecondaryButton from "../../Shared/SecondaryButton";

function Audit() {
  return (
    <div className="pt-16  pb-16">
      <div className="border border-gray-500 overflow-hidden rounded-lg flex px-5 bg-[url(/Audit_Placeholder.png)] bg-cover bg-center">
        <div className="flex flex-col p-8 text-white gap-3">
          <h1 className="text-4xl font-light">
            Let's build <br /> something real
          </h1>
          <p className="text-base pb-6">
            Get a free audit of your current digital marketing performance.
          </p>
          <div className="flex gap-4">
            <PrimaryButton text="Audit" />
            <SecondaryButton text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audit;
