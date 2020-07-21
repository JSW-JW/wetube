import axios from "axios";
const subscribeBtn = document.querySelector(".subscribeBtn");

const handleSubscribe = async (e) => {
  if (subscribeBtn.classList.contains("subscribed")) {
    return;
  }
  e.target.className = "subscribeBtn subscribed";
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/subscribe`,
    method: "POST",
  });
  console.log(response);
};

function init() {
  subscribeBtn.addEventListener("click", handleSubscribe);
}

if (subscribeBtn) {
  init();
}
