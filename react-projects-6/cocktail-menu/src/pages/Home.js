import React from "react";
import CocktailList from "../components/CocktailList";
import InputForm from "../components/InputForm";
import { useCallback } from "react";
import Loading from "../components/Loading";

export default function Home() {
  const [cocktails, setCocktails] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [loading, setLoading] = React.useState(true);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        setCocktails(data);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  // const fetchDrinks = useCallback(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setCocktails(data));
  // }, [url]);

  React.useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <div>
      <section>
        <InputForm setSearchTerm={setSearchTerm} />
      </section>
      <section>
        {!cocktails ? (
          <Loading />
        ) : (
          <CocktailList cocktails={cocktails} loading={loading} />
        )}
      </section>
    </div>
  );
}
