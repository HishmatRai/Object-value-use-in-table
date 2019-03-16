var Phones = {
    samsung: {
        S1: {
            name: "S1",
            config: {
                display: "4.5",
              
                ram: "9gb",
                camra: "5px",
                battry: "18800mah",
                sims: {
                    sim1: "Jazz",
                    sim2: "Zong",
                }
            }
        },
        S2: {
            name: "S2",
            config: {
                display: "4.8",
                ram: "6gb",
                camra: "15px",
                battry: "1890mah",
                sims: {
                    sim1: "Tum hi to ho",
                    sim2: "Sab keh do",
                }
            }
        },
        S3: {
            name: "S3",
            config: {
                display: "4.5",
                ram: "2gb",
                camra: "8px",
                battry: "1500mah",
                sims: {
                    sim1: "Tum hi to ho",
                    sim2: "Sab keh do",
                }
            }
        },
    },
    Iphone: {
        Iphone4: {
            name: "Ihpne4",
            config: {
                display: "4.5",
                ram: "4gb",
                camra: "10px",
                battry: "1900mah",
                sims: {
                    sim1: "pata nhi",
                    sim2: "warid",
                }
            }
        },
    }
}





document.getElementById('th1').innerHTML = Phones.samsung.S1.name;
document.getElementById('th2').innerHTML = Phones.samsung.S2.name;
document.getElementById('th3').innerHTML = Phones.samsung.S3.name;
document.getElementById('th4').innerHTML = Phones.Iphone.Iphone4.name;



document.getElementById('td1').innerHTML = Phones.samsung.S1.config.display;
document.getElementById('td2').innerHTML = Phones.samsung.S1.config.ram;
document.getElementById('td3').innerHTML = Phones.samsung.S1.config.camra;
document.getElementById('td4').innerHTML = Phones.samsung.S1.config.battry;
document.getElementById('td5').innerHTML = Phones.samsung.S1.config.sims.sim1;
document.getElementById('ex1').innerHTML = Phones.samsung.S1.config.sims.sim2;

document.getElementById('td6').innerHTML = Phones.samsung.S2.config.display;
document.getElementById('td7').innerHTML = Phones.samsung.S2.config.ram;
document.getElementById('td8').innerHTML = Phones.samsung.S2.config.camra;
document.getElementById('td9').innerHTML = Phones.samsung.S2.config.battry;
document.getElementById('td10').innerHTML = Phones.samsung.S2.config.sims.sim1;
document.getElementById('ex2').innerHTML = Phones.samsung.S2.config.sims.sim2;

document.getElementById('td11').innerHTML = Phones.samsung.S3.config.display;
document.getElementById('td12').innerHTML = Phones.samsung.S3.config.ram;
document.getElementById('td13').innerHTML = Phones.samsung.S3.config.camra;
document.getElementById('td14').innerHTML = Phones.samsung.S3.config.battry;
document.getElementById('td15').innerHTML = Phones.samsung.S3.config.sims.sim1;
document.getElementById('ex3').innerHTML = Phones.samsung.S3.config.sims.sim2;

document.getElementById('td16').innerHTML = Phones.Iphone.Iphone4.config.display;
document.getElementById('td17').innerHTML = Phones.Iphone.Iphone4.config.ram;
document.getElementById('td18').innerHTML = Phones.Iphone.Iphone4.config.camra;
document.getElementById('td19').innerHTML = Phones.Iphone.Iphone4.config.battry;
document.getElementById('td20').innerHTML = Phones.Iphone.Iphone4.config.sims.sim1;
document.getElementById('ex4').innerHTML = Phones.Iphone.Iphone4.config.sims.sim2;

