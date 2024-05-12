document.addEventListener('DOMContentLoaded', function() {
    const pmu = document.getElementById('pmu');
    const monthYear = document.getElementById('monthYear');
    const resultsPowerGen = document.getElementById('resultsPowerGen');
    const resultsMDsaving = document.getElementById('resultsMDsaving');
    const resultsICPTsaving = document.getElementById('resultsICPTsaving');
    const resultsKWTBBsaving = document.getElementById('resultsKWTBBsaving');
    const resultsTotalsaving = document.getElementById('resultsTotalsaving');

    // Retrieve URL parameters
    const params = new URLSearchParams(window.location.search);

    const totalTNBConsumption = params.get('totalTNBConsumption');
    const pvGeneration = params.get('pvGeneration');
    const mdFromTNBBill = params.get('mdFromTNBBill');
    const actualMD = params.get('actualMD');
    const savingFromMDCharge = params.get('savingFromMDCharge');
    const icptWithSolar = params.get('icptWithSolar');
    const icptWithoutSolar = params.get('icptWithoutSolar');
    const savingICPT = params.get('savingICPT');
    const kwtbbWithSolar = params.get('kwtbbWithSolar');
    const kwtbbWithoutSolar = params.get('kwtbbWithoutSolar');
    const kwtbbSaving = params.get('kwtbbSaving');
    const totalWithSolar = params.get('totalWithSolar');
    const totalWithoutSolar = params.get('totalWithoutSolar');
    const saving = params.get('saving');
    const percentageSaving = params.get('percentageSaving');

    pmu.innerHTML = `<p>For PMU: ${pmu}</p>`;
    monthYear.innerHTML = `<p>Month/Year: ${month}/${year}</p>`;
    resultsPowerGen.innerHTML = `
    <p>Total TNB Consumption   : ${totalTNBConsumption} kWh</p>
    <p>PV Generation           : ${pvGeneration} kWh</p>`;
    resultsMDsaving.innerHTML = `
    <p>Maximum Demand from TNB Bill       : ${mdFromTNBBill} kW</p>
    <p>Actual Maximum Demand              : ${actualMD} kW</p>\
    <p>Saving from Maximum Demand Charge  : ${savingFromMDCharge} kW</p>`;
    resultsICPTsaving.innerHTML = `
    <p>ICPT with Solar        : RM ${icptWithSolar} </p>
    <p>ICPT withot Solar      : RM ${icptWithoutSolar} </p>
    <p>Saving from ICPT       : RM ${savingICPT} </p>`;
    resultsKWTBBsaving.innerHTML = `
    <p>KWTBB with Solar       : RM ${kwtbbWithSolar} </p>
    <p>KWTBB without Solar    : RM ${kwtbbWithoutSolar} </p>
    <p>Saving from KWTBB      : RM ${kwtbbSaving} </p>`;
    resultsTotalsaving.innerHTML = `
    <p>Total with Solar       : RM ${totalWithSolar} </p>
    <p>Total without Solar    : RM ${totalWithoutSolar} </p>
    <p>Saving                 : RM ${saving} </p>
    <p>Percentage of Saving                 : ${percentageSaving}% </p>`;

});

// function results() {
//     // Display results
//     const pmu = `<p>For PMU: ${pmu}</p>`;
//     const monthYear = `<p>Month/Year: ${month}/${year}</p>`;
  
//     const resultsPowerGen = `
//     <p>Total TNB Consumption   : ${totalTNBConsumption} kWh</p>
//     <p>PV Generation          : ${pvGeneration} kWh</p>`;
  
//     const resultsMDsaving = `
//     <p>Maximum Demand from TNB Bill       : ${mdFromTNBBill} kW</p>
//     <p>Actual Maximum Demand              : ${actualMD} kW</p>\
//     <p>Saving from Maximum Demand Charge  : ${savingFromMDCharge} kW</p>`;
  
//     const resultsICPTsaving = `
//     <p>ICPT with Solar        : RM ${icptWithSolar} </p>
//     <p>ICPT withot Solar      : RM ${icptWithoutSolar} </p>
//     <p>Saving from ICPT       : RM ${savingICPT} </p>`;
  
//     const resultsKWTBBsaving = `
//     <p>KWTBB with Solar       : RM ${kwtbbWithSolar} </p>
//     <p>KWTBB without Solar    : RM ${kwtbbWithoutSolar} </p>
//     <p>Saving from KWTBB      : RM ${kwtbbSaving} </p>`;
  
//     const resultsTotalsaving = `
//     <p>Total with Solar       : RM ${totalWithSolar} </p>
//     <p>Total without Solar    : RM ${totalWithoutSolar} </p>
//     <p>Saving                 : RM ${saving} </p>
//     <p>Percentage of Saving                 : ${percentageSaving}% </p>`;
//     document.getElementById('monthYear').innerHTML = monthYear;
//     document.getElementById('resultsPowerGen').innerHTML = resultsPowerGen;
//     document.getElementById('MDsaving').innerHTML = resultsMDsaving;
//     document.getElementById('ICPTsaving').innerHTML = resultsICPTsaving;
//     document.getElementById('KWTBBsaving').innerHTML = resultsKWTBBsaving;
//     document.getElementById('Totalsaving').innerHTML = resultsTotalsaving;
//   }
  
