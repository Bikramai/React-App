import { useState } from "react";
import { GoHeartFill, GoHeart } from "react-icons/go";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status)  return <GoHeartFill color="red" size={ 60 } onClick={toggle} />;
    return <GoHeart size={ 60 } onClick={toggle}/>
        
}

export default Like