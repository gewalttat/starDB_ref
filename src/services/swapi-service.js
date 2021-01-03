export default class SwapiService {

  _apiBase = 'https://swapi.dev/api'

  _imgBase = 'https://starwars-visualguide.com/assets/img'

  getPersonImage = ({id}) => {
    return `${this._imgBase}/characters/${id}.jpg`
  }
  getPlanetImage = ({id}) => {
    return `${this._imgBase}/planets/${id}.jpg`
  }
  getVehicleImage = ({id}) => {
    return `${this._imgBase}/vehicles/${id}.jpg`
  }

 getResource = async (url) =>  {
    const responce = await fetch(`${this._apiBase}${url}`)
    if (!responce.ok) {
      throw new Error(`Could'nt fetch ${url}, 
        received ${responce.status}`)
    }
    return await responce.json();
  }


  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }


  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };


  getAllVehicles = async () => {
    const res = await this.getResource(`/vehicles/`);
    return res.results.map(this._transformVehicle);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getVehicle = async (id) => {
    const vehicle = await this.getResource(`/vehicles/${id}/`)
    return this._transformVehicle(vehicle);
  }

_extractId = (item) =>  {
    //регулярка для выделения ид из юрл адреса
    const idRegExp = /\/([0-9]*)\/$/;
    //применяю регулярку к адресу (match возвращает совпадения с заданной регуляркой)
    return item.url.match(idRegExp)[1];
}

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period
    }
  }
  
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      eyeColor: person.eye_color,
      gender: person.gender,
      birthYear: person.birth_year
    }
  }

  _transformVehicle = (vehicle) => {
    return {
      id: this._extractId(vehicle),
      model: vehicle.model,
      name: vehicle.name,
      maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
      costInCredits: vehicle.cost_in_credits
    }
  }
}
