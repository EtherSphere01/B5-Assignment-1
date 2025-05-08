{
  type Vehicle = {
    name: string;
    model: string;
    year: number;
  };

  type Car = keyof Vehicle;

  const myCar: Car = "name";

  function getProperty<T, P extends keyof T>(object: T, property: P): T[P] {
    return object[property];
  }

  const myVehicle: Vehicle = {
    name: "Toyota",
    model: "Corolla",
    year: 2020,
  };

  const carName = getProperty(myVehicle, "name"); // "Toyota"
  const carModel = getProperty(myVehicle, "model"); // "Corolla"
  const carYear = getProperty(myVehicle, "year"); // 2020
  //   const carName2 = getProperty(myVehicle, "name2"); // Error: Argument of type '"name2"' is not assignable to parameter of type '"name" | "model" | "year"'.
}
