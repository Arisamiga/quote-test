


const selections = document.getElementsByClassName("selection")[0]
const selectionData = document.getElementsByClassName("selection_items")[0]

const Premade = {
    "Lear": {
        "Act 1": {
            "Scene 1": "WyJJIGhhdmUgc28gb2Z0ZW4gYmx1c2hlZCB0byBhY2tub3dsZWRnZSBoaW0iLCAiVGhlcmUgd2FzIGdvb2Qgc3BvcnQgYXQgaGlzIG1ha2luZywgYW5kIHRoZSB3aG9yZXNvbiBtdXN0IGJlIGFja25vd2xlZGdlZCIsICJLbm93IHRoYXQgd2UgaGF2ZSBkaXZpZGVkIGluIHRocmVlIG91ciBraW5nZG9tIGFuZCB0aXMgb3VyIGZhc3QgaW50ZW50IHRvIHNoYWtlIGFsbCBjYXJlcyBhbmQgYnVzaW5lc3MgZnJvbSB0aGlzIGFnZSIsICJXZSBoYXZlIHRoaXMgaG91ciBhIGNvbnN0YW50IHdpbGwgdG8gcHVibGlzaCBvdXIgZGF1Z2h0ZXIncyBzZXZlcmFsIGRvd2VycywgdGhhdCBmdXR1cmUgc3RyaWZlIG1heSBiZSBwcmV2ZW50ZWQgbm93IiwgIlNpciwgSSBsb3ZlIHlvdSBtb3JlIHRoYW4gd29yZHMgY2FuIHdpZWxkIHRoZSBtYXR0ZXIiLCAiSSBhbSBtYWRlIG9mIHRoYXQgc2VsZiBzYW1lIG1ldGFsIGFzIG15IHNpc3RlciIsICJOb3RoaW5nIHdpbGwgY29tZSBvZiBub3RoaW5nIiwgIkkgbG92ZSB5b3VyIG1hamVzdHkgYWNjb3JkaW5nIHRvIG15IGJvbmQiLCAiQ29tZSBub3QgYmV0d2VlbiB0aGUgZHJhZ29uIGFuZCBoaXMgd3JhdGgiLCAiT25seSB3ZSBzaGFsbCByZXRhaW4gdGhlIG5hbWUgYW5kIHRoZSBhZGRpdGlvbiBvZiB0aGUga2luZyIsICJUaGlua3N0IHRob3UgdGhhdCBkdXR5IHNoYWxsIGhhdmUgZHJlYWQgdG8gc3BlYWssIHdoZW4gcG93ZXIgdG8gZmxhdHRlcnkgYm93cz8iLCAiQmV0dGVyIHRob3UgaGFkJ3N0IG5vdCBiZWVuIGJvcm4gdGhhbiBub3QgdG8gaGF2ZSBwbGVhc2VkIG1lIGJldHRlciIsICJTaGUgaXMgaGVyc2VsZiBhIGRvd2VyeSwgZmFpcmVzdCBDb3JkZWxpYSwgdGhhdCBhcnQgbW9zdCByaWNoIGFtb25nIHBvb3IiLCAiU3VjaCB1bmNvbnN0YW50IHN0YXJ0cyBhcmUgd2UgbGlrZSB0byBoYXZlIGZyb20gaGltIGFzIHRoaXMgb2YgS2VudCdzIGJhbmlzaG1lbnQiLCAiV2UgbXVzdCBkbyBzb21ldGhpbmcgYW5kIGknIHRoZSBoZWF0Il0=",
            "Scene 2": "WyJUaG91LCBuYXR1cmUsIGFydCBteSBnb2RkZXNzIiwgIlRoZSBjdXJpb3NpdHkgb2YgbmF0aW9ucyB0byBkZXByaXZlIG1lLCBmb3IgdGhhdCBJIGFtIHNvbWUgdHdlbHZlIG9yIGZvdXJ0ZWVuIG1vb25zaGluZXMgbGFnIG9mIGEgYnJvdGhlcj8iLCAiV2hvIGluIHRoZSBsdXN0eSBzdGVhbHRoIG9mIG5hdHVyZSB0YWtlIG1vcmUgY29tcG9zaXRpb24gYW5kIGZpZXJjZSBxdWFsaXR5IHRoYW4gZG90aCwgd2l0aGluIGEgZHVsbCwgc3RhbGUsIHRpcmVkIGJlZCBnbyB0byB0aGUgY3JlYXRpbmcgYSB3aG9sZSB0cmliZSBvZiBmb3BzIGdvdCAndHdlZW4gYXNsZWVwIGFuZCB3YWtlPyIsICJOYXR1cmUgZmluZHMgaXRzZWxmIHNjb3VyZ2VkIGJ5IHRoZSBzZXF1ZW50IGVmZmVjdHM6Li4uYnJvdGhlcnMgZGl2aWRlOy4uLnRoZSBib25kIGNyYWNrZWQgJ3R3aXh0IHNvbiBhbmQgZmF0aGVyIiwgIlRoZSBraW5nIGZhbGxzIGZyb20gYmlhcyBvZiBuYXR1cmU7IHRoZXJlJ3MgZmF0aGVyIGFnYWluc3QgY2hpbGQiLCAiQSBicm90aGVyIG5vYmxlLCB3aG9zZSBuYXR1cmUgaXMgc28gZmFyIGZyb20gZG9pbmcgaGFybXMgdGhhdCBoZSBzdXNwZWN0cyBub25lIl0=",
            "Scene 3": "WyIiXQ==",
            "Scene 4": "WyJOb3cgQmFuaXNoZWQgS2VudCwgSWYgdGhvdSBjYW5zdCBzZXJ2ZSB3aGVyZSB0aG91IGRvc3Qgc3RhbmQgY29uZGVtbmVkIiwgIllvdXIgaGlnaG5lc3MgaXMgbm90IGVudGVydGFpbmVkIHdpdGggdGhhdCBjZXJlbW9uaW91cyBhZmZlY3Rpb24gYXMgeW91IHdlcmUgd29udCIsICJTaW5jZSBteSBsYWRpZXMgZ29pbmcgdG8gRnJhbmNlIHNpciwgdGhlIGZvb2wgaGF0aCBwaW5lZCBoaW0gYXdheSIsICJEb3N0IHRob3UgY2FsbCBtZSBmb29sIGJveT8uLi4gQWxsIHRoeSBvdGhlciB0aXRsZXMgdGhvdSBoYXN0IGdpdmVuIGF3YXkiLCAiVGhvdSBtYWRlc3QgdGh5IGRhdWdodGVycyB0aGV5IG1vdGhlcnMiLCAiSW50byBoZXIgd29tYiBjb252ZXkgc3RlcmlsaXR5Il0NCg==",
            "Scene 5": "WyJPIGxldCBtZSBub3QgYmUgbWFkLCBub3QgbWFkLCBzd2VldCBoZWF2ZW47IGtlZXAgbWUgaW4gdGVtcGVyOyBJIHdvdWxkIG5vdCBiZSBtYWQiLCAiSSB3aWxsIGZvcmdldCBteSBuYXR1cmUsIHNvIGtpbmQgYSBmYXRoZXIiXQ==",
        },
        "Act 2": {
            "Scene 1": "WyJIYXZlIHlvdSBoZWFyZCBvZiBubyBsaWtlbHkgd2FycyB0d2l4dCB0aGUgZHVrZXMgb2YgQWxiYW55IGFuZCBDb3Jud2FsbD8iLCAiVGhlIER1a2UgYmUgaGVyZSB0b25pZ2h0ISBUaGUgYmV0dGVyISBCZXN0ISBUaGlzIHdlYXZlcyBpdHNlbGYgcGVyZm9yY2UgaW50byBteSBidXNpbmVzcyIsICJJIHRvbGQgaGltIHRoZSByZXZlbmdpbmcgZ29kcyAnZ2FpbnN0IGJhcnJpY2FkZXMgZGlkIGFsbCB0aGVpciB0aHVuZGVycyBiZW5kOy4uLiBXaXRoIGhpcyBwcmVwYXJlZCBzd29yZCBoZSBjaGFyZ2VzIGhvbWUgbXkgdW5wcmVwYXJlZCBib2R5IiwgIk9mIG15IGxhbmQgbG95YWwgYW5kIG5hdHVyYWwgYm95LCBpdCdsbCB3b3JrIHRoZSBtZWFucyB0byBtYWtlIHRoZSBjYXBhYmxlIl0=",
            "Scene 2": "WyJZb3UgY29tZSB3aXRoIGxldHRlcnMgYWdhaW5zdCB0aGUga2luZyBhbmQgdGFrZSB2YW5pdHkgdGhlIHB1cHBldHMgcGFydCBhZ2FpbnN0IHRoZSByb3lhbHR5IG9mIGhlciBraW5nIiwgIkNhbGwgbm90IHRoZSBzdG9ja3MgZm9yIG1lOyBJIHNlcnZlIHRoZSBraW5nIE9uIHdob3NlIGVtcGxveW1lbnQgSSB3YXMgc2VudCB0byB5b3UuIFlvdSBzaGFsbCBkbyBzbWFsbCByZXNwZWN0LCBzaG93IHRvbyBib2xkIG1hbGljZSBhZ2FpbnN0IHRoZSBncmFjZSBhbmQgcGVyc29uIG9mIG15IG1hc3RlciwgU3RvY2tpbmcgaGlzIG1lc3NlbmdlciJd",
            "Scene 3": "WyIiXQ==",
            "Scene 4": "WyIiXQ==",
        },
        "Act 3": {
            "Scene 1": "WyIiXQ==",
            "Scene 2": "WyIiXQ==",
            "Scene 3": "WyIiXQ==",
            "Scene 4": "WyIiXQ==",
            "Scene 5": "WyIiXQ==",
            "Scene 6": "WyIiXQ==",
            "Scene 7": "WyIiXQ==",
        },
        "Act 4": {
            "Scene 1": "WyIiXQ==",
        }

    }
}

