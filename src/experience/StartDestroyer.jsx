import { useState} from "react";
import { Canvas } from "@react-three/fiber";
import '../sass/StarDestroyer.scss';

import StarDestroyerExperience from "./StarDestroyerExperience";

export default function StarDestroyer(props) {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 7500); // 8 seconds delay

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : ( */}
                <Canvas
                    flat
                    camera={{
                        position: [0, 0, 10],
                        fov: 45,
                        near: 0.1,
                        far: 200
                    }}
                >
                    <StarDestroyerExperience />
                  
                </Canvas>
                {/* il faut mettre la div en absolute par dessus et on appuie sur Entree pour lancer le compte à rebours */}
                <div className="">Use Keyboard to manipulate StarDestroyer ! Press Enter when target insight</div>
            {/* )} */}
        </>
    );
}