document.addEventListener("DOMContentLoaded", function() {
    var search = document.getElementById("site_search");
    var input = document.getElementById("search_box");
    var results = document.getElementById("search_results");

    if (!search || !input || !results) {
        return;
    }

    var documents = [];
    var limit = Number(search.dataset.searchLimit) || 10;

    function adjustSearchBoxWidth() {
        var directory = document.querySelector(".post-directory");
        if (directory && window.getComputedStyle(directory).display !== "none") {
            search.style.width = "300px";
        }

        input.style.width = Math.max(search.clientWidth - 65, 120) + "px";
    }

    function addResult(documentData) {
        var item = document.createElement("li");
        var link = document.createElement("a");

        link.href = documentData.url;
        link.textContent = documentData.title;
        link.title = documentData.desc || documentData.title;
        item.appendChild(link);
        results.appendChild(item);
    }

    function renderResults() {
        var query = input.value.trim().toLowerCase();
        results.replaceChildren();

        if (!query) {
            return;
        }

        var matches = documents.filter(function(documentData) {
            if (documentData.title === "Welcome") {
                return false;
            }

            return [
                documentData.title,
                documentData.category,
                documentData.keywords,
                documentData.desc
            ].filter(Boolean).join(" ").toLowerCase().includes(query);
        }).slice(0, limit);

        if (matches.length === 0) {
            var emptyState = document.createElement("li");
            emptyState.textContent = "No results found";
            results.appendChild(emptyState);
            return;
        }

        matches.forEach(addResult);
    }

    input.addEventListener("input", renderResults);
    window.addEventListener("resize", adjustSearchBoxWidth);

    adjustSearchBoxWidth();

    fetch(search.dataset.searchIndex)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Search index request failed: " + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            documents = data;
            renderResults();
        })
        .catch(function(error) {
            console.error("Unable to load the search index.", error);
        });
});