selections.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    // selectionData.innerHTML = "";

    if (selectedOption === "default") {
        selectionData.style.minHeight = `0px`;
        selectionData.style.maxHeight = `0px`;
    }

    if (selectedOption === "More") {
        selectionData.style.minHeight = `60px`;
        selectionData.style.maxHeight = `60px`;
        selectionData.innerText = "More Options are coming soon...";
    }

    if (selectedOption === "Lear") {
        const html = `
        <div class='headline'>
            <h1>Act 1</h1>
        </div>
        <div class='content'>
            <div class='grid'>
                <div class='grid_item'>Scene 1</div>
                <div class='grid_item'>Scene 2</div>
                <div class='grid_item'>Scene 3 [EMPTY]</div>
                <div class='grid_item'>Scene 4</div>
                <div class='grid_item'>Scene 5</div>
            </div>
        </div>

        <div class='headline'>
            <h1>Act 2</h1>
        </div>
        <div class='content'>
            <div class='grid'>
                <div class='grid_item'>Scene 1</div>
                <div class='grid_item'>Scene 2</div>
                <div class='grid_item'>Scene 3 [EMPTY]</div>
                <div class='grid_item'>Scene 4</div>
            </div>
        </div>

        <div class='headline'>
        <h1>Act 3</h1>
    </div>
    <div class='content'>
        <div class='grid'>
            <div class='grid_item'>Scene 1</div>
            <div class='grid_item'>Scene 2</div>
            <div class='grid_item'>Scene 3</div>
            <div class='grid_item'>Scene 4</div>
            <div class='grid_item'>Scene 5</div>
            <div class='grid_item'>Scene 6</div>
            <div class='grid_item'>Scene 7</div>
        </div>
    </div>
        <div class='headline'>
        <h1>Act 4</h1>
    </div>
    <div class='content'>
        <div class='grid'>
            <div class='grid_item'>Scene 1</div>
        </div>
    </div>
        `
        selectionData.innerHTML = html;
        // let estimatedHeight = ;
        // Create estimatedHeight based on newlines
        let estimatedHeight = html.split("\n").length * 30;
        selectionData.style.minHeight = `${estimatedHeight}px`;
        selectionData.style.maxHeight = `${estimatedHeight}px`;
    }

});

