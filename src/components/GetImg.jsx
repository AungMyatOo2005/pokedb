import ability from "../assets/icons/ability.png";
import butterflyNet from "../assets/icons/butterfly-net.png";
import close from "../assets/icons/close.png";
import eggs from "../assets/icons/eggs.png";
import error from "../assets/icons/error.png";
import growUp from "../assets/icons/grow-up.png";
import happyFace from "../assets/icons/happy-face.png";
import info from "../assets/icons/info.png";
import park from "../assets/icons/park.png";
import spinner from "../assets/icons/pokeball-spinner.png";
import pond from "../assets/icons/pond.png";
import pokeball from "../assets/icons/pokeball.png";
import arrow from "../assets/icons/left-arrow.png";
const imgArr = {
  ability,
  butterflyNet,
  close,
  eggs,
  error,
  growUp,
  happyFace,
  info,
  park,
  spinner,
  pond,
  pokeball,
  arrow,
};
const GetImg = ({ name, style }) => {
  return <img src={imgArr[name]} className={style} />;
};

export default GetImg;
