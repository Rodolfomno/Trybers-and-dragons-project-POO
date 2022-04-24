import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  constructor(private _name: string) { }

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }

  get special(): number {
    return this._special;
  }

  static createdArcheTypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}

export default Archetype;