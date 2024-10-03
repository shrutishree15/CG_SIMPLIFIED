// BLD.js
document.addEventListener('DOMContentLoaded', function () {
    const algoContainer = document.querySelector('.algo');
    const totalPages = 11; // Number of total pages
    let currentPage = 1;

    // Example line coordinates
    const exampleLine = { x1: 20, y1: 10, x2: 30, y2: 18 };

    // Function to switch between pages based on click position
    function changePage(event) {
        const clickX = event.clientX;
        const algoWidth = algoContainer.offsetWidth;

        // Determine if the click is on the right or left side of algo div
        if (clickX > algoWidth / 2 && currentPage < totalPages) {
            currentPage++;
        } else if (clickX <= algoWidth / 2 && currentPage > 1) {
            currentPage--;
        }

        updatePageContent();
    }

    // Function to update page content based on the current page
    function updatePageContent() {
        // Clear previous content
        algoContainer.innerHTML = '';

        // Draw different content based on the current page
        switch (currentPage) {
            case 1:
                drawText("Page 1: Brief Description of Bresenham's Algorithm");
                break;
            case 2:
                drawText("Page 2: Calculate dx, dy, and Initial Decision Parameter");
                drawTable(["Step", "Calculation"], [
                    ["dx", exampleLine.x2 - exampleLine.x1],
                    ["dy", exampleLine.y2 - exampleLine.y1],
                    ["Initial Decision Parameter", "2 * dy - dx"],
                ]);
                break;
            case 3:
                drawText("Page 3: Calculate Slope (m)");
                drawTable(["Step", "Calculation"], [
                    ["Slope (m)", "(dy / dx)"],
                ]);
                break;
            // Add more cases for additional pages as needed

            case totalPages - 1:
                drawText(`Page ${totalPages - 1}: Tabular Solution`);
                drawTable(["Step", "Calculation"], [
                    // Include steps for the tabular solution
                ]);
                break;
            case totalPages:
                drawText(`Page ${totalPages}: More Examples to Try`);
                // Include more examples for the user to try
                break;

            default:
                drawText("Invalid Page");
        }

        // Add this line to enable the click event on the algo div
        algoContainer.addEventListener('click', changePage);
    }

    // Function to draw text on the page
    function drawText(text) {
        const stepDiv = document.createElement('div');
        stepDiv.classList.add(`step${currentPage}`);
        stepDiv.textContent = text;
        algoContainer.appendChild(stepDiv);
    }

    // Function to draw a table on the page
    function drawTable(headers, data) {
        const tableDiv = document.createElement('div');
        tableDiv.classList.add(`step${currentPage}`);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Create header row
        const headerRow = document.createElement('tr');
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Create data rows
        data.forEach(rowData => {
            const tr = document.createElement('tr');
            rowData.forEach(cellData => {
                const td = document.createElement('td');
                td.textContent = cellData;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        tableDiv.appendChild(table);
        algoContainer.appendChild(tableDiv);
    }

    // Initial page draw
    updatePageContent();
});
