import VanillaTilt from "vanilla-tilt";

function CardTilt() {
    return (
    VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
  })
    )
}

export default CardTilt