selectionData.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("grid_item")) {
        const scene = element.innerText;
        const act = event.target.parentElement.parentElement.previousElementSibling.innerText;
        // Sample : ["Test\nfe\nf\nef\ne\nfe\n","testqw2","Come not between the dragon and his wrath","ttewtjweoitjoweijtoiewjt ewjtiowejtioejwiotjweio eoiwtjoiwejtiowejoitjiowetijew weijtoiwejtiowjeiotjwe weoitjeowijtioewj","rqwrwrqwr qwr wqr qw rwq\nwq rwq rwqrj wqrwqrqw\nwq re qwr wqr wq r\nqwr wqrwqrwqrwq \nwqrqwrwqrwqr","I told him the revenging gods\n\n‘Gainst barricades did all their thunders bend\nWith his prepared sword he charges home\nMy unprepared body"]
        const modal = document.getElementsByClassName("modal")[0];
        const modalContent = document.getElementsByClassName("modal-content")[0];
        const topic = selections[selections.selectedIndex].innerText;
        modal.style.display = "block";
        modalContent.innerHTML = "";

        let html = `
        <span class="close">&times;</span>
        <div class="modal_header">
            <h1>${topic} | ${act} ${scene} Quotes</h1>
            <ul>
        `
        JSON.parse(decodeURIComponent(atob(Premade.Lear[act][scene]))).forEach((quote, index) => {
            html += `
                <li id="quote-${index}">${quote}</li>
            `
        });

        html += `
            </ul>
        </div>
        Do you want to use these quotes? <span style="color:red;">This will overwrite the current quotes.</span>

        <div class="useQuotesButton">Use Template Quotes</div>
        `
        modalContent.innerHTML = html;

        const modal_close = document.getElementsByClassName("close")[0]
        modal_close.addEventListener("click", () => {
            const modal = document.getElementsByClassName("modal")[0];
            // Play fade in animation in reverse then hide the modal
            modal.style.animation = "fadeOut 0.5s";
            // When animation ends, hide the modal
            modal.addEventListener("animationend", (event) => {
                if (event.animationName === "fadeOut") {
                    modal.style.display = "none";
                    modal.style.animation = "";
                }
            });
        });

        const useQuotesButton = document.getElementsByClassName("useQuotesButton")[0];
        useQuotesButton.addEventListener("click", () => {
            const quotes = Premade.Lear[act][scene];
            localStorage.setItem("quotes", quotes);
            window.location.href = "index.html";
        });
    }
});