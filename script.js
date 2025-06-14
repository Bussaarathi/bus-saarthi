// RTC Websites
const rtcLinks = [
  "https://www.tsrtconline.in",
  "https://www.ksrtc.in",
  "https://www.msrtc.maharashtra.gov.in",
  "https://www.tnstc.in",
  "https://keralartc.com",
  "https://www.apsrtconline.in/oprs-web/guest/home.do?h=1"
];

// Google Autocomplete Init
function initAutocomplete() {
  const fromInput = document.getElementById("from");
  const toInput = document.getElementById("to");

  new google.maps.places.Autocomplete(fromInput);
  new google.maps.places.Autocomplete(toInput);
}

// Form Handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;

    resultDiv.innerHTML = `<strong style="color: green;">Bus booked from ${from} to ${to} on ${date}!</strong>`;

    // 👉 Open RTC links — one after another
    for (let i = 0; i < rtcLinks.length; i++) {
      window.open(rtcLinks[i], '_blank');
    }
  });
});

