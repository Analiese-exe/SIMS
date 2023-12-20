document.addEventListener("DOMContentLoaded", function () {
    // Sample data (replace with your actual data)
    const resultData = [
        { course: "Assembly Language", grade: "A", },
        { course: "Internet of Things(IoT)", grade: "A",},
        { course: "Web development", grade: "A",},
        { course: "Artificial Intelligence", grade: "A",},
        { course: "Cloud Computing", grade: "A",},
        { course: "Operating Systems", grade: "A",},
        { course: "Web Aesthetics", grade: "A",},
        // Add more data as needed
    ];

    // Function to create and populate the result table
    function createResultTable(data) {
        const table = document.createElement("table");

        // Create table header
        const headerRow = table.insertRow();
        for (const key in data[0]) {
            if (key !== "link") {
                const th = document.createElement("th");
                th.textContent = key.toUpperCase();
                headerRow.appendChild(th);
            }
        }

        // Create table rows
        data.forEach((row) => {
            const tr = table.insertRow();
            for (const key in row) {
                if (key !== "link") {
                    const td = tr.insertCell();
                    // Add regular text content
                    td.textContent = row[key];
                }
            }
        });

        // Append table to the result table div
        document.getElementById("resultTable").appendChild(table);
    }

    // Call the function with the sample data
    createResultTable(resultData);
});
function showSideBar(){
    const navbar = document.querySelector('.navbar');
    navbar.style.display= 'flex';
  } 