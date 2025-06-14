document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;

  document.getElementById("result").textContent =
    `Bus booked from ${from} to ${to} on ${date}!`;
});
