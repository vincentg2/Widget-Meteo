import React, { useEffect, useState } from "react";
import { capitalize } from "../../utils/capitalize";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { CityInfo } from "../CityInfo";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

interface WidgetMeteoProps {
  defaultCity?: string;
}

export const WidgetMeteo = ({
  defaultCity = "Paris",
}: WidgetMeteoProps): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [city, setCity] = useState(defaultCity);
  const [desc, setDesc] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [img, setImg] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(value);
    setValue("");
    setLoading(true);
  };

  useEffect(() => {
    getDataFromApi(city)
      .then((data) => {
        setTemperature(data.main.temp.toFixed());
        setDesc(data.weather[0].description);
        setLoading(false);
        setError("");
        setImg(data.weather[0].icon);
      })
      .catch((err) => {
        setLoading(false);
        setError(capitalize(err.response.data.message));
      });
  }, [city]);
  // todo Need a ref for the value to handle clic outside the input ?
  return (
    <div className="relative pt-4 px-6 pb-8 flex justify-between space-x-4 w-[300px] text-white bg-white/50 rounded-md filter select-none">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="text-1xl flex justify-center flex-1 items-center h-[72px]">
          Veuillez chercher une ville
        </div>
      ) : (
        <CityInfo
          city={city}
          desc={desc}
          temperature={temperature}
          icon={img}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="text-black absolute left-0 bottom-[-30px] w-full"
      >
        <input
          type="text"
          placeholder="Entrez le nom d'une ville"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[200px] border-0 rounded p-3 text-base filter flex justify-center focus:outline-none"
        />
        {error ? (
          <div className="absolute left-10 bottom-[-24px] text-slate-50">
            {error}
          </div>
        ) : null}
      </form>
    </div>
  );
};
