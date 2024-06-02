function kenaRazia(date, vehicles) {
  const tilangDaerah = ["Gajah Mada", "Hayam Wuruk", "Panglima Polim", "Tomang Raya", "Sisingamangaraja", "Fatmawati"];

  const filteredVehicles = vehicles.filter(vehicle => vehicle.type === "Mobil" && vehicle.name !== "Denver"); // Filter out Denver

  const tilang = filteredVehicles.reduce((acc, vehicle) => {
    const tilangCount = vehicle.rute.filter(rute => tilangDaerah.includes(rute)).length;
    const platLastDigit = parseInt(vehicle.plat[vehicle.plat.length - 1]);
    if (tilangCount > 0 && (platLastDigit % 2 !== date % 2 || vehicle.rute.includes("Gajah Mada"))) {
      acc.push({ name: vehicle.name, tilang: tilangCount });
    }
    return acc;
  }, []);

  return tilang;
}

console.log(
  kenaRazia(27, [
    { name: "Denver", plat: "B 2791 KDS", type: "Mobil", rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"] },
    { name: "Toni", plat: "B 1212 JBB", type: "Mobil", rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"] },
    { name: "Stark", plat: "B 444 XSX", type: "Motor", rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"] },
    { name: "Anna", plat: "B 678 DD", type: "Mobil", rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"] },
  ])
);

// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
