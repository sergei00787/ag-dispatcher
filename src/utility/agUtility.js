import { Refueling } from '../utility/Refuelling.model';
import { v4 as uuidv4 } from 'uuid';

export const getPropValueFromProperties = (propName, properties) => {
  if (properties.length === 0) return null;
  let property = properties.find(prop => prop.Name === propName);
  return property && property.Value;
}

const FUV = ["Tank1FuelUpVol Diff", "Tank2FuelUpVol Diff", "Tank3FuelUpVol Diff", "Tank4FuelUpVol Diff"];
const FDV = ["Tank1FuelDnVol Diff", "Tank2FuelDnVol Diff", "Tank4FuelDnVol Diff", "Tank4FuelDnVol Diff",]

const getListIndexFuelDiff = (params, fuelValueNames = FUV) => {
  let list = params.reduce((arr, param) => {
    if (fuelValueNames.find(item => item === param)) {
      arr.push(params.indexOf(param));
    }
    return arr;
  }, [])
  return list;
}

const getSumFuelVol = (values, ListIndexFuelDiff) => {
  return ListIndexFuelDiff.reduce((sum, item) => {
    return +sum + values[item];
  }, 0)
}

export const getRefuelsfromStages = (stages) => {
  let refuels = [];
  // console.log(stages);
  for (const [key, value] of Object.entries(stages)) {
    if (value !== null) {
      const listIndexFuelUp = getListIndexFuelDiff(value.Params, FUV);
      const listIndexDuelDown = getListIndexFuelDiff(value.Params, FDV);
      if (value.Items) {
        let curRefs = value.Items.map((item) => {
          let ref = new Refueling(
            uuidv4(),
            key,
            item.SD,
            item.ED,
            item.Caption,
            value.Name,
            getSumFuelVol(item.Values, listIndexFuelUp),
            getSumFuelVol( item.Values, listIndexDuelDown),
          );
          refuels.push(ref)
        })
      }
    }
  }
  return refuels;
}