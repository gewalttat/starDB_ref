import { withData } from '../hoc-helper/with-data'
import ItemList from '../item-list/item-list'
import withSwapiService from '../hoc-helper/with-swapi-service'


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

const renderName =({name}) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapVehicleMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllVehicles
    }
}


const PersonList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
        mapPlanetMethodsToProps);

const VehicleList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
        mapVehicleMethodsToProps);

export {
    PersonList,
    PlanetList,
    VehicleList
}