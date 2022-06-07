import React from "react";

export default function InputForm({ setSearchTerm }) {
  const searchValue = React.useRef("");

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}
