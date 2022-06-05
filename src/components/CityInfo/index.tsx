import { capitalize } from "../../utils/capitalize";

interface CityInfoProps {
  city: string;
  desc: string;
  temperature: string;
  icon: string;
}
export const CityInfo = ({
  city,
  desc,
  temperature,
  icon,
}: CityInfoProps): JSX.Element => {
  return (
    <>
      <div>
        <p className="p-0 text-5xl">{city}</p>
        <p className="p-0 opacity-75">{capitalize(desc)}</p>
      </div>
      <p className="m-0 text-2xl flex flex-col">
        <span>{temperature}°C</span>
        <span><img className= 'w-[45px]'src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /></span>
      </p>
    </>
  );
};
