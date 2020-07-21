import axios from "axios";
const DeleteBtn = document.querySelectorAll(".SendApi");
let textContent;

DeleteBtn.forEach((ClickedBtn) => {
  ClickedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    textContent = e.target.value;
    console.log(textContent);
    handleDeleteClick(textContent);
  });
  ClickedBtn.addEventListener("click", () => {
    ClickedBtn.parentElement.remove();
  });
});

// const middlewarefunction = (event) => {
//     textContent = { target } = event;
//     console.log(textContent);
//     handleDeleteClick(textContent);
// };

const handleDeleteClick = async (content) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/deleteComment`,
    method: "POST",
    data: {
      content,
    },
  });
  console.log(response);
};
