import DonationLightbox from "./app/app";
import "./scss/main.scss";
//run();
document.addEventListener("DOMContentLoaded", function () {
  window.DonationLightbox = DonationLightbox;
  let donationLightbox = new DonationLightbox();
  // Set default options
  if (typeof window.DonationLightboxOptions !== "undefined") {
    donationLightbox.setOptions(window.DonationLightboxOptions);
  }
});
