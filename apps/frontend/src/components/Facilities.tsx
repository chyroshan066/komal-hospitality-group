import { Facility } from "@/types";
import { cn } from "@/utils/clsx";
import { TitleHeader } from "./utility/TitleHeader";
import { FACILITIES } from "@/constants";

const FacilityItem = ({ icon, title, description, className }: Facility) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className={cn("box_facilities", className)} data-cue="slideInUp">
        <i className={icon} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const Facilities = () => (
  <>
    <TitleHeader
      subtitle="Paradise Hotel"
      title="Main Facilities"
      className="text-center mb-5"
      delay={100}
    />
    <div className="row mt-4">
      {FACILITIES.map((item, index) => (
        <FacilityItem
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          className={item.className}
        />
      ))}
    </div>
  </>
);
