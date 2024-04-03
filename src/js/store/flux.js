const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [],
      characterData: {},
      characterDesc: "",
      planet: [],
      planetData: {},
      planetDesc: "",
      ship: [],
      shipData: [],
      shipDesc: "",
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      fetchCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              character: data.results,
            })
          )
          .catch((err) => console.error(err));
      },
      fetchCharactersData: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              characterData: data.result.properties,
              characterDesc: data.result.description,
            })
          )
          .catch((err) => console.error(err));
      },

      fetchDetailChar: async (id) => {
        const response = await fetch("https://www.swapi.tech/api/people/" + id);
        const body = await response.json();
        const person = body.result;
        return person;
      },
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              planet: data.results,
            })
          )
          .catch((err) => console.error(err));
      },
      fetchPlanetsData: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              planetData: data.result.properties,
              planetDesc: data.result.description,
            })
          )
          .catch((err) => console.error(err));
      },

      fetchDetailPlanets: async (id) => {
        const response = await fetch(
          "https://www.swapi.tech/api/planets/" + id
        );
        const body = await response.json();
        const planet = body.result;
        return planet;
      },
      fetchVeh: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              ship: data.results,
            })
          )
          .catch((err) => console.error(err));
      },
      fetchVehData: (id) => {
        fetch("https://www.swapi.tech/api/vehicles/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              shipData: data.result.properties,
              shipDesc: data.result.description,
            })
          )
          .catch((err) => console.error(err));
      },

      fetchDetailVeh: async (id) => {
        const response = await fetch(
          "https://www.swapi.tech/api/vehicles/" + id
        );
        const body = await response.json();
        const vehicle = body.result;
        return vehicle;
      },

      addFavorite: (item) => {
        if (getStore().favorites.some((elem) => elem.name === item.name)) {
          getActions().quitFavorite(item);
        } else {
          setStore({
            favorites: getStore().favorites.concat(item),
          });
          console.log(`${item.name} added to your favorites.`);
        }
        console.log(getStore().favorites);
      },
      quitFavorite: (item) => {
        setStore({
          favorites: getStore().favorites.filter((i) => i.name !== item.name),
        });
        console.log(`${item.name} removed from your favorites.`);
      },
    },
  };
};

export default getState;
