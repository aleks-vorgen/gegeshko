import {useRef} from "react";

export function Directions() {
    const refAlcoholism = useRef(null);
    const refGaming = useRef(null);
    const refSmoking = useRef(null);
    const refDrugging = useRef(null);
    const refCodependency = useRef(null);
    const refHypnosis = useRef(null);

    function dirTreeRightBranch_MouseOut(ref) {
        let current = ref.current.children;
        current[0].style.animation = "rotate-center-right 0.3s ease-in-out reverse both";
        current[1].style.animation = "right-branch-slide-right 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
    }

    function dirTreeRightBranch_MouseIn(ref) {
        let current = ref.current.children;
        current[0].style.animation = "rotate-center-left 0.3s ease-in-out reverse both";
        current[1].style.animation = "right-branch-slide-left 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
    }

    function dirTreeLeftBranch_MouseOut(ref) {
        let current = ref.current.children;
        current[1].style.animation = "rotate-center-left 0.3s ease-in-out reverse both";
        current[0].style.animation = "left-branch-slide-left 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
    }

    function dirTreeLeftBranch_MouseIn(ref) {
        let current = ref.current.children;
        current[1].style.animation = "rotate-center-right 0.3s ease-in-out reverse both";
        current[0].style.animation = "left-branch-slide-right 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
    }

    return (
        <div className="home-directions">
            <div className="sub-title">
                <div className="side-line"></div>
                <span className="title">Напрямки</span>
                <div className="side-line"></div>
            </div>
            <div className="directions-tree">
                <div className="tree-left">
                    <div ref={refAlcoholism}>
                        <span>Алкоголізм</span>
                        <img src="/images/directions/alcoholism.svg" alt="alcoholism.svg"
                             onMouseEnter={() => dirTreeLeftBranch_MouseIn(refAlcoholism)}
                             onMouseOut={()=> dirTreeLeftBranch_MouseOut(refAlcoholism)}/>
                    </div>
                    <div className="left-center" ref={refGaming}>
                        <span>Ігрова залежність</span>
                        <img src="/images/directions/gaming.svg" alt="gaming.svg"
                             onMouseEnter={() => dirTreeLeftBranch_MouseIn(refGaming)}
                             onMouseOut={()=> dirTreeLeftBranch_MouseOut(refGaming)}/>
                    </div>
                    <div ref={refSmoking}>
                        <span>Тютюнопаління</span>
                        <img src="/images/directions/smoking.svg" alt="smoking.svg"
                             onMouseEnter={() => dirTreeLeftBranch_MouseIn(refSmoking)}
                             onMouseOut={()=> dirTreeLeftBranch_MouseOut(refSmoking)}/>
                    </div>
                </div>
                <div className="tree-center">
                    <img src="/images/home-logo.svg" alt="home-logo.svg"/>
                </div>
                <div className="tree-right">
                    <div ref={refDrugging}>
                        <img src="/images/directions/drugging.svg" alt="drugging.svg"
                             onMouseEnter={() => dirTreeRightBranch_MouseIn(refDrugging)}
                             onMouseOut={()=> dirTreeRightBranch_MouseOut(refDrugging)}/>
                        <span>Наркозалежність</span>
                    </div>
                    <div className="right-center" ref={refCodependency}>
                        <img src="/images/directions/codependency.svg" alt="codependency.svg"
                             onMouseEnter={() => dirTreeRightBranch_MouseIn(refCodependency)}
                             onMouseOut={()=> dirTreeRightBranch_MouseOut(refCodependency)}/>
                        <span>Співзалежність</span>
                    </div>
                    <div ref={refHypnosis}>
                        <img src="/images/directions/hypnosis.svg" alt="hypnosis.svg"
                             onMouseEnter={() => dirTreeRightBranch_MouseIn(refHypnosis)}
                             onMouseOut={()=> dirTreeRightBranch_MouseOut(refHypnosis)}/>
                        <span>Гіпноз</span>
                    </div>
                </div>
            </div>
        </div>
    )
}