import React,{useState} from 'react';

const WikiCommunites = () => {
	const [collaps1, setCollaps1] = useState(false)
	const [collaps2, setCollaps2] = useState(false)
	const [collaps3, setCollaps3] = useState(false)
	const [collaps4, setCollaps4] = useState(false)
	const [collaps5, setCollaps5] = useState(false)
	const [collaps6, setCollaps6] = useState(false)
	const [collaps7, setCollaps7] = useState(false)
	const [collaps8, setCollaps8] = useState(false)
	
	const handleCollaps1 = () => {
       if(collaps1){
		setCollaps1(false)
	   }
	   else if(!collaps1){
		setCollaps1(true)
	   }
	}
	const handleCollaps2 = () => {
		if(collaps2){
		 setCollaps2(false)
		}
		else if(!collaps2){
		 setCollaps2(true)
		}
	 }
	 const handleCollaps3 = () => {
		if(collaps3){
		 setCollaps3(false)
		}
		else if(!collaps3){
		 setCollaps3(true)
		}
	 }
	 const handleCollaps4 = () => {
       if(collaps4){
		setCollaps4(false)
	   }
	   else if(!collaps4){
		setCollaps4(true)
	   }
	}
	const handleCollaps5 = () => {
		if(collaps5){
		 setCollaps5(false)
		}
		else if(!collaps5){
		 setCollaps5(true)
		}
	 }
	 const handleCollaps6 = () => {
       if(collaps6){
		setCollaps6(false)
	   }
	   else if(!collaps6){
		setCollaps6(true)
	   }
	}
	const handleCollaps7 = () => {
		if(collaps7){
		 setCollaps7(false)
		}
		else if(!collaps7){
		 setCollaps7(true)
		}
	 }
	 const handleCollaps8 = () => {
		if(collaps8){
		 setCollaps8(false)
		}
		else if(!collaps8){
		 setCollaps8(true)
		}
	 }
    return (
        
		<div id="wiki" className="communityView-tabcontent" style={{display:'block'}}>
		<div className="community-wiki-content">
			<div className="community-wiki-heading">
				<h2>Wiki</h2>
				<div className="wiki-3dot">
					<img src="images/wiki-menu.png" alt="icon" className="img-fluid" />
				</div>
			</div>
			<div className="community-wiki-collapse-sect">
				<div className="accordion" id="accordionrules">
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps1?"wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseOne" aria-expanded={`${collaps1?"true":"false"}`} aria-controls="wikicollapse" onClick={handleCollaps1}>
							<p>How can Ultron use the Infinty Stones in other universes? I thought the stones can only be used in their respective universe. Even Ultron says that each set of stones is unique.</p>
						</div>

						<div id="WikicollapseOne" className={`${collaps1?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`} aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps2?"wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseTwo" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps2}>
							<p>Is the Ten Rings organization in the film the same one that captured Tony Stark in Iron Man 1 in Afghanistan?</p>
						</div>

						<div id="WikicollapseTwo" className={`${collaps2?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`}  aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps3?"wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseThree" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps3}>
							<p>Was Natasha taken to be a member of the Red Room after the events at Ohio?</p>
						</div>

						<div id="WikicollapseThree" className={`${collaps3?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`} aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps4?"wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseFour" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps4}>
							<p>How can Ultron use the Infinty Stones in other universes? I thought the stones can only be used in their respective universe. Even Ultron says that each set of stones is unique.</p>
						</div>

						<div id="WikicollapseFour"  className={`${collaps4?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`} aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps5?"wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseFive" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps5}>
							<p>Is the Ten Rings organization in the film the same one that captured Tony Stark in Iron Man 1 in Afghanistan?</p>
						</div>

						<div id="WikicollapseFive" className={`${collaps5?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`}aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps6?"wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseSix" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps6}>
							<p>How can Ultron use the Infinty Stones in other universes? I thought the stones can only be used in their respective universe. Even Ultron says that each set of stones is unique.</p>
						</div>

						<div id="WikicollapseSix" className={`${collaps6?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`} aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn">
						<div className={`${collaps7 ? "wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseSeven" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps7}>
							<p>Is the Ten Rings organization in the film the same one that captured Tony Stark in Iron Man 1 in Afghanistan?</p>
						</div>

						<div id="WikicollapseSeven" className={`${collaps7?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`} aria-labelledby="heading" data-bs-parent="#accordionrules">
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item wiki-collaps-btn" >
						<div className={`${collaps8 ? "wiki_collapsible":"wiki_collapsible collapsed"}`} data-bs-toggle="collapse" data-bs-target="#WikicollapseEight" aria-expanded="true" aria-controls="wikicollapse" onClick={handleCollaps8}>
							<p>Is the Ten Rings organization in the film the same one that captured Tony Stark in Iron Man 1 in Afghanistan?</p>
						</div>

						<div id="WikicollapseEight" className={`${collaps8?"Wiki-collapse-block collapse show":"collapse Wiki-collapse-block"}`} aria-labelledby="heading" data-bs-parent="#accordionrules">
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

export default WikiCommunites;