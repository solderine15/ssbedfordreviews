// Edit this file to set up the review page. No other file needs changing.
window.REVIEW_CONFIG = {
  // Free key from https://web3forms.com (enter the email address that should receive feedback).
  web3formsKey: "58a18b4e-a818-4552-b1bd-c26fff865416",

  // Used when the QR/NFC URL has no ?loc= or an unknown one.
  defaultLocation: "bedford",

  // One entry per restaurant. The key is what goes in the URL: https://your-site/sidestreet/?loc=bedford
  locations: {
    bedford: {
      name: "Bedford",
      // 89 High St, Bedford MK40 1NE
      // reviewUrl: the "Ask for reviews" link from Google Business Profile. Takes priority over placeId.
      placeId: "ChIJzUlcTgC3d0gRqRR9C8jl7-Q",
    },
  },
};
