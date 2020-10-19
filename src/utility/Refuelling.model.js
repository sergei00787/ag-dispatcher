export class Refueling {
  constructor(Id, Guid, RefStart, RefFinish, RefType, Tank, FuelUpVolume, FuelDownVolume) {
    this.Id = Id
    this.Guid = Guid
    this.RefStart = RefStart
    this.RefFinish = RefFinish
    this.RefType = RefType
    this.Tank = Tank
    this.FuelUpVolume = FuelUpVolume
    this.FuelDownVolume = FuelDownVolume
  }
}