document.getElementById("fifteenpercent").onclick = computeTip;
document.getElementById("twentypercent").onclick = computeTip;
document.getElementById("twentyfivepercent").onclick = computeTip;

function computeTip() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let tipPercent = parseFloat(this.textContent);

    let total = (subtotal *tipPercent / 100) + subtotal;
    document.getElementById("total").textContent = `Total: $${total}`; // Another way to calculate the "Total" + total;
}
