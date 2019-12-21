// Saves options to chrome.storage
function save_options() {

    var token = document.getElementById('darksky-api-token').value;
    var latitude = document.getElementById('darksky-latitude').value;
    var longitude = document.getElementById('darksky-longitude').value;
    // var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
        darkSkyApiToken: token,
        darskSkyLatitude: latitude,
        darskSkyLongitude: longitude
        // likesColor: likesColor
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

    chrome.storage.sync.get({
        darkSkyApiToken: '',
        darskSkyLatitude: '',
        darskSkyLongitude: ''
    }, function (items) {
        document.getElementById('darksky-api-token').value = items.darkSkyApiToken;
        document.getElementById('darksky-latitude').value = items.darskSkyLatitude;
        document.getElementById('darksky-longitude').value = items.darskSkyLongitude;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);