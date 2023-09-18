import PropTypes from "prop-types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Option = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-green-200 rounded-lg p-6 flex flex-col space-y-4">
      <h1 className="text-lg font-bold">Membership: {name}</h1>
      <h3 className="text-2xl font-bold">Price: {price} </h3>
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1 py-1">
            {" "}
            <IoMdCheckmarkCircleOutline className="text-blue-700" />
            {feature}{" "}
          </li>
        ))}
      </ul>
      <button className="py-3 bg-red-500 hover:bg-red-700 rounded-lg w-full font-semibold text-white">
        {" "}
        Select
      </button>
    </div>
  );
};
Option.propTypes = {
  option: PropTypes.object.isRequired,
};
export default Option;
