import React from "react";

const Rules = () => {
  return (
    <div id="rules" className="communityView-tabcontent communityView-d-block">
    <div className="community-Rules-content">
        <div className="community-Rules-heading">
            <h2>Rules</h2>
            <div className="Rules-3dot">
                <img src="/images/wiki-menu.png" alt="icon" className="img-fluid" />
            </div>
        </div>
        <div className="community-Rules-collapse-sect">
            <div className="accordion" id="accordionrules">
                <div className="accordion-item Rules-collaps-btn">
                    <div className="Rules_collapsible collapsed" data-toggle="collapse" data-target="#RulescollapseOne" aria-expanded="true" aria-controls="Rulescollapse">
                        <p>Are the Marvel TV shows canon to the MCU? Will any of the Netflix or television characters appear in any future movies? What about the shows on Disney+?</p>
                    </div>

                    <div id="RulescollapseOne" className="collapse Rules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item Rules-collaps-btn">
                    <div className="Rules_collapsible collapsed" data-toggle="collapse" data-target="#RulescollapseTwo" aria-expanded="true" aria-controls="Rulescollapse">
                        <p>Did the Strategic Homeland Intervention Enforcement & Logistics Division change its name to S.H.I.E.L.D. in "Iron Man"?</p>
                    </div>

                    <div id="RulescollapseTwo" className="collapse Rules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item Rules-collaps-btn">
                    <div className="Rules_collapsible collapsed" data-toggle="collapse" data-target="#RulescollapseThree" aria-expanded="true" aria-controls="Rulescollapse">
                        <p>Why does Nick Fury say that Thor is the reason that S.H.I.E.L.D. began designing weapons based on the Tesseract in "The Avengers," despite the fact that he knew about aliens since "Captain Marvel"?</p>
                    </div>

                    <div id="RulescollapseThree" className="collapse Rules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item Rules-collaps-btn">
                    <div className="Rules_collapsible collapsed" data-toggle="collapse" data-target="#RulescollapseFour" aria-expanded="true" aria-controls="Rulescollapse">
                        <p>Are the Marvel TV shows canon to the MCU? Will any of the Netflix or television characters appear in any future movies? What about the shows on Disney+?</p>
                    </div>

                    <div id="RulescollapseFour" className="collapse Rules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Rules;
