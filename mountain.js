window.onload = function (_event) {
    const mountainSelect = document.getElementById("mountainSelect");
    mountainSelect.onchange = renderMountainCard;
    populateMountain(mountainsArray, mountainSelect);

    function populateMountain(mountainsArray, selectMountain) {
        let html = '<option selected>Please choose a mountain!</option>';
        for (const currentMountain of mountainsArray) {
            html += `<option value="${currentMountain.name}">${currentMountain.name}</option>`;
        }
        selectMountain.innerHTML = html;
    }

    function renderMountainCard(event) {
        const selectedMountain = event.target.value;
        let html = '';
        for (const mountain of mountainsArray) {
            if (mountain.name === selectedMountain) {
                html += `
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <img src="/data/images/${mountain.img}" alt="${mountain.name}">
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">${mountain.name}</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">
                                            Effort: ${mountain.effort} Elevation: ${mountain.elevation}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
        }

        const resultDiv = document.getElementById("resultDiv");
        resultDiv.innerHTML = html;
    }
};
