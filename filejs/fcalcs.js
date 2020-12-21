function showresult() {
    let numScreen = parseFloat(document.getElementById("screenInput").value);
    let listRes = document.querySelectorAll("#zhekawh-res");
    let n2 = parseFloat("1.25");
    let r1;
    let r2;
    let r3;
    if (!Number.isInteger(numScreen)) {
        alert("minimal deposit $330");
        document.getElementById("zhekawh-res1").innerText = "0";
        document.getElementById("zhekawh-res2").innerText = "0";
        document.getElementById("zhekawh-res3").innerText = "0";
        for (let i = 0; i < listRes.length; i++) {
            let item = listRes[i];
            item.classList.remove("active");
        }
    } else if (Number.isInteger(numScreen) & (numScreen < 330)) {
        alert("Minimum deposit amount is $330");
        document.getElementById("screenInput").value = "330";
        outRes(330);
    } else {
        outRes();
    }

    function outRes(count1 = numScreen) {
        r1 = count1 * n2;
        r2 = count1 * n2 * 7;
        r3 = count1 * n2 * 30;
        document.getElementById("zhekawh-res1").innerText = Math.round(r1);
        document.getElementById("zhekawh-res2").innerText = Math.round(r2);
        document.getElementById("zhekawh-res3").innerText = Math.round(r3);
        for (let i = 0; i < listRes.length; i++) {
            let item = listRes[i];
            item.classList.add("active");
        }
    }
}