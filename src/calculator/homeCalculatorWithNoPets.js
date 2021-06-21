const calculatorWithNoPets = ({
                                rentalUnitCount,
                                unitPetRate
                              }) => {
  console.log({ rentalUnitCount })
  console.log({ unitPetRate })
  const savingPerYear = Math.round(rentalUnitCount * 566 * (unitPetRate))

  console.log((savingPerYear - (rentalUnitCount * 60)))
  const ROI = Math.round((savingPerYear - (rentalUnitCount  * 60)) * 100 / (rentalUnitCount * 60))
  return {
    savingPerYear,
    ROI,
  }
}

module.exports = calculatorWithNoPets