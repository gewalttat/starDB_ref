import ItemDetails, { Record } from '../item-details/item-details'
import withSwapiService from '../hoc-helper/with-swapi-service'

const VehicleDetails = (props) => {
  return (
    <ItemDetails
      {...props}>
      <Record field="model" label="Model: " />
      <Record field="lname" label="Name: " />
      <Record field="maxAtmospheringSpeed" label="Max speed in km/h: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getVehicle,
    getImageUrl: swapiService.getVehicleImage
  };
};

export default withSwapiService(VehicleDetails, mapMethodsToProps);