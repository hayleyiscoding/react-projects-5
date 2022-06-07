import Cocktail from "./Cocktail";
import Loading from "./Loading";

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h3>No cocktails match your search criteria</h3>;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails?.drinks?.map((item) => {
          return <Cocktail key={item.idDrink} {...item} />;
        })}
      </div>
    </section>
  );
}
