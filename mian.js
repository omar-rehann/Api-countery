let inputel = document.querySelector(".continer .se");
let spanel = document.querySelector(".send");
let section = document.querySelector(".continer");
let el;

spanel.onclick = function() {
    if (inputel.value === "" || !isNaN(inputel.value)) {
        if (!el) {
            el = document.createElement("div");
            el.className = "show_data";
            section.appendChild(el);
        }

        el.innerHTML = '';
        let oneel = document.createElement("h4");
        oneel.className = "eror";
        let txt = document.createTextNode("Not Valid Input");
        oneel.appendChild(txt);
        el.appendChild(oneel);

    } else {
        let mydata = new XMLHttpRequest();
        mydata.open("GET", `https://restcountries.com/v3.1/name/${inputel.value}`);
        mydata.send();
        mydata.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let newdata = JSON.parse(this.responseText);
                let newcountry = newdata[0];

                if (!el) {
                    el = document.createElement("div");
                    el.className = "show_data";
                    section.appendChild(el);
                }

                el.innerHTML = '';
                let imgel = document.createElement("img");
                imgel.src = newcountry.flags.svg;
                let oneh3 = document.createElement("h3");
                let txt = document.createTextNode(`The Population of the country: ${newcountry.population}`);
                oneh3.appendChild(txt);
                let twoh3 = document.createElement("h3");
                let twotxt = document.createTextNode(`The Capital of the country: ${newcountry.capital}`);
                twoh3.appendChild(twotxt);
                el.appendChild(imgel);
                el.appendChild(oneh3);
                el.appendChild(twoh3);

            } else {
                if (!el) {
                    el = document.createElement("div");
                    el.className = "show_data";
                    section.appendChild(el);
                }

                el.innerHTML = '';
                let oneel = document.createElement("h4");
                oneel.className = "eror";
                let txt = document.createTextNode("Country Not Found");
                oneel.appendChild(txt);
                el.appendChild(oneel);
            }
        }
    }
}