<script>
    function appendToDisplay(value) {
        document.getElementById("display").value += value;
    }

    function calculate() {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }

    function clearDisplay() {
        document.getElementById("display").value = "";
    }
</script>
