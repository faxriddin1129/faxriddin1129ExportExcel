<script src="https://cdn.jsdelivr.net/npm/table2excel@1.0.4/dist/table2excel.min.js"></script>
<script>
    document.getElementById("btn").addEventListener("click", () => {
        let table2excel = new Table2Excel();
        table2excel.export(document.querySelector("#Record"));
    });

</script>
