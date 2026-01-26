import { Facility } from "@/types";
import { cn } from "@/utils/clsx";

const FACILITIES: Facility[] = [
  {
    icon: "customicon-private-parking",
    title: "Private Parking",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    className: "no-border",
  },
  {
    icon: "customicon-wifi",
    title: "High Speed Wifi",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    icon: "customicon-cocktail",
    title: "Bar & Restaurant",
    description:
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    icon: "customicon-swimming-pool",
    title: "Swimming Pool",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
  },
];

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
    <div className="title text-center mb-5">
      <small data-cue="slideInUp">Paradise Hotel</small>
      <h2 data-cue="slideInUp" data-delay="100">
        Main Facilities
      </h2>
    </div>
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
