import Option from "./Option";

const PriceOptions = () => {
  const options = [
    {
      id: "1",
      name: "Basic Membership",
      price: 30.0,
      features: [
        "Access to gym facilities",
        "Use of cardio equipment",
        "Locker room access",
        "Free weights area",
        "24/7 access",
      ],
    },
    {
      id: "2",
      name: "Silver Membership",
      price: 50.0,
      features: [
        "All Basic Membership features",
        "Access to group fitness classes",
        "Sauna and steam room access",
        "Personalized workout plans",
      ],
    },
    {
      id: "3",
      name: "Gold Membership",
      price: 80.0,
      features: [
        "All Silver Membership features",
        "Personal trainer sessions (1 per month)",
        "Nutrition consultation",
        "Access to swimming pool",
        "Towel service",
      ],
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 m-6">
      {options.map((option) => (
        <Option key={option.id} option={option}></Option>
      ))}
    </div>
  );
};

export default PriceOptions;
